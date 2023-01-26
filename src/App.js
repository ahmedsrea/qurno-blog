import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmptyList from "./components/EmptyList";
import Footer from "./components/Footer";
import Header from "./components/Header"
import ScrollToTop from "./components/ScrollToTop";
import { About, Archive, Author, AuthorSingle, Blog, Blogs, Categories, CategorySingle, Contact, Elements, Home, Home2, Privacy, TagList, Tags, TagSingle } from "./pages";


function App() {
  return (
      <div className="dark:bg-[#02111A]">
        <Router>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home-02" element={<Home2 />} />
            <Route path="/about" element={<About />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/author" element={<Author />} />
            <Route path="/author/:authorName" element={<AuthorSingle />} />
            <Route path="/blog/" element={<Blogs />} />
            <Route path="/blog/:blogId" element={<Blog />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/ai" element={<CategorySingle />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/elements" element={<Elements />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/tags" element={<Tags />} />
            <Route path="/tags/:tag" element={<TagList />} />
            <Route path="/tag/tag" element={<TagSingle />} />
            <Route path="*" element={<EmptyList />} />
          </Routes>
          <Footer />
        </Router>
      </div>
  )
}

export default App
