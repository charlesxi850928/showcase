import {Typography, Box} from '@mui/material'
import APaper from 'components/shared/APaper'
import Photos360Degree from 'components/shared/Photos360Degree'

const Photos360DegreeIns = () => {
  const equirectangular = {
    imageSource: 'assets/images/photos-360-degree/alma.jpg',
    equirectangularOptions: {}
  }

  const cubeMap = {
    type: 'cubemap',
    cubeMap: [
      'assets/images/photos-360-degree/face0.jpg',
      'assets/images/photos-360-degree/face1.jpg',
      'assets/images/photos-360-degree/face2.jpg',
      'assets/images/photos-360-degree/face3.jpg',
      'assets/images/photos-360-degree/face4.jpg',
      'assets/images/photos-360-degree/face5.jpg'
    ]
  }

  return (
    <APaper>
      <Box>
        <Typography variant='h6'>Equirectangular Map:</Typography>
        <Photos360Degree
          id='equirectangular_map'
          config={{autoLoad: true}}
          hiddenPanoramaInfo
          equirectangular={equirectangular}
        />
      </Box>
      <Box sx={{marginTop: '1rem'}}>
        <Typography variant='h6'>Cube Map:</Typography>
        <Photos360Degree
          id='cube_map'
          config={{
            autoRotate: -2,
            compass: true,
            author: 'Charles Xi',
            title: 'Photos 360 Degree Instance',
            description: 'Photos 360 Degree Instance Description for sample',
            uiText: {
              loadButtonLabel: 'Click to<br>Load<br>Photo',
              loadingLabel: 'Loading...',
              bylineLabel: 'Shared by %s',
              noPanoramaError: 'No image was specified.',
              fileAccessError: 'The file %s could not be accessed.',
              malformedURLError: 'There is something wrong with the image URL.',
              iOS8WebGLError:
                "Due to iOS 8's broken WebGL implementation, only progressive encoded JPEGs work for your device (this panorama uses standard encoding).",
              genericWebGLError: 'Your browser does not have the necessary WebGL support to display this panorama.',
              textureSizeError:
                "This panorama is too big for your device! It's %spx wide, but your device only supports images up to %spx wide. Try another device. (If you're the author, try scaling down the image.)",
              unknownError: 'Unknown error. Check developer console.'
            }
          }}
          cubeMap={cubeMap}
        />
      </Box>
    </APaper>
  )
}

export default Photos360DegreeIns
