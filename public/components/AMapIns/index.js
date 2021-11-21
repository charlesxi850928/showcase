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
    <APaper sx={{padding: 0}}>
      <AMap height='400px' markers={randomMarker(100)} />
    </APaper>
  )
}
export default AMapIns
