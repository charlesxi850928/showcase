import {Grid} from '@mui/material'
import APaper from 'components/shared/APaper'
import CardThumbnail from 'components/shared/CardThumbnail'
import useDeviceView from 'hooks/useDeviceView'

const CardThumbnailIns = () => {
  const {isDesktopDownView} = useDeviceView()
  const photos = [
    {
      url: 'assets/images/card-thumbnail-tmp/180x120_5.jpg',
      alt: 'Nature State Park 1',
      displayOrder: 1
    },
    {
      url: 'assets/images/card-thumbnail-tmp/180x120_6.jpg',
      alt: 'Nature State Park 2',
      displayOrder: 2
    },
    {
      url: 'assets/images/card-thumbnail-tmp/180x120_7.jpg',
      alt: 'Nature State Park 3',
      displayOrder: 3
    },
    {
      url: 'assets/images/card-thumbnail-tmp/180x120_8.jpg',
      alt: 'Nature State Park 4',
      displayOrder: 4
    },
    {
      url: 'assets/images/card-thumbnail-tmp/180x120_9.jpg',
      alt: 'Nature State Park 5',
      displayOrder: 5
    },
    {
      url: 'assets/images/card-thumbnail-tmp/180x120_10.jpg',
      alt: 'Nature State Park 6',
      displayOrder: 6
    },
    {
      url: 'assets/images/card-thumbnail-tmp/180x120_11.jpg',
      alt: 'Nature State Park 7',
      displayOrder: 7
    },
    {
      url: 'assets/images/card-thumbnail-tmp/180x120_12.jpg',
      alt: 'Nature State Park 8',
      displayOrder: 8
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
