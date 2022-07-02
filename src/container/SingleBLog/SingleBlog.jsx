import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import blogs from "../../blogs";
import AnimatedPage from "./../../components/Animated/AnimatedPage";
import "./singleBlog.scss";
const SingleBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  function backpage() {
    navigate(-1);
  }
  return (
    <AnimatedPage>
      <main>
        <div className='container'>
          <div>
            {blogs
              .filter((blog) => blog.id == id)
              .map((blog) => (
                <div key={blog.id} className='single-blog grid'>
                  <div className='single-blog-holder'>
                    <div className='single-blog-icon' onClick={backpage}>
                      <span className='tooltipText'>Go back</span>
                      <IoArrowBack />
                    </div>
                    <img src={blog.image} alt='' />
                    <div className='heading-holder'>
                      <h2>{blog.title}</h2>
                      <p>{blog.author}</p>
                    </div>
                  </div>
                  <div className='text'>
                    <p>{blog.text}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
    </AnimatedPage>
  );
};

export default SingleBlog;
