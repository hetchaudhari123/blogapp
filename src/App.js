import Heading from "./components/Heading"
import Content from "./components/Content"
import Tail from "./components/Tail"
import './App.css'
import { Route, Routes } from "react-router-dom";
import Category from "./pages/Category";
import Tag from "./pages/Tag";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
export default function App() {
  return (
    <div className="relative">
      <Heading></Heading>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blog/:blogId" element={<Blog></Blog>}></Route>
        <Route path="/tag/:tagId" element={<Home></Home>}></Route>
        <Route path="/categories/:categoryId" element={<Home></Home>}></Route>
      </Routes>
    </div>
  )
}
