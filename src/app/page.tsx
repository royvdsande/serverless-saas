import { ArrowRight, BarChart3, CheckCircle2, Play, ShieldCheck, Sparkles } from 'lucide-react';
import { MarketingShell } from '@/components/site/marketing-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const stats = [
  { label: 'Weekly performance', value: '+24.8%' },
  { label: 'Time to launch', value: '3 days' },
  { label: 'Activation rate', value: '16.2%' },
];

const highlights = [
  {
    icon: Sparkles,
    title: 'Launch-ready experience',
    description: 'Polished marketing, pricing, auth, and dashboard pages that feel coherent from day one.',
  },
  {
    icon: ShieldCheck,
    title: 'UX-first details',
    description: 'Subtle motion, responsive layouts, working dropdowns, and clean content structure across the site.',
  },
  {
    icon: BarChart3,
    title: 'Easy to extend',
    description: 'The backend can be added later, while the front-end already communicates trust and quality.',
  },
];

export default function LandingPage() {
  return (
    <MarketingShell>
      <main>
        <section className="mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-20">
          <div className="animate-fade-up max-w-3xl">
            <Badge className="gap-2 bg-gray-100 text-gray-700">
              <Sparkles className="h-3.5 w-3.5" />
              Introducing your polished SaaS foundation
            </Badge>
            <h1 className="mt-8 text-5xl font-semibold tracking-tight text-black sm:text-6xl lg:text-7xl">
              Design, motion, and UX that already feel production-ready.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-500">
              FitFlow now gives every page a cleaner, more premium feel with connected navigation, refined calls to action,
              and UI states that make the product feel complete even before backend logic is wired up.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button className="gap-2 rounded-full px-6" href="/sign-in">
                Start the demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button className="gap-2 rounded-full px-6" href="/product" variant="outline">
                Explore product tour
                <Play className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-500">
              <span>Fully connected navigation</span>
              <span>Responsive layouts</span>
              <span>Mock auth experience</span>
            </div>
          </div>

          <div className="animate-fade-up rounded-[32px] border border-gray-200 bg-gray-100 p-5 [animation-delay:120ms]">
            <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
              <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                <div>
                  <p className="text-sm text-gray-500">Weekly performance</p>
                  <p className="mt-1 text-3xl font-semibold">+24.8%</p>
                </div>
                <div className="animate-pulse-soft rounded-full bg-gray-100 p-3">
                  <Play className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-6 space-y-4">
                {stats.map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-2xl bg-gray-100 px-4 py-3 transition hover:bg-gray-200/70">
                    <span className="text-sm text-gray-500">{item.label}</span>
                    <span className="text-sm font-semibold text-black">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-black px-5 py-4 text-white">
                <p className="text-sm text-white/70">Suggested next step</p>
                <p className="mt-1 text-base font-semibold">Review the product tour and continue into the dashboard.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="animate-fade-up rounded-[28px] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ animationDelay: `${180 + index * 80}ms` }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 text-black">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-6 text-xl font-semibold text-black">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-gray-500">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
          <div className="glass-panel overflow-hidden rounded-[32px] border border-gray-200 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] lg:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">Everything now flows together.</h2>
                <p className="mt-4 text-base leading-7 text-gray-500">
                  Browse pricing, open product resources, try the mock sign-in, and move through the dashboard with a cleaner,
                  more believable product story.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button className="rounded-full" href="/pricing" variant="secondary">
                  Compare plans
                </Button>
                <Button className="rounded-full" href="/resources">
                  Open resources
                </Button>
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {['Working dropdowns', 'Subtle loading bar', 'Improved page copy'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white/90 px-4 py-4 text-sm font-medium text-black">
                  <CheckCircle2 className="h-4 w-4 text-gray-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </MarketingShell>
  );
}
