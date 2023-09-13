import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { FaReact } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

const TechCarousel = ({ technologies, slider }) => {
  const [icons] = useState([FaReact
  ])

  const settings = {
    focusOnSelect: true,
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3, slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    draggable: false,
  };

  useEffect(() => {
    if (slider) {
      const { current: { slickPause } } = slider
      slickPause()
    }
  }, [slider])

  const pause = (slider) => {
    const { current: { slickPause } } = slider
    slickPause()
  }
  const play = (slider) => {
    const { current: { slickPlay } } = slider
    slickPlay()
  }


  return (
    <div className='px-5' >
      <Slider ref={slider} {...settings} className={'flex items-center'}>
        {
          technologies.map((tech, index) => {
            const Icon = icons.find((icon) => icon.name.includes(tech))
            return (
              <div key={tech + index} className="px-3 py-1 text-sm font-semibold max-w-fit text-gray-700  rounded-full h-[34.4px] flex items-center dark:text-gray-200">
                {Icon ? <Icon size={28} /> : tech}
              </div>
            )
          }
          )
        }
      </Slider>
    </div >
  )
}

export default TechCarousel;