import { Loader2Icon } from "lucide-react";

import { cn } from "src/lib/utils";

function Spinner({ className, ...props }) {
  return (
    <div className="h-screen flex items-center justify-center">
      <Loader2Icon
        role="status"
        aria-label="Loading"
        className={cn("size-4 animate-spin", className)}
        {...props}
      />
    </div>
  );
}

export { Spinner };
