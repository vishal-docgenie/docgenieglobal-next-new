
import { useState, useEffect, useRef } from 'react';

interface VirtualizedOptions {
  itemHeight: number;
  overscan?: number;
}

export function useVirtualizedList<T>(items: T[], options: VirtualizedOptions) {
  const { itemHeight, overscan = 3 } = options;
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 10 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateVisibleRange = () => {
      if (!containerRef.current) return;

      const { scrollTop, clientHeight } = containerRef.current;
      const start = Math.floor(scrollTop / itemHeight);
      const end = Math.ceil((scrollTop + clientHeight) / itemHeight);

      setVisibleRange({
        start: Math.max(0, start - overscan),
        end: Math.min(items.length, end + overscan)
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', updateVisibleRange);
      updateVisibleRange();
    }

    return () => {
      container?.removeEventListener('scroll', updateVisibleRange);
    };
  }, [items.length, itemHeight, overscan]);

  const virtualizedItems = items.slice(visibleRange.start, visibleRange.end);
  const totalHeight = items.length * itemHeight;
  const offsetY = visibleRange.start * itemHeight;

  return {
    virtualizedItems,
    totalHeight,
    offsetY,
    containerRef,
  };
}
