import React from "react";
import HeroSection from "./component/HeroSection";
import Services from "./component/Services";
import Trusted from "./component/Trusted";

const About = () => {
    const data = {
        name: "AB Ecommerce",
    };

    return(
        <>
            <HeroSection myData={data}/>
            <Trusted/>
            <Services/>
        </>
    );
};

export default About;