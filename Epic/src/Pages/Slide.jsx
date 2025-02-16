import Slider from "react-slick";
function Slide(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
      return (
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
          </Slider>
        </div>
      );
    }
export default Slide;