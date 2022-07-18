import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/Home/Home"
import Contact from "../views/Contact/Contact"
import Detail from "../views/Detail/Detail"
import ListPosts from "../views/ListPosts/ListPosts"

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/listPosts" element={<ListPosts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:key" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
  
export default Router;