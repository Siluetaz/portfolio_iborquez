import { MoonIcon, SunIcon } from 'lucide-preact'
import { useState } from 'preact/hooks'
interface Props {
  className?: string
}
const ThemePicker = ({ className }: Props) => {
  const [theme, setTheme] = useState(true)
  return (
    <div class={className}>
      <button type="button" onClick={() => setTheme(theme => !theme)} data-dropdown-toggle="theme-dropdown-menu" class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        {
          theme ? <SunIcon color="white" />
            : <MoonIcon color="white" />
        }
      </button>
    </div>
  )
}

export default ThemePicker