import { useTranslations, getLangFromUrl } from "i18n/utils";
import TechCarousel from "./TechCarousel";
import { useEffect, useRef } from 'react';
import { cn } from 'lib/utils';

interface Props {
  lang: any
  project: any
  className?: string
  isSelected?: boolean
}

const Card = ({ lang, project, className, isSelected = true }: Props) => {
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
    <div
      className={cn("w-[18.5rem] xs:w-[22rem] sm:w-[26rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between pb-5 h-full min-h-[33.5rem] sm:min-h-[31.5rem] transition-transform duration-200 relative my-5", className)}
    >
      {
        !isSelected ?
        <div className='inset-0 absolute bg-gray-300/30 dark:bg-gray-900/70 z-[1]'></div>:null
      }
      <div className=''>
        <a >
          <img className="rounded-t-lg h-[180px] w-full object-cover" src={desktop} alt="" />
        </a>
        <div className="p-5 w-full">
          <a >
            <h5
              className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize"
            >
              {name}
            </h5>
          </a>
          <p className="font-normal text-gray-700 dark:text-gray-400 h-[8rem]">
            {description}
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <TechCarousel isSelected={isSelected} technologies={technologies} />
        <div className="flex items-center justify-center gap-5 grow-0">
          {
            Object.entries(links).map(([key, value]) =>
              value ? (
                <a
                  key={value + ''}
                  href={value as string}
                  target="_blank"
                  className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 hover:bg-primary dark:hover:bg-primary rounded-full dark:bg-gray-700 dark:text-gray-200 transition-colors duration-200"
                >
                  {t("projects." + key)}
                </a>
              ) : null
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Card