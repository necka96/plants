import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoute/AnimatedRoutes";
import Nav from "./components/Nav/Nav";
import Preloader from "./components/Preloader/Preloader";
import ToTop from "./components/ToTop/ToTop";
import Footer from "./container/Footer/Footer";
export const App = () => {
  const [preloader, setPrealoader] = useState(true);

  useEffect(() => {
    const time = setTimeout(() => {
      setPrealoader(false);
    }, 2400);
    return () => {
      clearInterval(time);
      setPrealoader(false);
    };
  }, []);
  return (
    <Preloader loading={preloader}>
      <Router>
        <div className='app'>
          <Nav />
          <ToTop />
          <div className='content'>
            <AnimatedRoutes />
          </div>
          <Footer />
        </div>
      </Router>
    </Preloader>
  );
};
