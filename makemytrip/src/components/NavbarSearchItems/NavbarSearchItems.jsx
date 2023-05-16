import {
    Box,
    Flex,
    HStack,
    IconButton,
    Link,
    useDisclosure,
    Stack,
} from "@chakra-ui/react";
import "./NavbarSearchItems.css";

import { RiFlightTakeoffLine } from "react-icons/ri";
import { RiHotelLine } from "react-icons/ri";
import { MdHomeWork } from "react-icons/md";
import { MdHolidayVillage } from "react-icons/md";
import { BiTrain } from "react-icons/bi";
import { BsBusFront } from "react-icons/bs";
import { BsTaxiFrontFill } from "react-icons/bs";
import { MdCreditScore } from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaSkiingNordic } from "react-icons/fa";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const links = [
    {
        id: 1,
        to: "/",
        imgLink: (
            <RiFlightTakeoffLine
                style={{ margin: "auto", fontSize: 30, padding: 3 }}
            />
        ),
        title: "Flights",
    },
    {
        id: 2,
        to: "/hotels_home",
        imgLink: (
            <RiHotelLine style={{ margin: "auto", fontSize: 30, padding: 3 }} />
        ),
        title: "hotels",
    },
    {
        id: 3,
        to: "/home_stay_home",
        imgLink: (
            <MdHomeWork style={{ margin: "auto", fontSize: 30, padding: 3 }} />
        ),
        title: "Homestays",
    },
    {
        id: 4,
        to: "/",
        imgLink: (
            <MdHolidayVillage
                style={{ margin: "auto", fontSize: 30, padding: 3 }}
            />
        ),
        title: "Holiday",
    },
    {
        id: 5,
        to: "/",
        imgLink: (
            <BiTrain style={{ margin: "auto", fontSize: 30, padding: 3 }} />
        ),
        title: "Trains",
    },
    {
        id: 6,
        to: "/",
        imgLink: (
            <BsBusFront style={{ margin: "auto", fontSize: 30, padding: 3 }} />
        ),
        title: "Buses",
    },
    {
        id: 7,
        to: "/",
        imgLink: (
            <BsTaxiFrontFill
                style={{ margin: "auto", fontSize: 30, padding: 3 }}
            />
        ),
        title: "Cabs",
    },
    {
        id: 8,
        to: "/",
        imgLink: (
            <MdCreditScore
                style={{ margin: "auto", fontSize: 30, padding: 3 }}
            />
        ),
        title: "Visa",
    },
    {
        id: 9,
        to: "/",
        imgLink: (
            <FaSkiingNordic
                style={{ margin: "auto", fontSize: 30, padding: 3 }}
            />
        ),
        title: "Activities",
    },
    {
        id: 10,
        to: "/",
        imgLink: (
            <GiCommercialAirplane
                style={{ margin: "auto", fontSize: 30, padding: 3 }}
            />
        ),
        title: "Charter",
    },
];

export default function NavbarSearchItems() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box bgColor="white" borderRadius="10px" alignItems="center" px={4}>
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                <IconButton
                    size={"md"}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={"Open Menu"}
                    display={{ md: "none" }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems={"center"}>
                    <HStack
                        as={"nav"}
                        spacing={4}
                        display={{ base: "none", md: "flex" }}>
                        <div className="Navbar-search-items-icon">
                            {links.map(({ id, to, imgLink, title }) => {
                                return (
                                    <div
                                        key={id}
                                        style={{
                                            marginTop: "15px",
                                            justifyContent: "center",
                                        }}>
                                        <Link href={to} alignItems="center">
                                            <div>{imgLink}</div>
                                            <div
                                                style={{
                                                    backgroundColor: "#FFFFFF",
                                                    textDecoration: "none",
                                                }}>
                                                {title}
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </HStack>
                </HStack>
            </Flex>

            {isOpen ? (
                <Box pb={4} display={{ md: "none" }}>
                    <Stack as={"nav"} spacing={4}>
                        <div>
                            {links.map(({ id, to, imgLink, title }) => {
                                return (
                                    <div
                                        key={id}
                                        style={{
                                            marginTop: "15px",
                                            justifyContent: "center",
                                        }}>
                                        <Link
                                            href={to}
                                            display="flex"
                                            alignItems="center"
                                            boxShadow="dark-lg"
                                            px="6"
                                            py={2}
                                            rounded="md"
                                            bg="white">
                                            <span>{imgLink}</span>
                                            <div
                                                style={{
                                                    backgroundColor: "#FFFFFF",
                                                    textDecoration: "none",
                                                }}>
                                                x{title}
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
}
