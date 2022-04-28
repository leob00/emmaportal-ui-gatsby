import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material'
import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Organisms/Layout'

// markup
const IndexPage: React.FunctionComponent = () => {
	return (
		<Layout>
			<main>
				<Box
					sx={{
						mt: 10,
						bgcolor: '#003668',
						borderTopWidth: 3,
						pt: 5,
						pb: 5,
					}}>
					<Container maxWidth='lg'>
						<Stack direction='row' spacing={4} justifyContent='center'>
							<Container>
								<Typography variant='h4' align='left' color='white' gutterBottom>
									The Official Source for Municipal Securities Data and Documents
								</Typography>
								<Typography align='left' color='white' paragraph>
									Provided by the Municipal Securities Rulemaking Board
								</Typography>
								<Stack direction='row' spacing={2} justifyContent='left'>
									<Button
										size='large'
										variant='text'
										sx={{ backgroundColor: 'white', '&:hover': { backgroundColor: 'rgba(222, 222, 222, 0.94)' } }}>
										Find Issuer
									</Button>
									<Button
										size='large'
										variant='text'
										sx={{ backgroundColor: 'white', '&:hover': { backgroundColor: 'rgba(222, 222, 222, 0.94)' } }}>
										Find Securities
									</Button>
								</Stack>
							</Container>
							<Container>
								<Paper>
									<Box sx={{ mx: 10, align: 'center' }}>
										<br />
										<Typography variant='h4' align='center' gutterBottom>
											Welcome to EMMA
										</Typography>
										<Box>
											<Typography sx={{ textAlign: 'center' }}>
												<h3>
													<a href='https://www.gatsbyjs.com/docs' target='_blank' rel='noreferrer'>
														Gatsby
													</a>
												</h3>
											</Typography>
											<ul>
												<li>
													<Link to='/Rules'>SSG - Static Site Generation</Link>
												</li>
												<li>
													<Link to='/AboutEmma'>DSG - Deferred Static Generation</Link>
													<ul style={{ listStyle: 'none' }}>
														<li>
															<a
																href='https://www.gatsbyjs.com/docs/how-to/rendering-options/using-deferred-static-generation/'
																target='_blank'>
																Documentation
															</a>
														</li>
													</ul>
												</li>
												<li>
													<Link to='/YieldCurve'>CSR - Client Side Rendering</Link>
												</li>
												<li>
													<Link to='/SSRPage'>SSR - Server Side Rendering (Sort of)</Link>
													<ul style={{ listStyle: 'none' }}>
														<li>
															<a
																href='https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/'
																target='_blank'>
																SSR api's
															</a>
														</li>
														<li>
															<a
																href='https://www.gatsbyjs.com/blog/2019-04-02-behind-the-scenes-what-makes-gatsby-great/#why-server-side-render'
																target='_blank'>
																More on SSR
															</a>
														</li>
														<li>
															<a href='https://www.gatsbyjs.com/docs/glossary/server-side-rendering/' target='_blank'>
																SSR Documentation
															</a>
														</li>
													</ul>
												</li>
												<li>
													Deploy
													<ul style={{ listStyle: 'none' }}>
														<li>
															<a
																href='https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-s3-cloudfront/'
																target='_blank'>
																AWS S3/CloudFront
															</a>
														</li>
														<li>
															<a
																href='https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-aws-amplify/'
																target='_blank'>
																AWS Amplify
															</a>
														</li>
														<li>
															<a
																href='https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-vercel/'
																target='_blank'>
																Vercel
															</a>
														</li>
													</ul>
												</li>
											</ul>
										</Box>
										<br />
										<br />
									</Box>
								</Paper>
							</Container>
						</Stack>
					</Container>
				</Box>
				<Box sx={{ height: 200 }}></Box>
			</main>
		</Layout>
	)
}

export default IndexPage
