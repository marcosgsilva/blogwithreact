//rafce: gerador de código usando sinpets
import React, { useEffect, useState } from "react";
import "./Post.css";
import blogFetch from "../axios/config";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  console.log(id);

  const [post, setPost] = useState({});

  const getPost = async () => {
    try {
      const response = await blogFetch.get(`/posts/${id}`);
      const data = response.data;
      console.log(data);
      setPost(data);
    } catch (error) {}
  };

  useEffect(() => {
    getPost();
  }, []);
  
  return (
    <div className="post-container">
      {!post.title ? (
        <p>Carregando... </p>
      ) : (
        <div className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default Post;
