import {useState} from 'react'
import {Button, Typography} from '@mui/material'
import APaper from 'components/shared/APaper'
import Gallery from 'components/shared/Gallery'
import FullScreenDialog from 'components/shared/FullScreenDialog'
import useDeviceView from 'hooks/useDeviceView'

const GalleryIns = () => {
  const [openGallery, setOpenGallery] = useState(true)
  const {isDesktopView, isDesktopDownView} = useDeviceView()
  const imageList = [
    {
      url: 'assets/images/gallery-tmp/1440x900_5.jpg',
      alt: 'Nature State Park 1',
      displayOrder: 1
    },
    {
      url: 'assets/images/gallery-tmp/1440x900_6.jpg',
      alt: 'Nature State Park 2',
      displayOrder: 2
    },
    {
      url: 'assets/images/gallery-tmp/1440x900_7.jpg',
      alt: 'Nature State Park 3',
      displayOrder: 3
    },
    {
      url: 'assets/images/gallery-tmp/1440x900_8.jpg',
      alt: 'Nature State Park 4',
      displayOrder: 4
    },
    {
      url: 'assets/images/gallery-tmp/1440x900_9.jpg',
      alt: 'Nature State Park 5',
      displayOrder: 5
    },
    {
      url: 'assets/images/gallery-tmp/1440x900_10.jpg',
      alt: 'Nature State Park 6',
      displayOrder: 6
    },
    {
      url: 'assets/images/gallery-tmp/1440x900_11.jpg',
      alt: 'Nature State Park 7',
      displayOrder: 7
    },
    {
      url: 'assets/images/gallery-tmp/1440x900_12.jpg',
      alt: 'Nature State Park 8',
      displayOrder: 8
    }
  ]
  const thumbnailList = [
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
      <Button onClick={() => setOpenGallery(true)}>
        <Typography>View Images</Typography>
      </Button>
      <FullScreenDialog name='gallery' openDialog={openGallery} setOpenDialog={setOpenGallery}>
        <Gallery
          imageList={imageList}
          thumbnailList={thumbnailList}
          dragEnabled={isDesktopDownView}
          showThumbnail={isDesktopView}
        />
      </FullScreenDialog>
    </APaper>
  )
}

export default GalleryIns
