import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Best Matter App Alternative in 2026 | ReadFlow",
  description: "Matter shut down and left readers stranded. ReadFlow is the best Matter alternative — save articles, listen with TTS, highlight, and export. Try free.",
};

export default function MatterAlternativePage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-indigo-600" />
          <span className="font-bold text-xl">ReadFlow</span>
        </Link>
        <div className="flex gap-3">
          <Link href="/signin"><Button variant="outline" size="sm">Sign in</Button></Link>
          <Link href="/signup"><Button size="sm">Switch to ReadFlow</Button></Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            The Best Matter App Alternative
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Matter shut down and left its users without a home. ReadFlow brings back
            everything you loved about Matter — mobile-first reading, high-quality TTS,
            and highlights — with a sustainable business model.
          </p>
          <Link href="/signup">
            <Button size="lg">Try ReadFlow free</Button>
          </Link>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-12">
          <h2 className="text-lg font-semibold text-amber-900 mb-2">Matter shut down in 2024</h2>
          <p className="text-amber-800">
            Matter was one of the best reading apps, but it shut down unexpectedly, leaving
            thousands of users without a way to access their saved articles or highlights.
            ReadFlow is built on a sustainable model so this never happens to you again.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <XCircle className="h-5 w-5 text-red-500" />
                Matter (Shut Down)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-gray-600">
              <p>✗ No longer available</p>
              <p>✗ No data export after shutdown</p>
              <p>✗ Lost all your saved articles</p>
              <p>✗ Can&apos;t access your highlights</p>
              <p>✗ Trust gap — could happen again</p>
            </CardContent>
          </Card>
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-indigo-900">
                <CheckCircle className="h-5 w-5 text-green-500" />
                ReadFlow (Active)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-indigo-800">
              <p>✓ Actively maintained and improved</p>
              <p>✓ Export your data anytime</p>
              <p>✓ Articles and highlights always accessible</p>
              <p>✓ Transparent freemium model at $4.99/mo</p>
              <p>✓ Built for long-term sustainability</p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">What ReadFlow gives you (like Matter did)</h2>
        <div className="space-y-4 mb-12">
          {[
            { title: "Mobile-first reading", desc: "Clean, distraction-free reader with adjustable font size, light/dark mode, and reading progress tracking — just like Matter." },
            { title: "Text-to-speech playback", desc: "High-quality TTS so you can listen to articles during your commute, just like you used to in Matter." },
            { title: "Highlights with notes", desc: "Select text to highlight in 3 colors and add notes. View all highlights grouped by document." },
            { title: "Browser bookmarklet", desc: "Save any article in one click while browsing. No app extension needed." },
            { title: "Export to Markdown/Obsidian", desc: "Export all your highlights as Markdown, perfect for Obsidian or Notion imports." },
          ].map((f) => (
            <div key={f.title} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-indigo-600 text-white rounded-xl p-10">
          <h2 className="text-2xl font-bold mb-3">Ready to move on from Matter?</h2>
          <p className="text-indigo-100 mb-6">
            Start with ReadFlow free — up to 20 articles and 60 TTS minutes per month, no credit card required.
          </p>
          <Link href="/signup">
            <Button size="lg" variant="secondary">Create free account</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
