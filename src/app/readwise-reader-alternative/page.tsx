import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Readwise Reader Alternative — Save More, Pay Less | ReadFlow",
  description: "ReadFlow is the best Readwise Reader alternative for readers who want TTS, highlights, and Obsidian export without the expensive subscription. $4.99/mo.",
};

export default function ReadwiseReaderAlternativePage() {
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
            The Readwise Reader Alternative That&apos;s<br />
            <span className="text-indigo-600">Simpler and Cheaper</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Readwise Reader is powerful but expensive and complex. ReadFlow gives you
            the best parts — save, read, listen, highlight, export — for $4.99/month
            or free.
          </p>
          <Link href="/signup">
            <Button size="lg">Try ReadFlow free</Button>
          </Link>
          <p className="text-sm text-gray-500 mt-3">No Readwise subscription required</p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-12">
          <p className="text-yellow-900">
            <strong>Readwise Reader costs $7.99–$12.99/month</strong> and requires a separate
            Readwise subscription for full highlight sync. ReadFlow gives you the core
            save-read-listen-highlight workflow for $4.99/month, or free with generous limits.
          </p>
        </div>

        <div className="overflow-x-auto mb-16">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-4 border">Feature</th>
                <th className="text-center p-4 border">Readwise Reader</th>
                <th className="text-center p-4 border bg-indigo-50 text-indigo-900">ReadFlow</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Save by URL", "✓", "✓"],
                ["PDF support", "✓", "✓"],
                ["Text-to-speech", "✓ (complaints about quality)", "✓ High quality"],
                ["Highlights", "✓", "✓"],
                ["Highlight export", "✓ (needs Readwise sub)", "✓ Direct Markdown"],
                ["Obsidian sync", "Via Readwise ($)", "✓ Free export"],
                ["RSS/email ingestion", "✓", "Coming soon"],
                ["Monthly price", "$7.99–$12.99", "$4.99 (or free)"],
              ].map(([feature, readwise, readflow]) => (
                <tr key={feature} className="hover:bg-gray-50">
                  <td className="p-4 border font-medium">{feature}</td>
                  <td className="p-4 border text-center text-gray-600">{readwise}</td>
                  <td className="p-4 border text-center text-indigo-700 font-medium bg-indigo-50">{readflow}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">What ReadFlow focuses on</h2>
        <div className="space-y-3 mb-12">
          {[
            "One clear workflow: save → read/listen → highlight → export",
            "Mobile-first reading experience optimized for commuters",
            "High-quality TTS with speed controls and progress persistence",
            "Direct Markdown export — no extra Readwise subscription needed",
            "Simple $4.99/month pricing — no complex tiers",
            "Free tier available with 20 articles and 60 TTS minutes/month",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>

        <div className="text-center bg-indigo-600 text-white rounded-xl p-10">
          <h2 className="text-2xl font-bold mb-3">
            Stop paying for complexity you don&apos;t use
          </h2>
          <p className="text-indigo-100 mb-6">
            ReadFlow is the focused alternative for readers who want the core
            save-read-listen-highlight workflow without the Readwise ecosystem overhead.
          </p>
          <Link href="/signup">
            <Button size="lg" variant="secondary">Start for free</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
