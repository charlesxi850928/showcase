import APaper from 'components/shared/APaper'
import ScrollCard from 'components/shared/ScrollCard'

const ScrollCardIns = () => {
  const cardInfoList = [
    {
      id: '1',
      imgUrl: 'assets/images/carousel/1.jpg',
      title: 'Composite image of southern Africa',
      description: `Composite image of southern Africa and the surrounding oceans 
          captured by six orbits of the NASA/NOAA Suomi National Polar-orbiting Partnership spacecraft`
    },
    {
      id: '2',
      imgUrl: 'assets/images/carousel/2.jpg',
      title: 'Hubble Space Telescope',
      description: `Hubble Space Telescope, the Spitzer Space Telescope, and the Chandra X-ray 
          Observatory produced a matched trio of images of the central region of our Milky Way galaxy`
    },
    {
      id: '3',
      imgUrl: 'assets/images/carousel/3.jpg',
      title: 'Hubble Space Telescope',
      description: 'Hubble space telescope captures vivid auroras in Jupiter’s atmosphere'
    },
    {
      id: '4',
      imgUrl: 'assets/images/carousel/4.png',
      title: 'Mast Camera (Mastcam)',
      description: `This view from the Mast Camera (Mastcam) in NASA’s Curiosity Mars rover shows an 
          outcrop with finely layered rocks within the ‘Murray Buttes’ region on lower Mount Sharp`
    },
    {
      id: '5',
      imgUrl: 'assets/images/carousel/5.jpg',
      title: 'Mystic Mountain',
      description: 'Hubble space telescope captures Mystic Mountain in the Carina Nebula'
    },
    {
      id: '6',
      imgUrl: 'assets/images/carousel/6.jpg',
      title: 'Jupiter A',
      description: `This view of Jupiter was taken by Voyager 1. This image was taken through color filters 
          and recombined to produce the color image`
    },
    {
      id: '7',
      imgUrl: 'assets/images/carousel/7.jpg',
      title: 'Jupiter B',
      description:
        'This view of Jupiter was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    },
    {
      id: '8',
      imgUrl: 'assets/images/carousel/8.jpg',
      title: 'Jupiter C',
      description:
        'This view of Jupiter was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    },
    {
      id: '9',
      imgUrl: 'assets/images/carousel/9.jpg',
      title: 'Jupiter D',
      description:
        'This view of Jupiter was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    },
    {
      id: '10',
      imgUrl: 'assets/images/carousel/10.jpg',
      title: 'Jupiter E',
      description:
        'This view of Jupiter was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    },
    {
      id: '11',
      imgUrl: 'assets/images/carousel/11.jpg',
      title: 'Jupiter F',
      description:
        'This view of Jupiter was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    },
    {
      id: '12',
      imgUrl: 'assets/images/carousel/12.jpg',
      title: 'Jupiter G',
      description:
        'This view of Jupiter was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    },
    {
      id: '13',
      imgUrl: 'assets/images/carousel/13.jpg',
      title: 'Jupiter H',
      description:
        'This view of Jupiter was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    },
    {
      id: '14',
      imgUrl: 'assets/images/carousel/14.jpeg',
      title: 'Jupiter I',
      description:
        'This view of Jupiter was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    },
    {
      id: '15',
      imgUrl: 'assets/images/carousel/15.jpg',
      title: 'Jupiter J',
      description:
        'This view of Jupiter was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    }
  ]

  const cardData = {
    cardTitle: 'Space Images',
    cardInfoList
  }

  const handleCardClick = (cardInfo) => {
    // eslint-disable-next-line no-console
    console.log(...cardInfo)
  }

  return (
    <APaper>
      <ScrollCard lg={3} buttonPosition='topRight' cardData={cardData} handleCardClick={handleCardClick} />
    </APaper>
  )
}

export default ScrollCardIns
