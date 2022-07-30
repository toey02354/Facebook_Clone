import React from 'react'

import { styled, Box } from '@mui/material'

const Container = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
})

const RightSide = () => {
  return <Container>RightSide</Container>
}

export default RightSide
