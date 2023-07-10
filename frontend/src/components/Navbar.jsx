import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-center flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/" className="font-semibold text-xl tracking-tight">
          CRUD Challenge
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
