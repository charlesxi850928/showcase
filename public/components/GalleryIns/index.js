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
      url: 'assets/images/gallery-tmp/1.jpg',
      alt: 'Burling Game State Park 1',
      displayOrder: 1
    },
    {
      url: 'assets/images/gallery-tmp/2.jpg',
      alt: 'Burling Game State Park 2',
      displayOrder: 2
    },
    {
      url: 'assets/images/gallery-tmp/3.jpg',
      alt: 'Burling Game State Park 3',
      displayOrder: 3
    },
    {
      url: 'assets/images/gallery-tmp/4.jpg',
      alt: 'Burling Game State Park 4',
      displayOrder: 4
    },
    {
      url: 'assets/images/gallery-tmp/5.jpg',
      alt: 'Burling Game State Park 5',
      displayOrder: 5
    },
    {
      url: 'assets/images/gallery-tmp/6.jpg',
      alt: 'Burling Game State Park 6',
      displayOrder: 6
    },
    {
      url: 'assets/images/gallery-tmp/7.jpg',
      alt: 'Burling Game State Park 7',
      displayOrder: 7
    },
    {
      url: 'assets/images/gallery-tmp/8.jpg',
      alt: 'Burling Game State Park 8',
      displayOrder: 8
    }
  ]
  const thumbnailList = [
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
    },
    {
      url: 'assets/images/card-thumbnail-tmp/7/180x120.jpg',
      alt: 'Burling Game State Park 7',
      displayOrder: 7
    },
    {
      url: 'assets/images/card-thumbnail-tmp/8/180x120.jpg',
      alt: 'Burling Game State Park 8',
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
