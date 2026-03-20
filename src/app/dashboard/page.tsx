import { Bell, ChevronDown, CreditCard, Home, Lock, Monitor, User } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { TabsList } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

const navigation = [
  { label: 'Home', icon: Home, active: false },
  { label: 'Profile', icon: User, active: true },
  { label: 'Security', icon: Lock, active: false },
  { label: 'Sessions', icon: Monitor, active: false },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-r border-gray-200 bg-gray-100 px-5 py-6">
          <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-4 py-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Workspace</p>
              <p className="mt-1 text-sm font-semibold text-black">Olivia Rhye</p>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>

          <nav className="mt-8 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  className={cn(
                    'flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-colors',
                    item.active ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:bg-white/70 hover:text-black',
                  )}
                  href="#"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </a>
              );
            })}
          </nav>
        </aside>

        <section className="px-6 py-6 lg:px-10">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 border-b border-gray-100 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-400">Home &gt; Settings</p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-black">Settings</h1>
              </div>
              <div className="flex items-center gap-3">
                <button className="rounded-full border border-gray-200 p-3 text-gray-500" type="button">
                  <Bell className="h-4 w-4" />
                </button>
                <div className="flex items-center gap-3 rounded-2xl border border-gray-200 px-3 py-2">
                  <Avatar initials="OR" />
                  <div>
                    <p className="text-sm font-medium text-black">Olivia Rhye</p>
                    <p className="text-xs text-gray-500">Product Owner</p>
                  </div>
                </div>
              </div>
            </div>

            <TabsList active="Profile" tabs={['Profile', 'Security', 'Sessions']} />

            <div className="grid gap-6 xl:grid-cols-[1.1fr_1fr]">
              <Card className="rounded-[28px] p-7 shadow-sm">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-lg font-semibold text-black">Your Profile Picture</p>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
                      Personalize your workspace with a clean avatar for team settings and account menus.
                    </p>
                  </div>
                  <Avatar initials="OR" />
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button variant="outline">Change</Button>
                  <Button variant="ghost">Remove</Button>
                </div>
              </Card>

              <Card className="rounded-[28px] p-7 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-black">Update your Name</p>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
                      Update the public-facing name shown across billing, profile, and collaboration views.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-gray-100 p-3 text-gray-500">
                    <CreditCard className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-8 space-y-3">
                  <label className="text-sm font-medium text-black" htmlFor="name">
                    Full name
                  </label>
                  <Input defaultValue="Olivia Rhye" id="name" />
                </div>
                <div className="mt-8">
                  <Button variant="secondary">Update Profile</Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
