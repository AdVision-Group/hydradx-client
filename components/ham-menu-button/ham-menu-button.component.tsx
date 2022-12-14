// Utils
import styled from "styled-components"
import localFont from "@next/font/local"

// Types
export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	isOpen: boolean
}

// const labelFont = localFont({
// 	src: [
// 		{
// 			path: "../../assets/fonts/hubot-sans/WOFF-2/Hubot-Sans-MediumWide.woff2",
// 			weight: "500",
// 			style: "normal",
// 		},
// 	],
// })

const HamMenuButton: React.FC<IProps> = ({ isOpen, onClick, ...props }) => {
	return (
		<ToggleButton {...props} onClick={onClick}>
			<Label>Menu</Label>
			<Hamburger className={isOpen ? "open" : ""}>
				<Left />
				<Right />
			</Hamburger>
		</ToggleButton>
	)
}

export default HamMenuButton

const ToggleButton = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 1.1rem;
`

const Label = styled.p`
	color: ${({ theme }) => theme.hamMenu.labelColor};
	font-weight: 500;
	font-size: 1.6rem;
	margin-top: 0.4rem;
	text-transform: uppercase;

	font-family: "HubotSans";
	font-weight: 500;
	font-style: normal;
`

const Left = styled.div`
	transition-duration: 0.5s;
	position: absolute;
	height: 0.2rem;
	width: 1rem;
	/* right: 2rem; */
	top: 1rem;
	/* border-radius: 99rem 0 0 99rem; */
	background-color: ${({ theme }) => theme.hamMenu.color};

	&:before {
		transition-duration: 0.5s;
		position: absolute;
		width: 1rem;
		height: 0.2rem;
		/* border-radius: 99rem 0 0 99rem; */
		background-color: ${({ theme }) => theme.hamMenu.color};

		content: "";
		top: -0.7rem;
		right: 0;
	}

	&:after {
		transition-duration: 0.5s;
		position: absolute;
		width: 1rem;
		height: 0.2rem;
		/* border-radius: 99rem 0 0 99rem; */
		background-color: transparent;
		content: "";
		top: 0.7rem;
		right: 0;
	}

	&:hover {
		cursor: pointer;
	}
`

const Right = styled.div`
	transition-duration: 0.5s;
	position: absolute;
	height: 0.2rem;
	width: 1rem;
	left: 1rem;
	top: 1rem;
	/* border-radius: 0 99rem 99rem 0; */
	background-color: ${({ theme }) => theme.hamMenu.color};

	&:before {
		transition-duration: 0.5s;
		position: absolute;
		width: 1rem;
		height: 0.2rem;
		/* border-radius: 0 99rem 99rem 0; */
		background-color: ${({ theme }) => theme.hamMenu.color};
		content: "";
		top: -0.7rem;
		right: 0;
	}

	&:after {
		transition-duration: 0.5s;
		position: absolute;
		width: 1rem;
		height: 0.2rem;
		/* border-radius: 0 99rem 99rem 0; */
		background-color: ${({ theme }) => theme.hamMenu.bottomColor};
		content: "";
		top: 0.7rem;
		right: 0;
	}

	&:hover {
		cursor: pointer;
	}
`

const Hamburger = styled.div`
	display: block;
	position: relative;
	width: 2rem;
	height: 2rem;
	/* top: 10rem; */
	/* left: 0; */
	transition-duration: 0.5s;
	/* @include btn(0px, 100px); */
	background-color: transparent;
	/* margin-bottom: 0.4rem; */

	&.open {
		${Left} {
			transition-duration: 0.5s;
			background: transparent;
			/* border-radius: 99rem; */

			&:before {
				transform: rotateZ(45deg) scaleX(1.2) translate(2px, 2px);
				background-color: ${({ theme }) => theme.hamMenu.color};
				/* border-radius: 99rem; */
			}

			&:after {
				transform: rotateZ(-45deg) scaleX(1.3) translate(2px, -0.8px);
				background-color: ${({ theme }) => theme.hamMenu.color};
				/* border-radius: 1 99rem 99rem 1; */
			}
		}

		${Right} {
			transition-duration: 0.5s;
			background: transparent;
			/* border-radius: 99rem; */

			&:before {
				transform: rotateZ(-45deg) scaleX(1.2) translate(-2px, 2px);
				background-color: ${({ theme }) => theme.hamMenu.color};
				/* border-radius: 1 99rem 99rem 1; */
			}

			&:after {
				width: 0.7rem;
				transform: rotateZ(45deg) scaleX(1.6) translate(-0.2px, 0px);
				background-color: ${({ theme }) => theme.hamMenu.bottomColor};
				/* border-radius: 99rem; */
			}
		}
	}

	&:hover {
		cursor: pointer;
	}
`
