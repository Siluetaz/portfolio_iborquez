import { languages } from 'i18n/ui';
import { useState } from 'react';
interface Props {
  className?: string;
  lang: string;
}
const LanguagePicker = ({ className, lang }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={className}>
      <button type="button" onClick={() => setOpen((open: any) => !open)} data-dropdown-toggle="language-dropdown-menu" className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        {languages[lang as keyof typeof languages]}
      </button>
      <div className={`relative min-w-fit`} id="language-dropdown-menu">
        <ul className={`py-2 font-medium ${open ? null : 'hidden'} absolute z-50 my-4 text-base list-none bg-white rounded-lg shadow dark:bg-gray-700`} role="none">

          {
            Object.entries(languages).map(([lang, name]) => (
              <li key={name}>
                <a href={'/'+lang} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                  <div className="inline-flex items-center">
                    <p className={'whitespace-nowrap'}>
                      {name}
                    </p>
                  </div>
                </a>
              </li>
            ))
          }


        </ul>
      </div>
    </div>

  )
}

export default LanguagePicker

