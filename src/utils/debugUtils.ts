
/**
 * Debug utility for tracking component rendering and props
 */
export const debugComponent = (componentName: string, props: any, enabled = true) => {
  if (!enabled && process.env.NODE_ENV === 'production') return;
  
  console.group(`%c${componentName} Debug`, 'color: #2D6FC9; font-weight: bold;');
  console.log('Props:', props);
  
  // Log render timestamp
  const timestamp = new Date().toISOString();
  console.log(`Rendered at: ${timestamp}`);
  
  // Check for potentially problematic props
  Object.entries(props).forEach(([key, value]) => {
    if (value === undefined) {
      console.warn(`⚠️ Prop "${key}" is undefined`);
    } else if (value === null) {
      console.warn(`⚠️ Prop "${key}" is null`);
    } else if (Array.isArray(value) && value.length === 0) {
      console.log(`ℹ️ Prop "${key}" is an empty array`);
    } else if (typeof value === 'object' && Object.keys(value).length === 0) {
      console.log(`ℹ️ Prop "${key}" is an empty object`);
    }
  });
  
  console.groupEnd();
};

/**
 * Performance tracking utility for components
 */
export const measurePerformance = (componentName: string, callback: () => void) => {
  if (process.env.NODE_ENV === 'production') return callback();
  
  console.time(`${componentName} render time`);
  try {
    callback();
  } finally {
    console.timeEnd(`${componentName} render time`);
  }
};

/**
 * Log component lifecycle events
 */
export class LifecycleLogger {
  private componentName: string;
  
  constructor(componentName: string) {
    this.componentName = componentName;
  }
  
  mount() {
    console.log(`🟢 ${this.componentName} mounted`);
  }
  
  unmount() {
    console.log(`🔴 ${this.componentName} unmounted`);
  }
  
  update(prevProps: any, nextProps: any) {
    console.log(`🔄 ${this.componentName} updated`, {
      prevProps,
      nextProps,
      changes: this.getChangedProps(prevProps, nextProps)
    });
  }
  
  private getChangedProps(prevProps: any, nextProps: any) {
    const allKeys = new Set([...Object.keys(prevProps), ...Object.keys(nextProps)]);
    const changes: Record<string, { from: any, to: any }> = {};
    
    allKeys.forEach(key => {
      if (prevProps[key] !== nextProps[key]) {
        changes[key] = {
          from: prevProps[key],
          to: nextProps[key]
        };
      }
    });
    
    return changes;
  }
}
