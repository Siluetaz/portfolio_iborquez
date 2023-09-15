import { getLangFromUrl, useTranslations } from '../i18n/utils';
import LanguagePicker from "components/LanguagePicker";
import ThemePicker from "components/ThemePicker";
import { useState } from 'react';
import { navItems } from 'utils/navigationLinks';
import { BriefcaseIcon, CodeIcon, MailboxIcon, PersonStandingIcon, UserIcon } from 'lucide-react';
interface Props {
  lang: string;
  children?: any;
}

const NavigationMenu = ({ lang, children }: Props) => {
  const [open, setOpen] = useState(false);
  const t = useTranslations(lang);
  const scrollToSection = (path: string) => {
    const element = document.getElementById(path);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setOpen(false);

    }
  }
  const icons = [
    {
      name: 'about',
      icon: UserIcon
    },
    {
      name: 'experience',
      icon: BriefcaseIcon
    },
    {
      name: 'projects',
      icon: CodeIcon
    },
    {
      name: 'contact',
      icon: MailboxIcon
    },
  ]
  return (
    <>
      <button onClick={() => setOpen((open: any) => !open)}
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"></path>
        </svg>
      </button>
      <div className={`${open ? null : 'hidden'} w-full md:block md:w-fit`} id="navbar-default">
        <ul
          className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-background md:dark:bg-background dark:border-gray-700"
        >
          {
            navItems.map(({ path, label }) => {
              const Icon = icons.find(icon => icon.name === path)?.icon;
              return (
                <li key={label} onClick={() => scrollToSection(path)} className='flex items-center cursor-pointer py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-primary md:dark:hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white gap-3'>
                  <div className="">
                    {
                      Icon &&
                      <Icon size={18} />
                    }
                  </div>
                  <div
                    // href={'#' + path}
                    className=""
                    aria-current="page">{t(`nav.${label}`)}</div>
                </li>
              )
            }
            )
          }

        </ul>
        <div className={'flex md:hidden justify-center gap-5  mt-2'}>
          <ThemePicker />
          <LanguagePicker lang={lang} />
        </div>
      </div>
      <div className={'gap-2 items-center hidden md:flex'}>
        <ThemePicker />
        <LanguagePicker lang={lang} />
      </div>
    </>
  )
}

export default NavigationMenu