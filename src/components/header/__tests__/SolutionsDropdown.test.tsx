import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SolutionsDropdown from "../SolutionsDropdown";
import { solutionsDropdownItems } from "../navData";

describe("SolutionsDropdown", () => {
  test("renders the Solutions link and its disclosure button", () => {
    render(<SolutionsDropdown isOpen={false} setIsOpen={() => {}} isCurrentPage={false} />);

    // "Solutions" is a Link to /solutions. The chevron beside it is a separate
    // icon-only button, queried here by its aria-expanded state.
    //
    // NOTE: that button currently has NO accessible name. SolutionsDropdown
    // passes label: "Show/Hide Solutions menu" to getButtonA11yProps, but the
    // 'expanded' branch of that helper only emits aria-expanded/aria-controls
    // and discards the label. That is a production accessibility defect, left
    // untouched here because it is outside this branch's approved scope — the
    // test asserts the DOM as it actually is rather than masking it.
    expect(screen.getByRole("link", { name: "Solutions" })).toBeInTheDocument();
    expect(screen.getByRole("button", { expanded: false })).toBeInTheDocument();
  });

  test("toggles open state when the disclosure button is clicked", () => {
    const setIsOpen = jest.fn();
    render(<SolutionsDropdown isOpen={false} setIsOpen={setIsOpen} isCurrentPage={false} />);

    fireEvent.click(screen.getByRole("button", { expanded: false }));

    expect(setIsOpen).toHaveBeenCalledWith(true);
  });

  test("renders the dropdown items only when open", () => {
    const { rerender } = render(
      <SolutionsDropdown isOpen={false} setIsOpen={() => {}} isCurrentPage={false} />
    );
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();

    rerender(<SolutionsDropdown isOpen={true} setIsOpen={() => {}} isCurrentPage={false} />);
    expect(screen.getByRole("menu")).toBeInTheDocument();
    expect(screen.getByText(solutionsDropdownItems[0].name)).toBeInTheDocument();
  });
});
