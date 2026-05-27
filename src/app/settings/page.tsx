import { auth } from "@/lib/auth";
import Link from "next/link";
import { BookOpen, Settings, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default async function SettingsPage() {
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
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Sign in to access settings</h1>
          <p className="text-gray-600 mb-6">
            Manage your reading preferences, TTS settings, and account details.
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
          <Link href="/billing" className="text-sm text-gray-600 hover:text-gray-900">Billing</Link>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-6 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Settings className="h-6 w-6 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>Your account information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Display name</Label>
                <Input
                  id="name"
                  defaultValue={session.user.name || ""}
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue={session.user.email || ""}
                  disabled
                />
                <p className="text-xs text-gray-500">Email cannot be changed</p>
              </div>
              <Button>Save changes</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Reading preferences</CardTitle>
              <CardDescription>Customize your reading experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Font size</Label>
                <div className="flex gap-2">
                  {["Small", "Medium", "Large", "XL"].map((size) => (
                    <Button key={size} variant={size === "Medium" ? "default" : "outline"} size="sm">
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label>Theme</Label>
                <div className="flex gap-2">
                  {["Light", "Dark", "Auto"].map((theme) => (
                    <Button key={theme} variant={theme === "Light" ? "default" : "outline"} size="sm">
                      {theme}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Text-to-Speech</CardTitle>
              <CardDescription>Configure TTS playback settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Default speed</Label>
                <div className="flex gap-2">
                  {["0.75x", "1x", "1.25x", "1.5x", "2x"].map((speed) => (
                    <Button key={speed} variant={speed === "1x" ? "default" : "outline"} size="sm">
                      {speed}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="text-red-700">Danger zone</CardTitle>
              <CardDescription>Irreversible account actions</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="destructive">Delete account</Button>
              <p className="text-xs text-gray-500 mt-2">
                This will permanently delete your account and all data including saved articles and highlights.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
