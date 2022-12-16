import styled, { css } from "styled-components"

import H2 from "../h2/content-h2.component"
// import { Button } from "../button/button.component"
import Image from "../image/image.component"

const ProtocolSection = () => {
	return (
		<div style={{ position: "relative" }}>
			<RedBlur>
				<Image
					className="desktop"
					src="/assets/protocol-section/red-blur.svg"
					alt="red blur"
					width={"100%"}
					height={"100%"}
					style={{ objectFit: "contain" }}
				/>
				<Image
					className="mobile"
					src="/assets/protocol-section/red-blur-mobile.svg"
					alt="red blur"
					width={"100%"}
					height={"100%"}
					style={{ objectFit: "contain" }}
				/>
			</RedBlur>
			<Section>
				<H2 variant="RED" />

				<Article1>
					<OverlayBackground />
					<DragonFigure>
						<Image
							src="/assets/protocol-section/first-ilu-dragon.png"
							alt="dragon ilu"
							width={"100%"}
							height={"100%"}
						/>
					</DragonFigure>
					<TowerFigure>
						<Image
							src="/assets/protocol-section/first-ilu-tower.png"
							alt="tower ilu"
							width={"100%"}
							height={"100%"}
						/>
					</TowerFigure>
					<ContentContainer>
						<H3>
							Embrace sustainable
							<br /> protocol design.
						</H3>
						<P>
							HydraDX is designed and built to last.
							<br /> Offering a value proposition for everyone: Traders, LPs and
							HDX hodlers.
						</P>
						{/* <Button>Learn more</Button> */}
					</ContentContainer>
				</Article1>

				<Article2>
					<OverlayBackground />

					<ContentContainer>
						<H3>Enjoy state of the art security.</H3>
						<P>
							The HydraDX Omnipool is fully audited and supported by a generous
							bug bounty program. Cutting-edge mechanisms such as liquidity
							caps, protocol fees and circuit-breakers work together to protect
							your liquidity.
						</P>
						<ButtonsContainer>
							<Button
								href="https://docs.hydradx.io/omnipool_security"
								target="_blank"
								rel="noopener noreferrer"
							>
								Learn more
							</Button>
							{/* <IconButton>
								<figure>
									<Image
										src="/assets/protocol-section/bug-icon.svg"
										alt="bug icon"
										width={"100%"}
										height={"100%"}
									/>
								</figure>
								<p>bug bounties</p>
							</IconButton> */}
						</ButtonsContainer>
					</ContentContainer>

					<EyeFigure>
						<Image
							className="desktop"
							src="/assets/protocol-section/second-ilu-eye.png"
							alt="eye ilu"
							width={"100%"}
							height={"100%"}
							style={{
								objectFit: "cover",
							}}
						/>
						<Image
							className="mobile"
							src="/assets/protocol-section/second-ilu-eye-mobile.png"
							alt="eye ilu"
							width={"100%"}
							height={"100%"}
							style={{
								objectFit: "cover",
							}}
						/>
					</EyeFigure>
				</Article2>

				<Article3>
					<OverlayBackground />

					<CoinFigure>
						<Image
							className="desktop"
							src="/assets/protocol-section/third-ilu-coin.png"
							alt="coin ilu"
							width={"100%"}
							height={"100%"}
							style={{
								objectFit: "cover",
							}}
						/>
						<Image
							className="mobile"
							src="/assets/protocol-section/third-ilu-coin-mobile.png"
							alt="coin ilu"
							width={"100%"}
							height={"100%"}
							style={{
								objectFit: "cover",
							}}
						/>
					</CoinFigure>

					<ContentContainer>
						<H3>Decentralized and Community-first.</H3>
						<P>
							HydraDX is a decentralized protocol with a community-first
							approach. All decisions affecting the protocol are adopted in a
							democratic process.
						</P>
						<Button
							href="https://docs.hydradx.io/democracy_intro"
							target="_blank"
							rel="noopener noreferrer"
						>
							Learn more
						</Button>
					</ContentContainer>
				</Article3>
			</Section>
		</div>
	)
}

export default ProtocolSection

const RedBlur = styled.figure`
	position: absolute;
	/* border: 1px solid red; */
	/* top: 15%; */
	top: -15%;
	left: -2rem;
	right: -2rem;
	z-index: -2;

	.desktop {
		display: none;
		visibility: hidden;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			top: -18rem;

			.desktop {
				display: block;
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

const Section = styled.section`
	position: relative;
	max-width: 110rem;
	margin: 0 auto;
	/* padding: 0 0.5rem; */
`

const H3 = styled.h3`
	font-size: 2.8rem;

	/* text-transform: capitalize; */

	color: #ffffff;
	font-stretch: 125;

	text-shadow: 3px 3px 0px rgba(11, 2, 5, 0.66);

	margin-bottom: 1.6rem;

	font-family: "HubotSans";
	font-weight: 550;
	font-style: medium;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			font-size: 4.2rem;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const P = styled.p`
	font-family: "Chakra Petch";
	font-style: normal;
	font-weight: 400;
	font-size: 1.6rem;
	line-height: 150%;

	color: #ffffff;

	opacity: 0.8;

	margin-bottom: 3rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			font-size: 1.8rem;
			margin-bottom: 4rem;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const TowerFigure = styled.figure`
	position: relative;
	max-width: 86.933rem;
	/* border: 1px solid blue; */
	margin: 0 -2.5rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			margin: 0 auto;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const DragonFigure = styled.figure`
	position: absolute;
	top: -13%;
	left: 50%;
	z-index: 1;
	transform: translateX(-50%);
	/* max-width: 86.933rem;
	margin: 0 auto; */
	width: 65vw;
	max-width: 47.704rem;
	/* 
	margin: 0 auto; */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: 55vw;
		/* top: -22%; */
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			top: -8rem;
			width: 100%;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const OverlayBackground = styled.div`
	position: absolute;
`

const ContentContainer = styled.div`
	position: relative;
	z-index: 1;
`

const ButtonsContainer = styled.div`
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;

	button {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			gap: 3rem;
			button {
				width: initial;
				display: flex;
				justify-content: unset;
			}

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const EyeFigure = styled.figure`
	/* max-width: 60.1rem; */
	/* width: 100%; */
	/* border: 1px solid red; */

	.desktop {
		display: none;
		visibility: hidden;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			max-width: 55rem;
			position: absolute;
			top: 0;
			bottom: 0;
			right: 0;

			.desktop {
				display: block;
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

const CoinFigure = styled.figure`
	.desktop {
		display: none;
		visibility: hidden;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			max-width: 55rem;
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;

			.desktop {
				display: block;
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

const buttonStyles = css`
	cursor: crosshair;
	background: transparent;
	display: inline-block;

	border-radius: 0.4rem;
	padding: 12px 3.7rem;
	font-family: "Chakra Petch";
	font-style: normal;
	font-weight: 700;
	font-size: 1.4rem;
	line-height: 150%;

	letter-spacing: 0.105em;
	text-transform: uppercase;

	color: #ffffff;

	width: 100%;
	display: inline-flex;
	justify-content: center;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			width: initial;
			display: inline-flex;
			justify-content: unset;

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const Button = styled.a`
	${buttonStyles}

	text-align: center;
	text-transform: uppercase;
`

const IconButton = styled.button`
	${buttonStyles}
	text-align: start;
	display: flex;
	align-items: center;
	gap: 1rem;

	text-transform: uppercase;
`

const Article1 = styled.article`
	margin-top: 6rem;
	position: relative;
	/* border: 1px solid red; */
	border-radius: 0.8rem;
	background-color: #040713;

	padding: 0 2.5rem 5.6rem;
	margin-bottom: 2.3rem;

	${H3} {
		margin-top: 5rem;
		text-align: start;
	}

	${P} {
		text-align: start;
	}

	${Button} {
		background: rgba(255, 3, 103, 0.27);

		border: 1px solid #fc408c;
	}

	${OverlayBackground} {
		top: 0;
		left: 0;
		width: 100%;
		height: 40%;
		/* z-index: -1; */

		background: linear-gradient(180deg, #f6297c 0%, #040713 100%);
		border-radius: 8px 8px 0px 0px;
	}

	&:before {
		content: "";
		position: absolute;
		z-index: -2;
		top: -1px;
		left: -1px;
		right: -1px;
		bottom: -1px;
		border-radius: 0.8rem;

		/* background: linear-gradient(180deg, #85d1ff 58.16%, #040713 100%); */
		background: linear-gradient(
			0deg,
			#f6297c 1.09%,
			rgba(246, 41, 124, 0.08) 55.98%
		);
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			${H3} {
				text-align: center;
				margin-top: -5rem;
			}

			${P} {
				text-align: center;
			}

			${Button} {
				margin: 0 auto;
			}

			${OverlayBackground} {
				top: 0;
				left: 0;
				width: 100%;
				height: 60%;
			}

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`
const Article2 = styled.article`
	position: relative;
	border: 1px solid #b733cd;
	border-radius: 0.8rem;
	overflow: hidden;

	display: flex;
	flex-direction: column-reverse;
	gap: 1rem;

	margin-bottom: 2.3rem;

	${Button}, ${IconButton} {
		background: rgba(163, 62, 235, 0.2);
		border: 1px solid #ac41ef;
	}

	${ContentContainer} {
		max-width: 42.3rem;
		margin: 0 2.5rem 4.289rem;
	}

	${OverlayBackground} {
		top: 0rem;
		left: 0rem;
		right: 0rem;
		bottom: -15%;

		z-index: -1;

		background: radial-gradient(
			89.18% 56.35% at 54.46% 11.87%,
			rgba(181, 51, 226, 0.83) 0%,
			rgba(203, 52, 227, 0) 100%
		);
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			flex-direction: row;
			gap: 5.3rem;

			${ContentContainer} {
				align-self: center;
				margin: 12.1rem 0 12.1rem 4.289rem;
			}

			${OverlayBackground} {
				top: -10rem;
				left: -25rem;
				right: -20rem;
				/* width: 70%; */
				bottom: -10rem;

				z-index: -1;

				background: radial-gradient(
					29.7% 54.39% at 73.98% 50.89%,
					rgba(181, 51, 226, 0.83) 0%,
					rgba(203, 52, 227, 0) 100%
				);
			}

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`
const Article3 = styled.article`
	position: relative;
	border: 1px solid #7a43f0;
	overflow: hidden;
	border-radius: 0.8rem;

	display: flex;
	flex-direction: column;
	gap: 1rem;

	margin-bottom: 13.4rem;

	${Button} {
		/* margin: 0 auto; */

		background: rgba(97, 62, 235, 0.2);
		border: 1px solid #7941ef;
	}

	${ContentContainer} {
		max-width: 42.3rem;

		margin: 0 2.5rem 4.289rem;
	}

	${OverlayBackground} {
		top: 0rem;
		left: 0rem;
		right: 0rem;
		/* width: 70%; */
		bottom: -15%;

		z-index: -1;

		background: linear-gradient(
			0deg,
			rgba(140, 52, 227, 0) 40.73%,
			rgba(139, 51, 226, 0.83) 97.75%
		);
		transform: matrix(-1, 0, 0, 1, 0, 0);
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			gap: 5.3rem;

			${ContentContainer} {
				align-self: center;
				margin: 12.1rem 4.289rem 12.1rem auto;
			}

			${OverlayBackground} {
				top: 0rem;
				left: 0rem;
				right: -15rem;
				/* width: 70%; */
				bottom: 0rem;

				z-index: -1;

				background: linear-gradient(
					90deg,
					rgba(140, 52, 227, 0) 40.73%,
					rgba(139, 51, 226, 0.83) 97.75%
				);
				transform: matrix(-1, 0, 0, 1, 0, 0);
			}

			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`
