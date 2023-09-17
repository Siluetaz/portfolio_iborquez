import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import Card from './Card';
import { useEffect, useRef, useState } from 'react';
import { useProjectsSlider } from 'store/sliderRef';
import SliderButtons from './SliderButtons';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
interface Props {
  lang: string;
  projects: any;

}
const ProjectsCarousel = ({ lang, projects }: Props) => {
  const [cardClass, setCardClass] = useState("z-[2]");
  const [currentCard, setCurrentCard] = useState(null);
  const slider = useRef(null);
  const { setSliderRef } = useProjectsSlider()
  useEffect(() => {
    if (slider.current) {
      const { current: { innerSlider: { state: { currentSlide } } } } = slider
      setCurrentCard(currentSlide)
      setSliderRef(slider)
    }
  }, [slider])

  const handleChange = (current: any, next: any) => {
    setCurrentCard(next)
  }

  const settings = {
    focusOnSelect: true,
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    speed: 800,
    draggable: true,
    touchMove: true,
    beforeChange: (current: any, next: any) => handleChange(current, next),
    className: 'cursor-ew-resize',
    centerMode: true,
    centerPadding: '320px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        }
      }
    ]
  };

  return (
    <Slider ref={slider} {...settings}>
      {
        projects.map((project: any, index: number) => (
          <div key={project.name}>
            <Card lang={lang} project={project} isSelected={index === currentCard} className={index === currentCard ? cardClass : currentCard + 1 === index ? 'z-[1] scale-95' : `scale-95`} />
          </div>
        ))
      }
    </Slider>
  )
}

export default ProjectsCarousel