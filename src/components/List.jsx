import { Box, Stack } from '@mui/material'
import React from 'react'
import LeftItem from './LeftItem'
import RightItem from './RightItem'
import RowItem from './RowItem'
// import { ListButton, ListContainer, ListDesc, ListImg, ListInfo, ListItems, ListTitle, ListTitles } from '../styles/ListStyle'


const List = () => {
  return (
      <>
           <Stack direction="row" spacing={2} justifyContent="space-between">
            <LeftItem />
            <RightItem />
            </Stack>

    </>
  )
}

export default List