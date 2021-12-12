import APaper from 'components/shared/APaper'
import MagicMenu from 'components/shared/MagicMenu'
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

const MagicMenuIns = () => {
  const menus = [
    {icon: <HomeOutlinedIcon />, text: 'Home'},
    {icon: <PersonOutlinedIcon />, text: 'Profile'},
    {icon: <MapsUgcOutlinedIcon />, text: 'Message'},
    {icon: <PhotoCameraOutlinedIcon />, text: 'Photos'},
    {icon: <VolunteerActivismOutlinedIcon />, text: 'Activism'},
    {icon: <GroupsOutlinedIcon />, text: 'Teams'},
    {icon: <DateRangeOutlinedIcon />, text: 'Calendar'},
    {icon: <LocalPhoneOutlinedIcon />, text: 'Photos'},
    {icon: <SettingsOutlinedIcon />, text: 'Settings'},
    {icon: <MoreHorizOutlinedIcon />, text: 'More'}
  ]
  return (
    <APaper sx={{background: 'black', paddingX: '0.5rem'}}>
      <MagicMenu menus={menus} />
    </APaper>
  )
}
export default MagicMenuIns
