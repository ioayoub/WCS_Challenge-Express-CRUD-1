import React from "react";

function PostForm() {
  return (
    <form className="flex flex-col items-center justify-center w-full max-w-sm my-16">
      <input
        className="w-full px-4 py-2 mb-4 text-gray-700 bg-white border-2 border-gray-400 rounded-lg focus:outline-none focus:border-purple-500"
        type="text"
        placeholder="Titre"
      />
      <textarea
        className="w-full px-4 py-2 mb-4 text-gray-700 bg-white border-2 border-gray-400 rounded-lg focus:outline-none focus:border-purple-500"
        type="textarea"
        placeholder="Contenu"
      />
      <button
        className="px-4 py-2 my-8 text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
        type="submit"
      >
        Enregister
      </button>
    </form>
  );
}

export default PostForm;
