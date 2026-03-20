import { ArrowRight, Layers3, Shield, WandSparkles } from 'lucide-react';
import { MarketingShell } from '@/components/site/marketing-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const sections = [
  {
    icon: WandSparkles,
    title: 'Thoughtful first impression',
    description: 'A tighter hero, stronger CTA labels, and subtle motion that makes the app feel deliberate instead of generic.',
  },
  {
    icon: Layers3,
    title: 'Consistent product story',
    description: 'Each page now reinforces the same product narrative, from discovery and pricing to sign-in and settings.',
  },
  {
    icon: Shield,
    title: 'Ready for real logic later',
    description: 'Mock flows communicate the intended product behavior today, while remaining easy to connect to real APIs tomorrow.',
  },
];

export default function ProductPage() {
  return (
    <MarketingShell>
      <main className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-18">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="animate-fade-up max-w-3xl">
            <Badge className="bg-gray-100">Product overview</Badge>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-black">A product tour that feels investor-ready</h1>
            <p className="mt-5 text-lg leading-8 text-gray-500">
              This page ties the experience together: premium surfaces, clean navigation, and transitions that make the product feel calm,
              modern, and believable from the first click.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="rounded-full" href="/dashboard">
                Open live dashboard
              </Button>
              <Button className="rounded-full" href="/pricing" variant="outline">
                Review pricing
              </Button>
            </div>
          </div>

          <Card className="animate-fade-up rounded-[32px] p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] [animation-delay:120ms]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">What changed</p>
            <div className="mt-6 space-y-4">
              {['All major routes now link together cleanly', 'Buttons communicate the actual next step', 'Dropdowns and toggles feel interactive', 'Page transitions now provide subtle feedback'].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-2xl bg-gray-100 px-4 py-4 text-sm font-medium text-black">
                  {item}
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </div>
              ))}
            </div>
          </Card>
        </div>

        <section className="mt-14 grid gap-6 lg:grid-cols-3">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card
                key={section.title}
                className="animate-fade-up rounded-[28px] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ animationDelay: `${180 + index * 90}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100">
                  <Icon className="h-5 w-5 text-black" />
                </div>
                <h2 className="mt-6 text-xl font-semibold text-black">{section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-gray-500">{section.description}</p>
              </Card>
            );
          })}
        </section>
      </main>
    </MarketingShell>
  );
}
