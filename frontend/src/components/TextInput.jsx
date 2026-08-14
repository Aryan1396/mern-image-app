export default function TextInput({ label, error, className = "", ...props }) {
  return (
    <label className="block">
      {label && (
        <span className="mb-1.5 block text-sm font-medium text-ink/80">{label}</span>
      )}
      <input
        className={`w-full rounded-lg border border-ink/10 bg-white px-4 py-2.5 text-ink placeholder:text-ink/30 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 ${className}`}
        {...props}
      />
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}
