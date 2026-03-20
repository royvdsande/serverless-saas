import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-6 py-12">
      <Card className="w-full max-w-md rounded-[28px] p-8 shadow-sm">
        <div className="mb-8 text-center">
          <p className="text-lg font-semibold tracking-tight text-black">FitFlow</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-black">Welcome back</h1>
          <p className="mt-2 text-sm text-gray-500">Sign in to continue managing your workspace.</p>
        </div>

        <form className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-black" htmlFor="email">
              Email
            </label>
            <Input id="email" placeholder="name@company.com" type="email" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-black" htmlFor="password">
              Password
            </label>
            <Input id="password" placeholder="••••••••" type="password" />
          </div>
          <Button className="w-full justify-center">Sign In</Button>
        </form>

        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-xs uppercase tracking-[0.2em] text-gray-400">Or continue with</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <Button className="w-full justify-center" variant="outline">
          Sign in with Google
        </Button>
      </Card>
    </main>
  );
}
