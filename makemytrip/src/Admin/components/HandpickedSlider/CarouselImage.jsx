import { Badge, Box, Card, CardBody, Image, Text } from "@chakra-ui/react";

export default function CarouselImage({ image, title, badge }) {
  return (
    <Card  gridRow="1" boxShadow={"xl"} padding={0}  borderRadius={"16px"} m={"8px"}  w={"200px"} h={"231px"}>
      <CardBody padding={0}  w={"200px"} h={"231px"}> 
        <Box position={"relative"}>
          <Image  borderRadius={"16px"}   w={"200px"} h={"231px"} src={image}></Image>
          <Badge position={"absolute"}bottom={"55px"} left={"8px"} color={"black"} fontSize={"1xl"} pb={"5px"}  fontWeight="medium" lineHeight={"1"} textAlign="start">{badge}</Badge>
          <Text position={"absolute"}bottom={0} left={"8px"} color={"white"} fontSize={"1xl"} pb={"10px"}  fontWeight="medium" lineHeight={"1"} textAlign="start">{title}</Text>
        </Box>
      </CardBody>
    </Card>
  );
}