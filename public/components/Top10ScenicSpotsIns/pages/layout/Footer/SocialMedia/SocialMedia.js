import {Box} from '@mui/material'
import {useT} from 'i18n'
import muiIconList from 'mui/IconList'
import Link from 'mui/Link'

const SocialMedia = () => {
  const navToInsLabel = useT({k: 'Common.footer.navigate_to_ins'})
  const navToFaceBookLabel = useT({k: 'Common.footer.navigate_to_facebook'})
  const navToTwitteLabel = useT({k: 'Common.footer.navigate_to_twitte'})
  const soicalMediaDatas = [
    {
      key: 'facebook-link',
      icon: <muiIconList.FacebookIcon />,
      text: navToFaceBookLabel,
      link: 'https://www.facebook.com/ReserveAmerica'
    },
    {
      key: 'twitter-link',
      icon: <muiIconList.TwitteIcon />,
      text: navToTwitteLabel,
      link: 'https://twitter.com/reserveamerica'
    },
    {
      key: 'ins-link',
      icon: <muiIconList.InstagramIcon />,
      text: navToInsLabel,
      link: 'https://www.instagram.com/reserveamerica/?hl=en'
    }
  ]
  return (
    <Box sx={{py: 1, display: 'flex'}}>
      {soicalMediaDatas.map((item) => (
        <Link
          color='inherit'
          data-ref={item.key}
          key={item.key}
          href={item.link}
          aria-label={item.text}
          sx={{mr: '1rem'}}
        >
          {item.icon}
        </Link>
      ))}
    </Box>
  )
}

export default SocialMedia
