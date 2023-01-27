import styled from "styled-components"

import H2 from "../h2/content-h2.component"
import RoadmapItem from "../roadmap-item/roadmap-item.component"
import Image from "../image/image.component"

import { IRoadmapItem } from "../../types/roadmap-item.types"

const RoadmapSection = () => {
  const roadmapItems: IRoadmapItem[] = [
    {
      titleColor: "#9CDDFF",
      title: "Omnipool",
      status: "Completed",
      process: "100%",
      barColor:
        "linear-gradient(270deg, #9CDDFF 10.04%, rgba(55, 103, 128, 0) 97.53%)",
      icon: {
        src: "/assets/roadmap-section/1.svg",
        alt: "1",
      },
    },
    {
      titleColor: "#9CDDFF",
      title: "DAI <sup>(wormhole)</sup>",
      status: "Completed",
      process: "100%",
      barColor:
        "linear-gradient(270deg, #9CDDFF 10.04%, rgba(55, 103, 128, 0) 97.53%)",
      icon: {
        src: "/assets/roadmap-section/2.svg",
        alt: "2",
      },
    },
    {
      titleColor: "#5FC7FF",
      title: "DOT",
      status: "Completed",
      process: "100%",
      barColor:
        "linear-gradient(270deg, #5FC7FF 10.04%, rgba(55, 103, 128, 0) 97.53%)",
      icon: {
        src: "/assets/roadmap-section/3.svg",
        alt: "3",
      },
    },
    {
      titleColor: "#2AB4FF",
      title: "Liquidity provisioning",
      status: "Completed",
      process: "100%",
      barColor:
        "linear-gradient(270deg, #2AB4FF 10.04%, rgba(55, 103, 128, 0) 97.53%)",
      icon: {
        src: "/assets/roadmap-section/4.svg",
        alt: "4",
      },
    },
    {
      titleColor: "#2AB4FF",
      title: "wETH <sup>(wormhole)</sup>",
      status: "Completed",
      process: "100%",
      barColor:
        "linear-gradient(270deg, #2AB4FF 10.04%, rgba(55, 103, 128, 0) 97.53%)",
      icon: {
        src: "/assets/roadmap-section/4.svg",
        alt: "4",
      },
    },
    {
      titleColor: "#2AB4FF",
      title: "wBTC <sup>(wormhole)</sup>",
      status: "Completed",
      process: "100%",
      barColor:
        "linear-gradient(270deg, #2AB4FF 10.04%, rgba(55, 103, 128, 0) 97.53%)",
      icon: {
        src: "/assets/roadmap-section/4.svg",
        alt: "4",
      },
    },
    {
      titleColor: "#07A8FF",
      title: "USDT <sup>(native)</sup>",
      status: "Soon<sup>TM</sup>",
      process: "85%",
      barColor:
        "linear-gradient(270deg, #07A8FF 10.04%, rgba(55, 103, 128, 0) 97.53%)",
      icon: {
        src: "/assets/roadmap-section/5.svg",
        alt: "5",
      },
    },
    {
      titleColor: "#07A8FF",
      title: "Liquidity mining",
      status: "Soon<sup>TM</sup>",
      process: "73%",
      barColor:
        "linear-gradient(270deg, #2A99FF 10.04%, rgba(55, 103, 128, 0) 97.53%)",
      icon: {
        src: "/assets/roadmap-section/6.svg",
        alt: "6",
      },
    },
    {
      titleColor: "#127FFF",
      title: "Stableswap pool",
      status: "Soon<sup>TM</sup>",
      process: "65%",
      barColor:
        "linear-gradient(270deg, #127FFF 10.04%, rgba(55, 103, 128, 0) 97.53%)",
      icon: {
        src: "/assets/roadmap-section/7.svg",
        alt: "7",
      },
    },
    {
      titleColor: "#1263FF",
      title: "USDC <sup>(native)</sup>",
      status: "Working on it",
      process: "55%",
      barColor:
        "linear-gradient(270deg, #1263FF 10.04%, rgba(55, 103, 128, 0) 97.53%)",
      icon: {
        src: "/assets/roadmap-section/8.svg",
        alt: "8",
      },
    },
    {
      titleColor: "#1263FF",
      title: "ETH <sup>(snowbridge)</sup>",
      status: "Working on it",
      process: "50%",
      barColor:
        "linear-gradient(270deg, #1246FF 10.04%, rgba(55, 103, 128, 0) 97.53%)",
      icon: {
        src: "/assets/roadmap-section/9.svg",
        alt: "9",
      },
    },
    {
      titleColor: "#1263FF",
      title: "Dynamic fees",
      status: "Working on it",
      process: "50%",
      barColor:
        "linear-gradient(270deg, #033AFF 10.04%, rgba(55, 103, 128, 0) 97.53%)",
      icon: {
        src: "/assets/roadmap-section/10.svg",
        alt: "10%",
      },
    },
    // {
    // 	titleColor: "#0057FF",
    // 	title: "Fee Disribution 2.0",
    // 	status: "Working on it",
    // 	process: "45%",
    // 	barColor:
    // 		"linear-gradient(270deg, #0057FF 10.04%, rgba(55, 103, 128, 0) 97.53%)",
    // 	icon: {
    // 		src: "/assets/roadmap-section/11.svg",
    // 		alt: "11",
    // 	},
    // },
    // {
    // 	titleColor: "#0047FF",
    // 	title: "Omnipool Bond AMM",
    // 	status: "Working on it",
    // 	process: "35%",
    // 	barColor:
    // 		"linear-gradient(270deg, #0047FF 10.04%, rgba(55, 103, 128, 0) 97.53%)",
    // 	icon: {
    // 		src: "/assets/roadmap-section/12.svg",
    // 		alt: "12",
    // 	},
    // },
    {
      titleColor: "#0047FF",
      title: "Order batching",
      status: "Working on it",
      process: "40%",
      barColor:
        "linear-gradient(270deg, #0047FF 10.04%, rgba(55, 103, 128, 0) 97.53%)",
      icon: {
        src: "/assets/roadmap-section/13.svg",
        alt: "13",
      },
    },
    {
      titleColor: "#1425BB",
      title: "Liquidation engine",
      status: "Big Idea",
      process: "20%",
      barColor:
        "linear-gradient(270deg, #1425BB 10.04%, rgba(20, 37, 187, 0) 97.53%)",
      icon: {
        src: "/assets/roadmap-section/14.svg",
        alt: "14",
      },
    },
    // {
    // 	titleColor: "#1425BB",
    // 	title: "Lending",
    // 	status: "Working on it",
    // 	process: "20%",
    // 	barColor:
    // 		"linear-gradient(270deg, #1425BB 10.04%, rgba(20, 37, 187, 0) 97.53%)",
    // 	icon: {
    // 		src: "/assets/roadmap-section/15.svg",
    // 		alt: "15",
    // 	},
    // },
  ]

  return (
    <Section>
      <H2 variant="BLUE" />

      <BlueBlur>
        <Image
          className="desktop"
          src="/assets/roadmap-section/blue-blur.svg"
          alt="blue blur"
          width={"100%"}
          height={"100%"}
          style={{ objectFit: "contain" }}
        />
        <Image
          className="mobile"
          src="/assets/roadmap-section/blue-blur-mobile.svg"
          alt="blue blur"
          width={"100%"}
          height={"100%"}
          style={{ objectFit: "contain" }}
        />
      </BlueBlur>

      <Container>
        <LineFigure>
          <Image
            src="/assets/roadmap-section/line.svg"
            alt="line"
            height={"100%"}
          />
        </LineFigure>
        <Content>
          {roadmapItems.map((item, index) => (
            <RoadmapItem key={index} item={item} />
          ))}
        </Content>
      </Container>
    </Section>
  )
}

export default RoadmapSection

const Section = styled.section`
  position: relative;
  margin-bottom: 6.9rem;
  padding: 0 0 0 0.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      padding: 0;
      margin-bottom: 11rem;
      @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      }
    }
  }
`

const Container = styled.div`
  position: relative;
  max-width: 110rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: auto 1fr;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      padding: 4rem;

      background: linear-gradient(180deg, #04192b 0%, #040713 70.45%);
      border-radius: 0.8rem;

      &:before {
        content: "";
        position: absolute;
        z-index: -2;
        top: -1px;
        left: -1px;
        right: -1px;
        bottom: -1px;
        border-radius: 0.8rem;

        background: linear-gradient(
          180deg,
          rgba(100, 152, 230, 0.5) 0%,
          rgba(106, 206, 237, 0.17) 72.11%,
          rgba(158, 167, 180, 0) 100%
        );
      }
      @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      }
    }
  }
`

const BlueBlur = styled.figure`
  position: absolute;
  /* border: 1px solid red; */
  /* top: 15%; */
  top: 0rem;
  left: -2rem;
  right: -2rem;
  z-index: -2;

  .desktop {
    display: none;
    visibility: hidden;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  justify-content: space-between;
  /* border: 1px solid red; */
  margin: 7rem 0;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      margin: 4.5rem 0;
      @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      }
    }
  }
`

const LineFigure = styled.figure``
