import styled, { css } from 'styled-components'
import { motion, Variants, useScroll, useTransform } from 'framer-motion'

// import { Button } from "../button/button.component"
import H2 from '../h2/content-h2.component'
import H3 from '../content-h3/content-h3.component'
import P from '../content-p/content-p.component'
import Image from '../image/image.component'
import Tag from '../tag/tag.component'

const OmnipoolSection = () => {
  const { scrollYProgress } = useScroll()

  const transformIlu = useTransform(scrollYProgress, [0, 0.3], [100, -300])

  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.6,
      },
    },
  }

  const contentVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const headerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.22, 1.09, 0.59, 0.95],
        duration: 0.8,
        delay: 0.1,
      },
    },
  }

  const pVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 0.8,
      y: 0,
      transition: {
        ease: [0.22, 1.09, 0.59, 0.95],
        duration: 0.8,
        delay: 0.1,
      },
    },
  }

  const iluVariants: Variants = {
    hidden: {
      opacity: 0,
      // y: 50,
    },
    visible: {
      // y: 0,
      opacity: 1,
      transition: {
        ease: [0.22, 1.09, 0.59, 0.95],
        duration: 0.8,
        delay: 0.3,
      },
    },
  }

  const chartVariants: Variants = {
    hidden: {
      opacity: 0,
      // y: 50,
    },
    visible: {
      // y: 0,
      opacity: 1,
      transition: {
        ease: [0.44, 0, 0.56, 1],
        duration: 0.6,
        delay: 0.4,
      },
    },
  }

  const coinVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        ease: [0.5, 0, 0.88, 0.77],
        duration: 0.6,
        delay: 0.6,
      },
    },
  }

  const blurVariants: Variants = {
    hidden: {
      opacity: 1,
      backdropFilter: 'blur(15px)',
    },
    visible: {
      opacity: 1,
      backdropFilter: 'blur(15px)',
      transition: {
        ease: [0.5, 0, 0.88, 0.77],
        duration: 0.6,
        delay: 0.6,
      },
    },
  }

  return (
    <Section>
      <IluFigure
        variants={iluVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          y: transformIlu,
        }}
      >
        <Image
          className="desktop-app-ilu"
          src={'/assets/hero-section/destop-app-ilu-v2.png'}
          alt={'desktop app ilu'}
          width="100%"
          height="100%"
          effect="blur"
        />
        <Image
          className="mobile-app-ilu"
          src={'/assets/hero-section/mobile-app-ilu.png'}
          alt={'mobile app ilu'}
          width="100%"
          height="100%"
          effect="blur"
        />
      </IluFigure>

      <BlueBlur>
        <Image
          className="desktop"
          src="/assets/omnipool/blue-blue.svg"
          alt="blue blur"
          width={'100%'}
          height={'100%'}
          style={{ objectFit: 'contain' }}
        />
        <Image
          className="mobile"
          src="/assets/omnipool/blue-blue-mobile.svg"
          alt="blue blur"
          width={'100%'}
          height={'100%'}
          style={{ objectFit: 'contain' }}
        />
      </BlueBlur>
      <H2 variant="LIGHTBLUE" />

      <GridContainer>
        <Content
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <H3 variants={headerVariants}>
            Meet single-sided liquidity provisioning.
          </H3>
          <P variants={pVariants}>
            The innovative design of the Omnipool allows you to provide
            liquidity only for the asset you want.
          </P>

          <Button
            variants={headerVariants}
            href="https://docs.hydradx.io/omnipool_lp"
            target="_blank"
            rel="noopener noreferrer"
          >
            EXPLORE LIQUIDITY
          </Button>
        </Content>
        <ContentFigure
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Blur variants={blurVariants} initial="hidden" animate="visible" />
          <FirstIlu variants={iluVariants}>
            <Blur />
            <Image
              src="/assets/omnipool/first-ilu-v2.png"
              alt="first ilu"
              width={'100%'}
              height={'100%'}
              style={{
                objectFit: 'contain',
              }}
            />
          </FirstIlu>
          <FirstIluCoin variants={coinVariants}>
            <Image
              src="/assets/omnipool/first-ilu-coin.svg"
              alt="first ilu coin"
              width={'100%'}
              height={'100%'}
              style={{ objectFit: 'contain' }}
            />
          </FirstIluCoin>
        </ContentFigure>
      </GridContainer>

      <BlueBlur2>
        <Image
          className="desktop"
          src="/assets/omnipool/blue-blur-2.svg"
          alt="blue blur"
          width={'100%'}
          height={'100%'}
          style={{ objectFit: 'contain' }}
        />
        <Image
          className="mobile"
          src="/assets/omnipool/blue-blur-2-mobile.svg"
          alt="blue blur"
          width={'100%'}
          height={'100%'}
          style={{ objectFit: 'contain' }}
        />
      </BlueBlur2>
      {/* <GridContainer>
        <Content
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <H3 variants={headerVariants}>Experience less impermanent loss.</H3>
          <P variants={pVariants}>
            Liquidity Providers are supported by several non-inflationary
            mechanisms for mitigating impermanent loss.
          </P>

          <Button
            variants={headerVariants}
            href="https://docs.hydradx.io/omnipool_impermanent_loss"
            target="_blank"
            rel="noopener noreferrer"
          >
            LEARN MORE
          </Button>
        </Content>
        <ContentFigure
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ThirdIlu variants={iluVariants}>
            <Image
              src="/assets/omnipool/third-ilu.png"
              alt="third ilu"
              width={'100%'}
              height={'100%'}
            />
          </ThirdIlu>
        </ContentFigure>
      </GridContainer> */}

      <GridContainer>
        <Content
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <H3 variants={headerVariants}>
            Rediscover <br />
            efficient trading.
          </H3>
          <P variants={pVariants}>
            By combining all assets in a single pool, the Omnipool enables
            capital-efficient trading with fewer hops and lower slippage.
          </P>

          <Button
            variants={headerVariants}
            href="https://docs.hydradx.io/omnipool_trading"
            target="_blank"
            rel="noopener noreferrer"
          >
            LEARN MORE
          </Button>
        </Content>
        <ContentFigure
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SecondIlu variants={iluVariants}>
            <Image
              src="/assets/omnipool/second-ilu-v2.png"
              alt="second ilu"
              width={'100%'}
              height={'100%'}
              style={{
                objectFit: 'contain',
              }}
            />
            <LineFigure>
              <Image
                src="/assets/omnipool/second-ilu-line.svg"
                alt="line ilu"
                width={'100%'}
                height={'100%'}
                style={{
                  objectFit: 'contain',
                }}
              />
            </LineFigure>
          </SecondIlu>
          <ChartFigure variants={chartVariants}>
            <Image
              src="/assets/omnipool/second-ilu-chart.svg"
              alt="chart ilu"
              width={'100%'}
              height={'100%'}
              style={{
                objectFit: 'contain',
              }}
            />
          </ChartFigure>
        </ContentFigure>
      </GridContainer>

      <GridContainer>
        <Content
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Tag label="New" />
          <H3 variants={headerVariants}>DCA like a pro.</H3>
          <P variants={pVariants}>
            Don’t let market turbulence bring you down. Spread your trades over
            time to achieve average pricing and less slippage. As easy as never
            before.
          </P>

          <Button
            variants={headerVariants}
            href="https://app.hydradx.io/dca"
            target="_blank"
            rel="noopener noreferrer"
          >
            TRADE DCA
          </Button>
        </Content>
        <ContentFigure
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FourthIlu variants={iluVariants}>
            <Image
              src="/assets/omnipool/DCA-ilu-3.png"
              alt="DCA ilu"
              width={'100%'}
              height={'100%'}
              style={{ objectFit: 'contain' }}
            />
          </FourthIlu>
        </ContentFigure>
      </GridContainer>

      <GridContainer>
        <Content
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <H3 variants={headerVariants}>Earn rewards from Hydrated Farms.</H3>
          <P variants={pVariants}>
            Provide liquidity for selected assets and receive additional rewards
            on top of trading fees. Paid out HDX or any other supported asset.
          </P>

          <Button
            variants={headerVariants}
            href="https://docs.hydradx.io/omnipool_hydrated_farms"
            target="_blank"
            rel="noopener noreferrer"
          >
            LEARN MORE
          </Button>
        </Content>
        <ContentFigure
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FourthIluCoin variants={coinVariants}>
            <Image
              src="/assets/omnipool/fourth-ilu-coin.svg"
              alt="fourth ilu coin"
              width={'100%'}
              height={'100%'}
              style={{ objectFit: 'contain' }}
            />
          </FourthIluCoin>
          <FourthIlu variants={iluVariants}>
            <Blur />
            <Image
              src="/assets/omnipool/fourth-ilu-v2.png"
              alt="fourth ilu"
              width={'100%'}
              height={'100%'}
            />
          </FourthIlu>
          <Blur />
        </ContentFigure>
      </GridContainer>

      <GridContainer>
        <Content
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <H3 variants={headerVariants}>Hydrate your Treasury.</H3>
          <P variants={pVariants}>
            Built for B2B. Any project/DAO Treasury can provide liquidity using
            XCM and gain instant exposure to an ocean of assets. Trustless,
            without hidden costs and while accumulating (diversified) POL from
            trading fees.
          </P>

          <Button
            variants={headerVariants}
            href="https://docs.hydradx.io/omnipool_treasuries"
            target="_blank"
            rel="noopener noreferrer"
          >
            LEARN MORE
          </Button>
        </Content>
        <ContentFigure
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <HydrateIlu variants={iluVariants}>
            <Image
              src="/assets/omnipool/hydrate-ilu-v2.png"
              alt="second ilu"
              width={'100%'}
              height={'100%'}
              style={{
                objectFit: 'contain',
              }}
            />
          </HydrateIlu>
        </ContentFigure>
      </GridContainer>
    </Section>
  )
}

export default OmnipoolSection

const BlueBlur = styled.figure`
  position: absolute;
  /* border: 1px solid red; */
  /* top: 15%; */
  top: 50rem;
  left: -2rem;
  right: -2rem;
  z-index: -2;

  .desktop {
    display: none;
    visibility: hidden;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      top: 50rem;

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

const BlueBlur2 = styled.figure`
  position: absolute;
  /* border: 1px solid red; */
  top: 55%;
  /* top: 0rem; */
  left: -2rem;
  right: -2rem;
  z-index: -2;

  .desktop {
    display: none;
    visibility: hidden;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      top: 65%;
      /* top: 50rem; */

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
  padding-top: 6.6rem;
  margin-bottom: 15rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      margin-bottom: 10rem;
      /* margin-bottom: 25rem; */
      padding-top: 9.156rem;
      @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      }
    }
  }
`

const IluFigure = styled(motion.figure)`
  width: 100%;
  max-width: 34.543rem;
  margin: 0 auto 4rem;

  .desktop-app-ilu {
    display: none;
    visibility: hidden;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      margin: 0 auto 12.1rem;
      max-width: 102.9rem;

      .desktop-app-ilu {
        display: block;
        visibility: visible;
      }
      .mobile-app-ilu {
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
  font-family: 'Chakra Petch';
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 150%;

  letter-spacing: 0.105em;
  text-transform: uppercase;

  color: #ffffff;

  transition: all 0.3s ease-out;
`

const Button = styled(motion.a)`
  ${buttonStyles}

  text-align: center;
  text-transform: uppercase;
`

const GridContainer = styled(motion.div)`
  /* max-width: 32.4rem;
	margin: 0 auto; */
  min-height: 48.5rem;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* border: 1px solid red; */

  gap: 6rem;
  margin-bottom: 10rem;

  &:nth-of-type(1) {
    /* border: 1px solid red; */
    flex-direction: column;
    overflow: hidden;
    margin: 0 -2rem 10rem -2rem;
    padding: 0 2rem;

    ${Button} {
      background: rgba(76, 213, 243, 0.12);

      border: 1px solid #85d1ff;
      color: #85d1ff;

      &:hover {
        background-color: rgba(1, 107, 172, 0.9);
        color: #ffffff;
      }

      &:active {
        background-color: #3192cd;
        border: 1px solid #a6ddff;
        color: #ffffff;
      }
    }
  }

  &:nth-of-type(2) {
    /* border: 1px solid green; */
    flex-direction: column;
    overflow: hidden;
    margin: 0 -2rem 10rem -2rem;
    padding: 0 2rem;

    ${Button} {
      background: rgba(76, 213, 243, 0.12);
      border: 1px solid #85d1ff;
      color: #85d1ff;

      &:hover {
        background-color: rgba(1, 107, 172, 0.9);
        color: #ffffff;
      }

      &:active {
        background-color: #3192cd;
        border: 1px solid #a6ddff;
        color: #ffffff;
      }
    }
  }

  &:nth-of-type(3) {
    position: relative;
    /* border: 1px solid blue; */
    flex-direction: column;

    ${Button} {
      background: rgba(76, 213, 243, 0.12);
      border: 1px solid #85d1ff;
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
    }
  }

  &:nth-of-type(4) {
    position: relative;
    /* border: 1px solid blue; */
    flex-direction: column;

    ${Button} {
      background: rgba(76, 213, 243, 0.12);
      border: 1px solid #a6ddff;
      color: #a6ddff;

      &:hover {
        background-color: rgba(1, 107, 172, 0.9);
        color: #ffffff;
      }

      &:active {
        background-color: #3192cd;
        color: #ffffff;
        border: 1px solid #a6ddff;
      }
    }
  }

  &:nth-of-type(5) {
    /* border: 1px solid yellow; */
    flex-direction: column;

    ${Button} {
      background: rgba(76, 213, 243, 0.12);
      border: 1px solid #a6ddff;
      color: #ffffff;

      &:hover {
        background-color: rgba(1, 107, 172, 0.9);
        color: #ffffff;
      }

      &:active {
        background-color: #3192cd;
        border: 1px solid #a6ddff;
        color: #ffffff;
      }
    }
  }

  &:nth-of-type(6) {
    /* border: 1px solid yellow; */
    flex-direction: column;

    ${Button} {
      background: rgba(76, 213, 243, 0.12);
      border: 1px solid #a6ddff;
      color: #ffffff;

      &:hover {
        background-color: rgba(1, 107, 172, 0.9);
        color: #ffffff;
      }

      &:active {
        background-color: #3192cd;
        border: 1px solid #a6ddff;
        color: #ffffff;
      }
    }
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      gap: 5rem;
      max-width: 102rem;
      margin-bottom: 9.2rem;

      &:nth-of-type(1) {
        flex-direction: row-reverse;
        overflow: unset;
        margin: 13.2rem auto 9.2rem;
      }

      &:nth-of-type(2) {
        flex-direction: row;
        margin: 0 auto 9.2rem;
      }

      &:nth-of-type(3) {
        flex-direction: row-reverse;
        margin: 0 auto 9.2rem;
      }

      &:nth-of-type(4) {
        flex-direction: row;
        margin: 0 auto 9.2rem;
      }

      &:nth-of-type(5) {
        flex-direction: row-reverse;
        margin: 0 auto 9.2rem;
      }

      &:nth-of-type(6) {
        flex-direction: row-reverse;
        margin: 0 auto 9.2rem;
      }

      @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      }
    }
  }
`

const Content = styled(motion.div)`
  /* border: 1px solid red; */
  align-self: center;
  max-width: 46.3rem;
  width: 100%;
`

const ContentFigure = styled(motion.figure)`
  /* border: 1px solid blue; */
  position: relative;
  flex-grow: 1;
`

const Blur = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  backdrop-filter: blur(1.5rem);
  background-color: #04071301;
  border: 1px solid #04071301;
`

const FirstIlu = styled(motion.figure)`
  position: relative;
  width: 100%;
  max-width: 47.408rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  /* &:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		background-color: #04071301;
		backdrop-filter: blur(1.5rem);
	} */
`

const FirstIluCoin = styled(motion.figure)`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;

  z-index: -3;

  width: 18.252rem;
  height: 18.173rem;

  top: -7rem;
  right: -7rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      width: 26.702rem;
      height: 26.586rem;

      top: -12rem;
      right: -8rem;
      @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      }
    }
  }
`

const SecondIlu = styled(motion.figure)`
  position: relative;
  width: 100%;
  max-width: 47.408rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HydrateIlu = styled(motion.figure)`
  position: relative;
  width: 100%;
  max-width: 47.408rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LineFigure = styled(motion.figure)`
  position: absolute;
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;

  top: 50%;
  left: 2.2rem;
  right: 0.6rem;
  transform: translateY(-50%);

  z-index: 2;
`

const ChartFigure = styled(motion.figure)`
  position: absolute;
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;

  /* top: 50%; */
  left: -25%;
  right: -6rem;
  bottom: 10%;
  /* transform: translateY(-50%); */

  z-index: 1;
`

const ThirdIlu = styled(motion.figure)`
  width: 100%;
  max-width: 47.408rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const FourthIlu = styled(motion.figure)`
  position: relative;
  width: 100%;
  max-width: 49.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* border: 1px solid red; */

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      }
    }
  }
`
const OTCFigure = styled(motion.figure)`
  position: relative;
  width: 100%;
  /* max-width: 49.2rem; */
  margin: 0 -4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      }
    }
  }
`

const FourthIluCoin = styled(motion.figure)`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  z-index: -2;

  width: 18.252rem;
  height: 18.173rem;

  top: -5rem;
  left: -10rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      width: 26.702rem;
      height: 26.586rem;

      top: -8rem;
      left: -14rem;
      @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      }
    }
  }
`
