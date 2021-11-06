import {useState, useCallback} from 'react'
import {Close} from '@mui/icons-material'
import {Dialog, Box, IconButton, Button, Typography} from '@mui/material'
import APaper from 'components/shared/APaper'
import Gallery from 'components/shared/Gallery'
import useDeviceView from 'hooks/useDeviceView'

const GalleryIns = () => {
  const {isDesktopView, isDesktopDownView} = useDeviceView()
  const [openGallery, setOpenGallery] = useState(true)
  const closeGalleryHandler = useCallback(() => {
    setOpenGallery(false)
  }, [])
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
      <Dialog
        fullScreen
        open={openGallery}
        onClose={closeGalleryHandler}
        maxWidth='xl'
        PaperProps={{
          'aria-label': 'gallery dialog',
          sx: {
            backgroundColor: 'common.black',
            margin: 'unset',
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: {xs: 'unset', md: '98vh'},
            minHeight: {xs: '100%', md: 'unset'},
            '& .gallery': {
              display: 'flex',
              flexGrow: 1,
              flexDirection: 'column',
              justifyContent: 'center'
            }
          }}
        >
          <IconButton
            sx={{
              minHeight: '3rem',
              color: 'common.white',
              alignSelf: 'flex-end',
              right: {xs: 0, md: '0.5rem'},
              position: 'absolute',
              top: 0
            }}
            onClick={closeGalleryHandler}
            aria-label='close gallery'
          >
            <Close sx={{fontSize: (isDesktopView && '3rem') || (isDesktopDownView && '2.1rem')}} />
          </IconButton>
          <Gallery
            imageList={imageList}
            thumbnailList={thumbnailList}
            dragEnabled={isDesktopDownView}
            showThumbnail={isDesktopView}
          />
        </Box>
      </Dialog>
    </APaper>
  )
}

export default GalleryIns
