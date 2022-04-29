import React, { ReactNode } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { Box, CssBaseline } from '@mui/material'
import emmaTheme from '../../themes/emmaTheme'
import '../../assets/css/global.css'
import EmmaHeader from '../Molecules/EmmaHeader'
import Footer from '../Molecules/Footer'
import Helmet from 'react-helmet'
import favicon from '../../assets/images/favicon.ico'

const Layout: React.FunctionComponent<{ children?: ReactNode }> = ({ children = null }) => {
  return (
    <>
      <Helmet title='Municipal Securities Rulemaking Board: Emma' defer={false}>
        <link rel='icon' href={favicon} />
      </Helmet>
      <CssBaseline />
      <ThemeProvider theme={emmaTheme}>
        <EmmaHeader />

        <Box sx={{ marginTop: 10, minHeight: '60vh' }}>
          {/* <StaticQuery
						query={graphql`
							query SiteTitleQuery {
								site {
									siteMetadata {
										menuLinks {
											link
											name
										}
									}
								}
							}
						`}
						render={(data) => <TopMenu menuLinks={data.site.siteMetadata.menuLinks} />}
					></StaticQuery> */}
          <Box sx={{ padding: '20px' }}>{children}</Box>
        </Box>

        <Footer />
      </ThemeProvider>
    </>
  )
}
export default Layout
