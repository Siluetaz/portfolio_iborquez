import { cn } from 'lib/utils'
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpLeftIcon } from 'lucide-react'
import { useProjectsSlider } from 'store/sliderRef'

interface Props {
  children: React.ReactNode
  uniqueClass?: string
}
const SliderButtons = ({ children, uniqueClass }: Props) => {
  const { sliderRef: slider } = useProjectsSlider()
  const buttonClass = 'p-2 hoverbg-gray-200 dark:hover:bg-gray-700 rounded-md grid place-items-center transition-colors duration-200'
  return (
    <div className='flex gap-5'>
      <button className={buttonClass} onClick={()=>{slider.current.slickPrev()}}><ArrowLeftIcon /></button>
      <button className={buttonClass} onClick={()=>{slider.current.slickNext()}}><ArrowRightIcon /></button>
    </div>
  )
}

export default SliderButtons