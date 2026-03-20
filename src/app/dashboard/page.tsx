'use client';

import { Bell, ChevronDown, CreditCard, Home, Lock, Monitor, ShieldCheck, User } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { TabsList } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

const navigation = [
  { label: 'Overview', icon: Home },
  { label: 'Profile', icon: User },
  { label: 'Security', icon: Lock },
  { label: 'Sessions', icon: Monitor },
];

const workspaces = ['Olivia Rhye', 'FitFlow Labs', 'Northstar Studio'];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('Profile');
  const [workspaceOpen, setWorkspaceOpen] = useState(false);
  const [selectedWorkspace, setSelectedWorkspace] = useState(workspaces[0]);
  const [profileName, setProfileName] = useState('Olivia Rhye');
  const [statusMessage, setStatusMessage] = useState('Changes are stored locally in this demo.');
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const panelContent = useMemo(() => {
    if (activeTab === 'Security') {
      return {
        title: 'Security preferences',
        description: 'Toggle the protections you want to communicate in the UI before connecting real auth providers.',
        primaryLabel: 'Save security settings',
        icon: ShieldCheck,
        fieldLabel: 'Recovery email',
        fieldValue: 'security@fitflow.dev',
      };
    }

    if (activeTab === 'Sessions') {
      return {
        title: 'Active sessions',
        description: 'Preview the kind of account activity and trust signals users expect in a mature product.',
        primaryLabel: 'Review active sessions',
        icon: Monitor,
        fieldLabel: 'Latest device',
        fieldValue: 'MacBook Pro · Amsterdam',
      };
    }

    return {
      title: 'Update your name',
      description: 'Update the public-facing name shown across billing, profile, and collaboration views.',
      primaryLabel: 'Update profile',
      icon: CreditCard,
      fieldLabel: 'Full name',
      fieldValue: profileName,
    };
  }, [activeTab, profileName]);

  const PanelIcon = panelContent.icon;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#f7f7f7,white_38%)] text-black">
      <div className="grid min-h-screen lg:grid-cols-[300px_1fr]">
        <aside className="border-r border-gray-200 bg-gray-100/80 px-5 py-6 backdrop-blur-xl">
          <div className="relative">
            <button
              className="flex w-full items-center justify-between rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm"
              onClick={() => setWorkspaceOpen((value) => !value)}
              type="button"
            >
              <div className="text-left">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Workspace</p>
                <p className="mt-1 text-sm font-semibold text-black">{selectedWorkspace}</p>
              </div>
              <ChevronDown className={cn('h-4 w-4 text-gray-500 transition-transform', workspaceOpen && 'rotate-180')} />
            </button>
            <div
              className={cn(
                'absolute inset-x-0 top-full z-20 mt-3 rounded-3xl border border-gray-200 bg-white p-2 shadow-[0_28px_80px_rgba(15,23,42,0.12)] transition-all',
                workspaceOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0',
              )}
            >
              {workspaces.map((workspace) => (
                <button
                  key={workspace}
                  className={cn(
                    'flex w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition hover:bg-gray-50',
                    selectedWorkspace === workspace ? 'bg-gray-100 text-black' : 'text-gray-500',
                  )}
                  onClick={() => {
                    setSelectedWorkspace(workspace);
                    setWorkspaceOpen(false);
                    setStatusMessage(`Switched to ${workspace}. This is a front-end preview.`);
                  }}
                  type="button"
                >
                  {workspace}
                </button>
              ))}
            </div>
          </div>

          <nav className="mt-8 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.label || (item.label === 'Overview' && activeTab === 'Profile');
              return (
                <button
                  key={item.label}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all',
                    isActive ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:bg-white/70 hover:text-black',
                  )}
                  onClick={() => setActiveTab(item.label === 'Overview' ? 'Profile' : item.label)}
                  type="button"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          <Card className="mt-8 rounded-[28px] p-5 shadow-sm">
            <p className="text-sm font-semibold text-black">Demo mode</p>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Authentication and persistence are intentionally mocked, so reviewers can explore the interface without blockers.
            </p>
            <Button className="mt-4 w-full justify-center" href="/sign-in" variant="outline">
              Review sign-in flow
            </Button>
          </Card>
        </aside>

        <section className="px-6 py-6 lg:px-10">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 border-b border-gray-100 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-400">Dashboard &gt; Settings</p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-black">Workspace settings</h1>
                <p className="mt-2 text-sm text-gray-500">Polished controls, subtle feedback, and mock product states you can wire up later.</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <button
                    className="rounded-full border border-gray-200 bg-white p-3 text-gray-500 shadow-sm transition hover:text-black"
                    onClick={() => setNotificationsOpen((value) => !value)}
                    type="button"
                  >
                    <Bell className="h-4 w-4" />
                  </button>
                  <div
                    className={cn(
                      'absolute right-0 top-full mt-3 w-72 rounded-3xl border border-gray-200 bg-white p-4 shadow-[0_28px_80px_rgba(15,23,42,0.12)] transition-all',
                      notificationsOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0',
                    )}
                  >
                    <p className="text-sm font-semibold text-black">Recent updates</p>
                    <p className="mt-2 text-sm leading-6 text-gray-500">New page transitions and refined navigation are now active across the demo.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-3 py-2 shadow-sm">
                  <Avatar initials="OR" />
                  <div>
                    <p className="text-sm font-medium text-black">Olivia Rhye</p>
                    <p className="text-xs text-gray-500">Product Owner</p>
                  </div>
                </div>
              </div>
            </div>

            <TabsList active={activeTab} onChange={setActiveTab} tabs={['Profile', 'Security', 'Sessions']} />

            <div className="rounded-2xl border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-600">{statusMessage}</div>

            <div className="grid gap-6 xl:grid-cols-[1.1fr_1fr]">
              <Card className="rounded-[28px] p-7 shadow-sm transition duration-300 hover:shadow-lg">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-lg font-semibold text-black">Workspace identity</p>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
                      Personalize the way your workspace appears in account menus, team views, and shared spaces.
                    </p>
                  </div>
                  <Avatar initials="OR" />
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button variant="outline">Upload new avatar</Button>
                  <Button onClick={() => setStatusMessage('Avatar reset requested. Connect storage later.')} variant="ghost">
                    Reset to initials
                  </Button>
                </div>
              </Card>

              <Card className="rounded-[28px] p-7 shadow-sm transition duration-300 hover:shadow-lg">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-black">{panelContent.title}</p>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">{panelContent.description}</p>
                  </div>
                  <div className="rounded-2xl bg-gray-100 p-3 text-gray-500">
                    <PanelIcon className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-8 space-y-3">
                  <label className="text-sm font-medium text-black" htmlFor="primary-field">
                    {panelContent.fieldLabel}
                  </label>
                  <Input
                    key={activeTab}
                    defaultValue={panelContent.fieldValue}
                    id="primary-field"
                    onChange={(event) => activeTab === 'Profile' && setProfileName(event.target.value)}
                  />
                </div>
                <div className="mt-8">
                  <Button
                    onClick={() => setStatusMessage(`${panelContent.primaryLabel} clicked. Backend wiring can be added later.`)}
                    variant="secondary"
                  >
                    {panelContent.primaryLabel}
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
