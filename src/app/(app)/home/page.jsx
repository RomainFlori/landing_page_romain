"use client"

import Image from "next/image"

export default function HomePage() {
	return (
		<>
			<div className="relative h-screen w-full">
				{/* Content Over the Background */}
				<div className="relative z-10 flex items-center h-full text-white">
					<div className="p-2">
						<h1 style={{fontSize: "200px"}} className="myFont">
							DEVELOPPEUR
						</h1>
						<h1 style={{fontSize: "200px"}} className="myFont">
							FULLSTACK
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
						Je suis Romain Flori-Cantrelle, diplômé d'un Master 5 en programmation à Epitech Paris. Durant mes études, j'ai réalisé cinq stages, bien au-delà de la moyenne, privilégiant
						les projets concrets et utiles en entreprise. En 4ᵉ année, j'ai étudié la finance à New York pour perfectionner mon anglais. Mon stage de fin d'études chez Loopsider en
						fullstack JavaScript m'a confirmé ma passion pour le développement. Aujourd'hui, je recherche un CDI ou CDD en programmation pour continuer à évoluer et m'épanouir dans mon
						métier.
					</p>
				</div>
			</div>
		</>
	)
}
