import { Link } from "react-router-dom";

function PostDetail() {
  const post = null;
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm my-16">
      <h2 className="text-xl text-center">Liste de vos post</h2>
      {post ? (
        <div className="border-2 border-gray-500 p-8 rounded-lg mt-16">
          <h2 className="text-xl text-center">{post.name}</h2>
          <p className="text-center mt-4">{post.content}</p>

          <Link
            to={`/post/delete/${post.id}`}
            className="flex justify-center px-4 py-2 my-8 text-white bg-red-500 rounded-lg hover:bg-red-700 focus:outline-none focus:bg-red-700"
          >
            Supprimer
          </Link>
        </div>
      ) : (
        <h1 className="text-xl text-center">Cet article n'existe pas</h1>
      )}
    </div>
  );
}

export default PostDetail;
