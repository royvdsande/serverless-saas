import { cn } from '@/lib/utils';

export function TabsList({
  tabs,
  active,
}: {
  tabs: string[];
  active: string;
}) {
  return (
    <div className="inline-flex rounded-2xl border border-gray-200 bg-gray-100 p-1">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={cn(
            'rounded-xl px-4 py-2 text-sm font-medium transition-colors',
            active === tab ? 'bg-white text-black shadow-sm' : 'text-gray-500',
          )}
          type="button"
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
