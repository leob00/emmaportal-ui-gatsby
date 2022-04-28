import { Button, Container, Paper, Typography } from '@mui/material'
import { navigate } from '@reach/router'
import { GatsbyImage, getImage, IGatsbyImageData, StaticImage } from 'gatsby-plugin-image'
import { SourceProps } from 'gatsby-plugin-image/dist/src/components/picture'
import * as React from 'react'
import Layout from '../components/Organisms/Layout'

interface DogData {
	message: string
}

const SSRPage: React.FunctionComponent<{ serverData: DogData }> = ({ serverData }) => {
	const handleRefreshClick = async () => {
		navigate('/SSRPage')
	}
	// let image = getImage()

	return (
		<>
			<Layout>
				<Container>
					<h4>Dogs</h4>
					<Typography variant='body1' sx={{ padding: '5px' }}>
						the content below was created using SSR - Server Side Rendering and is regenerated on full page refresh
					</Typography>
					<hr></hr>
					<Typography sx={{ textAlign: 'center' }}>
						<img alt='Happy dog' src={serverData.message} />
					</Typography>
				</Container>
			</Layout>
		</>
	)
}
export default SSRPage

export async function getServerData() {
	try {
		const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
		if (!res.ok) {
			throw new Error(`Response failed`)
		}
		return {
			props: await res.json(),
		}
	} catch (error) {
		return {
			status: 500,
			headers: {},
			props: {},
		}
	}
}
