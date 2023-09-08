export const languages = {
  en: 'English (US)',
  es: 'Español (ES)',
};

export const defaultLang = 'es';
interface UI {
  [key: string]: {
    [key: string]: string;
  };
}
export const ui: UI = {
  en: {
    'nav.Home': 'Home',
    'nav.About': 'About me',
    'nav.Projects': 'Projects',
    'nav.Experience': 'Experience',
    'nav.Contact': 'Contact',
  },
  es: {
    'nav.Home': 'Inicio',
    'nav.About': 'Sobre mí',
    'nav.Projects': 'Proyectos',
    'nav.Experience': 'Experiencia',
    'nav.Contact': 'Contacto',
  },
};