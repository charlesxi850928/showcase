import {Grid} from '@mui/material'
import APaper from 'components/shared/APaper'
import CardThumbnail from 'components/shared/CardThumbnail'
import useDeviceView from 'hooks/useDeviceView'

const CardThumbnailIns = () => {
  const {isDesktopDownView} = useDeviceView()
  const photos = [
    {
      url: 'assets/images/card-thumbnail-tmp/1/180x120.jpg',
      alt: 'Burling Game State Park 1',
      displayOrder: 1
    },
    {
      url: 'assets/images/card-thumbnail-tmp/2/180x120.jpg',
      alt: 'Burling Game State Park 2',
      displayOrder: 2
    },
    {
      url: 'assets/images/card-thumbnail-tmp/3/180x120.jpg',
      alt: 'Burling Game State Park 3',
      displayOrder: 3
    },
    {
      url: 'assets/images/card-thumbnail-tmp/4/180x120.jpg',
      alt: 'Burling Game State Park 4',
      displayOrder: 4
    },
    {
      url: 'assets/images/card-thumbnail-tmp/5/180x120.jpg',
      alt: 'Burling Game State Park 5',
      displayOrder: 5
    },
    {
      url: 'assets/images/card-thumbnail-tmp/6/180x120.jpg',
      alt: 'Burling Game State Park 6',
      displayOrder: 6
    }
  ]
  return (
    <APaper>
      <Grid item xs={12} md={3}>
        <CardThumbnail imageList={photos} dragEnabled={isDesktopDownView} />
      </Grid>
    </APaper>
  )
}

export default CardThumbnailIns
