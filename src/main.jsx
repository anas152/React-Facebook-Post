import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CgProfile } from "react-icons/cg";
import "./assets/post.css";
import taswer from "../src/pic.webp";
import { SlOptions } from "react-icons/sl";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

function Post() {
  return (
    <>
      <div className="post-contanier">
        <div className="db-pic">
          <div className="user-info">
            <CgProfile className="post-vector" />
            <div>
              <h3>M Anas </h3>
              <p>Monday at 11:00AM</p>
            </div>
          </div>
          <SlOptions />
        </div>

        <p>It's my facebook post using react post</p>
        <img className="post-mid" src={taswer} alt="" />
        <div className="last-part">
          <AiOutlineLike />
          <FaRegCommentAlt />
          <RiShareForwardLine />
        </div>
      </div>
      ;
    </>
  );
}

function App() {
  return (
    <>
      <Post />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
