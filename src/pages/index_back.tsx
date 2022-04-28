import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import HeroSlider from '../components/Organisms/HeroSlider'
import HomeLeftMenu from '../components/Organisms/HomeLeftMenu'
import HomeQuickLinks from '../components/Organisms/HomeQuickLinks'
import Layout from '../components/Organisms/Layout'

// markup
const IndexPageOld: React.FunctionComponent = () => {
	return (
		<>
			<Layout>
				<div>
					<h3>Home</h3>
					<Typography variant='body2'>images are served from static local file system (not CMS)</Typography>
					<hr></hr>
				</div>
				<div>
					<Grid container spacing={2}>
						<Grid item xs={2}>
							<HomeLeftMenu />
						</Grid>
						<Grid item xs={8}>
							<Box sx={{ alignItems: 'center', paddingTop: '50px' }}>
								<HeroSlider />
							</Box>
						</Grid>
						<Grid item xs={2}>
							<HomeQuickLinks />
						</Grid>
					</Grid>
				</div>
			</Layout>
		</>
	)
}

export default IndexPageOld
