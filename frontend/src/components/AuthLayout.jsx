export default function AuthLayout({ title, subtitle, children }) {
  return (
    //
    <div className="flex min-h-screen items-center justify-center bg-cream px-6">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">

          {/* //title and subtitle for auth layout */}
          <h1 className="font-serif text-3xl font-semibold text-ink">{title}</h1>
          {subtitle && <p className="mt-2 text-sm text-ink/50">{subtitle}</p>}
        </div>
        <div className="rounded-2xl border border-ink/5 bg-white p-8 shadow-soft">{children}</div>
      </div>
    </div>
  );
}
  