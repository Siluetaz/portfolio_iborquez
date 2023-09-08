import { MoonIcon, SunIcon } from 'lucide-preact'
import { useEffect, useState } from 'preact/hooks'
interface Props {
  className?: string
}
const ThemePicker = ({ className }: Props) => {
  const [theme, setTheme] = useState<boolean | null>(null);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    setTheme(localTheme ? true : false);

  }, []);

  const toggleTheme = () => {
    if (theme === null) return;
    if (theme) {
      setTheme(false);
      localStorage.removeItem("theme");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme(true);
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  }
  return (
    <div class={className}>
      <button type="button" onClick={() => toggleTheme()} data-dropdown-toggle="theme-dropdown-menu" class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        {
          theme === null ? null : theme ? <MoonIcon />
            : <SunIcon />
        }
      </button>
    </div>
  )
}

export default ThemePicker