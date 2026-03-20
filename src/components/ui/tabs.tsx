import { cn } from '@/lib/utils';

export function TabsList({
  tabs,
  active,
  onChange,
}: {
  tabs: string[];
  active: string;
  onChange?: (tab: string) => void;
}) {
  return (
    <div className="inline-flex rounded-2xl border border-gray-200 bg-gray-100 p-1 shadow-sm">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={cn(
            'rounded-xl px-4 py-2 text-sm font-medium transition-all',
            active === tab ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-black',
          )}
          onClick={() => onChange?.(tab)}
          type="button"
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
