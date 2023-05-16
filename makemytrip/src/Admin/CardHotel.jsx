import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Select,
  Image,
  Text,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
} from "@chakra-ui/react";
import Swal from "sweetalert2";
import { deleteHotelData, patchHotelData } from "../Redux/HotelReducer/action";


const CardHotel = ({ el, setEdit }) => {
  const { id, HotelName, image, price, star, desc, city } = el;
  const [hotel, setHotel] = useState(el);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotel((prev) => {
      return { ...prev, [name]: value };
    });
  };
  console.log(hotel);
  const handleDelete = () => {
    deleteHotelData(id);
    Swal.fire({
      title: "Hotel Data Deleted Successfully!",
      showConfirmButton: false,
      icon: "success",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
      timer: 1500,
    });
    setEdit((prev) => !prev);
  };
  const handleClick = () => {
    onClose()
    patchHotelData(id, hotel);
    Swal.fire({
      title: "Edit Successful !",
      showConfirmButton: false,
      icon: "success",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
      timer: 1500,
    });
    setEdit((prev) => !prev);
  };
  return (
    <Box
      style={{
        borderRadius: "15px",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
        padding: "20px",
      }}
      w={"450px"}>
      <Image w={"100%"} h={200} src={image} alt={star} />
      <Text
        style={{ fontSize: "20px", fontWeight: "bold", paddingTop: "1rem" }}>
        {HotelName}
      </Text>
      <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
        Address:-{desc}
      </Text>
      <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
        Price:-{price}
      </Text>
      <Text style={{ fontSize: "16px", fontWeight: "bold" }}>Star:-{star}</Text>
      <Text
        style={{ fontSize: "16px", fontWeight: "bold", paddingBottom: "1rem" }}>
        City:-{city}
      </Text>
    
      <Box
        style={{

          display: "flex",
          width: "60%",
          margin: "auto",
          justifyContent:"space-around"
        }}>
        <Button style={{background:"linear-gradient(#061526, #144073)", width:"90px", color:"white"}} ref={btnRef} onClick={onOpen}>
          Edit
          <Drawer
            size={"md"}
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader style={{fontSize:"20px", fontWeight:"bold"}} textAlign={"center"}>Edit Data</DrawerHeader>

              <DrawerBody>
                {/* <Input placeholder='Type here...' /> */}
                <label>Hotel name</label>
                <Input
                  value={hotel.HotelName}
                  name="HotelName"
                  type="text"
                  onChange={handleChange}
                />
                <label>Address</label>
                <Input
                  value={hotel.desc}
                  name="desc"
                  type="text"
                  onChange={handleChange}
                />
                <label>City</label>
                <Select value={hotel.city} name="city" onChange={handleChange}>
                  <option value="">Select Hotel City</option>
                  <option value="goa">Goa</option>
                  <option value="delhi">Delhi</option>
                  <option value="banglore">Banglore</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="jaipur">Jaipur</option>
                  <option value="shimla">Shimla</option>
                  <option value="ooty">Ooty</option>
                </Select>
                <label>Hotel Image</label>
                <Input
                  value={hotel.image}
                  name="image"
                  type="text"
                  onChange={handleChange}
                />
                <label>Price /per night</label>
                <Input
                  value={hotel.price}
                  name="price"
                  type="text"
                  onChange={handleChange}
                />
                <label>Hotel Star</label>
                <Input
                  value={hotel.star}
                  name="star"
                  type="text"
                  onChange={handleChange}
                />
                <label>Hotel Rating</label>
                <Input
                  value={hotel.rating}
                  name="rating"
                  type="number"
                  onChange={handleChange}
                />
              </DrawerBody>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button  style={{background:"linear-gradient(#061526, #144073)", color:"white"}} onClick={handleClick}>
                  Save
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Button>
        <Button  style={{background:"red", width:"90px", color:"white"}} onClick={handleDelete} >
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default CardHotel;
