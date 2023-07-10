import PostForm from "../../components/PostForm";

function PostCreate() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm my-16">
      <h2 className="text-xl text-center">Créer un nouveau post</h2>
      <PostForm />
    </div>
  );
}

export default PostCreate;
