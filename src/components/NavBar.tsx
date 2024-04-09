
export function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

export function NavBar({ children }: { children: React.ReactNode }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

export function NumResults({ movies }: { movies: unknown[] }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

