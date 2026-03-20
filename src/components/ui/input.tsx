import { cn } from '@/lib/utils';

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-gray-400',
        className,
      )}
      {...props}
    />
  );
}
