import StyledCarousel from 'components/shared/Scroll/StyledCarousel'
import PropTypes from 'prop-types'
import SectionHeader from '../SectionHeader/SectionHeader'
import AdventureItem from './AdventureItem'

const Adventure = ({data}) => (
  <>
    <SectionHeader title={data.title} dataRef='adventure-section-header' />
    <StyledCarousel lg={3} buttonPosition='topRight' flexContent>
      {data.adventureList?.map((adventure) => (
        <AdventureItem single={data.adventureList?.length === 1} adventureDetails={adventure} key={adventure.id} />
      ))}
    </StyledCarousel>
  </>
)

Adventure.propTypes = {
  data: PropTypes.object
}

export default Adventure
