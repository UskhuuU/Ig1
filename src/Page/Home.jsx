import React from "react";
import "../App.css";
import StoryBox from "../components/StoryBox";
import axios from "axios";
import { useState, useEffect } from "react";
import Posts from "../components/Posts";
import SideBar from "../components/SideBar";
import SideBarTwo from "../components/SideBarTwo";

function Home() {
  const [data, setData] = useState([]);
  const [posts, setPosts] = useState([]);
  const instance = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "app-id": "63104c3120f6e665ecf628ba",
    },
  });
  const getData = async () => {
    const response = await instance.get(`/users`);
    setData(response.data.users);
    // console.log(response.data.users);
  };
  const getPost = async () => {
    const response = await instance.get(`/posts`);
    setPosts(response.posts.posts);
    console.log(response.posts.posts);
  };
  useEffect(() => {
    getPost();
    getData();
  }, []);
  return (
    <>
      <div className="container">
        <div style={{ gridColumn: "1/2" }}>
          <SideBar />
        </div>
        <div style={{ gridColumn: "2/3" }}></div>
        <div style={{ backgroundColor: "fafafa", gridColumn: "3/4" }}>
          <div
            style={{
              width: "450px",
              height: "90px",
              display: "flex",
              border: "1px solid gray",
              borderRadius: "10px",
              overflow: "scroll",
              backgroundColor: "white",
              gap: "15px",
            }}
          >
            {data &&
              data.map((user, id) => {
                return <StoryBox user={user} key={id} />;
              })}
          </div>
          {/* <Posts /> */}
          {data &&
            data.map((user, id) => {
              return <Posts user={user} key={id} />;
            })}
        </div>

        <div style={{ backgroundColor: "fafafa", gridColumn: "4/5" }}>
          <SideBarTwo />
        </div>
      </div>
    </>
  );
}

export default Home;
