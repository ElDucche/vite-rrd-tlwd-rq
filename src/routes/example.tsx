import React, { useState } from 'react'

const Example = () => {
    const [count, setCount] = useState(0);

  return (
    <div className='h-screen w-full grid place-content-center place-items-center'>
        <button onClick={() => setCount(count+1)} className='border-2 border-black py-2 px-4 border-b-8 rounded-full active:border-b-2'> <i className='text-lg font-light not-italic'>Click</i>  {count} </button>
    </div>
  )
}

export default Example