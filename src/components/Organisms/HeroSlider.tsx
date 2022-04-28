import React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MobileStepper from '@mui/material/MobileStepper'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'

interface ChildImageSharp {
	id: string
	gatsbyImageData: IGatsbyImageData
}
interface ImageNode {
	name: string
	childImageSharp: ChildImageSharp
	headerText?: string
}

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const HeroSlider: React.FunctionComponent<{}> = ({}) => {
	console.log('entered hero slider')
	const data = useStaticQuery(graphql`
		{
			allFile(filter: { sourceInstanceName: { eq: "images" } }) {
				edges {
					node {
						childImageSharp {
							id
							gatsbyImageData
						}
						name
					}
				}
			}
		}
	`)

	let allImageNodes = data.allFile.edges.map((e: any) => e.node) as ImageNode[]
	let sliderItems: ImageNode[] = []
	allImageNodes.forEach((item) => {
		switch (item.name) {
			case 'Board-Chairs':
				sliderItems.push({
					childImageSharp: item.childImageSharp,
					name: item.name,
					headerText: 'MSRB Announces Topics for Quarterly Board Meeting',
				})
				break
			case 'tax-bond-carousel':
				sliderItems.push({
					childImageSharp: item.childImageSharp,
					name: item.name,
					headerText: 'MSRB Alerts Investors to Tax and Liquidity Considerations of Buying Discount Bonds',
				})
				break
			case 'esg2':
				sliderItems.push({
					childImageSharp: item.childImageSharp,
					name: item.name,
					headerText: "Read the Responses to the MSRB's RFI on ESG Practices in the Muni Market",
				})
				break
			case 'EMMA-Labs-carousel':
				sliderItems.push({
					childImageSharp: item.childImageSharp,
					name: item.name,
					headerText: 'MSRB Launches EMMA Labs',
				})
				break
			case 'Transparency-Milestones':
				sliderItems.push({
					childImageSharp: item.childImageSharp,
					name: item.name,
					headerText: 'LIBOR Transition Resources',
				})
				break
		}
	})

	const theme = useTheme()
	const [activeStep, setActiveStep] = React.useState(0)
	const maxSteps = sliderItems.length

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1)
	}

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1)
	}

	const handleStepChange = (step: number) => {
		setActiveStep(step)
	}

	return (
		<Box sx={{ textAlign: 'center', alignItems: 'center', paddingTop: '10px' }}>
			<Paper
				square
				elevation={0}
				sx={{
					alignItems: 'center',
					height: 50,
					pl: 2,
					bgcolor: 'background.default',
					paddingTop: '25px',
				}}>
				<Typography sx={{ textAlign: 'center', fontWeight: 'bold', color: 'darkgreen' }}>
					{sliderItems[activeStep].headerText}
				</Typography>
			</Paper>
			<AutoPlaySwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={activeStep}
				onChangeIndex={handleStepChange}
				enableMouseEvents
				interval={6000}>
				{sliderItems.map((step, index) => (
					<div key={step.childImageSharp.id}>
						{Math.abs(activeStep - index) <= 2 ? (
							<Box
								sx={{
									height: 300,
									display: 'block',
									overflow: 'hidden',
									width: '100%',
									textAlign: 'center',
								}}>
								{/* <StaticImage src='../../assets/images/Board-Chairs.jpg' alt='board' layout='fullWidth' /> */}
								<GatsbyImage image={step.childImageSharp.gatsbyImageData} alt={step.headerText!} />
							</Box>
						) : null}
					</div>
				))}
			</AutoPlaySwipeableViews>
			<MobileStepper
				steps={maxSteps}
				position='static'
				activeStep={activeStep}
				nextButton={
					<Button size='small' onClick={handleBack} disabled={activeStep === 0}>
						{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
						Back
					</Button>
				}
				backButton={
					<Button size='small' onClick={handleNext} disabled={activeStep === maxSteps - 1}>
						Next
						{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
					</Button>
				}
			/>
		</Box>
	)
}

export default HeroSlider
