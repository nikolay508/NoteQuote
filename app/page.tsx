import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-b from-background to-card-bg">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-accent-green mb-4">
            WRITING IS SCREAMING IN SILENCE
          </h1>
          <p className="text-xl text-text-muted mb-8">
            Capture your thoughts. Share your soul.
          </p>
          <button 
            className="px-8 py-3 border border-accent-green text-accent-green hover:bg-accent-green hover:text-background transition-colors"
            aria-label="Start writing your thoughts"
          >
            Start Writing
          </button>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column - Notes Feed */}
          <div className="lg:col-span-3 space-y-8">
            {/* Notes Feed Section */}
            <section>
              <h2 className="text-2xl font-bold text-accent-green mb-6">Notes Feed</h2>
              <div className="space-y-4">
                {/* Note Card 1 */}
                <div className="bg-card-bg rounded-lg p-4 flex gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-foreground mb-3">The nights we lose tell us what we are.</p>
                    <div className="flex gap-2 mb-3">
                      <span className="px-2 py-1 bg-background border border-border-light rounded text-xs text-accent-green">hope</span>
                      <span className="px-2 py-1 bg-background border border-border-light rounded text-xs text-accent-green">night thoughts</span>
                    </div>
                    <div className="flex justify-between text-xs text-text-muted">
                      <span>Apr 20; 2024</span>
                      <span>@skykatcher</span>
                    </div>
                  </div>
                </div>

                {/* Note Card 2 */}
                <div className="bg-card-bg rounded-lg p-4 flex gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-foreground mb-3">We only part to meet again.</p>
                    <div className="flex gap-2 mb-3">
                      <span className="px-2 py-1 bg-background border border-border-light rounded text-xs text-accent-green">memory</span>
                      <span className="px-2 py-1 bg-background border border-border-light rounded text-xs text-accent-green">farewell</span>
                    </div>
                    <div className="flex justify-between text-xs text-text-muted">
                      <span>Apr 19; 2024</span>
                      <span>@midnightwnter</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* INOTES FEED Section */}
            <section>
              <h2 className="text-2xl font-bold text-accent-green mb-6">INOTES FEED</h2>
              <div className="bg-card-bg rounded-lg p-4 flex gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-foreground mb-3">Aciatonormothe</p>
                  <div className="flex justify-between text-xs text-text-muted">
                    <span>Apr 19; 2024</span>
                    <span>omichjlo luber</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Note to Self */}
            <div className="bg-card-bg rounded-lg p-4">
              <h3 className="text-lg font-bold text-accent-green mb-3">Note to Self</h3>
              <div className="space-y-2 text-sm text-foreground">
                <p>Be gentle with yourself</p>
                <p>Your feelings are valid.</p>
                <p>Find beauty in the ordinary.</p>
              </div>
            </div>

            {/* Currently Playing */}
            <div className="bg-card-bg rounded-lg p-4">
              <h3 className="text-lg font-bold text-accent-green mb-3">Currently Playing</h3>
              <p className="text-sm text-foreground">lofi hip hop radio – beats to relas/study to</p>
            </div>

            {/* Trending Tags */}
            <div className="bg-card-bg rounded-lg p-4">
              <h3 className="text-lg font-bold text-accent-green mb-3">Trending Tags</h3>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-accent-green rounded-sm"></div>
                <span className="text-sm text-foreground">lo ñ hop subto</span>
              </div>
            </div>

            {/* Second Trending Tags */}
            <div className="bg-card-bg rounded-lg p-4">
              <h3 className="text-lg font-bold text-accent-green mb-3">Trending Tags</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-background border border-border-light rounded text-xs text-accent-green">melancholy</span>
                <span className="px-2 py-1 bg-background border border-border-light rounded text-xs text-accent-green">reflection</span>
                <span className="px-2 py-1 bg-background border border-border-light rounded text-xs text-accent-green">life</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border-light p-6">
        <div className="flex justify-end gap-6 text-sm text-accent-green">
          <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
        </div>
      </footer>
    </div>
  );
}
