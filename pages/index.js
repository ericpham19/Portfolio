 import Head from 'next/head'
import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillGithub, AiFillLinkedin, AiFillMediumSquare} from "react-icons/ai";
import {SiJavascript, SiRuby, SiRubyonrails} from "react-icons/si"
import { FaReact } from "react-icons/fa";

import Image from "next/image";
import profilepic from "../public/profilepic.png"
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
              <a className="bg-gradient-to-r px-2 py-1 bg-blue-500 text-white rounded ml-8" href="https://drive.google.com/file/d/1UYusHidqCVlzncHa_wgPCf948hNsRahJ/view?usp=sharing">Resume</a>
              </li>
            </ul>
          </nav>

          <div className= "text-center p-10  bg-fixed" style= {{backgroundImage: "url(/background.jpg"}} >
            <h2 className= "text-5xl py-2 font-semibold text-teal-600">Eric Pham</h2>
            <h3 className= " py-2 text-4xl">Full Stack Developer</h3>
            <p className= "text-md py-5 leading-6 text-2xl max-w-xl mx-auto">Hi my name is Eric and I am software enginner</p>
          
          
          <div className= "flex justify-center gap-10 text-5xl ">

          <a href="https://github.com/ericpham19"> <AiFillGithub /></a>
          <a href="https://www.linkedin.com/in/duy-pham-83177916b/"><AiFillLinkedin /></a>
          <a href="https://medium.com/@ericpham19"> <AiFillMediumSquare/></a>
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
            During my software engineering transformative course, I worked on several applications using a variety of languages such as .
              <span className="text-teal-500"> Javascript, React and Ruby.</span>
              From these projects, I have gaine valuable understanding and exeperience on how to implement a project from scratch.
            </p>
            <p className=" text-2xl py-2 leading-8 text-gray-800 dark:text-gray-200">
              I am inspired to continue my learning of new technology and seek ways to improve my current implemenations and knowledge. 
            </p>
          </div>
          <div className="lg:flex gap-10 text-center pt-20 " style= {{backgroundImage: "url(/background.jpg"}}>
            <div className="  border-2 shadow-2xl shadow-blue-900 opacity-100 p-10 rounded-xl  dark:bg-white flex-1 ">
            <a className= "text-5xl  " href="https://ericpham19.github.io/JS-Application-/"><SiJavascript /></a>
              <a href= "https://ericpham19.github.io/JS-Application-/" className="text-3xl font-medium pt-8 pb-2  ">
                Javascript Weather App
              </a>
              <p className="py-2 text-xl">
                A single page application enabling the user to check the weather for cities around the globe or use the current location for their immediate weather condition.
              </p>
              <h4 className="py-4 text-teal-100 text-2xl font-extrabold">Tools I Use</h4>
              <p className="text-white dark:text-black py-1 text-xl">Javascript</p>
              <p className="text-white dark:text-black py-1 text-xl">API (Unsplash, OpenWeather)</p>
              <p className="text-white dark:text-black py-1 text-xl">HTML</p>
              <p className="text-white dark:text-black py-1 text-xl">CSS</p>
            </div>
            <div className="  border-2 shadow-2xl shadow-blue-900 opacity-100 p-10 rounded-xl  dark:bg-white flex-1 ">
              <a className= "text-5xl " href="https://github.com/ericpham19/React-App_Project"><FaReact/></a>
              <a className="text-3xl font-medium pt-8 pb-2" href="https://github.com/ericpham19/React-App_Project">
               React Crypto Application 
              </a>
              <p className="py-2 text-xl">
               Built on ReactJS with the aim to provide users with data on the most trending crypto of the day and also a list of 100 crypto globally. There is also a mock-up calculator which users can use to buy or sell a crypto using historical data.
              </p>
              <h4 className="py-4 text-teal-100 text-2xl font-extrabold"> Tools I Use</h4>
              <p className="text-white dark:text-black py-1 text-xl">React</p>
              <p className="text-white dark:text-black py-1 text-xl">API (CoinGecko)</p>
              <p className="text-white dark:text-black py-1 text-xl">TailWind CSS</p>
              <p className="text-white dark:text-black py-1 text-xl">Axios</p>
            </div>
            <div className=" border-2  shadow-2xl shadow-blue-900 opacity-100 p-10 rounded-xl  dark:bg-white flex-1 ">
            <a className= "text-5xl " href="https://github.com/ericpham19/HeroWiki"><SiRuby/></a>
            <a className="text-3xl font-medium pt-8 pb-2" href="https://github.com/ericpham19/HeroWiki">
               Ruby CLI
              </a>
              <p className="py-2 text-xl">
                A command line interface that returns data on Marvel characters
              </p>
              <h4 className="py-4 text-teal-100 text-2xl font-extrabold"> Tools I Use</h4>
              <p className="text-white dark:text-black py-1 text-xl">Ruby</p>
              <p className="text-white dark:text-black flex-1 py-1 text-xl">Scraping (Nokogiri)</p>
              <p className="text-white dark:text-black py-1 text-xl">Gems</p>
              <p className="text-white dark:text-black py-1 text-xl">Sqlite3</p>
            </div>

            <div className="  border-2 shadow-2xl shadow-blue-900 opacity-100 p-10 rounded-xl  dark:bg-white flex-1 ">
              <a className= "text-6xl " href="https://github.com/ericpham19/EventPlanner"><SiRubyonrails/></a>
              <a className="text-3xl font-medium pt-8 pb-2" href="https://github.com/ericpham19/EventPlanner">
               Ruby on Rails Booking System
              </a>
              <p className="py-2 text-xl">
                A booking system built with Rails which supports users to create booking appointments using pre-set booking types.
              </p>
              <h4 className="py-4 text-teal-100 text-2xl font-extrabold">Tools I Use</h4>
              <p className="text-white dark:text-black py-1 text-xl">Rails</p>
              <p className="text-white dark:text-black py-1 text-xl">Ruby</p>
              <p className="text-white dark:text-black py-1 text-xl">ActiveRecords</p>
              <p className="text-white dark:text-black py-1 text-xl">Bootstrap</p>
            </div>
            <div className="  border-2 shadow-2xl shadow-blue-900 opacity-100 p-10 rounded-xl  dark:bg-white flex-1 ">
              <a className= "text-6xl flex " href="https://github.com/ericpham19/EventPlanner"><SiRubyonrails/><FaReact/></a>
              <a className="text-3xl font-medium pt-8 pb-2" href="https://github.com/ericpham19/EventPlanner">
               EasyFitness 
              </a>
              <p className="py-2 text-xl">
                A quick and easy application to help users create workout sessions and track their progress.
              </p>
              <h4 className="py-4 text-teal-100 text-2xl font-extrabold">Tools I Use</h4>
              <p className="text-white dark:text-black py-1 text-xl">Rails</p>
              <p className="text-white dark:text-black py-1 text-xl">React</p>
              <p className="text-white dark:text-black py-1 text-xl">Material UI</p>
              <p className="text-white dark:text-black py-1 text-xl">Fly.io</p>
              <p className="text-white dark:text-black py-1 text-xl">Fly.io</p>
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
