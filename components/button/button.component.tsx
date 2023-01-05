// Utils
import { Variants } from "framer-motion"

// Compoennts
import Link from "next/link"

// Styles
import {
	ButtonContainer,
	AContainer,
	ButtonBackground,
	ButtonBorder,
} from "./button.styles"

// Types
import { IButtonLinkProps, IButtonProps } from "./button.types"

export const Button: React.FC<IButtonProps> = (props) => {
	const variants: Variants = {
		initial: {
			top: 0,
			left: 0,
			// boxShadow: "0 0 0 0 #fff",
		},
		hover: {
			top: "-0.4rem",
			left: "-0.4rem",
			// boxShadow: "4px 4px 0px 1px #fff",
			transition: {
				staggerDirection: -1,
			},
		},
		active: {
			top: 0,
			left: 0,
			backgroundColor: "#FC408C",
		},
	}

	const backgroundVariants: Variants = {
		initial: {
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
		},
		hover: {
			top: "0.4rem",
			left: "0.4rem",
			right: "-0.4rem",
			bottom: "-0.4rem",
		},
		active: {
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
		},
	}

	const borderVariants: Variants = {
		initial: {
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
		},
		hover: {
			top: "-0.1rem",
			left: "-0.1rem",
			right: "-0.1rem",
			bottom: "-0.1rem",
		},
		active: {
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
		},
	}

	return (
		<ButtonContainer
			variants={variants}
			initial={!props.disabled && "initial"}
			whileHover={!props.disabled ? "hover" : undefined}
			whileTap={!props.disabled ? "active" : undefined}
			{...props}
		>
			<span>{props.children}</span>
			{!props.disabled && <ButtonBorder variants={borderVariants} />}
			{!props.disabled && <ButtonBackground variants={backgroundVariants} />}
		</ButtonContainer>
	)
}

export const ButtonLink: React.FC<IButtonLinkProps> = (props) => {
	return (
		<AContainer {...props}>
			<Link href={props.href || "#"} target={props.target} rel={props.rel}>
				{props.children}
			</Link>
		</AContainer>
	)
}
