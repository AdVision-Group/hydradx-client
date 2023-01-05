// Utils
import { HTMLMotionProps } from "framer-motion"
import { LinkProps } from "next/link"

export interface IStyledProps {
	top?: string
	bottom?: string
	left?: string
	right?: string
	width?: string
	display?: string
	rounded?: boolean
	disabled?: boolean
	// outline?: boolean
	// variant?: "DEFAULT" | "GREEN" | "GREEN_BLACK"
}

export interface IButtonProps extends HTMLMotionProps<"button">, IStyledProps {}

export interface IButtonLinkProps extends HTMLMotionProps<"div">, IStyledProps {
	href: string
	target?: string
	rel?: string
}
