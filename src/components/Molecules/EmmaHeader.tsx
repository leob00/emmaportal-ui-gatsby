import * as React from 'react'
import {
	AppBar,
	Box,
	Button,
	Grid,
	IconButton,
	InputAdornment,
	Menu,
	MenuItem,
	TextField,
	Toolbar,
	useScrollTrigger,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { navigate } from 'gatsby'
import ToolsAndResourcesMenu from './Menus/ToolsAndResourcesMenu'

// This is used to make the header stick to the top
function ElevationScroll({ children }: { children: React.ReactElement<any> }) {
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	})

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	})
}

const EmmaHeader: React.FunctionComponent = ({}: {}) => {
	const [anchorEl, setAnchorEl] = React.useState<(EventTarget & HTMLButtonElement) | null>(null)
	const open = Boolean(anchorEl)
	const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}
	/**
	 * TODO: When the below is uncommented, it enters an infinite loop
	 * @param {} location
	 */
	const handleMenuClick = (location: string) => {
		setAnchorEl(null)
		navigate(location)
	}

	return (
		<ElevationScroll>
			<AppBar sx={{ backgroundColor: 'white' }}>
				<Toolbar>
					<Grid
						container
						columns={{ xs: 3, sm: 3, md: 3, lg: 3, xl: 3 }}
						justifyContent='space-between'
						alignItems='center'
					>
						<Grid item>
							<Grid container alignItems='center' spacing={1}>
								<Grid
									item
									sx={{
										flexGrow: 1,
										display: {
											xs: 'block',
											sm: 'block',
											md: 'block',
											lg: 'none',
											xl: 'none',
										},
									}}
								>
									<Box>
										<IconButton id='nav-button' color='secondary' onClick={handleClick}>
											<MenuIcon />
										</IconButton>
										<Menu
											id='nav-menu'
											anchorEl={anchorEl}
											open={open}
											onClose={handleClose}
											MenuListProps={{
												'aria-labelledby': 'nav-button',
											}}
										>
											<MenuItem
												onClick={() => {
													handleMenuClick('/')
												}}
											>
												Market Data
											</MenuItem>
											<MenuItem
												onClick={() => {
													handleMenuClick('/YieldCurve')
												}}
											>
												Tools &amp; Resources
											</MenuItem>
											<MenuItem
												onClick={(e) => {
													handleMenuClick('/AboutEmma')
												}}
											>
												About
											</MenuItem>
											<MenuItem
												onClick={() => {
													handleMenuClick('/ssr')
												}}
											>
												Support
											</MenuItem>
										</Menu>
									</Box>
								</Grid>
								<Grid item>
									<Grid container alignItems='center'>
										<Grid
											item
											sx={{
												flexGrow: 1,
												mt: 1,
												display: {
													xs: 'none',
													sm: 'none',
													md: 'none',
													lg: 'block',
													xl: 'block',
												},
											}}
										>
											<Link to='/'>
												<StaticImage
													src='../../assets/images/emma-logo.png'
													width={151}
													height={60}
													alt='logo'
													placeholder='tracedSVG'
												></StaticImage>
											</Link>
										</Grid>
										<Grid
											item
											sx={{
												flexGrow: 1,
												mt: 1,
												display: {
													xs: 'block',
													sm: 'block',
													md: 'block',
													lg: 'none',
													xl: 'none',
												},
											}}
										></Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>

						<Grid
							item
							sx={{
								flexGrow: 1,
								display: {
									xs: 'none',
									sm: 'none',
									md: 'none',
									lg: 'block',
									xl: 'block',
								},
							}}
						>
							<Grid
								container
								justifyContent='space-evenly'
								alignItems='center'
								columns={{ xs: 4, sm: 4, md: 4, lg: 4, xl: 4 }}
							>
								<Grid item>
									<Button variant='text'>Market Data</Button>
								</Grid>
								<Grid item>
									<ToolsAndResourcesMenu />
								</Grid>
								<Grid item>
									<Button
										onClick={() => {
											handleMenuClick('/AboutEmma')
										}}
										//color="secondary"
										variant='text'
									>
										About
									</Button>
								</Grid>
								<Grid item>
									<Button variant='text'>Support</Button>
								</Grid>
							</Grid>
						</Grid>

						<Grid item>
							<Grid
								container
								alignItems='center'
								columns={{ xs: 3, sm: 3, md: 3, lg: 3, xl: 3 }}
								spacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}
							>
								<Grid
									item
									sx={{
										flexGrow: 1,
										display: {
											xs: 'none',
											sm: 'block',
											md: 'block',
											lg: 'block',
											xl: 'block',
										},
									}}
								>
									<TextField
										color='secondary'
										size='small'
										InputProps={{
											startAdornment: (
												<InputAdornment position='start'>
													<IconButton>
														<SearchIcon />
													</IconButton>
												</InputAdornment>
											),
										}}
									></TextField>
								</Grid>
								<Grid
									item
									sx={{
										flexGrow: 1,
										display: {
											xs: 'none',
											sm: 'none',
											md: 'block',
											lg: 'block',
											xl: 'block',
										},
									}}
								>
									<>
										<Button variant='outlined'>Sign up</Button>
									</>
								</Grid>
								<Grid item>
									<>
										<Button variant='contained' onClick={() => {}}>
											Sign In
										</Button>
									</>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</ElevationScroll>
	)
}

export default EmmaHeader
