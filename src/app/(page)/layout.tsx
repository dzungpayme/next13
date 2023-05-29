export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <aside>Sidebar</aside>

      <div>{children}</div>
    </main>
  );
}
