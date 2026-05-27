import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import Link from "next/link";
import { BookOpen, Highlighter, LogIn, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";

export default async function HighlightsPage() {
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
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Sign in to view your highlights</h1>
          <p className="text-gray-600 mb-6">
            All the passages you&apos;ve highlighted while reading will appear here, grouped by document.
          </p>
          <div className="flex gap-3 justify-center">
            <Link href="/signin"><Button>Sign in</Button></Link>
            <Link href="/signup"><Button variant="outline">Create account</Button></Link>
          </div>
        </div>
      </div>
    );
  }

  const highlights = await prisma.highlight.findMany({
    where: { userId: session.user.id },
    include: { savedItem: { select: { title: true, sourceUrl: true } } },
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  // Group by savedItem
  const grouped = highlights.reduce((acc, h) => {
    const key = h.savedItemId;
    if (!acc[key]) {
      acc[key] = {
        title: h.savedItem.title,
        sourceUrl: h.savedItem.sourceUrl,
        highlights: [],
      };
    }
    acc[key].highlights.push(h);
    return acc;
  }, {} as Record<string, { title: string; sourceUrl: string | null; highlights: typeof highlights }>);

  const colorMap: Record<string, string> = {
    yellow: "bg-yellow-100 border-yellow-300",
    green: "bg-green-100 border-green-300",
    blue: "bg-blue-100 border-blue-300",
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
          <Link href="/review" className="text-sm text-gray-600 hover:text-gray-900">Review</Link>
          <Link href="/settings" className="text-sm text-gray-600 hover:text-gray-900">Settings</Link>
          <Link href="/billing"><Button variant="outline" size="sm">Upgrade to Pro</Button></Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Highlighter className="h-6 w-6 text-yellow-500" />
            Your Highlights
          </h1>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export as Markdown
          </Button>
        </div>

        {Object.keys(grouped).length === 0 ? (
          <Card>
            <CardContent className="py-16 text-center">
              <Highlighter className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h2 className="text-lg font-semibold text-gray-700 mb-2">No highlights yet</h2>
              <p className="text-gray-500 mb-6">
                Start reading articles and highlight key passages — they&apos;ll all appear here.
              </p>
              <Link href="/inbox"><Button>Go to inbox</Button></Link>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {Object.entries(grouped).map(([savedItemId, group]) => (
              <Card key={savedItemId}>
                <CardHeader>
                  <CardTitle className="text-base">{group.title}</CardTitle>
                  {group.sourceUrl && (
                    <a href={group.sourceUrl} target="_blank" rel="noopener noreferrer"
                      className="text-xs text-indigo-600 hover:underline truncate block">
                      {group.sourceUrl}
                    </a>
                  )}
                  <Badge variant="secondary" className="w-fit text-xs">
                    {group.highlights.length} highlight{group.highlights.length !== 1 ? "s" : ""}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  {group.highlights.map((h) => (
                    <div
                      key={h.id}
                      className={`border-l-4 pl-4 py-2 rounded-r-md ${colorMap[h.color] || colorMap.yellow}`}
                    >
                      <p className="text-sm text-gray-800 italic">&ldquo;{h.selectedText}&rdquo;</p>
                      {h.note && (
                        <p className="text-xs text-gray-600 mt-1">Note: {h.note}</p>
                      )}
                      <p className="text-xs text-gray-400 mt-1">
                        {formatDistanceToNow(h.createdAt, { addSuffix: true })}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
