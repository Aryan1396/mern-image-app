export default function PostCard({ post, onDelete }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-ink/5 bg-white shadow-soft transition hover:-translate-y-1">
      <div className="aspect-square w-full overflow-hidden bg-ink/5">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="truncate font-serif text-lg font-semibold text-ink">{post.title}</h3>
        {post.category && (
          <span className="mt-1 inline-block rounded-full bg-accentSoft/20 px-2.5 py-0.5 text-xs font-medium text-accent">
            {post.category}
          </span>
        )}
      </div>
      <button
        onClick={() => onDelete(post._id)}
        className="absolute right-3 top-3 hidden h-8 w-8 items-center justify-center rounded-full bg-white/90 text-ink/60 shadow-soft transition hover:text-red-500 group-hover:flex"
        aria-label="Delete post"
        title="Delete post"
      >
        ✕
      </button>
    </div>
  );
}
