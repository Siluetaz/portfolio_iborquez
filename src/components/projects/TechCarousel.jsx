import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { useEffect, useRef, useState } from 'react';
import { FaReact } from 'react-icons/fa';
import { SiHtml5, SiNextdotjs, SiTailwindcss, SiVisualstudiocode } from 'react-icons/si';
import { TiCss3 } from 'react-icons/ti';
import { DiSass } from 'react-icons/di';
import { BiLogoVuejs } from 'react-icons/bi';
import { FiFigma } from 'react-icons/fi';

const TechCarousel = ({ technologies, slider }) => {
  const [icons] = useState([
    { icon: FaReact, color: 'text', name: 'react' },
    { icon: SiNextdotjs, color: 'text-gray-200', name: 'next' },
    { icon: BiLogoVuejs, color: 'text-green-500', name: 'vue' },
    { icon: SiHtml5, color: 'text-orange-600', name: 'html' },
    { icon: TiCss3, color: 'text-blue-500', name: 'css' },
    { icon: DiSass, color: 'text-pink-500', name: 'sass' },
    { icon: SiTailwindcss, color: 'text-blue-400', name: 'tailwind' },
    { icon: FiFigma, color: 'text-white', name: 'figma' },
    { icon: SiVisualstudiocode, color: 'text-blue-500', name: 'visual' },
   
  ])

const settings = {
  focusOnSelect: true,
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 3, slidesToScroll: 1,
  autoplay: false,
  speed: 2000,
  autoplaySpeed: 0,
  draggable: false,
};

// const pause = (slider) => {
//   const { current: { slickPause } } = slider
//   slickPause()
// }
// const play = (slider) => {
//   const { current: { slickPlay } } = slider
//   slickPlay()
// }


return (
  <div className='px-5' >
    <Slider ref={slider} {...settings} className={'flex items-center'}>
      {
        technologies.map((tech, index) => {
          const selectedIcon = icons.find((icon) => icon.name.toLowerCase().includes(tech.toLowerCase()))
          const Icon = selectedIcon?.icon
          return (
            <div key={tech + index} className={`px-3 py-1 text-sm font-semibold max-w-fit rounded-full h-[34.4px] flex items-center  ${selectedIcon?.color}`}>
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