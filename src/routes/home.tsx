import viteLogo from '/vite.svg'
import {SiEslint, SiReact, SiReactquery, SiReactrouter, SiTailwindcss, SiTypescript, SiVite} from 'react-icons/si'

const Home = () => {
  return (
    <div className='h-screen grid place-content-center place-items-center gap-4 mt-8 sm:mt-0'>
      <img src={viteLogo} alt="Vite Logo" className="h-24 h-24"/>
      <h1 className="text-5xl font-bold">Vite Template</h1>
      <h3 className="font-semibold text-2xl text-gray-400 my-6">Made with :</h3>
      <div className="flex gap-8 text-8xl flex-wrap justify-center">
        <div className="grid justify-items-center">
          <SiTypescript className="text-[#3178c6]"/>
          <span className="text-lg">
            Typescript
          </span>
        </div>
        <div className="grid justify-items-center">
          <SiVite className=' text-fuchsia-600'/>
          <span className="text-lg">
            ViteJs
          </span>
        </div>
        <div className="grid justify-items-center">
          <SiReact className="text-[#087ea4]" />
          <span className="text-lg">
            React
          </span>
        </div>
        <div className="grid justify-items-center">
          <a href="https://tanstack.com/query/v4"><SiReactquery className="text-red-400"/></a>
          <span className="text-lg">
            React-Query
          </span>
        </div>
        <div className="grid justify-items-center">
          <SiReactrouter className="text-red-500"/>
          <span className="text-lg">
            React-Router-Dom
          </span>
        </div>
        <div className="grid justify-items-center">
           <SiEslint className="text-indigo-800"/>
          <span className="text-lg">
            ESLint
          </span>
        </div>
        <div className="grid justify-items-center">
         <SiTailwindcss className="text-sky-400"/>
          <span className="text-lg">
            TailwindCSS
          </span>
        </div>
      </div>
    </div>
  )
}

export default Home