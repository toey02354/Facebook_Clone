// import { useState } from "react";
// import { useRouter } from "next/router";

//mui
import { styled, Box, Input, Avatar } from '@mui/material'
import { theme } from '../../utils/theme'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import HomeIcon from '@mui/icons-material/Home'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import GroupsIcon from '@mui/icons-material/Groups'
import GamesIcon from '@mui/icons-material/Games'
import AppsIcon from '@mui/icons-material/Apps'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import NotificationsIcon from '@mui/icons-material/Notifications'

// styled components
const NavbarCotnainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  background: theme.palette.secondary.main,
  borderBottom: `2px solid ${theme.palette.secondary.light}`,
  padding: '0.5rem 0',
  minHeight: '60px',
})

const LeftGroup = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flex: 1,
  paddingLeft: '1rem',
  gap: '0.5rem',
})

const MiiddleGroup = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  gap: '3rem',
})

const RightGroup = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  flex: 1,
  paddingLeft: '1rem',
  gap: '1rem',
})

const InputStyled = styled(Input)({
  background: theme.palette.secondary.light,
  borderRadius: '1rem',
  padding: '2px 1rem',
  color: theme.palette.primary.light,
})

const ActiveButton = styled(Box)({
  cursor: 'pointer',
})

const ActionButton = styled(Box)({
  cursor: 'pointer',
})

const Navbar = () => {
  return (
    <NavbarCotnainer>
      <LeftGroup>
        <FacebookOutlinedIcon color="primary" fontSize="large" />
        <InputStyled disableUnderline placeholder="ค้นหาบน Facebook" />
      </LeftGroup>

      <MiiddleGroup>
        <ActiveButton>
          <HomeIcon
            fontSize="large"
            sx={{ color: theme.palette.primary.light }}
          />
        </ActiveButton>
        <ActiveButton>
          <OndemandVideoIcon
            fontSize="large"
            sx={{ color: theme.palette.primary.light }}
          />
        </ActiveButton>
        <ActiveButton>
          <GroupsIcon
            fontSize="large"
            sx={{ color: theme.palette.primary.light }}
          />
        </ActiveButton>
        <ActiveButton>
          <GamesIcon
            fontSize="large"
            sx={{ color: theme.palette.primary.light }}
          />
        </ActiveButton>
      </MiiddleGroup>

      <RightGroup>
        <ActionButton>
          <AppsIcon
            fontSize="large"
            sx={{ color: theme.palette.primary.light }}
          />
        </ActionButton>
        <ActionButton>
          <ChatBubbleIcon
            fontSize="large"
            sx={{ color: theme.palette.primary.light }}
          />
        </ActionButton>
        <ActionButton>
          <NotificationsIcon
            fontSize="large"
            sx={{ color: theme.palette.primary.light }}
          />
        </ActionButton>
        <Avatar />
      </RightGroup>
    </NavbarCotnainer>
  )
}

export default Navbar
