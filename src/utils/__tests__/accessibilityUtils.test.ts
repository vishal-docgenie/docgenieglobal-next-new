import { getButtonA11yProps } from "../accessibilityUtils";

describe("getButtonA11yProps", () => {
  test("an expanded/disclosure button keeps the label it was given", () => {
    expect(
      getButtonA11yProps({
        type: "expanded",
        label: "Show Solutions menu",
        isExpanded: false,
        controls: "solutions-dropdown-menu",
      })
    ).toEqual({
      "aria-expanded": false,
      "aria-label": "Show Solutions menu",
      "aria-controls": "solutions-dropdown-menu",
    });
  });

  test("a disclosure button with visible text keeps using that text as its name", () => {
    // No label supplied, so no aria-label is emitted and the button's own text
    // content remains its accessible name.
    const props = getButtonA11yProps({ type: "expanded", isExpanded: true });
    expect(props).not.toHaveProperty("aria-label");
    expect(props["aria-expanded"]).toBe(true);
  });

  test("icon-only buttons are unaffected", () => {
    expect(getButtonA11yProps({ type: "icon-only", label: "Close" })).toEqual({
      "aria-label": "Close",
    });
  });
});
