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
    "home.degree": "Web Developer",
    "projects.siteUrl": "View site",
    "projects.codeUrl": "View code",
    "form.email": "Email",
    "form.name": "Name",
    "form.message": "Message",
    "form.button": "Send",
    "form.sending": "Sending...",
    "form.success": "Message sent successfully!",
    "form.error": "An error occurred while sending the message, please try again later.",
    "contact.title": "Contact me"
  },
  es: {
    'nav.Home': 'Inicio',
    'nav.About': 'Sobre mí',
    'nav.Projects': 'Proyectos',
    'nav.Experience': 'Experiencia',
    'nav.Contact': 'Contacto',
    "home.title": "Hola, soy",
    "home.degree": "Desarrollador Web",
    "projects.siteUrl": "Ver sitio",
    "projects.codeUrl": "Ver código",
    "form.email": "Email",
    "form.name": "Nombre",
    "form.message": "Mensaje",
    "form.button": "Enviar",
    "form.sending": "Enviando...",
    "form.success": "Mensaje enviado correctamente!",
    "form.error": "Ocurrió un error al enviar el mensaje, por favor intenta más tarde.",
    "contact.title": "Contáctame"
  },
};