import APaper from 'components/shared/APaper'
import CircularMenu from 'components/shared/CircularMenu'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined'
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'

const CircularMenuIns = () => {
  const menus = [
    {icon: <HomeOutlinedIcon />, text: 'Home'},
    {icon: <PersonOutlinedIcon />, text: 'Profile'},
    {icon: <MapsUgcOutlinedIcon />, text: 'Message'},
    {icon: <PhotoCameraOutlinedIcon />, text: 'Photos'},
    {icon: <VolunteerActivismOutlinedIcon />, text: 'Activism'},
    {icon: <GroupsOutlinedIcon />, text: 'Teams'},
    {icon: <DateRangeOutlinedIcon />, text: 'Calendar'},
    {icon: <LocalPhoneOutlinedIcon />, text: 'Phone'},
    {icon: <SettingsOutlinedIcon />, text: 'Settings'},
    {icon: <MoreHorizOutlinedIcon />, text: 'More'}
  ]
  return (
    <APaper sx={{background: 'linear-gradient(45deg, #8460ed,#ff1252)', paddingX: '0.5rem'}}>
      <CircularMenu menus={menus} />
    </APaper>
  )
}
export default CircularMenuIns
