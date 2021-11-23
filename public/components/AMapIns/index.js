import APaper from 'components/shared/APaper'
import AMap from 'components/shared/AMap'

const AMapIns = () => {
  const randomMarker = (len) =>
    Array(len)
      .fill(true)
      .map(() => ({
        position: {
          longitude: 100 + Math.random() * 30,
          latitude: 30 + Math.random() * 20
        }
      }))
  return (
    <APaper
      sx={{
        padding: 0,
        '& .amap-container': {
          '& .map-marker': {
            fontSize: 14,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '0.3125rem',
            '& > div': {
              padding: '0.25rem'
            },
            '& .left-col': {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              '& img': {
                maxWidth: '8rem !important'
              }
            }
          },
          '& .amap-info-close': {
            right: '0.3125rem !important'
          }
        }
      }}
    >
      <AMap
        height='400px'
        markers={randomMarker(100)}
        buildMarkerPopContent={() =>
          // console.log(mapsOption)
          // console.log(marker)
          `<div class="map-marker">
          <div class="left-col">
            <img
              src="//webmap0.bdimg.com/client/services/thumbnails?width=132&amp;height=104&amp;align=center,center&amp;quality=100&amp;src=https%3A%2F%2Fpoi-pic.cdn.bcebos.com%2F001%2F061_ea89f85bea9ac7f85c0cb07faf7f279f.jpeg"
            />
          </div>
          <div class="right-col">
            <div class="row title">
              <span>
                <a href="javascript:void(0);" 
                  >秦始皇兵马俑博物馆</a
                >
              </span>
            </div>
            <div class="row tags">
              <span> <span class="d-red">5A景区</span> <i class="seperate">|</i> 博物馆 </span>
            </div>
            <div class="row addr"><span class="n-grey" title="西安市临潼区秦陵北路">西安市临潼区秦陵北路</span></div>
          </div>
        </div>`
        }
      />
    </APaper>
  )
}
export default AMapIns
