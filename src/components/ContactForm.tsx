import { useTranslations } from 'i18n/utils';
import toast from 'react-hot-toast';

interface Props {
  lang: string
}
const ContactForm = ({ lang }: Props) => {
  const t = useTranslations(lang);

  const sendEmail = async (e: any) => {
    toast.loading(t("form.sending"), {id: '0'})
    e.preventDefault()
    const email = e.target[0].value
    const name = e.target[1].value
    const message = e.target[2].value
    try{
      const response = await fetch("/api/send-email", {
        method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message
      }
      )
    })
    if(response.status === 200){
      toast.success(t("form.success"))
      e.target[0].value = ""
      e.target[1].value = ""
      e.target[2].value = ""
    }else{
      toast.error(t("form.error"))
      return
    }

  }catch(err){
    toast.error(t("form.error"))
    return
  }finally{
    toast.dismiss('0')
  }
}
  return (
    <form className=" w-full" onSubmit={(e) => sendEmail(e)}>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >{t("form.email")}</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="floating_first_name"
          id="floating_first_name"
          className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder=" "
        />
        <label
          htmlFor="floating_first_name"
          className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >{t("form.name")}</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <textarea
          name="floating_first_name"
          id="floating_first_name"
          className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer resize-none"
          placeholder=" "
          rows={5}
          required></textarea>
        <label
          htmlFor="floating_first_name"
          className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >{t("form.message")}</label>
      </div>
      <button
        type="submit"
        className="dark:text-white dark:border-gray-500 border focus:outline-none font-medium rounded-lg text-md w-full sm:w-auto px-8 py-2.5 text-center shadow-md shadow-gray-500/10 hover:shadow-primary/20 transition-[box-shadow, colors, ring] duration-200 hover:border-primary/50"
      >{t('form.button')}</button>
    </form>

  )
}

export default ContactForm