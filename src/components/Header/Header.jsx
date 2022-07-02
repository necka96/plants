import { Link } from "react-router-dom";
import "./header.scss";
const Header = ({ title, img, button, moreText }) => {
  return (
    <div className='header'>
      <div className={moreText ? "content-more" : "content"}>
        {moreText ? (
          <div className='float'>
            <img src={img} alt='plants-img-1' />
          </div>
        ) : (
          <img src={img} alt='plants-img-1' />
        )}

        <div className='welcome'>
          {title && <h1>{title} </h1>}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            voluptatibus sint atque dolorem dicta quis sapiente unde non saepe,
            exercitationem provident? Maxime assumenda, sed ducimus repudiandae
            unde architecto magni ab aperiam, voluptatibus quisquam est facilis
            repellat fuga commodi eius consequuntur hic nobis quos expedita quo,
            modi molestias. Tenetur, suscipit nostrum?
          </p>
          {moreText && <p className='more'>{moreText}</p>}
          {button && <Link to='/about'>{button}</Link>}
        </div>
      </div>
    </div>
  );
};

export default Header;
