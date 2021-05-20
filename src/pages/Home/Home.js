import React from 'react';
import TopHeader from "../../Components/topHeader";
import SecondSlider from './SeconSlider';
import TopSlider from "./TopSlider";
import WhyChose from "./WhyChose";
import PapulerSection from "./PapulerSection";
import PartyVendor from "./PartyVendor";
import VedorVedio from "./VedorVedio";
import Footer from '../../Components/footer/footer'

class Home extends React.Component {

 render() {
        return (
          <>
            <TopHeader />
            <TopSlider />
            {/* <SecondSlider/> */}
            <WhyChose />
            <PapulerSection />
            <PartyVendor />
           
            <VedorVedio />

            <Footer />
          </>
        );
    }
}

export default Home;