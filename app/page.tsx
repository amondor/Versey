import React from 'react';
import CocktailGenerator from './/components/CocktailGenerator';
import {FaGithub, FaLinkedin, FaLinkedinIn} from "react-icons/fa6";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Cocktail Generator 🍸
          
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://andrewmdr.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}Andrew MONDOR
           
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center  ">
     
      <CocktailGenerator />
        
       
      </div>

      <div className=" flex flex-row items-center 
      lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-center justify-center space-x-6 mb-32">
        
        <a
          href="https://github.com/amondor"
          className="  "
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mt-3 text-3xl `}>
          <FaGithub className="inline"/>
          
          </h2>
         
        </a>

        <a
          href="https://www.linkedin.com/in/andrew-mondor/"
          className="  "
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mt-3 text-3xl `}>
          <FaLinkedinIn className="inline"/>
          
          </h2>
         
        </a>

       
      </div>
    </main>
  )
}
