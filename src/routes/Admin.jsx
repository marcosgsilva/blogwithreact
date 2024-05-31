import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import blogFetch from "../axios/config";

const Admin = () => {
  const [posts, setPost] = useState([]);

  const getPosts = async () => {
    try {
      const response = await blogFetch.get("/posts");
      const data = response.data;
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const deletePost = async (id) => {
    await blogFetch.delete(`/posts/${id}`);

    const filteredPosts = posts.filter((post) => post.id !== id);

    setPost(filteredPosts);
  };

  return (
    <div className="admin">
      <h1>Gerenciar Posts</h1>
      {posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => {
          return (
            <div className="post" key={post.id}>
              <h2>{post.title}</h2>
              <div className="actions">
                <Link className="btn edit-btn" to={`/posts/edit/${post.id}`}>
                  Editar
                </Link>
                <button
                  className="btn delete-btn"
                  onClick={() => deletePost(post.id)}
                >
                  Excluir
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
export default Admin;
