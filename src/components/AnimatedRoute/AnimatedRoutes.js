import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "../../container/About/About";
import Blogs from "../../container/Blogs/Blogs";
import Contact from "../../container/Contact/Contact";
import Gallery from "../../container/Gallery/Gallery";
import { Home } from "../../container/Home/Home";
import NotFound from "../../container/NotFound/NotFound";
import Services from "./../../container/Services/Services";
import SingleBlog from "./../../container/SingleBLog/SingleBlog";
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:id' element={<SingleBlog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
