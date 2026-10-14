import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MobileMenu from "../MobileMenu";
import { navLinks, solutionsDropdownItems } from "../navData";

// MobileMenu calls useRouter() and router.push() on dropdown-item clicks.
// next/router has no provider outside a Next.js app, so it is mocked here.
const push = jest.fn();
jest.mock("next/router", () => ({
  useRouter: () => ({ push, asPath: "/", pathname: "/", query: {}, events: { on: jest.fn(), off: jest.fn() } }),
}));

/** Every required prop, with jest.fn() setters the assertions can inspect. */
const makeProps = (overrides: Partial<React.ComponentProps<typeof MobileMenu>> = {}) => ({
  isOpen: true,
  navLinks,
  currentPath: "/",
  isSolutionsDropdownOpen: false,
  setSolutionsDropdownOpen: jest.fn(),
  isIndustriesDropdownOpen: false,
  setIndustriesDropdownOpen: jest.fn(),
  setIsMobileMenuOpen: jest.fn(),
  ...overrides,
});

describe("MobileMenu", () => {
  beforeEach(() => push.mockClear());

  test("renders the top-level navigation links when open", () => {
    render(<MobileMenu {...makeProps()} />);
    for (const link of navLinks) {
      expect(screen.getByText(link.name)).toBeInTheDocument();
    }
  });

  test("closes the mobile menu when a dropdown item is selected", () => {
    // The live close path is handleDropdownItemClick, reachable only while the
    // Solutions dropdown is expanded. (The component exposes no onClose prop
    // and renders no "Close menu" control — the previous version of this test
    // asserted an API that does not exist.)
    const setIsMobileMenuOpen = jest.fn();
    const setSolutionsDropdownOpen = jest.fn();
    render(
      <MobileMenu
        {...makeProps({ isSolutionsDropdownOpen: true, setIsMobileMenuOpen, setSolutionsDropdownOpen })}
      />
    );

    const item = solutionsDropdownItems[0];
    fireEvent.click(screen.getByText(item.name));

    expect(setIsMobileMenuOpen).toHaveBeenCalledWith(false);
    expect(setSolutionsDropdownOpen).toHaveBeenCalledWith(false);
  });
});
