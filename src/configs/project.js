import {env} from "./env"

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export default {
	title: "Romain",
	description: "tmp",
	images: "sherpai_favicon.png",
	lang: "fr",
	metadataBase: env.BASE_URL,
	// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#icons
	icons: {
		icon: "/sherpai_favicon.png",
		shortcut: "/sherpai_favicon.png",
		apple: "/sherpai_favicon.png",
		other: {
			rel: "favicon",
			url: "/sherpai_favicon.png",
		},
	},
	// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#robots
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#opengraph
	openGraph: {
		title: "Romain FC",
		description: "tmp",
		url: env.BASE_URL,
		siteName: "Romain FC",
		images: [
			{
				url: `${env.BASE_URL}/sherpai_favicon.png`,
				width: 800,
				height: 600,
				alt: "Image",
			},
			{
				url: `${process.env.NEXT_PUBLIC_BASE_URL}/sherpai_favicon.png`,
				width: 1800,
				height: 1600,
				alt: "Custom image alt",
			},
		],
		locale: "fr_FR",
		type: "website",
	},
}
