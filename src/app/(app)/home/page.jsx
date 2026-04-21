"use client"

import Image from "next/image"
import "../../../styles/cyberpunk.css"
import {useEffect, useState, useRef} from "react"
import Card from "../_components/Layout/components/Card"

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

  const experiences = [
  {
    id: "card-81",
    avatar: "/img/sokeo_logo.jpg",
    year: "2019",
    fullname: "Sokeo",
    jobtitle: "Développeur front-end",
    internship: "1ER STAGE",
    description: "Php, Javascript, Css, Html, Bootstrap, tailwindCss",
    workExperience: "Développement de landing page et implémentation de design.",
  },
  {
    id: "card-10",
    avatar: "/img/sokeo_logo.jpg",
    year: "2020",
    fullname: "Sokeo",
    jobtitle: "Développeur fullstack",
    internship: "ALTERNANCE",
    description: "Cakephp, React.js, Bootstrap",
    workExperience: "E-commerce avec API Stripe et optimisation SEO / référencement.",
  },
  {
    id: "card-177",
    avatar: "/img/sokeo_logo.jpg",
    year: "2021",
    fullname: "Sokeo",
    jobtitle: "Développeur fullstack PHP",
    internship: "2EME STAGE",
    description: "Php, Symphony, tailwindCss, React.Js",
    workExperience: "Développement de site web avec backoffice. Ajout de fonctions majeurs pour le CMS de l'entreprise",
  },
  {
    id: "card-5410",
    avatar: "/img/polyconseil.webp",
    year: "2023",
    fullname: "Polyconseil",
    jobtitle: "Développeur Backend",
    internship: "ALTERNANCE",
    description: "Typescript, Postman, APIs, Agile",
    workExperience: "Projet pour FDJ | Méthode agile (daily, sprints...) | Équipe de +20 dévs.",
  },
  {
    id: "card-120",
    avatar: "/img/loopsider_logo.jpg",
    year: "2024",
    fullname: "Loopsider",
    jobtitle: "Développeur Fullstack",
    internship: "STAGE FIN ETUDES",
    description: "Node.js, React.js, Next.js, Agile",
    workExperience: "Amélioration du produit Sherp.ai, maintenance du produit | Développement du site officiel Loopsider (Next.js) et du site vitrine de Sherp.AI en ligne (Next.js)",
  },
    {
    id: "card-12033",
    avatar: "/img/edl_logo.png",
    year: "2025",
    fullname: "EDL",
    jobtitle: "Développeur Fullstack .NET",
    internship: "CDI",
    description: "C# .NET, Vue.js",
    time: "Durée: 9 mois",
    workExperience: "EDL - Xplore - solution pour les radiologues (medecine)",
  },
];

  return (
    <>
      <div className="relative h-screen w-full">
        <div className="relative z-10 flex items-center h-full text-white">
          <div className="md:p-4 p-2">
            <h1 className="myFont text-[40px] sm:text-[80px] lg:text-[110px] xl:text-[150px] 2xl:text-[200px] leading-none">DEVELOPPEUR</h1>
            <h1 className="myFont text-[40px] sm:text-[80px]  lg:text-[110px] xl:text-[150px] 2xl:text-[200px] leading-none">
              FULLSTACK<span className="cyberglitch3">_</span>
            </h1>
          </div>
        </div>
      </div>

      <div id="why" className="flex flex-col py-20 relative">
        <img src="/svg/corner.svg" alt="corner" className="small-corner is-top-left" />
        <img src="/svg/corner.svg" alt="corner" className="small-corner is-top-right" />
        <img src="/svg/corner.svg" alt="corner" className="small-corner is-bottom-left" />
        <img src="/svg/corner.svg" alt="corner" className="small-corner is-bottom-right" />

        <div className="animate-on-scroll opacity-0 transition-opacity duration-2000 ease-in-out px-4 w-1/2 md:w-2/3 sm:w-full text-white myFont 2xl:text-6xl text-3xl lg:text-4xl">
          <h3 className="">DEVELOPPEMENT LOGICIEL ET WEB.</h3>
          <h3 className="glitchtext" title="API.">
            API.
          </h3>
          <h3 className="">BASE DE DONNEE.</h3>
        </div>

        <div className="px-4 flex w-full justify-end my-20 animate-on-scroll opacity-0 transition-opacity duration-2000 ease-in-out">
          <p className="text-sm md:text-lg myFont graycolor md:w-1/2 w-full">
            Je suis Romain Flori-Cantrelle, diplômé d'un <b>Master 5 en programmation</b> à Epitech Paris. Durant mes études, j'ai réalisé 3 stages et 2 alternances, bien au-delà de la moyenne, privilégiant les
            projets concrets en entreprise. En 4ᵉ année, je suis parti à New York pour mes études, me permettant de perfectionner mon anglais. Mon stage de fin d'études chez{" "}
            <b>Loopsider</b> en fullstack JS (Node.js et React.js) m'a confirmé ma passion pour le développement. Par la suite, j'ai rejoint EDL en CDI, au sein d'une équipe de développeurs C# dans un environnement .NET, avec Vue.js côté front-end. Au cours de ces 9 mois, j'ai développé les modules de facturation et de comptabilité, et intégré un LLM (GPT-4o Mini).
            Aujourd'hui, je recherche un <b>CDI en développement logiciel</b> pour continuer à évoluer et m'épanouir dans
            ce métier.
          </p>
        </div>
      </div>

      <div className="py-10 px-10">
        <div className="all-divider-line"></div>
      </div>

      <div className="flex flex-col pt-5 pb-20 relative">
        <img src="/svg/corner.svg" alt="corner" className="small-corner is-top-left" />
        <img src="/svg/corner.svg" alt="corner" className="small-corner is-top-right" />
        <img src="/svg/corner.svg" alt="corner" className="small-corner is-bottom-left" />
        <img src="/svg/corner.svg" alt="corner" className="small-corner is-bottom-right" />
        <div className=" px-4 text-white myFont 2xl:text-6xl text-3xl lg:text-4xl my-20 ">
          <h3 className="animate-on-scroll opacity-0 transition-opacity duration-2000 ease-in-out glitchtext" title="STAGES, ALTERNANCES & CDI.">
            STAGES, ALTERNANCES & CDI.
          </h3>
        </div>
        <div className=" px-4 flex w-full justify-end my-20 animate-on-scroll opacity-0 transition-opacity duration-2000 ease-in-out">
          <p className="text-lg myFont graycolor xl:mb-20 md:mb-10">
            Pendant mes études j'ai fais un total de <u>3 stages</u> et <u>2 alternances</u>.<br></br>
            j'ai récemment travaillé 9 mois chez EDL en CDI.
          </p>
        </div>

        <section className="w-full py-20 px-6 md:px-10 max-w-[1600px] mx-auto">
          <div className="mb-12">
            <h2 className="text-white text-3xl font-bold myFont">Parcours Professionnel</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`flex justify-center h-full transition-all duration-500 hover:-translate-y-2 ${
                  index === 4 ? "2xl:scale-105" : ""
                }`}
              >
                <Card
                  cardId={exp.id}
                  avatar={exp.avatar}
                  year={exp.year}
                  fullname={exp.fullname}
                  jobtitle={exp.jobtitle}
                  internship={exp.internship}
                  description={exp.description}
                  workExperience={exp.workExperience}
                  time={exp.time}
                  about=""
                />
              </div>
            ))}
          </div>
        
        </section>
        
      </div>

      <div className="py-10">
        <div className="all-divider-line"></div>
      </div>

      <div className="py-10 relative" id="projects">
        <img src="/svg/corner.svg" alt="corner" className="small-corner is-top-left" />
        <img src="/svg/corner.svg" alt="corner" className="small-corner is-top-right" />
        <img src="/svg/corner.svg" alt="corner" className="small-corner is-bottom-left" />
        <img src="/svg/corner.svg" alt="corner" className="small-corner is-bottom-right" />
        <div className="px-4 md:w-1/2 w-full text-white myFont 2xl:text-6xl text-3xl lg:text-4xl my-20 animate-on-scroll opacity-0 transition-opacity duration-2000 ease-in-out">
          <h3 className="">MES PROJETS EN LIGNE.</h3>
        </div>

        <div className="lg:px-10 md:px-5 px-1">
          <div className="w-full pb-5 md:px-4 px-0 my-10 flex  animate-on-scroll opacity-0 transition-opacity duration-2000 ease-in-out">
            <div className=" w-full flex flex-col	">
              <div className="lg:w-3/4 w-full fg-dark transition duration-500 zoom">
                <a href="https://www.clinique-veterinaire-de-larc.fr/" target="blank_">
                  <img alt="img" src="/img/clinique.png" />
                </a>
                <p className="graycolor text-center mt-2">Développé avec Nuxt, firebase pour backoffice</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:px-10 md:px-5 px-1">
          <div className="w-full pb-5 md:px-4 px-0 my-10 flex  animate-on-scroll opacity-0 transition-opacity duration-2000 ease-in-out">
            <div className=" w-full flex flex-col items-end	">
              <div className="lg:w-3/4 w-full fg-dark transition duration-500 zoom">
                <a href="https://sherpai.fr/" target="blank_">
                  <img alt="img" src="/img/sherpai.png" />
                </a>
                <p className="graycolor text-center mt-2">Développé avec Node.js & React.js</p>
              </div>
            </div>
          </div>

          <div className=" py-10 md:px-4 px-0  my-10 flex animate-on-scroll opacity-0 transition-opacity duration-2000 ease-in-out">
            <div className="flex flex-col">
              <div className="fg-dark lg:w-3/4 w-full  transition duration-500 zoom">
                <a href="https://loopsider.com/" target="blank_">
                  <img alt="img" src="/img/loopsider.png" />
                </a>
                <p className="graycolor text-center mt-2">Développé avec Next.js</p>
              </div>
            </div>
          </div>

          <div className="md:px-4 px-0  py-10 my-10 flex justify-end animate-on-scroll opacity-0 transition-opacity duration-2000 ease-in-out">
            <div className="flex flex-col items-end">
              <div className="fg-dark lg:w-3/4 w-full  transition duration-500 zoom">
                <a href="https://messagerservices.com/pages/contact" target="blank_">
                  <img alt="img" src="/img/coursier.png" />
                </a>
                <p className="graycolor text-center mt-2">Développé avec CakePhp & React.js, intégration API stripe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10"></div>
    </>
  )
}
