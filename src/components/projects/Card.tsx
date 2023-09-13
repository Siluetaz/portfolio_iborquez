import { useTranslations, getLangFromUrl } from "i18n/utils";
import TechCarousel from "./TechCarousel";
import { useRef } from 'react';

interface Props {
  lang: any
  project: any
}

const Card = ({ lang, project }: Props) => {
  const slider = useRef(null);
  const t = useTranslations(lang);
  const {
    links,
    description,
    technologies,
    imgDirection: { desktop, mobile },
    name,
  } = project;

  const pause = (slider: any) => {
    const { current: { slickPause } } = slider
    slickPause()
  }
  const play = (slider: any) => {
    const { current: { slickPlay } } = slider
    slickPlay()
  }

  return (
    <div onMouseEnter={() => play(slider)} onMouseLeave={() => pause(slider)}
      className="w-[18rem] sm:w-[26rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between pb-5"
    >
      <div className='grow-1'>
        <a href="#">
          <img className="rounded-t-lg" src={desktop} alt="" />
        </a>
        <div className="p-5 w-full">
          <a href="#">
            <h5
              className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize"
            >
              {name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-[8rem]">
            {description}
          </p>
        </div>
      </div>
      <div className='grow-0'>
        <TechCarousel slider={slider} technologies={technologies} />
      </div>
      <div className="flex items-center justify-center gap-5 grow-0">
        {
          Object.entries(links).map(([key, value]) =>
            value ? (
              <a
                key={value + ''}
                href={value as string}
                target="_blank"
                className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-200"
              >
                {t("projects." + key)}
              </a>
            ) : null
          )
        }
      </div>
    </div>
  )
}

export default Card