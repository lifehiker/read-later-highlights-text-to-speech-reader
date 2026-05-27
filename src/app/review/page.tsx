import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import Link from "next/link";
import { BookOpen, RefreshCw, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";

export default async function ReviewPage() {
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
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Sign in to review recent highlights</h1>
          <p className="text-gray-600 mb-6">
            Your 20 most recent highlights from all documents will surface here for daily review.
          </p>
          <div className="flex gap-3 justify-center">
            <Link href="/signin"><Button>Sign in</Button></Link>
            <Link href="/signup"><Button variant="outline">Create account</Button></Link>
          </div>
        </div>
      </div>
    );
  }

  const recentHighlights = await prisma.highlight.findMany({
    where: { userId: session.user.id },
    include: { savedItem: { select: { title: true } } },
    orderBy: { createdAt: "desc" },
    take: 20,
  });

  const colorMap: Record<string, string> = {
    yellow: "bg-yellow-50 border-yellow-200",
    green: "bg-green-50 border-green-200",
    blue: "bg-blue-50 border-blue-200",
  };

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
        <div className="flex items-center gap-3 mb-6">
          <RefreshCw className="h-6 w-6 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-900">Recent Highlights</h1>
        </div>
        <p className="text-gray-600 mb-8">
          Your last {recentHighlights.length > 0 ? recentHighlights.length : "20"} highlights across all documents.
          Review them daily to reinforce what you&apos;ve learned.
        </p>

        {recentHighlights.length === 0 ? (
          <Card>
            <CardContent className="py-16 text-center">
              <RefreshCw className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h2 className="text-lg font-semibold text-gray-700 mb-2">No highlights to review yet</h2>
              <p className="text-gray-500 mb-6">
                Highlights you create while reading will appear here for daily review.
              </p>
              <Link href="/inbox"><Button>Go to inbox</Button></Link>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {recentHighlights.map((h) => (
              <Card key={h.id} className={`border ${colorMap[h.color] || colorMap.yellow}`}>
                <CardHeader className="pb-2">
                  <CardDescription className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    {h.savedItem.title}
                  </CardDescription>
                  <CardTitle className="text-base font-normal italic text-gray-800">
                    &ldquo;{h.selectedText}&rdquo;
                  </CardTitle>
                </CardHeader>
                {(h.note || h.createdAt) && (
                  <CardContent className="pt-0">
                    {h.note && <p className="text-sm text-gray-600 mb-1">Note: {h.note}</p>}
                    <p className="text-xs text-gray-400">
                      {formatDistanceToNow(h.createdAt, { addSuffix: true })}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
