import styled from "styled-components"
// import localFont from "@next/font/local"
import { motion, HTMLMotionProps } from "framer-motion"

import Image from "../image/image.component"

import { IArticle } from "../../types/resources.types"
export interface IProps extends HTMLMotionProps<"article"> {
	article: IArticle
}

// const pFont = localFont({
// 	src: [
// 		{
// 			path: "../../assets/fonts/hubot-sans/WOFF-2/Hubot-Sans-MediumSemi.woff2",
// 			weight: "550",
// 			style: "normal",
// 		},
// 	],
// })

// const headerFont = localFont({
// 	src: [
// 		{
// 			path: "../../assets/fonts/mona-sans/WOFF-2/Mona-Sans-MediumWide.woff2",
// 			weight: "600",
// 			style: "normal",
// 		},
// 	],
// })

const ResourcesArticle = ({ article, ...props }: IProps) => {
	return (
		<Article {...props}>
			<IconFigure>
				<Image
					src={article.icon.src}
					alt={article.icon.alt}
					width={65}
					height={65}
				/>
			</IconFigure>
			<P>{article.label}</P>
			<H3 dangerouslySetInnerHTML={{ __html: article.heading }} />
			<Button href={article.cta.href} target="_blank" rel="noopener noreferrer">
				<p>{article.cta.label}</p>
				<Arrow>
					<Line />
					<figure>
						<Image
							src="/assets/resourcess-section/right-arrow.svg"
							alt="right arrow"
							width={"100%"}
							height={"100%"}
						/>
					</figure>
				</Arrow>
			</Button>
		</Article>
	)
}

export default ResourcesArticle

const Article = styled(motion.article)`
	position: relative;
	/* border: 1px solid red; */
	width: 100%;
	max-width: 33.6rem;

	padding: 3.6rem;
	/* background-color: #181726; */
	background: linear-gradient(0deg, #040713, #040713), #070b1f;

	&:before {
		content: "";
		position: absolute;
		z-index: -1;
		top: -1px;
		left: -1px;
		right: -1px;
		bottom: -1px;
		background: linear-gradient(
			180deg,
			rgba(52, 101, 131, 0.5) 0%,
			rgba(164, 202, 225, 0.56) 129.84%
		);
	}
`

const IconFigure = styled.figure`
	margin-bottom: 11.45rem;
`

const P = styled.p`
	text-transform: uppercase;
	font-size: 1.2rem;
	line-height: 140%;

	letter-spacing: 0.05em;
	text-transform: uppercase;

	color: #9cddff;
	font-stretch: 100;

	opacity: 0.7;
	margin-bottom: 2.07rem;

	font-family: "HubotSans";
	font-weight: 550;
	font-style: medium;
`

const H3 = styled.h3`
	font-weight: 600;
	font-size: 3.5rem;
	line-height: 140%;

	text-transform: capitalize;
	margin-bottom: 5rem;

	color: #ffffff;

	font-family: "MonaSans";
	font-weight: 600;
	font-style: normal;

	sup {
		vertical-align: top;
		font-size: 2rem;
		position: relative;
		top: -0.85rem;
	}
`

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
	background-color: #85d1ff;
`

const Button = styled.a`
	cursor: pointer;
	background: rgba(76, 213, 243, 0.12);
	display: grid;
	grid-template-columns: auto 1fr;
	align-items: center;
	gap: 2.5rem;

	border: 1px solid #85d1ff;
	border-radius: 0.4rem;
	padding: 1.234rem 3.29rem;
	width: 100%;
	text-align: start;

	font-family: "Chakra Petch";
	font-style: normal;
	font-weight: 700;
	font-size: 1.43726rem;
	line-height: 150%;

	text-transform: uppercase;
	transition: all 0.3s ease-out;

	color: #85d1ff;

	&:hover {
		color: #ffffff;
		background-color: rgba(1, 107, 172, 0.9);
	}

	&:active {
		background-color: #3192cd;
		border: 1px solid #a6ddff;
		color: #ffffff;
	}
`
