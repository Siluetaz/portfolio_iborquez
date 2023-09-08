import { useState } from 'preact/hooks';
import { getLangFromUrl, useTranslations } from '../i18n/utils';
import LanguagePicker from "components/LanguagePicker";
import ThemePicker from "components/ThemePicker";
import { navItems } from 'utils/navigationLinks';
interface Props {
  lang: string;
  children?: any;
}

const NavigationMenu = ({ lang, children }: Props) => {
  const [open, setOpen] = useState(false);
  const t = useTranslations(lang);

  return (
    <>
      <button onClick={() => setOpen(open => !open)}
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"></path>
        </svg>
      </button>
      <div class={`${open ? null : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          {
            navItems.map(({ path, label }) =>
              <li key={label}>
                <a
                  href={path}
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page">{t(`nav.${label}`)}</a>
              </li>)
          }

        </ul>
        <div class={'flex md:hidden justify-center gap-5  mt-2'}>
          <ThemePicker  />
          <LanguagePicker lang={lang} />
        </div>
      </div>
      <div class={'gap-2 items-center hidden md:flex'}>
        <ThemePicker  />
        <LanguagePicker lang={lang} />
      </div>
    </>
  )
}

export default NavigationMenu