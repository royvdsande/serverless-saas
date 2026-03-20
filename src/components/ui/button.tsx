import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonVariant = 'default' | 'outline' | 'ghost' | 'secondary';

type SharedButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type LinkButtonProps = SharedButtonProps & {
  href: string;
} & Omit<React.ComponentProps<typeof Link>, 'href' | 'className' | 'children'>;

type NativeButtonProps = SharedButtonProps & {
  href?: undefined;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>;

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  default:
    'bg-black text-white shadow-[0_12px_30px_rgba(15,23,42,0.16)] hover:-translate-y-0.5 hover:bg-gray-900 focus-visible:ring-black/15',
  outline:
    'border border-gray-200 bg-white text-black hover:-translate-y-0.5 hover:border-gray-300 hover:bg-gray-50 focus-visible:ring-gray-200',
  ghost:
    'bg-transparent text-black hover:-translate-y-0.5 hover:bg-gray-100 focus-visible:ring-gray-200',
  secondary:
    'bg-gray-100 text-black hover:-translate-y-0.5 hover:bg-gray-200 focus-visible:ring-gray-200',
};

const baseClassName =
  'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50';

export function Button(props: ButtonProps) {
  const classes = cn(baseClassName, variantClasses[props.variant ?? 'default'], props.className);

  if ('href' in props && props.href) {
    const { children, className: _className, variant: _variant, href, ...linkProps } = props;

    return (
      <Link className={classes} href={href} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { children, className: _className, variant: _variant, type, ...buttonProps } = props as NativeButtonProps;

  return (
    <button className={classes} type={type ?? 'button'} {...buttonProps}>
      {children}
    </button>
  );
}
