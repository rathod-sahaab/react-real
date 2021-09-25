import * as React from 'react'
import './css/tailwind.css'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return (
    <div className='text-center text-4xl m-10 p-10 border-2 rounded-md'>
      Example Component: {text}
    </div>
  )
}
