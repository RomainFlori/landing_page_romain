"use client"

import Image from "next/image"
import "../../../styles/cyberpunk.css"
import {useEffect, useState} from "react"

export default function HomePage() {
  // First useEffect: For graycube sliding effect
  const [scrollY, setScrollY] = useState(0)

  // Handle scroll to track the scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll")

    if (elements.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Fade In
              entry.target.classList.remove("opacity-0")
              entry.target.classList.add("opacity-100")
            } else {
              // Fade Out
              entry.target.classList.remove("opacity-100")
              entry.target.classList.add("opacity-0")
            }
          })
        },
        {
          root: null, // Default is the viewport
          rootMargin: "-8% 0px -8% 0px", // Adjust to trigger earlier/later
          threshold: 0.5, // Trigger as soon as it starts leaving/entering
        }
      )

      elements.forEach((el) => observer.observe(el)) // Observe each element

      return () => {
        elements.forEach((el) => observer.unobserve(el)) // Cleanup observer on unmount
      }
    }
  }, [])

  return (
    <>
      <div className="relative h-screen w-full">
        <div className="relative z-10 flex items-center h-full text-white">
          <div className="p-2">
            <h1 style={{fontSize: "200px"}} className="myFont">
              DEVELOPPEUR
            </h1>
            <h1 style={{fontSize: "200px"}} className="myFont">
              FULLSTACK<span className="cyberglitch3">_</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col my-20">
        <div className="animate-on-scroll opacity-0 transition-opacity duration-2000 ease-in-out px-4 w-1/2 text-white myFont text-6xl">
          <h3 className="">DEVELOPPEMENT WEB.</h3>
          <h3 className="">API.</h3>
          <h3 className="">BASE DE DONNEE.</h3>
        </div>
        <div className=" px-4 flex w-full justify-end my-20 animate-on-scroll opacity-0 transition-opacity duration-2000 ease-in-out">
          <p className="text-lg myFont graycolor w-1/2">
            Je suis Romain Flori-Cantrelle, diplômé d'un Master 5 en programmation à Epitech Paris. Durant mes études, j'ai réalisé cinq stages, bien au-delà de la moyenne, privilégiant les projets
            concrets et utiles en entreprise. En 4ᵉ année, j'ai étudié la finance à New York pour perfectionner mon anglais. Mon stage de fin d'études chez Loopsider en fullstack JavaScript m'a
            confirmé ma passion pour le développement. Aujourd'hui, je recherche un CDI en programmation pour continuer à évoluer et m'épanouir dans ce métier.
          </p>
        </div>
      </div>

      <div className="flex flex-col my-20">
        <div className=" px-4 text-white myFont text-6xl my-20 ">
          <h3 className="animate-on-scroll opacity-0 transition-opacity duration-2000 ease-in-out glitchtext" title="MES STAGES & ALTERNANCES.">
            MES STAGES & ALTERNANCES.
          </h3>
        </div>
        <div className=" px-4 flex w-full justify-end my-10 animate-on-scroll opacity-0 transition-opacity duration-2000 ease-in-out">
          <p className="text-lg myFont graycolor">
            Pendant mes études j'ai fais un total de <u>3 stages</u> et <u>2 alternances</u>.
          </p>
        </div>

        <div className=" px-4 flex w-full my-20 py-10 justify-between ">
          <div className="transition duration-500 zoom">
            <div
              style={{
                transform: `translateY(${scrollY * 0.1 - 210}px)`,
                transition: "transform 0.5s ease-out",
              }}
              className="zoom graycube flex flex-col p-5 "
            >
              <div className="flex justify-center mb-3">
                <img alt="img" src="/img/sokeo_logo.jpg" />
              </div>
              <p className="text-lg myFont my-3">Développeur fullstack</p>

              <p className="graycolor">Php, Cakephp, Css, Html, Boostrap, TailwindCss</p>
            </div>
          </div>

          <div className="transition duration-500 zoom">
            <div
              style={{
                transform: `translateY(${scrollY * 0.15 - 240}px)`,
                transition: "transform 0.4s ease-out",
              }}
              className="graycube flex flex-col p-5"
            >
              <div className="mb-3 flex justify-center">
                <img className="" style={{height: 200, width: 200}} alt="img" src="/img/polyconseil.webp" />
              </div>

              <p className="text-lg myFont my-3">Développeur backend</p>

              <p className="graycolor">Typescript, Postman, APIs, Agile</p>
            </div>
          </div>

          <div className="transition duration-500 zoom">
            <div
              style={{
                transform: `translateY(${scrollY * 0.1 - 210}px)`,
                transition: "transform 0.5s ease-out",
              }}
              className="graycube flex flex-col p-5"
            >
              <div className="mb-3 flex justify-center">
                <img className="" alt="img" style={{height: 200, width: 200}} src="/img/loopsider_logo.jpg" />
              </div>

              <p className="text-lg myFont my-3">Développeur fullstack</p>

              <p className="graycolor">Javascript, React.js, Agile</p>
            </div>
          </div>
        </div>
      </div>

      <div className="" id="projects">
        <div className="px-4 w-1/2 text-white myFont text-6xl my-20 animate-on-scroll opacity-0 transition-opacity duration-2000 ease-in-out">
          <h3 className="">MES PROJETS EN LIGNE.</h3>
        </div>
        <div className="px-10">
          <div className="px-4 my-10 flex justify-end animate-on-scroll opacity-0 transition-opacity duration-2000 ease-in-out">
            <div className="flex flex-col">
              <div className="cyber-tile-big fg-dark bg-white transition duration-500 zoom">
                <a href="https://sherpai.fr/" target="blank_">
                  <img alt="img" src="/img/sherpai.png" />
                </a>
              </div>
              <p className="graycolor text-center mt-2">Développé avec Javascript & React.js </p>
            </div>
          </div>

          <div className="px-4 my-10 flex  animate-on-scroll opacity-0 transition-opacity duration-2000 ease-in-out">
            <div className="flex flex-col">
              <div className="cyber-tile-big fg-dark bg-white transition duration-500 zoom">
                <a href="https://loopsider.com/" target="blank_">
                  <img alt="img" src="/img/loopsider.png" />
                </a>
              </div>
              <p className="graycolor text-center mt-2">Développé avec Next.js</p>
            </div>
          </div>

          <div className="px-4 my-10 flex justify-end  animate-on-scroll opacity-0 transition-opacity duration-2000 ease-in-out">
            <div className="flex flex-col">
              <div className="cyber-tile-big fg-dark bg-white transition duration-500 zoom">
                <a href="https://messagerservices.com/pages/contact" target="blank_">
                  <img alt="img" src="/img/coursier.png" />
                </a>
              </div>
              <p className="graycolor text-center mt-2">Développé avec PHP & React.js</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
