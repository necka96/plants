import AnimatedPage from "../../components/Animated/AnimatedPage";
import images from "../../constants/imgaes";
import "./gallery.scss";
const Gallery = () => {
  return (
    <AnimatedPage>
      <main className='gallery'>
        <div className='short'>
          <h3>Lorem, ipsum dolor.</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui natus
            tenetur numquam commodi.
          </p>
        </div>
        <div className='tall'>
          <img src={images.gallety2} alt='plant-2' />
        </div>
        <div className='short'>
          <h3>Lorem, ipsum dolor.</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui natus
            tenetur numquam commodi.
          </p>
        </div>
        <div className='short'>
          <img src={images.gallety1} alt='plant-1' />
        </div>
        <div className='tall'>
          <img src={images.gallety3} alt='plant-3' />
        </div>
        <div className='tall'>
          <h3>Lorem, ipsum dolor.</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui natus
            tenetur numquam commodi.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui natus
            tenetur numquam commodi.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui natus
            tenetur numquam commodi.
          </p>
        </div>
        <div className='short'>
          <img src={images.gallety4} alt='plant-3' />
        </div>

        <div className='short'>
          <h3>Lorem, ipsum dolor.</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui natus
            tenetur numquam commodi.
          </p>
        </div>
        <div className='tall'>
          <img src={images.gallety5} alt='plant-3' />
        </div>

        <div>
          <img src={images.gallety6} alt='plant-3' />
        </div>
        <div className='tall'>
          <img src={images.gallety7} alt='plant-3' />
        </div>
        <div className='short'>
          <h3>Lorem, ipsum dolor.</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui natus
            tenetur numquam commodi.
          </p>
        </div>

        <div className='tall'>
          <h3>Lorem, ipsum dolor.</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui natus
            tenetur numquam commodi.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui natus
            tenetur numquam commodi.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui natus
            tenetur numquam commodi.
          </p>
        </div>

        <div className='tall'>
          <img src={images.gallety8} alt='plant-3' />
        </div>
        <div className='short'>
          <img src={images.gallety9} alt='plant-3' />
        </div>
        <div className='coll-span-2 short'>
          <h3>Lorem, ipsum dolor.</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui natus
            tenetur numquam commodi.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui natus
            tenetur numquam commodi.
          </p>
        </div>
      </main>
    </AnimatedPage>
  );
};

export default Gallery;
