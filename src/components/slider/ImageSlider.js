import Carousel from 'react-bootstrap/Carousel';
function ImageSlider() {
  return (
    <div  className="container">
    <Carousel>
      <Carousel.Item interval={1000} >
      <img src="/assets/Mountain.avif" style={{width:'220%',height:'550px'}}  alt="slide1" />
        <Carousel.Caption>
          <h3>Mountains are always calling!</h3>
          <p>Discover the real value of travel</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src="/assets/ducksOnBeach.jpg"  style={{width:'220%',height:'550px'}}   alt="slide2"  />

        <Carousel.Caption>
          <h3>Beaches are always Calling!</h3>
          <p>Just Book your Flight to enjoy yourself on flight & Salt water heals everything.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
      <img src="/assets/Partition Museum.avif" style={{width:'220%',height:'550px'}}   alt="slide3"  />

        <Carousel.Caption>
          <h3>Like Museums then Go for Booking</h3>
          <p>
          A visit to a museum is a search for beauty, truth, and meaning in our lives
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000} >
      <img src="/assets/LAKSHADWEEP-ISLANDS.jpg" style={{width:'220%',height:'550px'}}  alt="slide4" />
        <Carousel.Caption>
          <h3>Best Place to visit is the LAKSHADWEEP</h3>
          <p>Lakshadweep: 99% fun and 1% Land/ enjoy the coral paradise.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} >
      <img src="/assets/flight2.webp" style={{width:'220%',height:'550px'}}  alt="slide5" />
        <Carousel.Caption>
          <h3>Fly-Bharat</h3>
          <p>“Craft Your Adventure Story”</p>
        </Carousel.Caption>
      </Carousel.Item>

      

    </Carousel>
    </div>
  );
}
export default ImageSlider;