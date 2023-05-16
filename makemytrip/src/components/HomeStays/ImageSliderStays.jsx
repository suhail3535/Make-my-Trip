


import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '20%', md: '50%' });
  const side = useBreakpointValue({ base: '10%', md: '10px' });

  // These are the images used in the slide
  const cards =["https://tse3.mm.bing.net/th?id=OIP.OVIQ_5zz9zeKONHpxilFWwHaFK&pid=Api&P=0",
"https://tse2.mm.bing.net/th?id=OIP.TYGWrQovXovoPUaukTV0PQHaEK&pid=Api&P=0","https://tse1.mm.bing.net/th?id=OIP.ozjxnGHx0-e3tLpoYdYFzwHaEK&pid=Api&P=0","https://tse4.mm.bing.net/th?id=OIP.tBHP3NW44V6MJL_Ztn7IwQHaEo&pid=Api&P=0","https://tse3.mm.bing.net/th?id=OIF.pTCLjFcEqrWeNXKQOQJefw&pid=Api&P=0"
]

  return (
    <Box
      position={'relative'}
      height={'360px'}
      width={'548px'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="transparent"
        color={"#fff"}
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
fontWeight={300}

        fontSize="30px"
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="transparent"
        color={"#fff"}
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        fontSize="30px"
fontWeight={300}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      {/* {
        cards.map((el)=>{
            return <img src={el} />
        })
      } */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'360px'}
            position="relative"
            backgroundPosition="center"
           borderRadius={"8px"}
            backgroundSize="cover"
            
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}