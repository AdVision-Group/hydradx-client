import styled, { css } from "styled-components"
import { motion, Variants } from "framer-motion"
import localFont from "@next/font/local"

import Image from "../image/image.component"

import { IRoadmapItem } from "../../types/roadmap-item.types"
export interface IProps {
	item: IRoadmapItem
}

// const titleFont = localFont({
// 	src: [
// 		{
// 			path: "../../assets/fonts/mona-sans/WOFF-2/Mona-Sans-MediumWide.woff2",
// 			weight: "600",
// 			style: "medium",
// 		},
// 	],
// })

const RoadmapItem = ({ item }: IProps) => {
	const itemVariants: Variants = {
		hidden: {
			opacity: 0,
			// y: 75,
			width: "0%",
		},
		visible: {
			opacity: 1,
			width: item.process,
			// y: 0,
			transition: {
				delay: 0.3,
				ease: [0.12, 0.23, 0.34, 1],
				// ease: "easeOut",
				duration: 1.7,
				// duration: isMobile ? 1 : 1.5,
				// type: "spring",
				// mass: 1,
				// stiffness: 115,
				// damping: 30,
			},
		},
	}

	const titleVariants: Variants = {
		hidden: {
			opacity: 0,
			// y: 75,
			// width: "0%",
		},
		visible: {
			opacity: 1,
			// width: item.process,
			// y: 0,
			transition: {
				delay: 1.3,
				ease: [0.12, 0.23, 0.34, 1],
				// ease: "easeOut",
				duration: 1.7,
				// duration: isMobile ? 1 : 1.5,
				// type: "spring",
				// mass: 1,
				// stiffness: 115,
				// damping: 30,
			},
		},
	}

	return (
		<Item>
			<ProgressContainer
				variants={itemVariants}
				// process={process}
				// variant={variant}
				initial={"hidden"}
				whileInView={"visible"}
				viewport={{ once: true }}
			>
				<ProgressBar width={item.process} color={item.barColor}></ProgressBar>
				<ProgressBarFigure>
					<Image
						src={item.icon.src}
						alt={item.icon.alt}
						width={"100%"}
						height={"100%"}
						style={{ objectFit: "contain" }}
					/>
				</ProgressBarFigure>
			</ProgressContainer>
			<Content
				variants={titleVariants}
				initial={"hidden"}
				whileInView={"visible"}
				viewport={{ once: true }}
			>
				<Title
					color={item.titleColor}
					dangerouslySetInnerHTML={{ __html: item.title }}
				/>
				<P dangerouslySetInnerHTML={{ __html: item.status }} />
			</Content>
		</Item>
	)
}

export default RoadmapItem

const Item = styled(motion.div)`
	width: 100%;
	/* border: 1px solid green; */
	display: grid;
	align-items: center;
	grid-template-columns: 1fr;
	gap: 0.8rem;

	&:not(:last-child) {
		margin-bottom: 1.5rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			grid-template-columns: 1fr 1fr;
			gap: 2rem;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

interface IProgressBar {
	width: string
	color: string
}

const ProgressContainer = styled(motion.div)`
	display: flex;
	align-items: center;
	/* display: grid; */
	/* grid-template-columns: 1fr auto; */
`

const ProgressBar = styled(motion.div)<IProgressBar>`
	width: ${({ width }) => width};
	/* height: 100%; */
	height: 3.308rem;
	background: ${({ color }) => color};
	/* border: 1px solid red; */
`

const ProgressBarFigure = styled(motion.figure)`
	max-height: 2.899rem;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: -0.1rem;
`

interface ITitle {
	color: string
}
const Title = styled(motion.h3)<ITitle>`
	color: ${({ color }) => color};

	font-size: 2rem;
	line-height: 100%;

	font-family: "MonaSans";
	font-weight: 600;
	font-style: normal;

	sup {
		vertical-align: top;
		font-size: 1rem;
		position: relative;
		top: -0.4rem;
	}
`

const P = styled(motion.p)`
	font-family: "Chakra Petch";
	font-style: normal;
	font-weight: 400;
	font-size: 1.4rem;
	line-height: 150%;
	/* border: 1px solid red; */
	/* vertical-align: top; */
	sup {
		vertical-align: top;
		font-size: 0.7rem;
		position: relative;
		top: -0.2rem;
	}

	color: #999ba7;
`

const Content = styled(motion.div)`
	margin-left: 2.3rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			margin-left: unset;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`
