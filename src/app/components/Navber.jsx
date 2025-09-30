export default function NavBar() {
  return (
    <nav className="border-b border-neutral-800 bg-neutral-950 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-2">
          <img src="img/logo.png" alt="ENGINE RECY logo" className="h-8 w-auto" />
          <span className="font-bold tracking-widest">ENGINE RECY</span>
        </a>
        <div className="flex gap-6 text-sm font-medium">
          <a href="#" className="text-primary-400">Home</a>
          <a href="#product" className="hover:text-primary-400">Product</a>
          <a href="#contact" className="hover:text-primary-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}
