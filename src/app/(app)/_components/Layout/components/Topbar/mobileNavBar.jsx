import {useState} from "react"
import {Squash as Hamburger} from "hamburger-react"
import Link from "next/link"
import BasicModal from "../Button"

const NavMobile = () => {
	const [isOpen, setOpen] = useState(false)
	const links = [
		{
			id: 1,
			linkName: "Nos solutions",
			link: "#nos-solutions",
		},
		{
			id: 2,
			linkName: "Nos clients",
			link: "#nos-clients",
		},
		{
			id: 3,
			linkName: "Pourquoi Sherpai ?",
			link: "#pourquoi",
		},
		{
			id: 4,
			linkName: "Se connecter",
			link: "https://app.sherpai.fr",
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
		<div className="md:hidden flex space-between">
			<Hamburger toggled={isOpen} size={20} toggle={setOpen} />
			{isOpen && (
				<div className="fixed left-0 p-5 pt-0 right-0 top-[5.5rem] z-50	">
					<ul className="bg-white p-5 w-full">
						<li className="rounded-xl w-full">
							<ul className="flex flex-col px-4 space-y-5">
								{links.map(({id, link, linkName}) => (
									<li key={id} className="nav-links px-4 cursor-pointer font-medium text-black hover:scale-105 duration-200 link-underline">
										<Link passHref href={link} onClick={(e) => handleLinkClick(e, link)}>
											{linkName}
										</Link>
									</li>
								))}
							</ul>
							<div className="w-full flex justify-center mt-5">
								<BasicModal firstletter="D" title="emander une démo" />
							</div>
						</li>
					</ul>
				</div>
			)}
		</div>
	)
}

export default NavMobile
