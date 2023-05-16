import { Button, Flex, Grid, Heading, VStack } from "@chakra-ui/react";
import { useRef } from "react";
import CarouselImage from "./CarouselImage";
import "./carousel.css";

export default function Carousel({ data, heading }) {

    const ref = useRef(null)
    
function slideLeft() {
    
    ref.current.scrollBy(-220, 0);
  }
  
  function rightSlide() {
    ref.current.scrollBy(220, 0);
  }


  return (
    <VStack>
      <Heading  style={{display:"flex" ,justifyContent:"space-between" , width:"100%" ,margin:"auto", fontSize:"30px" }}>{heading}
      <Flex w="10%"  gap={"2px"} alignItems={"right"} justifyContent={"flex-end"} >
        <Button onClick={()=>{
            slideLeft()
        }}>{"<"}</Button>
        <Button onClick={()=>{
            rightSlide()

        }}>{">"}</Button>
      </Flex>
      </Heading>
     
      <Grid
      scrollBehavior={"smooth"}
      ref={ref}
        className="scroll"
        m={"auto"} 
        w="100%" 
        gridTemplateColumns={"repeat(5,1fr)"}
        overflowX="scroll"
      >
        {data?.map((el) => (
          <CarouselImage {...el}  />
        ))}
      </Grid>
    </VStack>
  );
}