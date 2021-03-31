import React from 'react'
import { NavLink } from 'react-router-dom'

import { AppBar, makeStyles, Toolbar } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.success.main,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
  },
  navLinkActive: {
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '5px',
    borderRadius: '7px',
  },
}))

export const Header = () => {
  const classes = useStyles()

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <NavLink
          to='/'
          activeClassName={classes.navLinkActive}
          className={classes.navLink}>
          Home
        </NavLink>
      </Toolbar>
    </AppBar>
  )
}
