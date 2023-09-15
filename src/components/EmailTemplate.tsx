interface Props {
  name: string
  email: string
  message: string
}
const EmailTemplate = ({ email, name, message }: Props) => {
  return (
    <div className='w-full'>
      <p>{message}</p>
      <div className='flex flex-row gap-1 w-full'>
        <p className='w-fit'>Envaido por: {name} | {email}</p>
      </div>
    </div>
  )
}

export default EmailTemplate