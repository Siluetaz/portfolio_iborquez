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
    "home.title": "Hi, I'm",
    "projects.siteUrl": "View site",
    "projects.codeUrl": "View code",
  },
  es: {
    'nav.Home': 'Inicio',
    'nav.About': 'Sobre mí',
    'nav.Projects': 'Proyectos',
    'nav.Experience': 'Experiencia',
    'nav.Contact': 'Contacto',
    "home.title": "Hola, soy",
    "projects.siteUrl": "Ver sitio",
    "projects.codeUrl": "Ver código",
  },
};