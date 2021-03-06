import APaper from 'components/shared/APaper'
import TabScrollCard from 'components/shared/TabScrollCard'
import {nanoid} from 'nanoid'

const ScrollCardIns = () => {
  const cardInfoList = [
    {
      id: nanoid(),
      imgUrl: 'assets/images/scroll-card/300x200_1.jpg',
      title: 'Composite image of southern Africa'
    },
    {
      id: nanoid(),
      imgUrl: 'assets/images/scroll-card/300x200_2.jpg',
      title: 'Hubble Space Telescope'
    },
    {
      id: nanoid(),
      imgUrl: 'assets/images/scroll-card/300x200_3.jpg',
      title: 'Hubble Space Telescope'
    },
    {
      id: nanoid(),
      imgUrl: 'assets/images/scroll-card/300x200_4.jpg',
      title: 'Mast Camera (Mastcam)',
      description: `This view from the Mast Camera (Mastcam) in NASA’s Curiosity Mars rover shows an 
          outcrop with finely layered rocks within the ‘Murray Buttes’ region on lower Mount Sharp`
    },
    {
      id: nanoid(),
      imgUrl: 'assets/images/scroll-card/300x200_5.jpg',
      title: 'Mystic Mountain',
      description: 'Hubble space telescope captures Mystic Mountain in the Carina Nebula'
    },
    {
      id: nanoid(),
      imgUrl: 'assets/images/scroll-card/300x200_6.jpg',
      title: 'Jupiter A',
      description: `This view of Jupiter was taken by Voyager 1. This image was taken through color filters 
          and recombined to produce the color image`
    },
    {
      id: nanoid(),
      imgUrl: 'assets/images/scroll-card/300x200_7.jpg',
      title: 'Jupiter B'
    },
    {
      id: nanoid(),
      imgUrl: 'assets/images/scroll-card/300x200_8.jpg',
      description:
        'This view of Jupiter was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    },
    {
      id: nanoid(),
      imgUrl: 'assets/images/scroll-card/300x200_9.jpg',
      title: 'Jupiter D',
      description:
        'This view of Jupiter was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    },
    {
      id: nanoid(),
      imgUrl: 'assets/images/scroll-card/300x200_10.jpg'
    },
    {
      id: nanoid(),
      imgUrl: 'assets/images/scroll-card/300x200_11.jpg',
      title: 'Jupiter F'
    },
    {
      id: nanoid(),
      imgUrl: 'assets/images/scroll-card/300x200_12.jpg',
      description:
        'This view of Jupiter was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    },
    {
      id: nanoid(),
      imgUrl: 'assets/images/scroll-card/300x200_13.jpg',
      title: 'Jupiter H'
    },
    {
      id: nanoid(),
      imgUrl: 'assets/images/scroll-card/300x200_14.jpg',
      title: 'Jupiter I',
      description:
        'This view of Jupiter was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    },
    {
      id: nanoid(),
      imgUrl: 'assets/images/scroll-card/300x200_15.jpg',
      title: 'Jupiter J',
      description:
        'This view of Jupiter was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    }
  ]

  const cardInfoGroup = []
  cardInfoGroup.push({name: 'All Images', cardInfoList: cardInfoList.map((card) => ({...card, id: nanoid()}))})
  cardInfoGroup.push({
    name: 'All Reverse Images',
    cardInfoList: cardInfoList.map((card) => ({...card, id: nanoid()})).reverse()
  })
  cardInfoGroup.push({
    name: 'Jupiter',
    cardInfoList: cardInfoList
      .map((card) => ({...card, id: nanoid()}))
      .filter((card) => card.title?.indexOf('Jupiter') > -1)
  })
  cardInfoGroup.push({
    name: 'Hubble Space',
    cardInfoList: cardInfoList
      .map((card) => ({...card, id: nanoid()}))
      .filter((card) => card.title?.indexOf('Hubble Space') > -1)
  })

  const cardInfoGroupData = {
    cardTitle: 'Groups Space Images',
    cardInfoGroup
  }

  const handleCardClick = (cardInfo) => {
    // eslint-disable-next-line no-console
    console.log({...cardInfo})
  }

  return (
    <APaper sx={{paddingX: {xs: '1rem', md: '4rem'}}}>
      <TabScrollCard cardInfoGroupData={cardInfoGroupData} handleCardClick={handleCardClick} />
    </APaper>
  )
}

export default ScrollCardIns
