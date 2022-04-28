import { Typography } from '@mui/material'
import { Link } from 'gatsby'
import React from 'react'

const TopMenuLink: React.FunctionComponent<{ to: string; text: string }> = ({
  to,
  text,
}) => {
  return (
    <Typography sx={{ minWidth: 150 }}>
      <Link
        to={`${to}`}
        style={{
          textDecoration: 'none',
          fontWeight: 'bold',
        }}
        activeClassName="active-link"
      >
        {text}
      </Link>
    </Typography>
  )
}

export default TopMenuLink
