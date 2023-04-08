import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "/Users/macbook/token/src/styles/Gallery.css"





export default function Gall() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              dots: true,
              Color: 'white',
              
            }
          },
          {
            breakpoint: 60,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              dots: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
            }
          }
        ]
      };
  return (
    <div className='Gall'>
              <div>
      <label className='lab'> Gallery</label>
     </div > 
       <div className='lay'>
        <Slider {...settings}>
          <div>
          < img className='img-a' style={{width: '90%',}} alt='logo' src={(require("/Users/macbook/token/src/assets/g.jpeg"))} />
          </div>
          <div>
          < img className='img-a' style={{width: '90%',}} alt='logo' src={(require("/Users/macbook/token/src/assets/j.jpeg"))} />
          </div>
          <div>
          < img className='img-a' style={{width: '90%',}} alt='logo' src={(require("/Users/macbook/token/src/assets/images-1.jpeg"))} />
          </div>
          <div>
          < img className='img-a' style={{width: '90%',}} alt='logo' src={(require("/Users/macbook/token/src/assets/images-1.jpeg"))} />
          </div>
        </Slider>
      </div>
      <div>  <hr /> <br /> <br />
      <label className='lab'> <button><label>Mint</label> </button></label> 
     </div > 
    </div>
  )
}
