import { Box, IconButton } from '@mui/material'
import React from 'react'
import { CardSvg, ClockSvg, DashboardSvg, GetLeadsSvg, HeartHandSvg, HomeSvg, LeadSvg, ListSvg, MicSvg, PercentageSvg, SettingSvg, UserSvg } from '../utils/Logos'
import { Link, useLocation } from 'react-router-dom'

const Layout = ({children}) => {
    const {pathname} = useLocation()
  return (
    <>
      <Box sx={{ display: "flex", position: 'relative', height: "100vh" }}>
        <Box sx={{ flexShrink: 0, bgcolor: '#273045' ,display:'flex', flexDirection:'column' , alignItems:'center'}}>
            <Box sx={{paddingBottom:"50px", paddingTop:"10px" }}>
                <IconButton disableRipple  >
                    <GetLeadsSvg />
                </IconButton>
            </Box>
          <Link to='/' style={{backgroundColor: pathname === '/' ? '#404960' : ''}}>
            <IconButton disableRipple  sx={{paddingLeft:2 , paddingRight:2}}>
                <HomeSvg color={pathname === '/' ? "#F44F59" : "#C2C2C2"} />
            </IconButton>
          </Link>
          <Link to='/voice'>
            <IconButton disableRipple  sx={{paddingLeft:2 , paddingRight:2}}>
                <DashboardSvg color={pathname === '/h' ? "#F44F59" : "#C2C2C2"} />
            </IconButton>
          </Link>
          <Link to='/lead' style={{backgroundColor: pathname === '/lead' ? '#404960' : ''}}>
            <IconButton disableRipple  sx={{paddingLeft:2 , paddingRight:2 }}>
                <LeadSvg color={pathname === '/lead' ? "#F44F59" : "#C2C2C2"} />
            </IconButton>
          </Link>
          <Link>
            <IconButton disableRipple  sx={{paddingLeft:2 , paddingRight:2}}>
                <PercentageSvg color={pathname === '/h' ? "#F44F59" : "#C2C2C2"} />
            </IconButton>
          </Link>
          <Link>
            <IconButton disableRipple  sx={{paddingLeft:2 , paddingRight:2}}>
                <MicSvg color={pathname === '/h' ? "#F44F59" : "#C2C2C2"} />
            </IconButton>
          </Link>
          <Link>
            <IconButton disableRipple  sx={{paddingLeft:2 , paddingRight:2}}>
                <ListSvg color={pathname === '/h' ? "#F44F59" : "#C2C2C2"} />
            </IconButton>
          </Link>
          <Link>
            <IconButton disableRipple  sx={{paddingLeft:2 , paddingRight:2}}>
                <HeartHandSvg color={pathname === '/h' ? "#F44F59" : "#C2C2C2"} />
            </IconButton>
          </Link>
          <Link>
            <IconButton disableRipple  sx={{paddingLeft:2 , paddingRight:2}}>
                <CardSvg color={pathname === '/h' ? "#F44F59" : "#C2C2C2"} />
            </IconButton>
          </Link>
          <Link>
            <IconButton disableRipple sx={{paddingLeft:2 , paddingRight:2}}>
                <UserSvg color={pathname === '/h' ? "#F44F59" : "#C2C2C2"} />
            </IconButton>
          </Link>
          <Link>
            <IconButton disableRipple  sx={{paddingLeft:2 , paddingRight:2}}>
                <ClockSvg color={pathname === '/h' ? "#F44F59" : "#C2C2C2"} />
            </IconButton>
          </Link>
          <Link>
            <IconButton disableRipple sx={{paddingLeft:2 , paddingRight:2}} >
                <SettingSvg color={pathname === '/h' ? "#F44F59" : "#C2C2C2"} />
            </IconButton>
          </Link>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          {/* <Box sx={{ position: "sticky", top: "0", left: 0 }}>
            <Box sx={{ p: 2 }}>
              Header
            </Box>
          </Box> */}
          <Box sx={{ overflowY: "scroll", flexGrow: 1 }}>
            {/* Main Content Goes Here */}
            {children}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Layout