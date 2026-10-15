
/**
 * Utility functions for improving accessibility
 */

/**
 * Creates accessibility props for buttons based on their type and state
 */
export const getButtonA11yProps = (options: {
  /** Type of button - determines which accessibility attributes to include */
  type: 'icon-only' | 'toggle' | 'standard' | 'expanded';
  /** A descriptive label for the button (required for icon-only buttons) */
  label?: string;
  /** Whether the controlled element is expanded (for disclosure buttons) */
  isExpanded?: boolean;
  /** Whether the button is in a pressed/active state (for toggle buttons) */
  isPressed?: boolean;
  /** ID of the element this button controls (for aria-controls) */
  controls?: string;
  /** Whether this button is currently selected (for tabs/segmented controls) */
  isSelected?: boolean;
}) => {
  const { type, label, isExpanded, isPressed, controls, isSelected } = options;
  
  // Base props object
  const props: Record<string, string | boolean | undefined> = {};
  
  // Add appropriate attributes based on button type
  switch (type) {
    case 'icon-only':
      if (!label) {
        console.warn('Icon-only buttons must have a descriptive label');
      }
      props['aria-label'] = label;
      break;
      
    case 'toggle':
      if (isPressed !== undefined) {
        props['aria-pressed'] = isPressed;
      }
      break;
      
    case 'expanded':
      if (isExpanded !== undefined) {
        props['aria-expanded'] = isExpanded;
      }
      // A disclosure button is frequently icon-only (a bare chevron), which
      // leaves it with no accessible name at all. When the caller supplies a
      // label, apply it — aria-expanded describes the state, never the button.
      // Callers that render visible text simply omit `label` and keep using
      // their text content as the accessible name.
      if (label) {
        props['aria-label'] = label;
      }
      break;
      
    case 'standard':
      // Standard buttons typically use their text content as their accessible name
      break;
  }
  
  // Add controls attribute if specified
  if (controls) {
    props['aria-controls'] = controls;
  }
  
  // Add selected state if specified
  if (isSelected !== undefined) {
    props['aria-selected'] = isSelected;
  }
  
  return props;
};

/**
 * Creates an accessible name for buttons with generic text
 * 
 * @example
 * // Instead of "Learn More", use:
 * getContextualButtonText("Learn More", "about our pricing plans")
 * // Returns "Learn more about our pricing plans"
 */
export const getContextualButtonText = (
  buttonText: string,
  context: string
): string => {
  return `${buttonText} ${context}`;
};
