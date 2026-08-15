import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import Alert from "../components/Alert";
import { getMyPosts, deletePost } from "../api/postApi";

//states
export default function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getMyPosts()
      .then((data) => setPosts(data.posts))
      .catch(() => setError("Could not load your photos"))
      .finally(() => setLoading(false));
  }, []);

  // Called right after a post is created 
  const handlePostCreated = (post) => setPosts((prev) => [post, ...prev]);

  // Called when a post is deleted
  const handleDelete = async (id) => {
    const prevPosts = posts;
    setPosts((prev) => prev.filter((p) => p._id !== id)); 
    try {
      await deletePost(id);
    } catch {
      setPosts(prevPosts); // revert on failure
      setError("Could not delete that photo");
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-8">
        <PostForm onPostCreated={handlePostCreated} />

        {/* // Display the user's posts */}
        <div className="mt-10">
          <h2 className="mb-4 font-serif text-lg font-semibold text-ink">
            Your photos {posts.length > 0 && `(${posts.length})`}
          </h2>

          <Alert>{error}</Alert>

          {/* //loading state */}
          {loading ? (
            <p className="text-sm text-ink/40">Loading your gallery...</p>

            // no posts state
          ) : posts.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-ink/10 bg-white/50 p-10 text-center text-sm text-ink/40">
              No photos yet — add your first one above.
            </p>
          ) : (

            // posts grid
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} onDelete={handleDelete} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
