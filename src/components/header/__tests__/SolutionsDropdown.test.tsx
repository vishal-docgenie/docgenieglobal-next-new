import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SolutionsDropdown from "../SolutionsDropdown";
import { solutionsDropdownItems } from "../navData";

describe("SolutionsDropdown", () => {
  test("renders the Solutions link and a named disclosure button", () => {
    render(<SolutionsDropdown isOpen={false} setIsOpen={() => {}} isCurrentPage={false} />);

    // "Solutions" is a Link to /solutions. The chevron beside it is a separate
    // icon-only button, so its accessible name can only come from aria-label.
    expect(screen.getByRole("link", { name: "Solutions" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Show Solutions menu" })).toBeInTheDocument();
  });

  test("the disclosure button's accessible name tracks the open state", () => {
    const { rerender } = render(
      <SolutionsDropdown isOpen={false} setIsOpen={() => {}} isCurrentPage={false} />
    );
    expect(screen.getByRole("button", { name: "Show Solutions menu" })).toHaveAttribute(
      "aria-expanded",
      "false"
    );

    rerender(<SolutionsDropdown isOpen={true} setIsOpen={() => {}} isCurrentPage={false} />);
    expect(screen.getByRole("button", { name: "Hide Solutions menu" })).toHaveAttribute(
      "aria-expanded",
      "true"
    );
  });

  test("toggles open state when the disclosure button is clicked", () => {
    const setIsOpen = jest.fn();
    render(<SolutionsDropdown isOpen={false} setIsOpen={setIsOpen} isCurrentPage={false} />);

    fireEvent.click(screen.getByRole("button", { name: "Show Solutions menu" }));

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
