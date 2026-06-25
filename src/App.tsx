import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogPage from "./blog/BlogPage";
import BlogPostPage from "./blog/BlogPostPage";
import Layout from "./Layout";
import Main from "./main/Main";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogPostPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
