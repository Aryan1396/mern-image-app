import { useState, useRef } from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import Alert from "./Alert";
import { createPost } from "../api/postApi";

export default function PostForm({ onPostCreated }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const resetForm = () => {
    setTitle("");
    setCategory("");
    setFile(null);
    setPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!file) {
      setError("Please choose an image");
      return;
    }
    if (!title.trim()) {
      setError("Please enter a title");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title.trim());
    formData.append("category", category.trim());

    try {
      setLoading(true);
      const { post } = await createPost(formData);
      onPostCreated(post); // instantly reflect the new post in the UI
      resetForm();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-ink/5 bg-white p-6 shadow-soft"
    >
      <h2 className="mb-4 font-serif text-lg font-semibold">Add a new photo</h2>
      <Alert>{error}</Alert>

      <div className="grid gap-4 sm:grid-cols-[160px_1fr]">
        <div>
          <label
            htmlFor="image"
            className="flex aspect-square w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-ink/15 bg-cream text-center text-xs text-ink/40 transition hover:border-accent hover:text-accent"
          >
            {preview ? (
              <img src={preview} alt="Preview" className="h-full w-full object-cover" />
            ) : (
              <span>Click to choose image</span>
            )}
          </label>
          <input
            id="image"
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        <div className="flex flex-col gap-3">
          <TextInput
            label="Title"
            placeholder="A rainy evening in Ahmedabad"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextInput
            label="Category (optional)"
            placeholder="e.g. Travel, Food, Nature"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <Button type="submit" loading={loading} className="mt-auto self-start">
            Add photo
          </Button>
        </div>
      </div>
    </form>
  );
}
