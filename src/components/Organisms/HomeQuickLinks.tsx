import { Card, CardContent, CardHeader, Divider, Grid } from '@mui/material'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const HomeQuickLinks = () => {
	return (
		<div style={{ textAlign: 'center' }}>
			<Card>
				<CardHeader>test</CardHeader>
				<CardContent>
					<StaticImage src='../../assets/images/envelope-blue-hrr.png' alt='email' />
					<section>
						<a href='https://public.govdelivery.com/accounts/VAORGMSRB/subscriber/new'>
							Sign up for the MSRB’s Email Updates
						</a>
					</section>
				</CardContent>
			</Card>
			<Divider />
			<Card>
				<CardHeader></CardHeader>
				<CardContent>
					<StaticImage src='../../assets/images/Pen-hrr-icon.png' alt='pen' />
					<section>
						<Link to='/People'>Check the Qualifications of Your Municipal Advisor</Link>
					</section>
				</CardContent>
			</Card>
			<Divider />
			<Card>
				<CardHeader></CardHeader>
				<CardContent>
					<StaticImage src='../../assets/images/document-blue-hrr.png' alt='pen' />
					<section>
						<a href='https://www.msrb.org/glossary'>View a Glossary of Municipal Securities Terms</a>
					</section>
				</CardContent>
			</Card>
		</div>
	)
}

export default HomeQuickLinks
