import styled from "styled-components"
// import localFont from "@next/font/local"
import { motion, Variants, useScroll, useTransform } from "framer-motion"

import { Tooltip } from "react-tooltip"
import { Button } from "../button/button.component"
import Image from "../image/image.component"
import Link from "next/link"
import { useState } from "react"

import "react-tooltip/dist/react-tooltip.css"

const HeroSection = () => {
	const [isAnimationDone, setIsAnimationDone] = useState(false)

	const { scrollYProgress } = useScroll()

	const transformIlu = useTransform(scrollYProgress, [0, 0.3], [1, 1.3])

	const socials = [
		{
			id: "reddit",
			tooltip: "Reddit",
			href: "https://www.reddit.com/r/hdx/",
			icon: {
				src: "/assets/hero-section/socials/reddit.svg",
				alt: "reddit",
			},
			mobileIcon: {
				src: "/assets/socials/reddit.svg",
				alt: "reddit",
			},
		},
		{
			id: "substack",
			tooltip: "Substack",
			href: "https://hydradx.substack.com/",
			rel: "noopener noreferrer",
			target: "_blank",
			icon: {
				src: "/assets/hero-section/socials/substack-desktop.svg",
				alt: "substack",
			},
			mobileIcon: {
				src: "/assets/socials/substack.svg",
				alt: "substack",
			},
		},
		{
			id: "twitter",
			tooltip: "Twitter",
			href: "https://twitter.com/hydra_dx",
			rel: "noopener noreferrer",
			target: "_blank",
			icon: {
				src: "/assets/hero-section/socials/twitter-desktop-v4.png",
				alt: "twitter",
			},
			mobileIcon: {
				src: "/assets/socials/twitter-v2.png",
				alt: "twitter",
			},
		},
		{
			id: "discord",
			tooltip: "Discord",
			href: "https://discord.gg/kkmY35UxAG",
			rel: "noopener noreferrer",
			target: "_blank",
			icon: {
				src: "/assets/hero-section/socials/discord-desktop.svg",
				alt: "discord",
			},
			mobileIcon: {
				src: "/assets/socials/discord.svg",
				alt: "discord",
			},
		},

		{
			id: "telegram",
			tooltip: "Telegram",
			href: "https://t.me/hydradx",
			rel: "noopener noreferrer",
			target: "_blank",
			icon: {
				src: "/assets/hero-section/socials/telegram-desktop.svg",
				alt: "telegram",
			},
			mobileIcon: {
				src: "/assets/socials/telegram.svg",
				alt: "telegram",
			},
		},
		{
			id: "github",
			tooltip: "Github",
			href: "https://github.com/galacticcouncil",
			rel: "noopener noreferrer",
			target: "_blank",
			icon: {
				src: "/assets/hero-section/socials/github-desktop.svg",
				alt: "github",
			},
			mobileIcon: {
				src: "/assets/socials/github.svg",
				alt: "github",
			},
		},
	]

	const bgVariants: Variants = {
		hidden: {
			opacity: 0,
			scale: 1.2,
		},
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				ease: [0.12, 0.23, 0.34, 1],
				duration: 1.4,
			},
		},
	}

	const socialVariants: Variants = {
		hidden: {
			opacity: 0,
			y: 100,
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
				delay: 1.5,
			},
		},
	}

	const heroVariants: Variants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
			},
		},
	}

	const logoVariants: Variants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				ease: [0.12, 0.23, 0, 1.01],
				duration: 2.4,
				delay: 1.2,
			},
		},
	}

	const titleVariants: Variants = {
		hidden: {
			opacity: 0,
			y: -40,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				ease: [0.12, 0.23, 0, 1.01],
				duration: 1.4,
			},
		},
	}

	const pVariants: Variants = {
		hidden: {
			opacity: 0,
			y: -20,
		},
		visible: {
			opacity: 0.8,
			y: 0,
			transition: {
				ease: [0.12, 0.23, 0, 1.01],
				duration: 1.8,
				delay: 0.3,
			},
		},
	}

	const buttonsContainerVariants: Variants = {
		hidden: {
			opacity: 0,
			y: -20,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				ease: [0.12, 0.23, 0, 1.01],
				duration: 2,
				delay: 0.6,
			},
		},
	}

	const footerVariants: Variants = {
		hidden: {
			opacity: 0,
			y: -20,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				ease: [0.12, 0.23, 0, 1.01],
				duration: 1.8,
				delay: 0.8,
			},
		},
	}

	return (
		<>
			<Section>
				<OverlayBackground
					variants={bgVariants}
					initial="hidden"
					animate="visible"
					style={{
						scale: isAnimationDone ? transformIlu : 1,
					}}
					onAnimationComplete={() => {
						setIsAnimationDone(true)
					}}
				>
					<BackgroundFigure className="desktop">
						<Image
							className="desktop back"
							src={"/assets/hero-section/bg-ilu-v4-min.png"}
							alt={"Background ilu"}
							width={"100%"}
							height={"100%"}
							style={{ objectFit: "cover" }}
						/>
					</BackgroundFigure>
					<BackgroundFigure className="mobile">
						<Image
							className="back"
							src={"/assets/hero-section/bg-ilu-mobile-v2.png"}
							alt={"Background ilu"}
							width={"100%"}
							height={"100%"}
							style={{ objectFit: "cover" }}
						/>
					</BackgroundFigure>
				</OverlayBackground>

				<motion.div variants={heroVariants} initial="hidden" animate="visible">
					<LogoFigure variants={logoVariants}>
						<Image
							src={"/assets/hero-section/hydra-logo.svg"}
							alt={"Hydra logo"}
							width={"100%"}
							height={"100%"}
							style={{ objectFit: "contain" }}
						/>
					</LogoFigure>

					<H1 variants={titleVariants}>
						An Ocean of
						<br /> Liquidity for Polkadot
					</H1>
					<P variants={pVariants}>
						Trade an abundance of assets in a single pool.
						<br /> The HydraDX Omnipool is efficient,
						<br /> sustainable and trustless.
					</P>

					<ButtonsContainer variants={buttonsContainerVariants}>
						{/* <Button>ENTER OMNIPOOL</Button> */}
						<Button disabled>COMING SOON</Button>
					</ButtonsContainer>

					<Footer variants={footerVariants}>
						<p>Secured by</p>
						<figure>
							<Image
								src={"/assets/hero-section/polkadot-v2.svg"}
								alt={"polkadot logo"}
								width={"100%"}
								height={"100%"}
							/>
						</figure>
					</Footer>
				</motion.div>
			</Section>

			<SocialDirectory
				variants={socialVariants}
				initial="hidden"
				animate="visible"
			>
				{socials.map((social, index) => (
					<Link
						id={social.id}
						href={social.href}
						key={index}
						rel={social.rel}
						target={social.target}
					>
						<Tooltip
							anchorId={social.id}
							content={social.tooltip}
							place="top"
							style={{ fontFamily: '"Chakra Petch", sans-serif' }}
						/>

						<SocialFigure>
							<Image
								src={social.icon.src}
								alt={social.icon.alt}
								width={30}
								height={30}
							/>
						</SocialFigure>
					</Link>
				))}
			</SocialDirectory>
			<MobileSocialDirectory>
				{socials.map((social, index) => (
					<Link
						href={social.href}
						key={index}
						rel={social.rel}
						target={social.target}
					>
						<SocialFigure>
							<Image
								src={social.mobileIcon.src}
								alt={social.mobileIcon.alt}
								width={30}
								height={30}
							/>
						</SocialFigure>
					</Link>
				))}
			</MobileSocialDirectory>
		</>
	)
}

export default HeroSection

const Section = styled.section`
	padding: 8.1rem 2rem 13.1rem 2rem;
	position: relative;
	overflow: hidden;
	/* border: 1px solid red; */
	margin: -2.5rem -2rem 0 -2rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			padding: 7.6rem 2rem 2rem 2rem;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const BackgroundFigure = styled(motion.figure)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`

const OverlayBackground = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;

	.snake {
		display: none;
		visibility: hidden;
	}

	.desktop {
		display: none;
		visibility: hidden;
	}

	.back {
		position: relative;
		z-index: -2;
		/* border: 1px solid blue; */
	}

	.front {
		position: relative;
		z-index: -1;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		.snake {
			display: block;
			visibility: visible;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}

		.desktop {
			display: flex;
			visibility: visible;
		}

		.mobile {
			display: none;
			visibility: hidden;
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const LogoFigure = styled(motion.figure)`
	width: 5.808rem;
	height: 4.748rem;
	margin: 0 auto 3.4rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			width: 10.263rem;
			height: 8.391rem;
			margin: 0 auto 4.1rem;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const H1 = styled(motion.h1)`
	text-align: center;
	margin-bottom: 2rem;

	font-size: 3.4rem;
	line-height: 130%;

	font-family: "HubotSans";
	font-weight: 900;
	font-style: bold;

	background: linear-gradient(233.13deg, #ffffff 28.57%, #9bbdff 101.94%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	text-fill-color: transparent;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			font-size: 6rem;
			line-height: 120%;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const P = styled(motion.p)`
	text-align: center;
	font-family: "Chakra Petch", sans-serif;
	font-size: 1.6rem;
	line-height: 150%;

	text-align: center;
	color: #ffffff;
	opacity: 0.8;
	margin-bottom: 4.8rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			font-size: 2.8rem;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const ButtonsContainer = styled(motion.div)`
	display: flex;
	justify-content: center;
`

const SocialDirectory = styled(motion.div)`
	display: none;
	visibility: hidden;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			visibility: visible;
			display: flex;

			flex-direction: row;
			justify-content: flex-end;
			align-items: center;
			padding: 1rem 2rem;
			gap: 1.7rem;

			background: linear-gradient(
				180deg,
				rgba(0, 4, 29, 0.63) 0%,
				rgba(0, 4, 29, 0.252) 98.17%
			);
			border: 0.673701px solid rgba(176, 219, 255, 0.2);
			backdrop-filter: blur(2rem);
			border-radius: 8.57262px;

			position: fixed;
			bottom: 2.6rem;
			right: 2.6rem;
			z-index: 99;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const MobileSocialDirectory = styled.div`
	display: flex;
	justify-content: center;
	gap: 2.877rem;
	flex-wrap: wrap;
	margin-top: 2.1rem;
	/* margin-bottom: 5.9rem; */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			display: none;
			visibility: hidden;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const SocialFigure = styled.figure`
	display: flex;
	justify-content: center;
	align-items: center;
`

const Footer = styled(motion.div)`
	display: none;
	visibility: hidden;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			visibility: visible;
			margin-top: 8.6rem;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 0.83rem;

			font-family: "Chakra Petch";
			font-style: normal;
			font-weight: 500;
			font-size: 1.44553rem;
			line-height: 150%;

			color: #fff3f3;

			figure {
				display: flex;
				justify-content: center;
				align-items: center;
			}

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`
