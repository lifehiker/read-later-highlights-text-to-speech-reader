import { auth } from "@/lib/auth";
import Link from "next/link";
import { BookOpen, CheckCircle, CreditCard, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function BillingPage() {
  const session = await auth();

  if (!session?.user?.id) {
    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="border-b bg-white px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-indigo-600" />
            <span className="font-bold text-xl">ReadFlow</span>
          </Link>
          <div className="flex gap-3">
            <Link href="/signin"><Button variant="outline" size="sm">Sign in</Button></Link>
            <Link href="/signup"><Button size="sm">Sign up free</Button></Link>
          </div>
        </nav>
        <div className="max-w-xl mx-auto px-6 py-32 text-center">
          <LogIn className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Sign in to manage billing</h1>
          <p className="text-gray-600 mb-6">
            View your plan, upgrade to Pro, or manage your subscription.
          </p>
          <div className="flex gap-3 justify-center">
            <Link href="/signin"><Button>Sign in</Button></Link>
            <Link href="/signup"><Button variant="outline">Create account</Button></Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="border-b bg-white px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-indigo-600" />
          <span className="font-bold text-xl">ReadFlow</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/inbox" className="text-sm text-gray-600 hover:text-gray-900">Inbox</Link>
          <Link href="/highlights" className="text-sm text-gray-600 hover:text-gray-900">Highlights</Link>
          <Link href="/settings" className="text-sm text-gray-600 hover:text-gray-900">Settings</Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex items-center gap-3 mb-8">
          <CreditCard className="h-6 w-6 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-900">Billing & Plan</h1>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Current Plan</CardTitle>
              <Badge variant="secondary">Free</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Saved items</span>
                <span>0 / 20</span>
              </div>
              <div className="flex justify-between">
                <span>TTS minutes this month</span>
                <span>0 / 60</span>
              </div>
              <div className="flex justify-between">
                <span>Highlights</span>
                <span>0 / 20</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Free</CardTitle>
              <p className="text-3xl font-bold">$0<span className="text-sm font-normal text-gray-500">/month</span></p>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              {["20 saved items", "60 TTS minutes/month", "Unlimited reading", "20 highlights total"].map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" disabled>Current plan</Button>
            </CardFooter>
          </Card>

          <Card className="border-2 border-indigo-600">
            <CardHeader>
              <Badge className="w-fit bg-indigo-600 mb-1">Recommended</Badge>
              <CardTitle>Pro</CardTitle>
              <p className="text-3xl font-bold">$4.99<span className="text-sm font-normal text-gray-500">/month</span></p>
              <p className="text-xs text-gray-500">or $39/year (save 35%)</p>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              {["Unlimited saved items", "600 TTS minutes/month", "Unlimited highlights", "Markdown & email export", "Recent highlights review", "Priority support"].map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                Upgrade to Pro — $4.99/mo
              </Button>
              <Button variant="outline" className="w-full text-sm">
                Annual plan — $39/year
              </Button>
            </CardFooter>
          </Card>
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          Payments processed securely. Cancel anytime.
        </p>
      </main>
    </div>
  );
}
