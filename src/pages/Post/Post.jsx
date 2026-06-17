import { useParams } from "react-router";
import styles from "./Post.module.css";
import PostModelo from "../../componentes/PostModelo/PostModelo";
import posts from "../../json/posts.json";
import ReactMarkdown from "react-markdown";
import "./Post.css";
import NaoEncontrada from "../NaoEncontrada/NaoEncontrada";
import { Fragment } from "react";
import Banner from "../../componentes/Baner/Banner";

const Post = () => {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return (
      <NaoEncontrada />
    )
  }

  return (
    <>
      <Banner />
      <PostModelo
        fotoCapa={`/assets/posts/${post.id}/capa.png`}
        titulo={post.titulo}
      >
        <div className="post-markdown-container">
          <ReactMarkdown>{post.texto}</ReactMarkdown>
        </div>
      </PostModelo>
    </>
  );
};

export default Post;
