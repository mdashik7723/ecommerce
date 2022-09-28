import React from "react";
import HeroSection from "./component/HeroSection";

const Home = () => {
    const data = {
        name: "Ashik store",
    };

    return <HeroSection myData={data} />;
};

export default Home;