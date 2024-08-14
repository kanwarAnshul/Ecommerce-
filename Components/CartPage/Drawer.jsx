import * as React from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Button from '@mui/material/Button'
import CartPage from '.'

export default function Drawer({ isDrawer, toggleDrawer }) {
  return (
    <div>
      <SwipeableDrawer anchor="right" open={isDrawer} onClose={()=>{toggleDrawer()}} onOpen={()=>{toggleDrawer()}}>
        <Box sx={{ width: 300 }} role="presentation" onClick={()=>{toggleDrawer()}} onKeyDown={()=>{toggleDrawer()}}>
         {/* cart component  */}
          <CartPage onClose={toggleDrawer} />
        </Box>
      </SwipeableDrawer>
    </div>
  )
}
