import { useRef } from 'react';
import { useKey } from '../functions';

interface Props {
  query: string;
  setQuery: (query: string) => void;
}

export function Search({ query, setQuery }: Props) {
  const inputEl: React.RefObject<HTMLInputElement> = useRef(null);

  useKey("Enter", function () {
    if (!inputEl.current || document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}
