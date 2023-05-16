// import logo from './logo.svg';

import { Box } from '@chakra-ui/react';
import Carousel from './Carousel';
// import CardImage from './components/CardImage';


function MapCarosel2() {

  let data = [
    {
      image: "https://hblimg.mmtcdn.com//content/hubble/img/narkanda/mmt/destination/m_Narkanda_l_372_902.jpg?im=Resize=(400,462)",
      title: "Shimla's Best Kept Secret"
    },
    {
      image: "https://hblimg.mmtcdn.com//content/hubble/img/yercaud/mmt/destination/m_destination-yercaud-landscape_l_400_640.jpg?im=Resize=(400,462)",
      title: "Tamil Nadu's Charming Hill Town"
    },
    {
      image: "https://hblimg.mmtcdn.com//content/hubble/img/dooars/mmt/destination/m_Dooars_l_457_685.jpg?im=Resize=(400,462)",
      title: "Picturesque Gateway to Himalayas"
    },
    {
      image: "https://hblimg.mmtcdn.com//content/hubble/img/saputara/mmt/destination/m_destination-saputara-landscape_l_400_640.jpg?im=Resize=(400,462)",
      title: "Quaint Little Hill Station in Gujarat"
    },
    {
      image: "https://hblimg.mmtcdn.com//content/hubble/img/dhanaulti/mmt/destination/m_Destination_Dhanaulti_l_534_801.jpg?im=Resize=(400,462)",
      title: "A pleasant summer retreat and a snowy winter wonderland!"
    },
    {
      image: "https://hblimg.mmtcdn.com//content/hubble/img/mandarmani/mmt/destination/m_destination-mandarmoni-landscape_l_400_640.jpg?im=Resize=(400,462)",
      title: "Seaside Resort Village in West Bengal"
    },
    {
      image: "https://hblimg.mmtcdn.com//content/hubble/img/malvan/mmt/destination/m_Malvan_l_636_847.jpg?im=Resize=(400,462)",
      title: "Hidden Gem along Maharastra's Coast"
    },
    {
      image: "https://hblimg.mmtcdn.com//content/hubble/img/yelagiri/mmt/destination/m_destination_yelagiri_landscape_l_340_544.jpg?im=Resize=(400,462)",
      title: "Picture-Perfect Hill Station in Tamil Nadu"
    },
    {
      image: "https://hblimg.mmtcdn.com//content/hubble/img/araku/mmt/destination/m_destination_Araku%20Valley_landscape_l_400_640.jpg?im=Resize=(400,462)",
      title: "Hill Retreat in Andra Pradesh"
    },
    {
      image: "https://hblimg.mmtcdn.com//content/hubble/img/sasan/mmt/destination/m_destination_sasan_gir_l_400_640.jpg?im=Resize=(400,462)",
      title: "Nature Lover's Paradise in Gujarat"
    },
    {
      image: "https://hblimg.mmtcdn.com//content/hubble/img/udupi/mmt/destination/m_destination-udupi-landscape_l_400_640.jpg?im=Resize=(400,462)",
      title: "Spiritual Coastal Town in Karnataka"
    },
    {
      image: "https://hblimg.mmtcdn.com//content/hubble/img/panchmarhi/mmt/destination/m_Destination_Panchmarhi_l_464_696.jpg?im=Resize=(400,462)",
      title: "Queen of Satpurq Pachmarhi"
    },
    {
      image: "https://hblimg.mmtcdn.com//content/hubble/img/dapoli/mmt/destination/m_Dapoli_l_703_937.jpg?im=Resize=(400,462)",
      title: "A Town with Beaches and Hills!"
    },
    {
      image: "https://hblimg.mmtcdn.com//content/hubble/img/vengurla/mmt/destination/m_destination_vengurla_landscape_l_400_640.jpg?im=Resize=(400,462)",
      title: "Known as the 'Goa of Malva"
    },
    {
      image: "https://hblimg.mmtcdn.com//content/hubble/img/dandeli/mmt/destination/m_Destination_Dandeli_l_536_804.jpg?im=Resize=(400,462)",
      title: "A Green Gataway in Karnataka"
    },
    {
      image: "https://hblimg.mmtcdn.com//content/hubble/img/destination/mmt/destination/m_destination_vagamon_landscape_l_400_640.jpg?im=Resize=(400,462)",
      title: "Idllic Hill Station in Kerala"
    },
    ,
    {
      image: "https://hblimg.mmtcdn.com//content/hubble/img/tadoba/mmt/destination/m_Tadoba_l_587_880.jpg?im=Resize=(400,462)",
      title: "Wildlife Hotspot in Maharastra"
    },
    {
      image: "https://hblimg.mmtcdn.com//content/hubble/img/guntur/mmt/destination/m_Guntur-landscape_l_400_640.jpg?im=Resize=(400,462)",
      title: "Erstwhile Abode of Rulers in Andhra Pradesh"
    },
    {
      image: "https://hblimg.mmtcdn.com//content/hubble/img/Bhandardara/mmt/destination/m_Bhandardara_l_568_852.jpg?im=Resize=(400,462)",
      title: "Hidden Gem in the Sahyadri Ranges"
    }, ,
    {
      image: "https://hblimg.mmtcdn.com//content/hubble/img/shoghi/mmt/destination/m_Shoghi_l_667_1000.jpg?im=Resize=(400,462)",
      title: "Striking Hill Resort near Shimla"
    },
    {
      image: "https://hblimg.mmtcdn.com//content/hubble/img/srisailam/mmt/destination/m_srisailam-landscape_l_400_640.jpg?im=Resize=(400,462)",
      title: "A Spiritual Getaway in Andra Pradesh"
    },
    {
      image: "https://hblimg.mmtcdn.com//content/hubble/img/vellore/mmt/destination/m_destination-vellore-landscape_l_400_640.jpg?im=Resize=(400,462)",
      title: "Ancient City in Tamil Nadu"
    },
    {
      image: "https://hblimg.mmtcdn.com//content/hubble/img/parwanoo/mmt/destination/m_Parwanoo_l_393_699.jpg?im=Resize=(400,462)",
      title: "Beautiful Apple & Peact Orchaards"
    }

  ]


  return (
    <div style={{ padding: "40px 0px 40px 0px" }}>
      <Box w={"70%"} borderRadius="8px" margin={"auto"} marginTop="-60px" className="App" padding={"30px"} boxShadow=" 0 1px 6px 0 rgba(0, 0, 0, 0.2)">
        <Carousel heading={"Unlock Lesser-Known Wonders of India"} data={data} />

      </Box>
    </div>

  );
}

export default MapCarosel2;