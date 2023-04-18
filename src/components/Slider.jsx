import Carousel from 'react-bootstrap/Carousel';
import card1 from '../img/card1.png';
import card2 from '../img/card2.png';
import card4 from '../img/card4.png';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={1500} style={{height:'150px'}}>
        <img
          className="d-block w-100"
          src={card1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Crash Course</h3>
          <p>Data Structure and Algorithms.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000} style={{height:'150px'}}>
        <img
          className="d-block w-100"
          src={card2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Weekly Contest</h3>
          <p>Chance to Prove Yourself.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} style={{height:'150px'}}>
        <img
          className="d-block w-100"
          src={card4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Top Questions</h3>
          <p>
            Best to achieve Goal.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;