import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-centerbg-gray-100">
      <h1 className="text-4xl font-bold text-gray-900 my-16">
        FullStack CRUD Challenge
      </h1>
      <div className="flex flex-row gap-8">
        <Link
          to="/post/create"
          className="px-4 py-2 my-8 text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
        >
          Créer un post
        </Link>
        <Link
          to="/post/read"
          className="px-4 py-2 my-8 text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
        >
          Afficher tous les posts
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
export default Home;
