import Carousel from 'react-bootstrap/Carousel';
import HomeProducts from './HomeProducts';

function Home() {
  return (
    <>
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 fluid"  height={500}
          src="https://queue-it.com/media/ppcp1twv/product-drop.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='text-danger'>New seasong Products</h3>
          <p className='text-success'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 fluid"  height={500}
          src="https://burst.shopifycdn.com/photos/wrist-watches.jpg?width=1200&format=pjpg&exif=1&iptc=1"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='text-danger'>New style Clock</h3>
          <p className='text-success'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <HomeProducts />
    </>
  );
}


export default Home;