import Carousel from 'components/shared/Carousel'
import APaper from 'components/shared/APaper'

const CarouselIns = () => {
  const slides = [
    {
      url: 'assets/images/carousel/1.jpg',
      title: 'Composite image of southern Africa',
      content: `Composite image of southern Africa and the surrounding oceans 
        captured by six orbits of the NASA/NOAA Suomi National Polar-orbiting Partnership spacecraft`
    },
    {
      url: 'assets/images/carousel/2.jpg',
      title: 'Hubble Space Telescope',
      content: `Hubble Space Telescope, the Spitzer Space Telescope, and the Chandra X-ray 
        Observatory produced a matched trio of images of the central region of our Milky Way galaxy`
    },
    {
      url: 'assets/images/carousel/3.jpg',
      title: 'Hubble Space Telescope',
      content: 'Hubble space telescope captures vivid auroras in Jupiter’s atmosphere'
    },
    {
      url: 'assets/images/carousel/4.png',
      title: 'Mast Camera (Mastcam)',
      content: `This view from the Mast Camera (Mastcam) in NASA’s Curiosity Mars rover shows an 
        outcrop with finely layered rocks within the ‘Murray Buttes’ region on lower Mount Sharp`
    },
    {
      url: 'assets/images/carousel/5.jpg',
      title: 'Mystic Mountain',
      content: 'Hubble space telescope captures Mystic Mountain in the Carina Nebula'
    },
    {
      url: 'assets/images/carousel/6.jpg',
      title: 'Jupiter A',
      content: `This view of Jupiter was taken by Voyager 1. This image was taken through color filters 
        and recombined to produce the color image`
    },
    {
      url: 'assets/images/carousel/7.jpg',
      title: 'Jupiter B',
      content:
        'This view of Jupiter was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    },
    {
      url: 'assets/images/carousel/8.jpg',
      title: 'Jupiter C',
      content:
        'This view of Jupiter was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    },
    {
      url: 'assets/images/carousel/9.jpg',
      title: 'Jupiter D',
      content:
        'This view of Jupiter was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    },
    {
      url: 'assets/images/carousel/10.jpg',
      title: 'Jupiter E',
      content:
        'This view of Jupiter was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    },
    {
      url: 'assets/images/carousel/11.jpg',
      title: 'Jupiter F',
      content:
        'This view of Jupiter was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    },
    {
      url: 'assets/images/carousel/12.jpg',
      title: 'Jupiter G',
      content:
        'This view of Jupiter was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    },
    {
      url: 'assets/images/carousel/13.jpg',
      title: 'Jupiter H',
      content:
        'This view of Jupiter was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    },
    {
      url: 'assets/images/carousel/14.jpeg',
      title: 'Jupiter I',
      content:
        'This view of Jupiter was taken by Voyager 1. This image was taken through color filters and recombined to produce the color image'
    }
  ]
  return (
    <APaper>
      <Carousel slides={slides} slideDuration={3 * 1000} showProgressBar showNavBtn showControlBtn />
    </APaper>
  )
}

export default CarouselIns
