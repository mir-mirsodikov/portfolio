import { NavBar } from '../components/NavBar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-slate-900 font-mono">
        <div className="md:visible invisible sticky top-0 z-50">
          <NavBar />
        </div>
        {children}
      </body>
    </html>
  );
}
