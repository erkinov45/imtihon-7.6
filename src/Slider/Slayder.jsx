import { Link } from "react-router-dom";
import Slider from 'react-slick';
import './Slider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from '../img/adliya.svg';
import logo2 from '../img/gerb.svg';
import logo3 from '../img/lex.svg';
import logo4 from '../img/mygov.svg';
import logo5 from '../img/oliy.svg';

function Slayder() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="App">
      <Slider {...settings} className="slider">
        <div><img className='logo1' src={logo1} alt="Logo 1" /></div>
        <div><img className='logo2' src={logo2} alt="Logo 2" /></div>
        <div><img className='logo3' src={logo3} alt="Logo 3" /></div>
        <div><img className='logo4' src={logo4} alt="Logo 4" /></div>
        <div><img className='logo5' src={logo5} alt="Logo 5" /></div>
      </Slider>
    </div>
  );
}

export default Slayder;