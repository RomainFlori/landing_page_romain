/* eslint-disable jsx-a11y/control-has-associated-label */
import Image from "next/image"
import BasicModal from "../Button"
import sherpaiIcon from "../../../../../../../public/svg/sherpai-logo.svg"

const Footer = () => (
	<div className="md:flex-column items-center w-full md:px-11 px-5 pb-5 bg-black text-white">
		<div className="flex w-full flex-row ">
			{/* <div className="flex-column grow">
				<Image src={sherpaiIcon} alt="sherpai logo" />
				<BasicModal firstletter="D" title="emander une démo" />
			</div> */}
			{/* emplacements logos */}
			{/* <div className="flex items-center space-x-2">
				<a className="link-underline link-underline-black hover:scale-105 duration-200" href="/">
					<FaFacebook className="text-4xl hover:scale-105 duration-200 cursor-pointer" fill="var(--pink-color)" />
				</a>
				<a className="link-underline link-underline-black hover:scale-105 duration-200" href="/">
					<Image src={youtubeIcon} alt="instagram" height={35} />
				</a>
				<a className="link-underline link-underline-black hover:scale-105 duration-200" href="/">
					<Image src={instagramIcon} alt="instagram" height={35} />
				</a>
				<a className="link-underline link-underline-black hover:scale-105 duration-200" href="/">
					<Image src={tiktokIcon} alt="instagram" height={35} />
				</a>
				<a className="link-underline link-underline-black hover:scale-105 duration-200" href="/">
					<FaSnapchat className="text-4xl hover:scale-105 duration-200 cursor-pointer" fill="var(--pink-color)" />
				</a>
			</div> */}
		</div>

		<div className="flex items-center w-full">
			<div className="flex grow font-semibold">
				<p className="text-center">©Romain Flori-Cantrelle {new Date().getFullYear()}</p>
			</div>
			{/* <div className="flex space-x-9">
				<a className="text-center link-underline link-underline-black hover:scale-105 duration-200 font-semibold" href="/info" rel="noreferrer">
					Mentions legales
				</a>
			</div> */}
		</div>
	</div>
)

export default Footer
