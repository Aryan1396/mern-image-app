export default function Button({ children, variant = "primary", loading, className = "", ...props }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60";
  const variants = {
    primary: "bg-ink text-white hover:bg-accent shadow-soft",
    ghost: "bg-transparent text-ink hover:bg-ink/5 border border-ink/10",
    danger: "bg-transparent text-red-500 hover:bg-red-50",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} disabled={loading || props.disabled} {...props}>
      {loading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
      )}
      {children}
    </button>
  );
}
