import { cn } from '@/lib/utils';

export function Badge({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium text-gray-600',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
