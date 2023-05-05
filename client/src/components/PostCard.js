import toast from "react-hot-toast";
import { usePosts } from "../context/postsContext";
import { useNavigate } from 'react-router-dom'

export const PostCard = ({ post }) => {
  const { deletePost } = usePosts();
  const navigate = useNavigate()
  const handleDelete = (id) => {
    toast(
      (t) => (
        <div>
          <p className="text-white">
            Do you want to delete? <strong>{id}</strong>
          </p>
          <div>
            <button
              onClick={() => {
                deletePost(id);
                toast.success("Post deleted successfully");
                toast.dismiss(t.id);
              }}
              className="bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-sm mx-2"
            >
              Delete
            </button>
            <button
              className="bg-slate-400 hoverr:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2"
              onClick={() => {
                toast.dismiss(t.id);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        style: {
          background: "#202020",
        },
      }
    );
  };
  return (
    <div className="bg-zinc-800 text-white rounded-sm shadow-md shadow-black hover:bg-zinc-700 hover:cursos-pointer"
    onClick={() => navigate(`/posts/${post._id}`)}>
      <div className="px-4 py-7">
        <div className="flex justify-between">
          <h3>{post.title}</h3>
          <button
            className="bg-red-600 text-sm px-2 py-1 rounded-sm"
            onClick={(e) => {
              e.stopPropagation()
              handleDelete(post._id);
            }}
          >
            Delete
          </button>
        </div>
        <p>{post.description}</p>
      </div>
        {post.image && <img src={post.image.url} className="w-full h-full h-96 w-full"/>}
    </div>
  );
};
