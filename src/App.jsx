import React from "react";
import "./App.css";
import Home from "./Page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Messages } from "./components/Messages";
import Profile from "./Page/Profile";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/direct/inbox" element={<Messages />}></Route>
          <Route path="/_bayr_aaaaa" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
