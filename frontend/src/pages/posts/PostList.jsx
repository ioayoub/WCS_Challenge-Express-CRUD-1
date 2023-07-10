import { Link } from "react-router-dom";

function PostList() {
  const posts = null;

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm my-16">
      {posts ? (
        <>
          <h2 className="text-xl text-center">Liste de vos post</h2>
          {posts.map((post) => (
            <li
              key={post.id}
              className="flex flex-col items-center justify-center w-full max-w-sm my-16 border-2 border-gray-400 rounded-lg p-8"
            >
              <span className="text-xl text-center font-bold">
                {post.title}
              </span>
              <p className="text-center mt-4">{post.content}</p>
              <div className="flex flex-row justify-between gap-12">
                <Link
                  to={`/post/read/${post.id}`}
                  className="px-4 py-2 my-8 text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                >
                  Détails
                </Link>
                <Link
                  to={`/post/delete/${post.id}`}
                  className="px-4 py-2 my-8 text-white bg-red-500 rounded-lg hover:bg-red-700 focus:outline-none focus:bg-red-700"
                >
                  Supprimer
                </Link>
              </div>
            </li>
          ))}
        </>
      ) : (
        <h1 className="text-xl text-center">
          Vous n'avez aucun post actuellement
        </h1>
      )}
    </div>
  );
}

export default PostList;
