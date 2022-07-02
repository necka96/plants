import images from "../../constants/imgaes";
import "./Preloader.scss";
const Preloader = ({ loading, children }) => {
  if (loading) {
    return (
      <div className='prelaoder'>
        <div>
          <img src={images.plant} alt='' />
        </div>
      </div>
    );
  }
  return children;
};

export default Preloader;
