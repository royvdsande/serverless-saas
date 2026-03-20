'use client';

import { Check, ChevronDown } from 'lucide-react';
import { useMemo, useState } from 'react';
import { MarketingShell } from '@/components/site/marketing-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Starter',
    monthly: 0,
    yearly: 0,
    description: 'Perfect for founders validating their first polished product experience.',
    features: ['1 workspace', 'Basic analytics', 'Core templates', 'Community support'],
    button: 'Start demo workspace',
    href: '/sign-in',
    variant: 'outline' as const,
  },
  {
    name: 'Pro',
    monthly: 49,
    yearly: 39,
    description: 'For growing SaaS teams who want premium UX patterns and a stronger launch presence.',
    features: ['Unlimited projects', 'Advanced insights', 'Priority support', 'Custom branding', 'Team roles'],
    button: 'Choose Pro plan',
    href: '/dashboard',
    variant: 'default' as const,
    popular: true,
  },
  {
    name: 'Scale',
    monthly: 129,
    yearly: 99,
    description: 'For teams standardizing their setup across multiple products and internal stakeholders.',
    features: ['Everything in Pro', 'Workspace provisioning', 'Quarterly design reviews', 'Premium support'],
    button: 'Talk to sales',
    href: '/resources',
    variant: 'outline' as const,
  },
];

const faqs = [
  {
    question: 'Can we use this without a backend yet?',
    answer: 'Yes. The experience is intentionally front-end complete, with mock interactions where backend logic can be added later.',
  },
  {
    question: 'Do the billing controls work?',
    answer: 'Yes, the monthly and yearly toggle updates the visible pricing so the page feels realistic during demos.',
  },
  {
    question: 'Can we jump straight into the dashboard?',
    answer: 'Absolutely. The sign-in flow is intentionally skippable for now, so reviewers can explore the product instantly.',
  },
];

export default function PricingPage() {
  const [interval, setInterval] = useState<'monthly' | 'yearly'>('monthly');
  const [openFaq, setOpenFaq] = useState<string | null>(faqs[0].question);

  const savingsCopy = useMemo(
    () => (interval === 'yearly' ? 'Save up to 23% with annual billing.' : 'Switch to yearly for better margins.'),
    [interval],
  );

  return (
    <MarketingShell>
      <main className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-18">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <Badge className="bg-gray-100">Simple pricing</Badge>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-black">Choose the plan that fits your launch stage</h1>
          <p className="mt-4 text-lg leading-8 text-gray-500">
            Every tier keeps the same premium product quality. You decide how much scale, support, and customization you need.
          </p>
          <div className="mx-auto mt-8 inline-flex items-center rounded-full border border-gray-200 bg-gray-100 p-1 shadow-sm">
            {(['monthly', 'yearly'] as const).map((value) => (
              <button
                key={value}
                className={cn(
                  'rounded-full px-5 py-2 text-sm font-medium capitalize transition-all',
                  interval === value ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-black',
                )}
                onClick={() => setInterval(value)}
                type="button"
              >
                {value}
              </button>
            ))}
          </div>
          <p className="mt-3 text-sm text-gray-500">{savingsCopy}</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={cn(
                'animate-fade-up flex h-full flex-col rounded-[28px] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl',
                plan.popular ? 'relative -translate-y-2 shadow-lg shadow-gray-200/60' : 'shadow-sm',
              )}
              style={{ animationDelay: `${80 + index * 90}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-black">{plan.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-gray-500">{plan.description}</p>
                </div>
                {plan.popular ? <Badge className="bg-black text-white">Most popular</Badge> : null}
              </div>
              <div className="mt-8 border-b border-gray-100 pb-8">
                <span className="text-5xl font-semibold tracking-tight text-black">
                  ${interval === 'monthly' ? plan.monthly : plan.yearly}
                </span>
                <span className="ml-2 text-sm text-gray-500">/ month</span>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100">
                      <Check className="h-3.5 w-3.5 text-black" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button className="w-full justify-center" href={plan.href} variant={plan.variant}>
                  {plan.button}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <section className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="rounded-[28px] p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">What you get</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-black">Professional polish out of the box</h2>
            <p className="mt-4 text-sm leading-7 text-gray-500">
              The starter now feels complete enough to demo with confidence: clear page hierarchy, intentional copy, smooth transitions,
              and navigable flows from marketing through dashboard.
            </p>
            <div className="mt-8 grid gap-3">
              {['Connected CTAs across pages', 'Responsive navigation with dropdowns', 'Subtle loading feedback between routes'].map((item) => (
                <div key={item} className="rounded-2xl bg-gray-100 px-4 py-4 text-sm font-medium text-black">
                  {item}
                </div>
              ))}
            </div>
          </Card>

          <Card className="rounded-[28px] p-7 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">FAQ</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-black">Everything stakeholders ask first</h2>
              </div>
            </div>
            <div className="mt-8 space-y-3">
              {faqs.map((item) => {
                const isOpen = openFaq === item.question;
                return (
                  <div key={item.question} className="rounded-2xl border border-gray-200 px-4 py-4">
                    <button className="flex w-full items-center justify-between gap-4 text-left" onClick={() => setOpenFaq(isOpen ? null : item.question)} type="button">
                      <span className="text-sm font-semibold text-black">{item.question}</span>
                      <ChevronDown className={cn('h-4 w-4 text-gray-500 transition-transform', isOpen && 'rotate-180')} />
                    </button>
                    {isOpen ? <p className="mt-3 text-sm leading-6 text-gray-500">{item.answer}</p> : null}
                  </div>
                );
              })}
            </div>
          </Card>
        </section>
      </main>
    </MarketingShell>
  );
}
