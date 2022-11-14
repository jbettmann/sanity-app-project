import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { About } from "./components/about";
import SinglePost from "./components/SinglePost";
import { Home } from "./components/home";
import { Post } from "./components/post";
import { Project } from "./components/project";
import { NavBar } from "./components/navbar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<SinglePost />} path="/post/:slug" />
        <Route element={<Post />} path="/post" />
        <Route element={<Project />} path="/project" />
      </Routes>
    </Router>
  );
}

export default App;
