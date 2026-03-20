'use client';

import { BookOpen, ChevronDown, FileText, PlayCircle, Rocket } from 'lucide-react';
import { useMemo, useState } from 'react';
import { MarketingShell } from '@/components/site/marketing-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const resources = [
  { title: 'Launch checklist', type: 'Guide', icon: Rocket, description: 'A practical sequence for reviewing UX, copy, and navigation before launch.' },
  { title: 'Demo script', type: 'Playbook', icon: PlayCircle, description: 'Suggested narration for walking clients or investors through the product story.' },
  { title: 'Brand copy prompts', type: 'Template', icon: FileText, description: 'Reusable prompts for sharpening onboarding, pricing, and dashboard messaging.' },
  { title: 'Design QA pass', type: 'Guide', icon: BookOpen, description: 'A quick list of visual checks for spacing, responsiveness, and motion polish.' },
];

const filters = ['All', 'Guide', 'Playbook', 'Template'] as const;

export default function ResourcesPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All');
  const [filterOpen, setFilterOpen] = useState(false);

  const visibleResources = useMemo(
    () => resources.filter((item) => activeFilter === 'All' || item.type === activeFilter),
    [activeFilter],
  );

  return (
    <MarketingShell>
      <main className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-18">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl animate-fade-up">
            <Badge className="bg-gray-100">Resources</Badge>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-black">Useful assets for launching and demoing FitFlow</h1>
            <p className="mt-4 text-lg leading-8 text-gray-500">
              These resource cards act like a realistic content hub so the site feels complete, even while actual backend-driven content is still coming later.
            </p>
          </div>
          <div className="relative animate-fade-up [animation-delay:120ms]">
            <button
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-black shadow-sm"
              onClick={() => setFilterOpen((value) => !value)}
              type="button"
            >
              Filter: {activeFilter}
              <ChevronDown className={cn('h-4 w-4 text-gray-500 transition-transform', filterOpen && 'rotate-180')} />
            </button>
            <div
              className={cn(
                'absolute right-0 top-full mt-3 w-56 rounded-3xl border border-gray-200 bg-white p-2 shadow-[0_28px_80px_rgba(15,23,42,0.12)] transition-all',
                filterOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0',
              )}
            >
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={cn(
                    'flex w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition hover:bg-gray-50',
                    activeFilter === filter ? 'bg-gray-100 text-black' : 'text-gray-500',
                  )}
                  onClick={() => {
                    setActiveFilter(filter);
                    setFilterOpen(false);
                  }}
                  type="button"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {visibleResources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Card
                key={resource.title}
                className="animate-fade-up rounded-[28px] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ animationDelay: `${120 + index * 70}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 text-black">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-6 flex items-center justify-between gap-3">
                  <h2 className="text-lg font-semibold text-black">{resource.title}</h2>
                  <Badge className="bg-gray-100">{resource.type}</Badge>
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-500">{resource.description}</p>
                <Button className="mt-6 w-full justify-center" href="/sign-in" variant="outline">
                  Open preview
                </Button>
              </Card>
            );
          })}
        </div>
      </main>
    </MarketingShell>
  );
}
