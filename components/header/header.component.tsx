import styled, { css } from "styled-components"
// import localFont from "@next/font/local"
import { AnimatePresence, motion, Variants } from "framer-motion"

import Image from "../image/image.component"
import Link from "next/link"
import HamMenuButton from "../ham-menu-button/ham-menu-button.component"
import { ButtonLink } from "../button/button.component"
import { GoPlus } from "react-icons/go"

import { useBoolean } from "usehooks-ts"
import { useEffect } from "react"

import { INavItem } from "../../types/nav.types"

export interface IProps {
	navItems: INavItem[]
}

// const navFont = localFont({
// 	src: [
// 		{
// 			path: "../../assets/fonts/blender-pro/BlenderPro-Book.woff2",
// 			weight: "500",
// 			style: "normal",
// 		},
// 	],
// })

const Header = ({ navItems }: IProps) => {
	const { value: isOpen, toggle: toggleMenu } = useBoolean(false)
	const { value: showCta, setValue: setShowCta } = useBoolean(false)
	const { value: isSocialMenuOpen, toggle: toggleSocialMenu } =
		useBoolean(false)

	const ctaContainerVariants: Variants = {
		hidden: {
			opacity: 0,
			y: -20,
			transition: {
				ease: [0.12, 0.23, 0.06, 1.09],
				duration: 0.5,
			},
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				ease: [0.12, 0.23, 0.06, 1.09],
				duration: 0.5,
			},
		},
	}

	const MOBILE_NAV_ITEMS = [
		{
			label: "Docs",
			href: "https://docs.hydradx.io/",
			rel: "noopener noreferrer",
			target: "_blank",
		},
		{
			label: "Tokenomics",
			href: "https://docs.hydradx.io/tokenomics",
			rel: "noopener noreferrer",
			target: "_blank",
		},
		{
			label: "Github",
			href: "https://github.com/galacticcouncil",
			rel: "noopener noreferrer",
			target: "_blank",
		},
		{
			label: "Newsletter",
			href: "https://hydradx.substack.com/",
			rel: "noopener noreferrer",
			target: "_blank",
		},
		{
			// ref: socialRefButton,
			label: "Socials",
			// isHovered: isSocialButtonHovered,
			isOpen: isSocialMenuOpen,
			toggle: toggleSocialMenu,
			list: [
				{
					label: "Discord",
					href: "https://discord.gg/kkmY35UxAG",
					rel: "noopener noreferrer",
					target: "_blank",
					icon: {
						src: "/assets/socials/discord-white.svg",
						alt: "discord",
						// height: 24,
					},
				},
				{
					label: "Twitter",
					href: "https://twitter.com/hydra_dx",
					rel: "noopener noreferrer",
					target: "_blank",
					icon: {
						src: "/assets/socials/twitter-white.svg",
						alt: "twitter",
					},
				},
				{
					label: "Telegram",
					href: "https://t.me/hydradx",
					rel: "noopener noreferrer",
					target: "_blank",
					icon: {
						src: "/assets/socials/telegram-white.svg",
						alt: "telegram",
					},
				},
				{
					label: "Substack",
					href: "https://hydradx.substack.com/",
					rel: "noopener noreferrer",
					target: "_blank",
					icon: {
						src: "/assets/socials/substack-white.svg",
						alt: "substack",
					},
				},
				{
					label: "Reddit",
					href: "https://www.reddit.com/r/hdx/",
					rel: "noopener noreferrer",
					target: "_blank",
					icon: {
						src: "/assets/socials/reddit-white.svg",
						alt: "reddit",
					},
				},
			],
		},
		// {
		// 	label: "Blog",
		// 	rel: "noopener noreferrer",
		// 	target: "_blank",
		// 	href: "https://hydradx.substack.com/",
		// },
	]

	useEffect(() => {
		window.onscroll = () => {
			let currentScrollPos = window.pageYOffset

			if (currentScrollPos > 600) {
				setShowCta(true)
			} else {
				if (currentScrollPos <= 0) return
				setShowCta(false)
			}
		}
	})

	return (
		<>
			<HeaderContainer>
				<Container>
					<Link href={"/"}>
						<LogoFigure>
							<Image
								className="desktop"
								src="/assets/logo-v2.svg"
								alt="HydraDX"
								width={"100%"}
								height={"100%"}
								style={{ objectFit: "contain" }}
							/>
							<Image
								className="mobile"
								src="/assets/logo-mobile.svg"
								alt="HydraDX"
								width={"100%"}
								height={"100%"}
								style={{ objectFit: "contain" }}
							/>
						</LogoFigure>
					</Link>

					<Nav>
						<Ul>
							{navItems.map((item, index) => (
								<Li key={index}>
									<Link {...item}>
										{item.label}{" "}
										{item.hasIcon && (
											<span>
												<Image
													src="/assets/icons/link-icon.svg"
													alt="link icon"
												/>
											</span>
										)}
									</Link>
								</Li>
							))}
						</Ul>
					</Nav>

					<CtaContainer>
						<AnimatePresence>
							{showCta && (
								<motion.div
									variants={ctaContainerVariants}
									initial={"hidden"}
									animate={"visible"}
									exit={"hidden"}
								>
									<ButtonLink
										className="btn"
										href="https://app.hydradx.io/#/trade"
										target="_blank"
										rel="noopener noreferrer"
									>
										ENTER OMNIPOOL
									</ButtonLink>
								</motion.div>
							)}
						</AnimatePresence>
					</CtaContainer>
					<HamMenuButton
						className="ham"
						onClick={() => toggleMenu()}
						isOpen={isOpen}
					/>
				</Container>
			</HeaderContainer>
			<AnimatePresence>
				{isOpen && (
					<MobileMenuContainer
						initial={{
							opacity: 0,
							y: -200,
						}}
						animate={{
							opacity: 1,
							y: 0,
						}}
						exit={{
							opacity: 0,
							y: -200,
						}}
						transition={{
							type: "spring",
							mass: 1,
							stiffness: 100,
							damping: 15,
						}}
					>
						<MobileNav>
							<MobileNavList>
								{MOBILE_NAV_ITEMS.map((item, index) => (
									<MobileNavItem key={index}>
										{item.href && (
											<Link
												href={item.href}
												rel={item.rel}
												target={item.target}
											>
												{item.label}
											</Link>
										)}
										{item.list && (
											<MobileDropdownButton
												isOpen={item.isOpen}
												onClick={() => item.toggle()}
											>
												<span>{item.label}</span>
												<IconSpan
													isOpen={item.isOpen}
													animate={
														item.isOpen ? { rotate: "-45deg" } : { rotate: 0 }
													}
													transition={{
														type: "spring",
														mass: 1,
														stiffness: 256,
														damping: 24,
													}}
												>
													<GoPlus />
												</IconSpan>
											</MobileDropdownButton>
										)}
										<AnimatePresence>
											{item.list && item.isOpen && (
												<MobileDropdownMenu
													initial={{ opacity: 0, height: 0 }}
													animate={{ opacity: 1, height: "auto" }}
													exit={{ opacity: 0, height: 0 }}
													transition={{
														type: "spring",
														mass: 1,
														stiffness: 256,
														damping: 24,
													}}
												>
													<MobileDropdownList>
														{item.list.map((listItem, index) => (
															<MobileDropdownMenuItem key={index}>
																<Link
																	href={listItem.href}
																	rel={listItem.rel}
																	target={listItem.target}
																>
																	<Image
																		src={listItem.icon.src}
																		alt={listItem.icon.alt}
																		effect="blur"
																		width={20}
																		height={24}
																		style={{
																			objectFit: "contain",
																			objectPosition: "center",
																		}}
																	/>

																	<span>{listItem.label}</span>
																</Link>
															</MobileDropdownMenuItem>
														))}
													</MobileDropdownList>
												</MobileDropdownMenu>
											)}
										</AnimatePresence>
									</MobileNavItem>
								))}
							</MobileNavList>
						</MobileNav>
					</MobileMenuContainer>
				)}
			</AnimatePresence>
		</>
	)
}

export default Header

const HeaderContainer = styled.header`
	height: 6.4rem;
	width: 100%;
	padding: 0 2rem;
	position: fixed;
	top: 0;
	left: 0;
	background-color: ${({ theme }) => theme.header.background};
	z-index: 9999;
	backdrop-filter: blur(2.7rem);
	border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			.ham {
				display: none;
				visibility: hidden;
			}

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const Container = styled.div`
	max-width: 163.4rem;
	margin: 0 auto;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const LogoFigure = styled.figure`
	display: flex;
	align-items: center;
	justify-content: start;

	.desktop {
		display: none;
		visibility: hidden;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			.desktop {
				display: flex;
				visibility: visible;
			}
			.mobile {
				display: none;
				visibility: hidden;
			}

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const Nav = styled.nav`
	display: none;
	visibility: hidden;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			display: block;
			visibility: visible;

			font-family: "BlenderProBook";
			font-weight: 500;
			font-style: normal;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const Ul = styled.ul`
	display: flex;
	align-items: center;
	gap: 4.1rem;
`

const Li = styled.ul`
	font-size: 1.6rem;

	a {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		color: ${({ theme }) => theme.header.navItem.color};
		transition: color 0.2s ease-out;

		&:hover {
			color: ${({ theme }) => theme.header.navItem.hoverColor};
		}
	}
`

const CtaContainer = styled.div`
	display: none;
	visibility: hidden;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			display: block;
			visibility: visible;
			width: 26.9rem;

			.btn {
				padding: 0.8rem 3.6rem;
				font-size: 1.4rem;
			}

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const MobileMenuContainer = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99;

	width: 100%;
	height: 100vh;

	background-color: gba(4, 7, 19, 0.7);
	backdrop-filter: blur(27px);

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			display: none;
			visibility: hidden;
		}
	}
`

const navLinksStyles = css`
	cursor: pointer;
	font-size: 1.8rem;
	font-weight: 500;
	line-height: 1.8;
	color: #fff;
	transition: all 0.3s ease-in;

	&:hover {
		color: #ff99c2;
		/* background-color: rgba(158, 167, 186, 0.06); */
	}
`

const MobileNav = styled.nav`
	margin-top: 6.4rem;
	padding: 0 3.6rem 8rem;

	height: 100%;
	overflow-y: auto;
`

const MobileNavList = styled.ul`
	font-family: "BlenderProBook";
	font-weight: 500;
	font-style: normal;
`

const MobileNavItem = styled.li`
	a {
		${navLinksStyles};

		display: block;
		padding: 2rem 0;
		color: #fff;
	}

	&:not(:last-child) {
		border-bottom: 0.461563px solid rgba(76, 243, 168, 0.12);
	}
`

const MobileDropdownButton = styled.button<{ isOpen: boolean }>`
	${navLinksStyles};
	background-color: transparent;
	outline: none;
	border: none;
	padding: 2rem 0;

	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 0.5rem;

	span {
		display: flex;
		align-items: center;
		justify-content: center;
		color: ${({ isOpen }) => (isOpen ? "#FC408C" : "#fff")};
	}

	&:hover {
		span {
			&:nth-of-type(1) {
				transition: all 0.3s ease-in;
				color: #ff99c2;
			}
		}
	}
`

const IconSpan = styled(motion.span)<{ isOpen: boolean }>`
	/* transition: 0.3s; */
	color: ${({ isOpen }) => (isOpen ? "#FC408C" : "#fff")};
`

const MobileDropdownMenu = styled(motion.div)`
	overflow: hidden;
`

const MobileDropdownList = styled.ul`
	margin: 0 1rem;
`

const MobileDropdownMenuItem = styled(motion.li)`
	/* padding: 2rem 0; */

	a {
		${navLinksStyles};

		display: flex;
		align-items: center;
		gap: 1.5rem;
		padding: 2rem 2.4rem;
		color: #fff;

		&:hover {
			color: #ff99c2;
			background-color: rgba(158, 167, 186, 0.06);
		}
	}

	span {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	&:not(:last-child) {
		border-bottom: 0.461563px solid rgba(76, 243, 168, 0.12);
	}
`
