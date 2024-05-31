import blogFetch from "../axios/config";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";


const Home = () => {
  const [posts, setPost] = useState([]);

  const getPosts = async () => {
    try {
      const response = await blogFetch.get("/posts");
      const data = response.data;
      setPost(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  // Aqui eu posso determinar a execução da página quantas vezes eu quizer
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="home">
      <h1>Últimos Posts</h1>
      {posts.length === 0 ? <p>Carregando...</p> : <p>Carregou</p>}
      {posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className="btn">Ler mais</Link>
            
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
