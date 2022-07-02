import { Link } from "react-router-dom";
import AnimatedPage from "../../components/Animated/AnimatedPage";

import blogs from "./../../blogs";
import "./blogs.scss";
const Blogs = () => {
  return (
    <AnimatedPage>
      <main className='blogs-section'>
        <div className='container grid'>
          <section className='blogs grid'>
            {blogs.map((blog) => (
              <div className='blogPrewiev' key={blog.id}>
                <div className='img-holder'>
                  <img src={blog.image} alt='' />
                </div>
                <div className='text-holder'>
                  <h3>{blog.title}</h3>
                  <p className='text'>{blog.text}</p>
                  <div className='btn'>
                    <Link to={`/blogs/${blog.id}`}>Read More</Link>
                  </div>
                  <div className='author'>
                    <p>{blog.author}</p>
                    <p>{blog.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>
          <aside className='aside'>
            <h2>Recent blogs</h2>
            <div className='flex'>
              {blogs
                .filter((blog) => blog.date > "21.06.2022")
                .map((blog) => (
                  <div key={blog.id} className='resentPrew'>
                    <div className='img-holder'>
                      <img src={blog.image} alt='' />
                    </div>
                    <div className='aside-text-holder'>
                      <h3>{blog.title}</h3>
                      <p>{blog.author}</p>
                      <p>{blog.date}</p>
                      <p></p>
                    </div>
                    <div className='btn'>
                      <Link to={`/blogs/${blog.id}`}>Read More</Link>
                    </div>
                  </div>
                ))}
            </div>
          </aside>
        </div>
      </main>
    </AnimatedPage>
  );
};

export default Blogs;
