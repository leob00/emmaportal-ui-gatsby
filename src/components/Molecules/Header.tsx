import { AppBar, Container, Toolbar } from '@mui/material'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React, { CSSProperties } from 'react'

const HeaderStyles: CSSProperties = {
	//backgroundColor: '#6292B6',
	flex: 'top',
	minHeight: '3em',
}

const Header: React.FunctionComponent<{}> = () => {
	return (
		<>
			<AppBar>
				<Toolbar sx={{ backgroundColor: 'white' }}>
					<Container>
						<Link to='/'>
							<StaticImage src='../../assets/images/emma-logo.png' alt='logo' placeholder='tracedSVG'></StaticImage>
						</Link>
					</Container>
					<Container style={{ flex: 'top' }}></Container>
				</Toolbar>
			</AppBar>
			<div></div>
		</>
	)
}
export default Header
