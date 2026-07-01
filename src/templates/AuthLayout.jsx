import AuthBackground from '../components/layout/AuthBackground';

export default function AuthLayout({ children, bgImage }) {
  return (
    <div className="flex flex-col min-h-screen">
      <AuthBackground image={bgImage} />
      <main
        className="relative z-10 w-full flex flex-col items-center justify-center
                      px-4 py-10 min-h-screen"
      >
        <div className="mb-9" />
        {children}
      </main>
    </div>
  );
}
