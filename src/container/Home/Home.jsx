import AnimatedPage from "../../components/Animated/AnimatedPage";
import Header from "../../components/Header/Header";
import { Question } from "../../components/Question/Question";
import images from "../../constants/imgaes";
import questions from "../../questions";
import "./home.scss";
export const Home = () => {
  return (
    <AnimatedPage>
      <div className='container'>
        <Header title='Welcome' img={images.headerImg} button='Read more' />
        <main className='grid'>
          <h2>Some Facts about Plants</h2>
          <div className='cards'>
            <img src={images.homePlents1} alt='plants-1' />
            <div className='text-holder'>
              <h3>70,000 PLANT SPECIES ARE UTILIZED FOR MEDICINE.</h3>
              <p>
                As it turns out, humans are more diversified in the plants we
                use for medicine. Although a large portion of that figure
                applies to traditional medicine, modern medicine is not exempt
                from plant help.
              </p>
            </div>
          </div>
          <div className='cards'>
            <img src={images.homePlents2} alt='plants-1' />
            <div className='text-holder'>
              <h3>
                80 PERCENT OF THE EARTH’S ORIGINAL FORESTS HAVE BEEN CLEARED OR
                DESTROYED.
              </h3>
              <p>
                The same forests that dominated the land 8,000 years ago are all
                but gone. Approximately four-fifths of the forests are gone
                thanks to human intervention,
              </p>
            </div>
          </div>
          <div className='cards'>
            <img src={images.homePlents3} alt='plants-1' />
            <div className='text-holder'>
              <h3>THE EARTH HAS MORE THAN 80,000 SPECIES OF EDIBLE PLANTS</h3>
              <p>
                If you’re ever in the mood to try something new, the good news
                is that there is certainly food you haven’t tasted yet growing
                somewhere in the world.
              </p>
            </div>
          </div>
          <div className='cards'>
            <img src={images.homePlents4} alt='plants-1' />
            <div className='text-holder'>
              <h3>
                ONLY 1 PERCENT OF RAINFOREST PLANTS HAVE BEEN STUDIED FOR
                MEDICINAL POTENTIAL
              </h3>
              <p>
                Given how valuable plants can be medicinal, the rainforest
                houses a host of possible cures for ailments new and old. This
                untapped resource could still hold the key to medical
                breakthroughs.
              </p>
            </div>
          </div>
          <div className='cards'>
            <img src={images.homePlents5} alt='plants-1' />
            <div className='text-holder'>
              <h3>
                JUST 10 PERCENT OF THE WORLD’S PLANT-RICH AREAS ARE PROTECTED.
              </h3>
              <p>
                Of the most biodiverse areas on the planet, only 10 percent are
                officially “protected” to ensure the survival of a multitude of
                species,
              </p>
            </div>
          </div>
          <div className='cards'>
            <img src={images.homePlents6} alt='plants-1' />
            <div className='text-holder'>
              <h3>68 PERCENT OF PLANTS ARE IN DANGER OF GOING EXTINCT</h3>
              <p>
                While scientists have only examined a fraction of the existing
                known plant species, of those that have been studied, 68 percent
                face extinction in the not too distant future.Since plants can’t
                just up and move as their habitat is being destroyed, they are
                even more vulnerable than endangered animals.
              </p>
            </div>
          </div>
          <h2>
            {questions.length} Questions <br /> About Useful Plants
          </h2>
          {questions.map((question) => (
            <div className='question' key={question.id}>
              <Question {...question} />
            </div>
          ))}
        </main>
      </div>
    </AnimatedPage>
  );
};
