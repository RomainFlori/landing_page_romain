/* eslint-disable jsx-a11y/control-has-associated-label */
import Link from "next/link"
import Image from "next/image"
import {BsFillPersonFill} from "react-icons/bs"

import MobileNav from "./mobileNavBar"
import sherpaiIcon from "../../../../../../../public/svg/sherpai-logo.svg"
import BasicModal from "../Button"

const Topbar = () => {
	const links = [
		{
			id: 1,
			linkName: "Mes projets",
			link: "#project",
		},
		{
			id: 3,
			linkName: "Pourquoi me choisir ?",
			link: "#why",
		},
	]

	// smooth scrolling
	const handleLinkClick = (e, link) => {
		if (link.startsWith("#")) {
			e.preventDefault()
			const targetElement = document.getElementById(link.substring(1))

			if (targetElement) {
				const y = targetElement.getBoundingClientRect().top + window.scrollY - 100
				window.scrollTo({top: y, behavior: "smooth"})
			}
		}
	}

	return (
		<div className="flex ... items-center w-full min-h-24 md:px-11 px-6 text-white fixed nav z-50">
			<div className="flex-1 flex-col justify-start w-34 ... hidden md:flex">
				<p className="font-gray">Liens rapides</p>
				<ul className="flex items-center">
					{links.map(({id, link, linkName}) => (
						<li key={id} className="animation myFont nav-links mr-2 cursor-pointer text-black hover:scale-105 duration-200 link-underline">
							<Link passHref href={link} onClick={(e) => handleLinkClick(e, link)}>
								{linkName}
							</Link>
						</li>
					))}
				</ul>
			</div>

			{/* mobile */}
			<div className="flex grow md:hidden flex justify-between">
				<ul className=" items-center px-4 justify-between">
					<MobileNav />
				</ul>
			</div>

			<div className="flex-1 flex-col w-34 ... justify-center  items-center hidden md:flex">
				<p className="font-gray">Bonjour, mon nom est</p>
				<p className="m-0 myFont animation">Romain Flori-Cantrelle</p>
			</div>

			<div className="flex-1 flex-col items-end w-34 ... hidden md:flex">
				<div className="flex justify-end  items-center">
					<span className=" mr-2 status-dot" />
					<p className="font-gray">Disponible immédiatement</p>
				</div>
				<BasicModal firstletter="M" title="e contacter" />
			</div>
		</div>
	)
}

export default Topbar
