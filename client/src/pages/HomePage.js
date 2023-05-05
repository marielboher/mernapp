import React from "react";
import { usePosts } from "../context/postsContext";
import { VscEmptyWindow } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { PostCard } from "../components/PostCard";

export function HomePage() {
  const { posts } = usePosts();

  if (posts.length === 0)
    return (
      <div className="flex flex-col jusify-center items-center">
        <VscEmptyWindow className="w-48 h-48 text-white" />
        <h1 className="text-white text-2xl">there are no posts</h1>
      </div>
    );
  return (
    <div>
      <header className="flex justify-between py-4">
        <h1 className="text-2xl text-gray-300 font-bold">Posts ({posts.length})</h1>
        <Link to="/new" className="px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white"> Create new Post </Link>
      </header>

      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
