'use client';

import { ChevronDown, Menu, Sparkles, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigation = [
  {
    label: 'Product',
    items: [
      { label: 'Overview', href: '/product', description: 'See the polished product surface.' },
      { label: 'Dashboard', href: '/dashboard', description: 'Preview the workspace settings experience.' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { label: 'Pricing', href: '/pricing', description: 'Explore plans and billing options.' },
      { label: 'Guides', href: '/resources', description: 'Browse launch checklists and templates.' },
    ],
  },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentLabel = useMemo(() => {
    if (pathname.startsWith('/pricing')) return 'Pricing';
    if (pathname.startsWith('/resources')) return 'Resources';
    if (pathname.startsWith('/product')) return 'Product';
    if (pathname.startsWith('/dashboard')) return 'Dashboard';
    if (pathname.startsWith('/sign-in')) return 'Sign in';
    return 'Home';
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
        <div className="flex items-center gap-3">
          <Link className="flex items-center gap-3" href="/">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-sm font-semibold text-white shadow-lg shadow-black/10">
              FF
            </div>
            <div>
              <p className="text-base font-semibold tracking-tight text-black">FitFlow</p>
              <p className="text-xs text-gray-500">Launch-ready SaaS starter</p>
            </div>
          </Link>
          <Badge className="hidden gap-1.5 bg-gray-100 md:inline-flex">
            <Sparkles className="h-3.5 w-3.5" />
            {currentLabel}
          </Badge>
        </div>

        <nav className="hidden items-center gap-2 md:flex">
          {navigation.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(group.label)}
              onMouseLeave={() => setOpenMenu((current) => (current === group.label ? null : current))}
            >
              <button
                className={cn(
                  'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-gray-500 transition-all hover:bg-gray-100 hover:text-black',
                  openMenu === group.label && 'bg-gray-100 text-black',
                )}
                onClick={() => setOpenMenu((current) => (current === group.label ? null : group.label))}
                type="button"
              >
                {group.label}
                <ChevronDown className={cn('h-4 w-4 transition-transform', openMenu === group.label && 'rotate-180')} />
              </button>

              <div
                className={cn(
                  'absolute left-0 top-full mt-3 w-80 rounded-3xl border border-gray-200 bg-white p-3 shadow-[0_28px_80px_rgba(15,23,42,0.12)] transition-all duration-200',
                  openMenu === group.label ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0',
                )}
              >
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    className="block rounded-2xl px-4 py-3 transition hover:bg-gray-50"
                    href={item.href}
                    onClick={() => setOpenMenu(null)}
                  >
                    <p className="text-sm font-semibold text-black">{item.label}</p>
                    <p className="mt-1 text-sm leading-6 text-gray-500">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <Link className="rounded-full px-4 py-2 text-sm font-medium text-gray-500 transition hover:bg-gray-100 hover:text-black" href="/sign-in">
            Sign in
          </Link>
          <Button className="rounded-full px-5" href="/dashboard">
            Open dashboard
          </Button>
        </nav>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 bg-white text-black md:hidden"
          onClick={() => setMobileOpen((value) => !value)}
          type="button"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          'border-t border-gray-200 bg-white px-6 transition-all duration-200 md:hidden',
          mobileOpen ? 'max-h-[420px] py-4 opacity-100' : 'max-h-0 overflow-hidden py-0 opacity-0',
        )}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-3 pb-2">
          {navigation.flatMap((group) =>
            group.items.map((item) => (
              <Link
                key={item.href}
                className="rounded-2xl border border-gray-200 px-4 py-3"
                href={item.href}
                onClick={() => setMobileOpen(false)}
              >
                <p className="text-sm font-semibold text-black">{item.label}</p>
                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
              </Link>
            )),
          )}
          <Link className="rounded-2xl border border-gray-200 px-4 py-3 text-sm font-semibold text-black" href="/sign-in" onClick={() => setMobileOpen(false)}>
            Sign in
          </Link>
        </div>
      </div>
    </header>
  );
}
