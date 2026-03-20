import { Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for exploring the experience with core product surfaces.',
    features: ['1 workspace', 'Basic analytics', 'Community support'],
    button: 'Start Free',
    variant: 'outline' as const,
  },
  {
    name: 'Pro',
    price: '$49',
    description: 'Designed for growing SaaS teams that need polished workflows and scale.',
    features: ['Unlimited projects', 'Advanced insights', 'Priority support', 'Custom branding'],
    button: 'Upgrade to Pro',
    variant: 'default' as const,
    popular: true,
  },
  {
    name: 'Lifetime',
    price: '$799',
    description: 'A one-time purchase for founders who want permanent access.',
    features: ['Everything in Pro', 'Lifetime updates', 'VIP onboarding'],
    button: 'Buy Lifetime',
    variant: 'outline' as const,
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-14 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="bg-gray-100">Simple pricing</Badge>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-black">Choose a plan that scales with you</h1>
          <p className="mt-4 text-lg text-gray-500">
            Every plan uses the same polished product foundation. Start free, upgrade when you are ready.
          </p>
          <div className="mx-auto mt-8 inline-flex items-center rounded-full border border-gray-200 bg-gray-100 p-1">
            <button className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black shadow-sm" type="button">
              Monthly
            </button>
            <button className="rounded-full px-5 py-2 text-sm font-medium text-gray-500" type="button">
              Yearly
            </button>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                'flex h-full flex-col rounded-[28px] p-7',
                plan.popular ? 'relative -translate-y-2 shadow-lg shadow-gray-200/60' : 'shadow-sm',
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-black">{plan.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-gray-500">{plan.description}</p>
                </div>
                {plan.popular ? <Badge className="bg-black text-white">Most popular</Badge> : null}
              </div>
              <div className="mt-8 border-b border-gray-100 pb-8">
                <span className="text-5xl font-semibold tracking-tight text-black">{plan.price}</span>
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
                <Button className="w-full justify-center" variant={plan.variant}>
                  {plan.button}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
