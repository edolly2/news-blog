import { BrowserRouter, Route, Routes } from "react-router-dom";

import AllPosts from "./components/AllPosts.js";
import OnePost from "./components/OnePost.js";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route element={<AllPosts />} exact path="/" />
          <Route element={<OnePost />} path="/:slug" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
