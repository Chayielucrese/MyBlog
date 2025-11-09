import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import BlogDetails from "./pages/Blogdetails.jsx";
import Contact from "./pages/Contact.tsx";
import Codingtips from "./pages/Codingtips.jsx";
import Tips from "./pages/tips.jsx";
import Tutorials from "./pages/tuto.jsx";
import Blogs from "./pages/blogs.jsx";
function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#0F172A", 
        color: "#E2E8F0",
        // backgroundImage: `url('./meme.jpeg')`, 
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Router>
        <Navbar />
        <main
          style={{
            flex: 1,
            marginTop: "80px", // offset navbar height
            paddingBottom: "2rem",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<BlogDetails />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/codingtips" element={<Codingtips/>}/>
            <Route path="/tips" element={<Tips/>}/>
            <Route path="/tutorials" element={<Tutorials/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
