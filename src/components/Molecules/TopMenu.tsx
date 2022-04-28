import { Box, Divider, Typography } from '@mui/material'
import { color } from '@mui/system'
import { Link } from 'gatsby'
import React from 'react'
import TopMenuLink from '../Atoms/TopMenuLink'

export interface MenuLink {
	link: string
	name: string
}

const TopMenu: React.FunctionComponent<{ menuLinks: MenuLink[] }> = ({ menuLinks }) => {
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					textAlign: 'center',
					backgroundColor: '#ebebeb',
					padding: '10px',
				}}
			>
				<TopMenuLink to='/' text='Home' />
				<Typography sx={{ minWidth: 50 }}>|</Typography>
				<TopMenuLink to='/Rules' text='Server-side rendering' />
				<Typography sx={{ minWidth: 50 }}>|</Typography>
				<TopMenuLink to='/YieldCurve' text='Client-side rendering' />
			</Box>
		</>
	)
}

export default TopMenu
