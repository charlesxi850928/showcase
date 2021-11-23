import {Box} from '@mui/material'
import PropTypes from 'prop-types'
import {useState} from 'react'
import {Map, Markers, InfoWindow} from 'react-amap'

const AMap = ({width = '100%', height = '80vh', markers, buildMarkerPopContent}) => {
  const [showMarkerPopper, setShowMarkerPopper] = useState(false)
  const [markerPopperPosition, setMarkerPopperPosition] = useState(null)
  const [markerPopperContent, setMarkerPopperContent] = useState(null)
  const plugins = [
    // 'MapType',
    'Scale',
    'OverView',
    {
      name: 'ToolBar',
      options: {
        visible: true
        // onCreated(ins) {
        //   console.log(ins)
        // }
      }
    }
  ]
  const markersEvents = {
    click: (mapsOption, marker) => {
      // console.log('MapsOptions:')
      // console.log(mapsOption)
      // console.log('marker:')
      // console.log(marker)
      new Promise((resolve, reject) => {
        let content = ''
        try {
          content = buildMarkerPopContent(mapsOption, marker)
          resolve(content)
          setMarkerPopperContent(content)
        } catch (e) {
          reject(e)
        }
      }).then(() => {
        setShowMarkerPopper(true)
        setMarkerPopperPosition(marker.w.extData.position)
      })
      // console.log(marker.w.extData.position)
    }
  }

  const markerPopperEvents = {
    // created: (iw) => {
    //   console.log(iw)
    // },
    // open: () => {
    //   console.log('InfoWindow opened')
    // },
    close: () => {
      // console.log('InfoWindow closed')
      setShowMarkerPopper(false)
    }
    // change: () => {
    //   console.log('InfoWindow prop changed')
    // }
  }

  return (
    <Box sx={{width, height}}>
      <Map
        amapkey='e23c1cac6c6f5bbb73d063d7115c36d9'
        plugins={plugins}
        center={{longitude: 115, latitude: 40}}
        dragEnable
        zoom={5}
      >
        <Markers
          bubble={false}
          topWhenClick={false}
          autoRotation
          markers={markers}
          useCluster={{
            zoomOnClick: true,
            averageCenter: true
          }}
          events={markersEvents}
        />
        <InfoWindow
          position={{...markerPopperPosition}}
          visible={showMarkerPopper}
          isCustom={false}
          content={markerPopperContent}
          autoMove
          closeWhenClickMap={false}
          showShadow={false}
          events={markerPopperEvents}
        />
      </Map>
    </Box>
  )
}

AMap.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  markers: PropTypes.array,
  buildMarkerPopContent: PropTypes.func
}

export default AMap
