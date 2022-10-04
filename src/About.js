import React, {useContext} from "react";
import HeroSection from "./component/HeroSection";
import Services from "./component/Services";
import Trusted from "./component/Trusted";
import {AppContext, useProductContext} from "./context/productcontext";

const About = () => {
    const {myName} = useProductContext();

    const data = {
        name: "AB Ecommerce",
    };

    return(
        <>
            {myName}
            <HeroSection myData={data}/>
            <Trusted/>
            <Services/>
        </>
    );
};

export default About;