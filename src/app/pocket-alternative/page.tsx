import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Pocket Alternative with Highlights and TTS | ReadFlow",
  description: "ReadFlow is the Pocket alternative that actually helps you consume what you save. Text-to-speech, highlights, and Obsidian export. Try free.",
};

export default function PocketAlternativePage() {
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
            The Pocket Alternative That Helps You<br />Actually Read What You Save
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Pocket is great for saving — but it doesn&apos;t help you consume your content.
            ReadFlow adds text-to-speech, highlights, and export so you actually get value
            from what you save.
          </p>
          <Link href="/signup">
            <Button size="lg">Try ReadFlow free</Button>
          </Link>
        </div>

        <div className="overflow-x-auto mb-16">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-4 border">Feature</th>
                <th className="text-center p-4 border bg-gray-100">Pocket</th>
                <th className="text-center p-4 border bg-indigo-50 text-indigo-900">ReadFlow</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Save by URL", "✓", "✓"],
                ["Clean reading view", "✓", "✓"],
                ["Mobile app", "✓", "PWA (works great)"],
                ["Text-to-speech", "Basic / Premium only", "✓ Included"],
                ["Highlights", "Premium only", "✓ Free tier"],
                ["Highlight export", "✗", "✓ Markdown/Obsidian"],
                ["Offline reading", "Premium", "✓ Cached"],
                ["Price", "$4.99+/mo", "Free or $4.99/mo"],
              ].map(([feature, pocket, readflow]) => (
                <tr key={feature} className="hover:bg-gray-50">
                  <td className="p-4 border font-medium">{feature}</td>
                  <td className="p-4 border text-center text-gray-600">{pocket}</td>
                  <td className="p-4 border text-center text-indigo-700 font-medium bg-indigo-50">{readflow}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why readers switch from Pocket to ReadFlow</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            { title: "TTS is a first-class feature", desc: "In ReadFlow, text-to-speech isn't an afterthought. Listen to any saved article with speed controls and sentence-level progress." },
            { title: "Highlights that actually go somewhere", desc: "Export your highlights as Markdown, send to email, or import into Obsidian. Pocket locks highlights in the app." },
            { title: "Simpler, more focused workflow", desc: "Save → Read/Listen → Highlight → Export. No algorithm, no discovery feed, just your queue." },
            { title: "Same price, more features", desc: "ReadFlow Pro is $4.99/month — same as Pocket Premium — but includes unlimited TTS, export, and more." },
          ].map((f) => (
            <Card key={f.title} className="p-4">
              <CardContent className="p-0">
                <h3 className="font-semibold text-gray-900 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <blockquote className="text-lg text-gray-700 italic mb-4">
            &ldquo;I had 400 articles saved in Pocket I never read. With ReadFlow I actually listen to them during my morning walk. The highlights sync to Obsidian automatically.&rdquo;
          </blockquote>
          <p className="text-sm text-gray-500">— Knowledge worker and daily ReadFlow user</p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to switch from Pocket?</h2>
          <p className="text-gray-600 mb-6">Free plan available. No credit card required.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/signup"><Button size="lg">Start free</Button></Link>
            <Link href="/"><Button size="lg" variant="outline">Learn more</Button></Link>
          </div>
        </div>
      </main>
    </div>
  );
}
