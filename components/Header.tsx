import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 border-b border-border-light">
      <div className="text-accent-green text-xl font-bold">
        Whispers & Words
      </div>
      <nav className="flex gap-6">
        <Link href="/" className="text-accent-green hover:text-foreground transition-colors">Home</Link>
        <Link href="/browse" className="text-accent-green hover:text-foreground transition-colors">Browse Notes</Link>
        <Link href="/submit" className="text-accent-green hover:text-foreground transition-colors">Submit Quote</Link>
        <Link href="/about" className="text-accent-green hover:text-foreground transition-colors">About</Link>
        <Link href="/auth" className="text-accent-green hover:text-foreground transition-colors">Login / Signup</Link>
      </nav>
    </header>
  );
}