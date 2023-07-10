import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PostCreate from "../pages/posts/PostCreate";
import PostDetail from "../pages/posts/PostDetail";
import PostList from "../pages/posts/PostList";
import NotFound from "../pages/errors/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<Home />}>
        <Route path="create" element={<PostCreate />} />
        <Route path="read" element={<PostList />} />
        <Route path="read/:id" element={<PostDetail />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
