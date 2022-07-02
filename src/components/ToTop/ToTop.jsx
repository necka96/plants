import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import "./ToTop.scss";
const ToTop = () => {
  const [toTop, setTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setTop(true);
      } else {
        setTop(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className='top'>
      {toTop && (
        <FaAngleUp className='icon-position icon-style' onClick={goToTop} />
      )}
    </div>
  );
};

export default ToTop;
