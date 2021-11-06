import APaper from 'components/shared/APaper'
import Cards from 'components/shared/Cards'

const CardsIns = () => {
  const cardInfoList = [
    {
      id: '1',
      imgUrl: 'assets/images/scroll-card/1.jpg',
      title: 'Composite image of southern Africa',
      description: `Composite image of southern Africa and the surrounding oceans 
          captured by six orbits of the NASA/NOAA Suomi National Polar-orbiting Partnership spacecraft`
    },
    {
      id: '2',
      imgUrl: 'assets/images/scroll-card/2.jpg',
      title: 'Hubble Space Telescope',
      description: `Hubble Space Telescope, the Spitzer Space Telescope, and the Chandra X-ray 
          Observatory produced a matched trio of images of the central region of our Milky Way galaxy`
    },
    {
      id: '3',
      imgUrl: 'assets/images/scroll-card/3.jpg',
      title: 'Hubble Space Telescope',
      description: 'Hubble space telescope captures vivid auroras in Jupiter’s atmosphere'
    },
    {
      id: '4',
      imgUrl: 'assets/images/scroll-card/4.jpg',
      title: 'Mast Camera (Mastcam)',
      description: `This view from the Mast Camera (Mastcam) in NASA’s Curiosity Mars rover shows an 
          outcrop with finely layered rocks within the ‘Murray Buttes’ region on lower Mount Sharp`
    },
    {
      id: '5',
      imgUrl: 'assets/images/scroll-card/5.jpg',
      title: 'Mystic Mountain',
      description: 'Hubble space telescope captures Mystic Mountain in the Carina Nebula'
    },
    {
      id: '6',
      imgUrl: 'assets/images/scroll-card/6.jpg',
      title: 'Jupiter A',
      description: `This view of Jupiter was taken by Voyager 1. This image was taken through color filters 
          and recombined to produce the color image`
    },
    {
      id: '7',
      imgUrl: 'assets/images/scroll-card/7.jpg',
      title: 'Jupiter B',
      description:
        'This view of Jupiter was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    },
    {
      id: '8',
      imgUrl: 'assets/images/scroll-card/8.jpg',
      title: 'Jupiter C',
      description:
        'This view of Jupiter was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    },
    {
      id: '9',
      imgUrl: 'assets/images/scroll-card/9.jpg',
      title: 'Jupiter D',
      description:
        'This view of Jupiter was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    },
    {
      id: '10',
      imgUrl: 'assets/images/scroll-card/10.jpg',
      title: 'Jupiter E',
      description:
        'This view of Jupiter was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    },
    {
      id: '11',
      imgUrl: 'assets/images/scroll-card/11.jpg',
      title: 'Jupiter F',
      description:
        'This view of Jupiter was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    },
    {
      id: '12',
      imgUrl: 'assets/images/scroll-card/12.jpg',
      title: 'Jupiter G',
      description:
        'This view of Jupiter was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    },
    {
      id: '13',
      imgUrl: 'assets/images/scroll-card/13.jpg',
      title: 'Jupiter H',
      description:
        'This view of Jupiter was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    },
    {
      id: '14',
      imgUrl: 'assets/images/scroll-card/14.jpg',
      title: 'Jupiter I',
      description:
        'This view of Jupiter was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    },
    {
      id: '15',
      imgUrl: 'assets/images/scroll-card/15.jpg',
      title: 'Jupiter J',
      description:
        'This view of Jupiter was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    },
    {
      id: '16',
      imgUrl: 'assets/images/scroll-card/16.jpg',
      title: 'Jupiter K',
      description:
        'This view of Jupiter K was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    }
  ]

  const handleCardClick = (cardInfo) => {
    // eslint-disable-next-line no-console
    console.log({...cardInfo})
  }

  return (
    <APaper>
      <Cards cardInfoList={cardInfoList} handleCardClick={handleCardClick} />
    </APaper>
  )
}

export default CardsIns
