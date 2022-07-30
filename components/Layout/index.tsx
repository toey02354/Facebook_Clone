import { PropsWithChildren } from 'react'
//mui
import { styled, Box } from '@mui/material'
import { theme } from '../../utils/theme'

//components
import Navbar from './Navbar'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

const Layoutcontainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  background: theme.palette.secondary.dark,
  minHeight: '100vh',
})

const ContentContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
})

const ChildrenContainer = styled(Box)({
  gridColumn: '2/span 2',
  display: 'flex',
  justifyContent: 'center',
})

const Layout = ({ children }: PropsWithChildren<any>) => {
  return (
    <Layoutcontainer>
      <Navbar />
      <ContentContainer>
        <LeftSide />
        <ChildrenContainer>{children}</ChildrenContainer>
        <RightSide />
      </ContentContainer>
    </Layoutcontainer>
  )
}

export default Layout
