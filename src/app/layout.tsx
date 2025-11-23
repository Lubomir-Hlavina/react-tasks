import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ThemeProvider } from '@/components/theme-provider';
import ThemeToggle from '@/components/theme-toggle';

export const metadata = {
  title: 'React Tasks',
  description: 'Tasks built with Next.js + TS + Tailwind + shadcn',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sk" suppressHydrationWarning>
      <body className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 text-gray-900 dark:text-gray-100 transition-colors">
        <ThemeProvider>
          {/* HEADER */}
          <header className="sticky top-0 z-50 border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur">
            <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
              <h1 className="text-xl font-semibold tracking-tight">
                <Link href="/">React Tasks</Link>
              </h1>

              <nav className="flex items-center gap-4 text-sm">
                <Link href="/" className="hover:text-blue-600 transition">
                  Home
                </Link>

                <ThemeToggle />

                <Button
                  asChild
                  variant="outline"
                  className="h-8 px-3 border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
                >
                  <a
                    href="https://github.com/Lubomir-Hlavina"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Repo
                  </a>
                </Button>
              </nav>
            </div>
          </header>

          <Separator />

          {/* CONTENT */}
          <main className="flex-1">
            <div className="max-w-5xl mx-auto px-4 py-10">{children}</div>
          </main>

          {/* FOOTER */}
          <footer className="border-t bg-white/50 dark:bg-slate-900/50 backdrop-blur py-6 mt-10">
            <div className="max-w-5xl mx-auto px-4 text-sm text-gray-500 dark:text-gray-400 text-center">
              © {new Date().getFullYear()} Lubomir Hlavina · Built with Next.js
              & shadcn/ui
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
