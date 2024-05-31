import { useState } from "react";
import blogFetch from "../axios/config";
import { useNavigate } from "react-router-dom";
import "./NewPost.css";

const NewPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const createPost = async (e) => {
    e.preventDefault();
    const post = { title, body, userId: 1 };
    await blogFetch.post("/posts", {
      body: post,
    });
  };

  return (
    <div className="new-post">
      <h2>Inserir Novo Post: </h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            name="title"
            placeholder="Digite o título"
            onChange={(e) => setTitle(e.target.value)}
            id="title"
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo</label>
          <textarea
            onChange={(e) => setBody(e.target.value)}
            name="bopy"
            id="body"
            placeholder="Digite o conteúdo"
          />
        </div>
        <input type="submit" value="Criar Post" className="btn" />
      </form>
    </div>
  );
};

export default NewPost;
