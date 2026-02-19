
import { Skeleton } from "@/components/ui/skeleton";
import React from 'react';

const BlogCardSkeleton = React.memo(() => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm h-full">
      <Skeleton className="w-full h-48" />
      <div className="p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-20" />
        </div>
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <div className="flex gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
      </div>
    </div>
  );
});

BlogCardSkeleton.displayName = 'BlogCardSkeleton';

export default BlogCardSkeleton;
