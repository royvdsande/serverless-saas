import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonVariant = 'default' | 'outline' | 'ghost' | 'secondary';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  default: 'bg-black text-white hover:bg-gray-900 [&_*]:text-current',
  outline: 'border border-gray-200 bg-white text-black hover:bg-gray-50',
  ghost: 'bg-transparent text-black hover:bg-gray-100',
  secondary: 'bg-gray-100 text-black hover:bg-gray-200',
};

const baseClassName =
  'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition-colors';

export function Button({ children, className, href, variant = 'default' }: ButtonProps) {
  const classes = cn(baseClassName, variantClasses[variant], className);

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
