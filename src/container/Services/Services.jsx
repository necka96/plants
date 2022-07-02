import {
  GiPlantRoots,
  GiPlantsAndAnimals,
  GiPlantSeed,
  GiPlantWatering,
} from "react-icons/gi";
import { RiPlantFill } from "react-icons/ri";
import { TbPlant2 } from "react-icons/tb";
import AnimatedPage from "./../../components/Animated/AnimatedPage";
import "./services.scss";
const Services = () => {
  return (
    <AnimatedPage>
      <main className='services'>
        <div className='container grid'>
          <div className='services-item'>
            <div className='icon'>
              <GiPlantRoots />
            </div>
            <h3>Planting plants</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              officia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, fugiat.
            </p>
          </div>
          <div className='services-item'>
            <div className='icon'>
              <GiPlantSeed />
            </div>
            <h3>Sales of plants seeds</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              officia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, fugiat.
            </p>
          </div>
          <div className='services-item'>
            <div className='icon'>
              <GiPlantWatering />
            </div>
            <h3>Watering plants</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              officia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, fugiat.
            </p>
          </div>
          <div className='services-item'>
            <div className='icon'>
              <GiPlantsAndAnimals />
            </div>
            <h3>Plant and animal protection</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              officia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, fugiat.
            </p>
          </div>
          <div className='services-item'>
            <div className='icon'>
              <RiPlantFill />
            </div>
            <h3>Sale of flower plantations</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              officia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, fugiat.
            </p>
          </div>
          <div className='services-item'>
            <div className='icon'>
              <TbPlant2 />
            </div>
            <h3>Selling and nurturing roses</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              officia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, fugiat.
            </p>
          </div>
        </div>
      </main>
    </AnimatedPage>
  );
};

export default Services;
