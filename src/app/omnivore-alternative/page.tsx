import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Best Omnivore Alternative in 2026 | ReadFlow",
  description: "Omnivore shut down. ReadFlow is the best Omnivore alternative with save later, highlights, text-to-speech, and Obsidian export. Try free today.",
};

export default function OmnivoreAlternativePage() {
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
            The Best Omnivore Alternative
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Omnivore shut down, leaving power readers without a home. ReadFlow is the hosted,
            maintained alternative that adds text-to-speech and a cleaner mobile experience
            to the workflow you loved.
          </p>
          <Link href="/signup">
            <Button size="lg">Try ReadFlow free</Button>
          </Link>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">Omnivore shut down in 2024</h2>
          <p className="text-blue-800">
            Omnivore was a beloved open-source read-later app with great highlight integrations.
            When it shut down, thousands of users needed a new home for their reading workflow.
            ReadFlow is the hosted alternative — no self-hosting required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { title: "Save by URL", desc: "Save any article URL and get a clean, parsed reading view just like Omnivore." },
            { title: "Highlight + export", desc: "Highlight passages and export to Markdown or your Obsidian vault. Perfect for PKM workflows." },
            { title: "Text-to-speech", desc: "Listen to your saved articles. Omnivore didn't offer TTS — ReadFlow does." },
          ].map((f) => (
            <Card key={f.title}>
              <CardHeader>
                <CardTitle className="text-base">{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Omnivore users switch to ReadFlow</h2>
        <div className="space-y-3 mb-12">
          {[
            "No self-hosting required — just sign up and start saving",
            "Cleaner mobile-first reading experience",
            "Text-to-speech added on top of the read-later workflow",
            "Highlights export to Markdown/Obsidian",
            "Simple $4.99/month Pro plan — no complex pricing",
            "Browser bookmarklet for quick saves",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>

        <div className="text-center bg-indigo-600 text-white rounded-xl p-10">
          <h2 className="text-2xl font-bold mb-3">The Omnivore alternative you&apos;ve been looking for</h2>
          <p className="text-indigo-100 mb-6">Free to start. No credit card required. Export your data anytime.</p>
          <Link href="/signup">
            <Button size="lg" variant="secondary">Create free account</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
