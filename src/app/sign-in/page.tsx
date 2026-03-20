'use client';

import { CheckCircle2, ChevronDown, Lock, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const roles = ['Founder', 'Operator', 'Designer'];

export default function SignInPage() {
  const [roleOpen, setRoleOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(roles[0]);
  const [message, setMessage] = useState('Use any email and password below; authentication is intentionally mocked in this demo.');

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,#f7f7f7,white_42%)] px-6 py-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-gray-100/90 to-transparent" />
      <div className="grid w-full max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="animate-fade-up hidden lg:block">
          <Badge className="gap-2 bg-gray-100">
            <Sparkles className="h-3.5 w-3.5" />
            Mock authentication flow
          </Badge>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-black">A sign-in screen that already feels trustworthy</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-gray-500">
            The experience is polished enough for demos and design reviews, while the real identity provider, session handling, and backend checks can be connected later.
          </p>
          <div className="mt-8 grid max-w-xl gap-4">
            {['Skippable for quick product walkthroughs', 'Clear demo messaging so nobody expects real auth yet', 'Professional layout, spacing, and interaction feedback'].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-4 text-sm font-medium text-black shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-gray-500" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <Card className="animate-fade-up w-full rounded-[32px] p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] [animation-delay:120ms] lg:ml-auto lg:max-w-lg">
          <div className="mb-8 text-center">
            <p className="text-lg font-semibold tracking-tight text-black">FitFlow</p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-black">Welcome back</h1>
            <p className="mt-2 text-sm leading-6 text-gray-500">Sign in for the full experience, or skip directly into the dashboard while the backend is still being built.</p>
          </div>

          <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-600">{message}</div>

          <form
            className="space-y-5"
            onSubmit={(event) => {
              event.preventDefault();
              setMessage('Demo sign-in successful. In a real build this would create a session and redirect you.');
            }}
          >
            <div className="space-y-2">
              <label className="text-sm font-medium text-black" htmlFor="email">
                Work email
              </label>
              <Input id="email" placeholder="name@company.com" type="email" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-black" htmlFor="password">
                Password
              </label>
              <Input id="password" placeholder="••••••••" type="password" />
            </div>
            <div className="relative">
              <button
                className="flex w-full items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 text-left text-sm text-black transition hover:border-gray-300"
                onClick={() => setRoleOpen((value) => !value)}
                type="button"
              >
                <span>
                  <span className="block text-xs uppercase tracking-[0.2em] text-gray-400">Demo persona</span>
                  <span className="mt-1 block font-medium text-black">{selectedRole}</span>
                </span>
                <ChevronDown className={cn('h-4 w-4 text-gray-500 transition-transform', roleOpen && 'rotate-180')} />
              </button>
              <div
                className={cn(
                  'absolute inset-x-0 top-full z-20 mt-3 rounded-3xl border border-gray-200 bg-white p-2 shadow-[0_28px_80px_rgba(15,23,42,0.12)] transition-all',
                  roleOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0',
                )}
              >
                {roles.map((role) => (
                  <button
                    key={role}
                    className={cn(
                      'flex w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition hover:bg-gray-50',
                      selectedRole === role ? 'bg-gray-100 text-black' : 'text-gray-500',
                    )}
                    onClick={() => {
                      setSelectedRole(role);
                      setRoleOpen(false);
                      setMessage(`Demo persona switched to ${role}. Auth is still bypassed for now.`);
                    }}
                    type="button"
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                Backend auth is coming later
              </div>
              <button className="font-medium text-black" onClick={() => setMessage('Password reset is intentionally mocked for now.')} type="button">
                Forgot password?
              </button>
            </div>
            <Button className="w-full justify-center">Continue to workspace</Button>
          </form>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs uppercase tracking-[0.2em] text-gray-400">Or continue with</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Button className="w-full justify-center" onClick={() => setMessage('Google auth will connect here later.')} variant="outline">
              Continue with Google
            </Button>
            <Button className="w-full justify-center" href="/dashboard" variant="secondary">
              Skip to dashboard
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}
