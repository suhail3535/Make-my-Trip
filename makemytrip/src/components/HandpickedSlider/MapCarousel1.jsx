// import logo from './logo.svg';

import { Box } from "@chakra-ui/react";
import Carousel from "./Carousel";
// import CardImage from './components/CardImage';

function MapCarosel1() {
  let data = [
    {id:1,
      image:
        "https://hblimg.mmtcdn.com/content/hubble/img/delhi_hotels_tiow/mmt/activities/m_Le%20ROI%20Floating%20Huts_Eco%20Rooms_Tehri_Uttarakhand_l_550_821.jpg?im=Resize=(400,462)",
      badge: "Top 8",
      title: "Stays in& Around Delhi for a Weekend Getaway",
    },
    {id:2,
      image:
        "https://hblimg.mmtcdn.com/content/hubble/img/seo_img/mmt/activities/m_Radisson_blu_image_seo_l_550_821.jpg?im=Resize=(400,462)",
      badge: "Top 8",
      title: "Stays in& Around Mumbai for a Weekend Getaway",
    },
    {id:3,
      image:
        "https://hblimg.mmtcdn.com/content/hubble/img/bangalore_hotel_tiow/mmt/activities/m_Waterwoods%20Lodges%20&%20Resorts_Kabini_l_550_821.jpg?im=Resize=(400,462)",
      badge: "Top 9",
      title: "Stays in& Around Bangalore for a Weekend Getaway",
    },
    {id:4,
      image:
        "https://hblimg.mmtcdn.com/content/hubble/img/collections/m_beach44_p_540_417.jpg?im=Resize=(400,462)",
      badge: "Top 11",
      title: "Beach Destinations",
    },
    {id:5,
      image:
        "https://hblimg.mmtcdn.com/content/hubble/img/collections/m_weekend44_p_540_417.jpg?im=Resize=(400,462)",
      badge: "Top 11",
      title: "Weekend Getways",
    },
    {id:6,
      image:
        "https://hblimg.mmtcdn.com/content/hubble/img/collections/m_hill_stations11_p_540_417.jpg?im=Resize=(400,462)",
      badge: "Top 11",
      title: "Hill Stations",
    },
    {id:7,
      image:
        "https://hblimg.mmtcdn.com/content/hubble/img/Australia/mmt/destination/m_Australia_destination_6_l_361_641.jpg?im=Resize=(400,462)",
      badge: "Top 11",
      title: "Adventure Destinations",
    },
    {id:8,
      image:
        "https://hblimg.mmtcdn.com//content/hubble/img/amritsar/mmt/destination/m_Amritsar_activity_heritage_l_684_1026.jpg?im=Resize=(400,462)",
      badge: "Top 11",
      title: "Heritage Destinations",
    },
    {id:9,
      image:
        "https://hblimg.mmtcdn.com/content/hubble/img/collections/m_pilgrimage44_p_540_417.jpg?im=Resize=(400,462)",
      badge: "Top 11",
      title: "Pilgriage Destinations",
    },
    {id:10,
      image:
        "https://hblimg.mmtcdn.com//content/hubble/img/alleppey/mmt/destination/m_destination-alleppey-landscape_l_400_640.jpg?im=Resize=(400,462)",
      badge: "Top 11",
      title: "Relaxation Destinations",
    },
  ];

  return (
    <div style={{ padding: "40px 0px 40px 0px" }}>
      <Box
        w={"70%"}
        borderRadius={"8px"}
        margin={"auto"}
        marginTop={"-40px"}
        className="App"
        padding={"30px"}
        boxShadow=" 0 1px 6px 0 rgba(0, 0, 0, 0.2)">
        <Carousel heading={"Handpicked Collections for You"} data={data} />
      </Box>
    </div>
  );
}

export default MapCarosel1;
