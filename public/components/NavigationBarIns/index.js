import NavigationBar from 'components/shared/NavigationBar'
import APaper from 'components/shared/APaper'
import PlaylistAddCheckSharpIcon from '@mui/icons-material/PlaylistAddCheckSharp'
import HomeWorkSharpIcon from '@mui/icons-material/HomeWorkSharp'
import GroupWorkSharpIcon from '@mui/icons-material/GroupWorkSharp'
import AccountBalanceWalletSharpIcon from '@mui/icons-material/AccountBalanceWalletSharp'
import ImageSharpIcon from '@mui/icons-material/ImageSharp'
import QrCode2SharpIcon from '@mui/icons-material/QrCode2Sharp'
import AdminPanelSettingsSharpIcon from '@mui/icons-material/AdminPanelSettingsSharp'
import ExitToAppSharpIcon from '@mui/icons-material/ExitToAppSharp'
import {Grid, Typography, Divider} from '@mui/material'

const NavigationBarIns = () => (
  <APaper sx={{backgroundColor: 'silver'}}>
    <Grid display='flex' justifyContent='space-around' alignItems='center' container>
      <NavigationBar>
        <Grid>
          <PlaylistAddCheckSharpIcon />
          <Typography>List</Typography>
        </Grid>
        <Divider color='white' sx={{marginY: '0.125rem'}} />
        <Grid>
          <HomeWorkSharpIcon />
          <Typography>Home</Typography>
        </Grid>
        <Grid>
          <GroupWorkSharpIcon />
          <Typography>Group Work</Typography>
        </Grid>
        <Grid>
          <AccountBalanceWalletSharpIcon />
          <Typography>Wallet</Typography>
        </Grid>
        <Grid>
          <ImageSharpIcon />
          <Typography>Picture</Typography>
        </Grid>
        <Divider color='white' sx={{marginY: '0.125rem'}} />
        <Grid>
          <QrCode2SharpIcon />
          <Typography>QR Code</Typography>
        </Grid>
        <Grid>
          <AdminPanelSettingsSharpIcon />
          <Typography>Authentication</Typography>
        </Grid>
        <Grid>
          <ExitToAppSharpIcon />
          <Typography>Exit</Typography>
        </Grid>
      </NavigationBar>
      <NavigationBar bgColor='white' selectedBGColor='lightgray' color='black' minWidth='6rem' maxWidth='15rem'>
        <Grid>
          <PlaylistAddCheckSharpIcon />
          <Typography>List</Typography>
        </Grid>
        <Divider color='white' sx={{marginY: '0.125rem'}} />
        <Grid>
          <HomeWorkSharpIcon />
          <Typography>Home</Typography>
        </Grid>
        <Grid>
          <GroupWorkSharpIcon />
          <Typography>Group Work</Typography>
        </Grid>
        <Grid>
          <AccountBalanceWalletSharpIcon />
          <Typography>Wallet</Typography>
        </Grid>
        <Grid>
          <ImageSharpIcon />
          <Typography>Picture</Typography>
        </Grid>
        <Divider color='white' sx={{marginY: '0.125rem'}} />
        <Grid>
          <QrCode2SharpIcon />
          <Typography>QR Code</Typography>
        </Grid>
        <Grid>
          <AdminPanelSettingsSharpIcon />
          <Typography>Authentication</Typography>
        </Grid>
        <Grid>
          <ExitToAppSharpIcon />
          <Typography>Exit</Typography>
        </Grid>
      </NavigationBar>
    </Grid>
  </APaper>
)

export default NavigationBarIns
