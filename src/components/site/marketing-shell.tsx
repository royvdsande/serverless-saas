import { SiteFooter } from '@/components/site/site-footer';
import { SiteHeader } from '@/components/site/site-header';

export function MarketingShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#f7f7f7,white_45%)] text-black">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
