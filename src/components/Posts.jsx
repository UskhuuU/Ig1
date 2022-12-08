import React from "react";
import { RxAvatar } from "react-icons/rx";
import { RxDotsHorizontal } from "react-icons/rx";
import { TbMessageCircle2 } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { SlPaperPlane } from "react-icons/sl";
import { MdSaveAlt } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import "../App.css";

function Posts() {
  return (
    <>
      <div className="postContainer">
        <div className="postTitleContainer">
          <div className="postTitle">
            <RxAvatar
              style={{ height: "45px", width: "45px", marginTop: "5px" }}
            />
            <div className="title">
              <p>someName</p>
            </div>
            <RxDotsHorizontal
              style={{ height: "24px", width: "24px", marginLeft: "230px" }}
            />
          </div>
        </div>
        <img
          src="https://play-lh.googleusercontent.com/nCVVCbeSI14qEvNnvvgkkbvfBJximn04qoPRw8GZjC7zeoKxOgEtjqsID_DDtNfkjyo"
          alt=""
          style={{ height: "450px", width: "450px" }}
        />
        <div className="reaction">
          <AiOutlineHeart
            style={{ height: "24px", width: "24px", marginLeft: "10px" }}
          />
          <TbMessageCircle2 style={{ height: "24px", width: "24px" }} />
          <SlPaperPlane style={{ height: "20px", width: "24px" }} />
          <MdSaveAlt
            style={{ height: "24px", width: "24px", marginLeft: "300px" }}
          />
        </div>
        <div className="like">
          <p>some1231312321 likes</p>
        </div>
        <div className="commentContainer">
          <div className="comment">
            <p style={{ fontWeight: "bold" }}>someName</p>
            <p>someComment</p>
          </div>
        </div>
        <div className="timeContainer">
          <div className="time">
            <p style={{ fontSize: "10px" }}>1 DAY AGO</p>
          </div>
        </div>
        <div className="addContainer">
          <div className="add">
            <BsEmojiSmile
              style={{ height: "24px", width: "24px", marginTop: "8px" }}
            />
            <input
              type="text"
              placeholder="Add a comment..."
              style={{ width: "350px", height: "28px", border: "none" }}
            />
            <button
              style={{
                border: "none",
                color: "blue",
                fontWeight: "bold",
                backgroundColor: "white",
              }}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Posts;
