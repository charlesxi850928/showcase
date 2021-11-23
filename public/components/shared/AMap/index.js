import {Box} from '@mui/material'
import PropTypes from 'prop-types'
import {useState} from 'react'
import {Map, Markers, InfoWindow} from 'react-amap'

const AMap = ({width = '100%', height = '80vh', markers}) => {
  const [showMarkerPopper, setShowMarkerPopper] = useState(false)
  const [markerPopperPosition, setMarkerPopperPosition] = useState(null)
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
    click: (MapsOption, marker) => {
      // console.log('MapsOptions:')
      // console.log(MapsOption)
      // console.log('marker:')
      // console.log(marker)
      setShowMarkerPopper(true)
      // console.log(marker.w.extData.position)
      setMarkerPopperPosition(marker.w.extData.position)
    }
  }

  const markerPopperEvents = {
    // created: (iw) => {
    //   console.log(iw)
    // },
    // open: () => {
    //   console.log('InfoWindow opened')
    // },
    // close: () => {
    //   console.log('InfoWindow closed')
    //   setShowMarkerPopper(false)
    // },
    // change: () => {
    //   console.log('InfoWindow prop changed')
    // }
  }

  const html = `<div><h4>Greetings</h4><p>This is content of this info window</p><p>Click 'Change Value' Button: ${showMarkerPopper}</p></div>`
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
          content={html}
          autoMove
          closeWhenClickMap
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
  markers: PropTypes.array
}

export default AMap
