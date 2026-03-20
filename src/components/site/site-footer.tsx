import Link from 'next/link';

const footerLinks = {
  Product: [
    { label: 'Overview', href: '/product' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Pricing', href: '/pricing' },
  ],
  Company: [
    { label: 'Resources', href: '/resources' },
    { label: 'Sign in', href: '/sign-in' },
  ],
};

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200/80 bg-white/90">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
        <div>
          <p className="text-lg font-semibold tracking-tight text-black">FitFlow</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
            A polished SaaS starter experience with launch-ready pages, subtle motion, and mock flows you can wire up later.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-sm font-semibold text-black">{group}</p>
              <div className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <Link key={link.href} className="text-sm text-gray-500 transition hover:text-black" href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
