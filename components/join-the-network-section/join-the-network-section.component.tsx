import styled from "styled-components"
import localFont from "@next/font/local"

import Image from "../image/image.component"

// const headerFont = localFont({
// 	src: [
// 		{
// 			path: "../../assets/fonts/mona-sans/WOFF-2/Mona-Sans-BoldWide.woff2",
// 			weight: "700",
// 			style: "bold",
// 		},
// 	],
// })

// const articleHFont = localFont({
// 	src: [
// 		{
// 			path: "../../assets/fonts/mona-sans/WOFF-2/Mona-Sans-BoldWide.woff2",
// 			weight: "700",
// 			style: "bold",
// 		},
// 	],
// })

const JoinTheNetworkSection = () => {
	return (
		<Section>
			<H2>Join the network.</H2>

			<Grid>
				<Article>
					<IluFigure>
						<Image
							src="/assets/join-the-netwrok-section/ilu-left.png"
							alt="list actions"
							width={"100%"}
							height={"100%"}
						/>
					</IluFigure>
					<IconFigure>
						<Image
							src="/assets/join-the-netwrok-section/list-actions-v2.png"
							alt="list actions"
							width={"100%"}
							height={"100%"}
						/>
					</IconFigure>
					<Content>
						<H3>
							Explore
							<br /> Hydra<sup>DX</sup> docs
						</H3>
						<P>
							Learn more about the Hydra<sup>DX</sup> Protocol.
						</P>
						<Button
							href="https://docs.hydradx.io/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p>explore</p>{" "}
							<Arrow>
								<Line />
								<figure>
									<Image
										src="/assets/join-the-netwrok-section/right-arrow.svg"
										alt="right arrow"
										width={"100%"}
										height={"100%"}
									/>
								</figure>
							</Arrow>
						</Button>
					</Content>
				</Article>
				<Article>
					<IluFigure>
						<Image
							src="/assets/join-the-netwrok-section/ilu-right.png"
							alt="list actions"
							width={"100%"}
							height={"100%"}
						/>
					</IluFigure>
					<IconFigure>
						<Image
							src="/assets/join-the-netwrok-section/discord.svg"
							alt="discord"
							width={"100%"}
							height={"100%"}
						/>
					</IconFigure>
					<Content>
						<H3>
							Join
							<br /> discord community
						</H3>
						<P>A tribe of Hydraheads is looking forward to meet you.</P>
						<Button
							href="https://discord.gg/kkmY35UxAG"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p>JOIN DISCORD</p>
							<Arrow>
								<Line />
								<figure>
									<Image
										src="/assets/join-the-netwrok-section/right-arrow.svg"
										alt="right arrow"
										width={"100%"}
										height={"100%"}
									/>
								</figure>
							</Arrow>
						</Button>
					</Content>
				</Article>
			</Grid>
		</Section>
	)
}

export default JoinTheNetworkSection

const Arrow = styled.span`
	/* width: 100%; */
	display: flex;
	/* grid-template-columns: 1fr auto; */
	align-items: center;

	figure {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 0.68rem;
		height: 0.68rem;
	}
`

const Line = styled.span`
	display: block;
	width: 100%;
	height: 1px;
	background-color: #ffffff;
`

const Section = styled.section`
	max-width: 110rem;
	margin: 0 auto 12.396rem;
`

const H2 = styled.h2`
	font-size: 3.4rem;
	line-height: 110%;
	max-width: 32rem;

	letter-spacing: 0.02em;
	margin-bottom: 4.4rem;

	color: #ffffff;

	font-family: "MonaSans";
	font-weight: 700;
	font-style: bold;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			margin-bottom: 1.5rem;
			max-width: unset;
			font-size: 5.2rem;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const Grid = styled.div`
	display: grid;
	/* border: 1px solid green; */
	grid-template-columns: 1fr;
	grid-gap: 4.7rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			grid-template-columns: 6fr 5fr;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const H3 = styled.h3`
	font-size: 3.2rem;
	line-height: 120%;

	letter-spacing: 0.005em;
	text-transform: capitalize;

	margin-bottom: 1.6rem;

	font-family: "MonaSans";
	font-weight: 600;
	font-style: normal;

	sup {
		vertical-align: top;
		font-size: 2.3rem;
		position: relative;
		top: -0.4rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			font-size: 4.2rem;
			margin-bottom: 2.9rem;
			sup {
				vertical-align: top;
				font-size: 3rem;
				position: relative;
				top: -0.7rem;
			}

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const P = styled.p`
	font-family: "Chakra Petch";
	font-style: normal;
	font-weight: 500;
	font-size: 1.6rem;
	line-height: 150%;
	max-width: 26rem;

	letter-spacing: 0.005em;
	margin-bottom: 3.4rem;

	sup {
		vertical-align: top;
		font-size: 0.8rem;
		position: relative;
		top: -0.3rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			margin-bottom: 8.3rem;
			font-size: 2rem;
			sup {
				vertical-align: top;
				font-size: 1.2rem;
				position: relative;
				top: -0.3rem;
			}
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const IluFigure = styled.figure`
	position: absolute;
	top: 0;
	right: 0;
	z-index: -1;
`

const Button = styled.a`
	cursor: pointer;
	background: transparent;
	display: grid;
	grid-template-columns: auto 1fr;
	align-items: center;
	gap: 2.5rem;

	border: 1px solid #ffffff;
	border-radius: 0.4rem;
	padding: 1.234rem 2.3rem;
	width: 100%;
	text-align: start;
	font-family: "Chakra Petch";
	font-style: normal;
	font-weight: 700;
	font-size: 1.43726rem;
	line-height: 150%;

	letter-spacing: 0.105em;
	text-transform: uppercase;

	color: #ffffff;
`

const IconFigure = styled.figure`
	/* width: 6.1rem;
	height: 6.1rem;
	display: inline-flex;
	align-items: center;
	justify-content: center; */
	margin-bottom: 13.2rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			margin-bottom: 15rem;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const Content = styled.div`
	padding: 0 2.2rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			padding: unset;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const Article = styled.article`
	overflow: hidden;
	padding: 2.6rem 2.3rem 4.6rem;
	position: relative;
	z-index: 1;

	&:nth-of-type(1) {
		/* margin-top: 7.2rem; */
		background: linear-gradient(
			180deg,
			rgba(61, 88, 104, 0) 19.75%,
			rgba(133, 209, 255, 0.592) 100%
		);

		box-shadow: 0px 47px 200px rgba(41, 172, 246, 0.18);

		/* filter: drop-shadow(0px 47px 200px rgba(41, 172, 246, 0.18)); */
		border-radius: 4px;

		${H3} {
			color: #000;
		}

		${P} {
			color: #000;
		}

		${IluFigure} {
			top: 5rem;
			right: -0.5rem;
			width: 50%;
		}

		${Button} {
			@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
				@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
					max-width: 26.2rem;

					@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
					}
				}
			}
		}

		${IconFigure} {
			max-width: 26.2rem;
			width: 3.2rem;
			height: 3.2rem;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
				@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
					width: 6.1rem;
					height: 6.1rem;
					@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
					}
				}
			}
		}

		&:before {
			content: "";
			position: absolute;
			z-index: -1;
			top: 1px;
			left: 1px;
			right: 1px;
			bottom: 1px;
			border-radius: 4px;

			background: linear-gradient(180deg, #85d1ff 58.16%, #040713 100%);
		}
	}
	&:nth-of-type(2) {
		filter: drop-shadow(-7px 7px 0px rgba(7, 11, 31, 0.13));
		background: linear-gradient(
			180deg,
			rgba(246, 42, 125, 0) 12.41%,
			#f62a7d 100%
		);

		border-radius: 4px;
		/* margin-bottom: 7.2rem; */

		${H3} {
			color: #ffffff;
		}

		${P} {
			color: #ffffff;
		}

		${IluFigure} {
			top: 2rem;
			/* right: -0.5rem; */
			width: 70%;
		}

		${Button} {
			@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
				@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
					max-width: 28.5rem;

					@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
					}
				}
			}
		}

		${IconFigure} {
			max-width: 26.2rem;
			width: 3.003rem;
			height: 2.133rem;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
				@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
					width: 5.3rem;
					height: 5.3rem;
					@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
					}
				}
			}
		}

		&:before {
			content: "";
			position: absolute;
			z-index: -1;
			top: 1px;
			left: 1px;
			right: 1px;
			bottom: 1px;
			border-radius: 4px;

			background: linear-gradient(180deg, #f6297c 38.8%, #040713 100%);
		}
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			&:nth-of-type(1) {
				margin-top: 7.2rem;
			}
			&:nth-of-type(2) {
				margin-bottom: 7.2rem;
			}

			padding: 5.5rem;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`
