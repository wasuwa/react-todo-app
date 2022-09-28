export const PageError = (props: { text: string }) => {
  const {text} = props
  return (
    <div className='p-one bg-primary-content'>
      <p className='text-primary-text'>{text}</p>
    </div>
  )
}

