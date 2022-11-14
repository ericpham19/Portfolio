 import Head from 'next/head'
import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillGithub, AiFillLinkedin, AiFillMediumSquare} from "react-icons/ai";
import {SiJavascript, SiRuby, SiRubyonrails} from "react-icons/si"
import { FaReact } from "react-icons/fa";

import Image from "next/image";
import profilepic from "../public/profileresized.jpg"
import background from "../public/background.jpg"
import {useState, useEffect} from 'react';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  

 
  return ( 
    
  
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Eric Pham Porfolio</title>
      </Head>
      <main className= "bg-white font-sans dark:bg-gray-900">
        <section className= "maximum-h-screen ">
          <nav className= "py-10 mb-5 flex justify-between px-10 ">

            <h1 className= "sm:text-3xl md:text-4xl lg:text-5xl  font-bold text-teal-600  " >Eric Pham</h1>
            
            <ul className= "flex items-center gap-2 lg:text-4xl md:text-2xl sm:text-xl">
              <li><BsFillMoonStarsFill className= "cursor-pointer " onClick= {() => setDarkMode(!darkMode)}/>
              </li>
              <li>
              <a className="bg-gradient-to-r px-2 py-1 bg-blue-500 text-white rounded ml-8" href="#">Resume</a>
              </li>
            </ul>
          </nav>

          <div className= "text-center p-10  bg-fixed" style= {{backgroundImage: "url(/background.jpg"}} >
            <h2 className= "text-5xl py-2 font-semibold text-teal-600">Eric Pham</h2>
            <h3 className= " py-2 text-4xl">Full Stacked Developer</h3>
            <p className= "text-md py-5 leading-6 text-2xl max-w-xl mx-auto">Hi my name is EREKKKK and I am a software engineer Hie engineer
            .Hi my name is EREKKKK and I am a soft</p>
         
          
          
          <div className= "flex justify-center gap-10 text-5xl ">

          <a href="#"> <AiFillGithub /></a>
          <a href="#"><AiFillLinkedin /></a>
          <a href="#"> <AiFillMediumSquare/></a>
          </div>

          <div className= "relative justify-center  ">
          <Image  className= "rounded-full mx-auto mt-5 " src={ profilepic}   ></Image>
          </div>
        </div>
        </section>

        <section>
          <div className= "text-center  pt-20 pb-20">
            <h3 className="text-5xl py-1 dark:text-white ">About Me</h3>
            <p className=" py-2 leading-8 text-gray-800 dark:text-gray-200 text-2xl">
            During my software engineering course, I worked on several applications using a variety of languages such as .
              <span className="text-teal-500"> Javascript, React and Ruby.</span>
              From these projects, I have gaine valuable understanding and exeperience on how to implement a project from scratch.
            </p>
            <p className=" text-2xl py-2 leading-8 text-gray-800 dark:text-gray-200">
              I am inspired to continue my learning of new technology and seek ways to improve my current implemenations and knowledge. 
            </p>
          </div>
          <div className="lg:flex gap-10 text-center pt-20 " style= {{backgroundImage: "url(/background.jpg"}}>
            <div className="  border-2 shadow-2xl shadow-blue-900 opacity-100 p-10 rounded-xl my-10 dark:bg-white flex-1 ">
            <a className= "text-5xl  " href="https://ericpham19.github.io/JS-Application-/"><SiJavascript /></a>
              <h3 className="text-3xl font-medium pt-8 pb-2  ">
                Javascript Weather App
              </h3>
              <p className="py-2 text-xl">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-100 text-2xl font-extrabold">Design Tools I Use</h4>
              <p className="text-white dark:text-black py-1 text-xl">Photoshop</p>
              <p className="text-white dark:text-black py-1 text-xl">Illustrator</p>
              <p className="text-white dark:text-black py-1 text-xl">Figma</p>
              <p className="text-white dark:text-black py-1 text-xl">Indesign</p>
            </div>
            <div className="  border-2 shadow-2xl shadow-blue-900 opacity-100 p-10 rounded-xl my-10 dark:bg-white flex-1 ">
              <a className= "text-5xl " href="https://github.com/ericpham19/React-App_Project"><FaReact/></a>
              <a className="text-3xl font-medium pt-8 pb-2" href="https://github.com/ericpham19/React-App_Project">
               React Crypto Application 
              </a>
              <p className="py-2 text-xl">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-100 text-2xl font-extrabold">Design Tools I Use</h4>
              <p className="text-white dark:text-black py-1 text-xl">Photoshop</p>
              <p className="text-white dark:text-black py-1 text-xl">Illustrator</p>
              <p className="text-white dark:text-black py-1 text-xl">Figma</p>
              <p className="text-white dark:text-black py-1 text-xl">Indesign</p>
            </div>
            <div className=" border-2  shadow-2xl shadow-blue-900 opacity-100 p-10 rounded-xl my-10 dark:bg-white flex-1 ">
            <a className= "text-5xl " href="https://github.com/ericpham19/HeroWiki"><SiRuby/></a>
            <a className="text-3xl font-medium pt-8 pb-2" href="https://github.com/ericpham19/HeroWiki">
               Ruby CLI
              </a>
              <p className="py-2 text-xl">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-100 text-2xl font-extrabold">Design Tools I Use</h4>
              <p className="text-white dark:text-black py-1 text-xl">Photoshop</p>
              <p className="text-white dark:text-black flex-1 py-1 text-xl">Illustrator</p>
              <p className="text-white dark:text-black py-1 text-xl">Figma</p>
              <p className="text-white dark:text-black py-1 text-xl">Indesign</p>
            </div>

            <div className="  border-2 shadow-2xl shadow-blue-900 opacity-100 p-10 rounded-xl my-10 dark:bg-white flex-1 ">
              <a className= "text-6xl " href="https://github.com/ericpham19/EventPlanner"><SiRubyonrails/></a>
              <a className="text-3xl font-medium pt-8 pb-2" href="https://github.com/ericpham19/EventPlanner">
               Ruby on Rails Booking System
              </a>
              <p className="py-2 text-xl">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-100 text-2xl font-extrabold">Design Tools I Use</h4>
              <p className="text-white dark:text-black py-1 text-xl">Photoshop</p>
              <p className="text-white dark:text-black py-1 text-xl">Illustrator</p>
              <p className="text-white dark:text-black py-1 text-xl">Figma</p>
              <p className="text-white dark:text-black py-1 text-xl">Indesign</p>
            </div>
          </div>
        </section>
        <section className= "text-center text-2xl mt-10 dark:text-white">
          <div >
            Personal Portfolio Website Made by Eric Pham
          </div>
        </section>


      </main>
    </div>
  
  )
}
