import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../../components/Animated/AnimatedPage";
import "./NotFound.scss";
const NotFound = () => {
  const [property, setProperty] = useState({
    top: 0,
    left: 0,
  });
  const style = {
    top: property.top,
    left: property.left,
  };
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setProperty((prevProp) => {
        return {
          top: e.pageY,
          left: e.pageX,
        };
      });
    });
  }, []);

  const navigation = useNavigate();

  const handleClick = () => {
    navigation("/");
  };
  return (
    <AnimatedPage>
      <div className='notFound'>
        <div className='text'>
          <h1>404</h1>
          <h2>Uh, Ohh</h2>
          <h3>
            Sorry we cant find what you are looking for 'cuz its so dark in here
          </h3>
        </div>
        <div className='home' onClick={handleClick}>
          Go Home
        </div>
        <div className='torch' style={style}></div>
      </div>
    </AnimatedPage>
  );
};

export default NotFound;
