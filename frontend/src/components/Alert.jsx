export default function Alert({ type = "error", children }) {
  if (!children) return null;

  const styles = {
    error: "bg-red-50 text-red-600 border-red-100",
    success: "bg-emerald-50 text-emerald-600 border-emerald-100",
  };

  return (
    <div className={`mb-4 rounded-lg border px-4 py-2.5 text-sm ${styles[type]}`}>
      {children}
    </div>
  );
}
