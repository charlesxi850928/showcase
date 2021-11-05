// import {useEffect} from 'react'
// import ReactPannellum, {addHotSpot} from 'react-pannellum'
import ReactPannellum from 'react-pannellum'
import {Box} from '@mui/material'
import PropTypes from 'prop-types'

// eslint-disable-next-line arrow-body-style
const Photos360Degree = ({id, equirectangular, cubeMap, config, hiddenPanoramaInfo}) => {
  // useEffect(() => {
  //   addHotSpot(
  //     {
  //       pitch: 14.1,
  //       yaw: 1.5,
  //       type: 'info',
  //       text: 'Baltimore Museum of Art',
  //       URL: 'https://artbma.org/'
  //     },
  //     'firstScene'
  //   )
  // }, [])
  const hiddenPanoramaInfoStyle = hiddenPanoramaInfo
    ? {
        '& .pnlm-container .pnlm-panorama-info': {
          display: 'none !important'
        }
      }
    : {}
  return (
    <Box sx={hiddenPanoramaInfoStyle}>
      <ReactPannellum
        id={id}
        sceneId='firstScene'
        // equirectangular
        {...equirectangular}
        // cubemap
        {...cubeMap}
        config={config}
        style={{
          width: '100%',
          height: '90vh'
        }}
      />
    </Box>
  )
}

Photos360Degree.propTypes = {
  id: PropTypes.string,
  config: PropTypes.object,
  equirectangular: PropTypes.object,
  cubeMap: PropTypes.object,
  hiddenPanoramaInfo: PropTypes.bool
}
export default Photos360Degree
