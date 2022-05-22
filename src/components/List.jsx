import {  Stack } from '@mui/material'
import React from 'react'
import LeftItem from './LeftItem'
import RightItem from './RightItem'
// import { ListButton, ListContainer, ListDesc, ListImg, ListInfo, ListItems, ListTitle, ListTitles } from '../styles/ListStyle'


const List = () => {
  return (
      <>    
         
           <Stack direction="row" justifyContent="space-between">
            <LeftItem />
            <RightItem />
            </Stack>

    </>
  )
}

export default List