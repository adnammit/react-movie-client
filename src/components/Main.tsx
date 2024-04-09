import { useState } from 'react';

interface Props {
  children: React.ReactNode;
}

export function Main({ children }: Props) {
  return <main className="main">{children}</main>;
}

export function Loader() {
  return <p className="loader">Loading...</p>;
}

export function Error({ message }: { message: string }) {
	return (
    <p className="error">
      <span>⛔️</span> {message}
    </p>
  );
}

export function Box({ children }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>

      {isOpen && children}
    </div>
  );
}
