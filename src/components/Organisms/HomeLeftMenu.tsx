import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@mui/material'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const HomeLeftMenu = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Card>
        <CardHeader>test</CardHeader>
        <CardContent>
          <Typography variant="h6">Investor Brochure</Typography>
          <StaticImage src="../../assets/images/pdf.jpg" alt="email" />
          <section>
            <a href="https://msrb.org/-/media/Files/Resources/MSRB-Investor-Brochure.ashx?">
              Read about MSRB rules in place to protect you
            </a>
          </section>
        </CardContent>
      </Card>
      <Divider />
      <Card>
        <CardHeader></CardHeader>
        <CardContent>
          <Typography variant="h6">
            Municipal Advisor Client Brochure
          </Typography>
          <StaticImage src="../../assets/images/pdf.jpg" alt="pen" />
          <section>
            <Link to="/RegisteredEntities">
              Check the Qualifications of Your Municipal Advisor
            </Link>
          </section>
        </CardContent>
      </Card>
      <Divider />
      <Card>
        <CardContent>
          <Typography variant="h6">Report a Complaint</Typography>
          <StaticImage
            src="../../assets/images/document-blue-hrr.png"
            alt="pen"
          />
          <section>
            <a href="https://www.msrb.org/glossary">
              Learn how to report a munici[al market complaint
            </a>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}

export default HomeLeftMenu
