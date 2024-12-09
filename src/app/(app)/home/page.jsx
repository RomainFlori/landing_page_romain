"use client"

import Image from "next/image"
import "../../../styles/cyberpunk.css"

export default function HomePage() {
  return (
    <>
      <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossOrigin="anonymous"></script>
      <div className="relative h-screen w-full">
        {/* Content Over the Background */}
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
      <div className="flex flex-col h-screen">
        <div className=" px-4 w-1/2 text-white myFont text-6xl mt-5">
          <h3 className="">DEVELOPPEMENT WEB.</h3>
          <h3 className="">API.</h3>
          <h3 className="">BASE DE DONNEE.</h3>
        </div>
        <div className=" px-4 flex w-full justify-end mt-5">
          <p className="text-lg myFont graycolor w-1/2">
            Je suis Romain Flori-Cantrelle, diplômé d'un Master 5 en programmation à Epitech Paris. Durant mes études, j'ai réalisé cinq stages, bien au-delà de la moyenne, privilégiant les projets
            concrets et utiles en entreprise. En 4ᵉ année, j'ai étudié la finance à New York pour perfectionner mon anglais. Mon stage de fin d'études chez Loopsider en fullstack JavaScript m'a
            confirmé ma passion pour le développement. Aujourd'hui, je recherche un CDI en programmation pour continuer à évoluer et m'épanouir dans ce métier.
          </p>
        </div>
      </div>

      <div className="" id="projects">
        <div className="px-4 w-1/2 text-white myFont text-6xl mt-5">
          <h3 className="">MES PROJETS EN LIGNE.</h3>
        </div>
        <div className="px-4 mb-5 mt-5 flex justify-end">
          <div className="cyber-tile-big fg-dark bg-white transition duration-500 zoom">
            <a href="https://sherpai.fr/" target="blank_">
              <img alt="img" src="/img/sherpai.png" />
            </a>
          </div>
        </div>

        <div className="px-4 mb-5 mt-5 flex">
          <div className="cyber-tile-big fg-dark bg-white transition duration-500 zoom">
            <a href="https://loopsider.com/" target="blank_">
              <img alt="img" src="/img/loopsider.png" />
            </a>
          </div>
        </div>

        <div className="px-4 mb-5 mt-5 flex justify-end">
          <div className="cyber-tile-big fg-dark bg-white transition duration-500 zoom">
            <a href="https://messagerservices.com/pages/contact" target="blank_">
              <img alt="img" src="/img/coursier.png" />
            </a>
          </div>
        </div>

      </div>
    </>
  )
}
