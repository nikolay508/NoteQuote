import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-[#374151]">
        <div className="text-xl font-semibold">Whispers & Words</div>
        <nav className="flex space-x-6">
          <a href="#" className="hover:text-[#4ade80] transition-colors">Home</a>
          <a href="#" className="hover:text-[#4ade80] transition-colors">Browse Notes</a>
          <a href="#" className="hover:text-[#4ade80] transition-colors">Submit Quote</a>
          <a href="#" className="hover:text-[#4ade80] transition-colors">About</a>
          <a href="#" className="hover:text-[#4ade80] transition-colors">Login / Signup</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10"></div>
        <div className="absolute inset-0 bg-gray-800 opacity-40"></div>
        <div className="relative z-20 text-center">
          <h1 className="text-5xl font-bold mb-4 text-[#4ade80]">
            WRITING IS SCREAMING IN SILENCE
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Capture your thoughts. Share your soul.
          </p>
          <button className="px-8 py-3 border border-[#4ade80] text-[#4ade80] rounded-lg hover:bg-[#4ade80] hover:text-black transition-all duration-300">
            Start Writing
          </button>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column - Content Feeds */}
          <div className="lg:col-span-3 space-y-8">
            {/* Notes Feed */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">Notes Feed</h2>
              <div className="space-y-4">
                {/* Note Card 1 */}
                <div className="bg-[#1a1a1a] rounded-lg p-4 flex gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-white mb-3">The nights we lose tell us what we are.</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 py-1 bg-[#374151] text-xs rounded">hope</span>
                      <span className="px-2 py-1 bg-[#374151] text-xs rounded">night thoughts</span>
                      <span className="px-2 py-1 bg-[#374151] text-xs rounded">memory</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Apr 20, 2024</span>
                      <span>@skykatcher</span>
                    </div>
                  </div>
                </div>

                {/* Note Card 2 */}
                <div className="bg-[#1a1a1a] rounded-lg p-4 flex gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-white mb-3">We only part to meet again.</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 py-1 bg-[#374151] text-xs rounded">farewell</span>
                      <span className="px-2 py-1 bg-[#374151] text-xs rounded">hope</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Apr 19, 2024</span>
                      <span>@midnightwnter</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* INOTES FEED */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">INOTES FEED</h2>
              <div className="space-y-4">
                {/* Note Card */}
                <div className="bg-[#1a1a1a] rounded-lg p-4 flex gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-white mb-3">Aciatonormothe</p>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Apr 19, 2024</span>
                      <span>omichjlo luber</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Note to Self */}
            <div className="bg-[#1a1a1a] rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3">Note to Self</h3>
              <div className="space-y-2 text-gray-300">
                <p>Be gentle with yourself</p>
                <p>Your feelings are valid.</p>
                <p>Find beauty in the ordinary.</p>
              </div>
            </div>

            {/* Currently Playing */}
            <div className="bg-[#1a1a1a] rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3">Currently Playing</h3>
              <p className="text-gray-300">lofi hip hop radio - beats to relax/study to</p>
            </div>

            {/* Trending Tags */}
            <div className="bg-[#1a1a1a] rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3">Trending Tags</h3>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="w-4 h-4 bg-[#4ade80] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </span>
                <span>lo fi hop subto</span>
              </div>
            </div>

            {/* Trending Tags 2 */}
            <div className="bg-[#1a1a1a] rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3">Trending Tags</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[#374151] text-xs rounded">melancholy</span>
                <span className="px-2 py-1 bg-[#374151] text-xs rounded">reflection</span>
                <span className="px-2 py-1 bg-[#374151] text-xs rounded">life</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#374151] py-6 px-6">
        <div className="flex justify-end space-x-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Contact</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </footer>
    </div>
  );
}
