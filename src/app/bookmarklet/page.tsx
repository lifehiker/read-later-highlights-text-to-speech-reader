"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { BookOpen, Bookmark, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BookmarkletPage() {
  const [appUrl, setAppUrl] = useState("https://app.readflow.io");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setAppUrl(window.location.origin);
  }, []);

  const bookmarkletCode = `javascript:(function(){var url=encodeURIComponent(window.location.href);window.open('${appUrl}/inbox?save='+url,'_blank');})();`;

  function handleCopy() {
    navigator.clipboard.writeText(bookmarkletCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

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

      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Bookmark className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Save articles with one click
          </h1>
          <p className="text-xl text-gray-600">
            Add the ReadFlow bookmarklet to your browser and save any article instantly
            while browsing the web.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Step 1: Add the bookmarklet</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              Drag this button to your browser&apos;s bookmarks bar:
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a
                href={bookmarkletCode}
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors cursor-grab select-none"
                draggable
                title="Drag me to your bookmarks bar"
              >
                <BookOpen className="h-4 w-4" />
                Save to ReadFlow
              </a>
              <span className="text-sm text-gray-500">← Drag this to your bookmarks bar</span>
            </div>
            <div className="bg-gray-100 rounded-md p-3">
              <p className="text-xs text-gray-500 mb-2">Or copy this code and create a bookmark manually:</p>
              <div className="flex items-start gap-2">
                <code className="text-xs break-all text-gray-700 flex-1">
                  {bookmarkletCode}
                </code>
                <Button
                  size="sm"
                  variant="outline"
                  className="shrink-0 gap-1"
                  onClick={handleCopy}
                >
                  {copied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
                  {copied ? "Copied!" : "Copy"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Step 2: Save any article</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <ol className="space-y-3 text-gray-600">
              <li className="flex gap-3">
                <span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
                <span>Browse to any article you want to save</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
                <span>Click the &quot;Save to ReadFlow&quot; bookmark in your bookmarks bar</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
                <span>The article opens in ReadFlow, ready to read or listen to</span>
              </li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Browser compatibility</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {["Chrome", "Firefox", "Safari", "Edge"].map((browser) => (
                <div key={browser} className="bg-gray-50 rounded-lg p-3">
                  <p className="font-medium text-gray-900">{browser}</p>
                  <p className="text-xs text-green-600 mt-1">Supported</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Don&apos;t have an account yet?</p>
          <Link href="/signup">
            <Button size="lg">Create free account</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
