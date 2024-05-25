export const metadata = {
  title: 'Privacy - Oslo Omvendt',
  description: 'Privacy Policy',
};

export default function Layout({ children }) {
  return (
    <main
      className={`min-h-screen w-full px-2 py-12 font-source-code-pro text-whitish`}
    >
      {children}
    </main>
  );
}
