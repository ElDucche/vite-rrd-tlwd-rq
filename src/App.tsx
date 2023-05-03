import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="w-6 h-6" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="animate-spin" alt="React logo" />
        </a>
      </div>
      <h1>Vite/React/TS/Tailwind/React-Router/React-Query</h1>

      <button onClick={() => setCount((count) => count + 1)} className='p-2 border border-black rounded-full border-b-8 active:border-b-2 m-4'>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
