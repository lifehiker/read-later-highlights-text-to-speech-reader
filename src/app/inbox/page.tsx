import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import Link from "next/link";
import { BookOpen, Plus, Clock, FileText, Globe, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";

export default async function InboxPage() {
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
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Sign in to view your inbox</h1>
          <p className="text-gray-600 mb-6">
            Your saved articles and PDFs will appear here. Sign in to access your reading queue.
          </p>
          <div className="flex gap-3 justify-center">
            <Link href="/signin"><Button>Sign in</Button></Link>
            <Link href="/signup"><Button variant="outline">Create account</Button></Link>
          </div>
        </div>
      </div>
    );
  }

  const savedItems = await prisma.savedItem.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="border-b bg-white px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-indigo-600" />
          <span className="font-bold text-xl">ReadFlow</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/highlights" className="text-sm text-gray-600 hover:text-gray-900">Highlights</Link>
          <Link href="/review" className="text-sm text-gray-600 hover:text-gray-900">Review</Link>
          <Link href="/settings" className="text-sm text-gray-600 hover:text-gray-900">Settings</Link>
          <Link href="/billing"><Button variant="outline" size="sm">Upgrade to Pro</Button></Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Your Inbox</h1>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Save article
          </Button>
        </div>

        {savedItems.length === 0 ? (
          <Card>
            <CardContent className="py-16 text-center">
              <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Your inbox is empty</h2>
              <p className="text-gray-500 mb-6">
                Save your first article by URL or install the browser bookmarklet.
              </p>
              <div className="flex gap-3 justify-center">
                <Button>Save by URL</Button>
                <Link href="/bookmarklet"><Button variant="outline">Get bookmarklet</Button></Link>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {savedItems.map((item) => (
              <Card key={item.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant={item.type === "PDF" ? "secondary" : "outline"} className="text-xs">
                          {item.type === "PDF" ? <FileText className="h-3 w-3 mr-1" /> : <Globe className="h-3 w-3 mr-1" />}
                          {item.type}
                        </Badge>
                        <Badge
                          variant={item.status === "UNREAD" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {item.status.toLowerCase()}
                        </Badge>
                      </div>
                      <CardTitle className="text-base leading-tight">{item.title}</CardTitle>
                      {item.sourceUrl && (
                        <CardDescription className="truncate mt-1">{item.sourceUrl}</CardDescription>
                      )}
                    </div>
                    <div className="text-right shrink-0">
                      {item.estimatedMinutes && (
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Clock className="h-3 w-3" />
                          {item.estimatedMinutes} min
                        </div>
                      )}
                      <p className="text-xs text-gray-400 mt-1">
                        {formatDistanceToNow(item.createdAt, { addSuffix: true })}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
