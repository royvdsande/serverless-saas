import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const navItems = ['Product', 'Pricing', 'Resources'];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 lg:px-10">
        <header className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-5 py-4">
          <div className="text-lg font-semibold tracking-tight">FitFlow</div>
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item} className="text-sm text-gray-500 transition hover:text-black" href="#">
                {item}
              </a>
            ))}
          </nav>
          <Button href="/dashboard">Dashboard</Button>
        </header>

        <section className="flex flex-1 items-center py-16 lg:py-24">
          <div className="grid w-full gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="max-w-3xl">
              <Badge className="gap-2 bg-gray-100 text-gray-600">
                <Sparkles className="h-3.5 w-3.5" />
                Introducing our latest features
              </Badge>
              <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-tight text-black sm:text-6xl lg:text-7xl">
                Production-ready SaaS. Right out of the box.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-500">
                FitFlow gives modern software teams a premium starter experience with elegant UI patterns,
                clear onboarding, and a dashboard that feels launch-ready from day one.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button className="gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button className="gap-2" variant="ghost">
                  Book a Demo
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="rounded-[32px] border border-gray-200 bg-gray-100 p-5">
              <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                  <div>
                    <p className="text-sm text-gray-500">Weekly performance</p>
                    <p className="mt-1 text-3xl font-semibold">+24.8%</p>
                  </div>
                  <div className="rounded-full bg-gray-100 p-3">
                    <Play className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  {[
                    ['New signups', '1,284'],
                    ['Conversion rate', '16.2%'],
                    ['MRR growth', '$12.4k'],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between rounded-2xl bg-gray-100 px-4 py-3">
                      <span className="text-sm text-gray-500">{label}</span>
                      <span className="text-sm font-semibold text-black">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
