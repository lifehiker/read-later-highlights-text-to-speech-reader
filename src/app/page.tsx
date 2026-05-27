import Link from "next/link";
import { BookOpen, Headphones, Highlighter, Download, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-indigo-600" />
          <span className="font-bold text-xl">ReadFlow</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/signin" className="text-sm text-gray-600 hover:text-gray-900">
            Sign in
          </Link>
          <Link href="/signup">
            <Button size="sm">Get started free</Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <Badge variant="secondary" className="mb-4">
          The Pocket + Readwise + TTS app in one
        </Badge>
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Read Later App with<br />
          <span className="text-indigo-600">Text to Speech</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Save articles and PDFs, listen during your commute, highlight key passages,
          and export your notes — all in one lightweight app. No more juggling Pocket,
          Readwise, and a TTS app.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg" className="gap-2">
              Start for free <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/bookmarklet">
            <Button size="lg" variant="outline">
              Get the bookmarklet
            </Button>
          </Link>
        </div>
        <p className="mt-4 text-sm text-gray-500">Free plan available · No credit card required</p>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Everything you need to save, listen, and remember
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <BookOpen className="h-8 w-8 text-indigo-600 mb-2" />
                <CardTitle className="text-lg">Save anything</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Save articles by URL or upload text-based PDFs. Clean reader view strips away distractions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Headphones className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle className="text-lg">Listen while on the go</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  High-quality text-to-speech with play/pause, seek controls, and speed adjustment for any content.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Highlighter className="h-8 w-8 text-yellow-500 mb-2" />
                <CardTitle className="text-lg">Highlight key passages</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Select text to highlight in 3 colors. Add notes. Revisit all highlights grouped by document.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Download className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle className="text-lg">Export to Obsidian</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Export highlights as Markdown, send via email, or import directly into your Obsidian vault.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Simple pricing</h2>
        <p className="text-center text-gray-600 mb-12">
          Pocket + Readwise + Speechify costs $30+/month. ReadFlow starts free.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Free</CardTitle>
              <p className="text-3xl font-bold">$0<span className="text-sm font-normal text-gray-500">/month</span></p>
            </CardHeader>
            <CardContent className="space-y-3">
              {["Up to 20 saved items", "Up to 60 TTS minutes/month", "Unlimited reading", "Up to 20 highlights"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
              <Link href="/signup" className="block mt-6">
                <Button variant="outline" className="w-full">Get started</Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="border-2 border-indigo-600">
            <CardHeader>
              <Badge className="w-fit mb-2 bg-indigo-600">Most popular</Badge>
              <CardTitle>Pro</CardTitle>
              <p className="text-3xl font-bold">$4.99<span className="text-sm font-normal text-gray-500">/month</span></p>
              <p className="text-sm text-gray-500">or $39/year (save 35%)</p>
            </CardHeader>
            <CardContent className="space-y-3">
              {["Unlimited saved items", "600 TTS minutes/month", "Unlimited highlights", "Markdown & email export", "Recent highlights resurfacing", "Priority parsing"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
              <Link href="/signup" className="block mt-6">
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Start Pro trial</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Alternatives nav */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600 mb-4">Switching from another app?</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/pocket-alternative"><Button variant="outline" size="sm">Pocket alternative</Button></Link>
            <Link href="/matter-alternative"><Button variant="outline" size="sm">Matter alternative</Button></Link>
            <Link href="/omnivore-alternative"><Button variant="outline" size="sm">Omnivore alternative</Button></Link>
            <Link href="/readwise-reader-alternative"><Button variant="outline" size="sm">Readwise Reader alternative</Button></Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-indigo-600" />
            <span className="font-semibold">ReadFlow</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-600">
            <Link href="/inbox" className="hover:text-gray-900">Inbox</Link>
            <Link href="/highlights" className="hover:text-gray-900">Highlights</Link>
            <Link href="/bookmarklet" className="hover:text-gray-900">Bookmarklet</Link>
            <Link href="/signin" className="hover:text-gray-900">Sign in</Link>
          </div>
          <p className="text-sm text-gray-500">© 2026 ReadFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
