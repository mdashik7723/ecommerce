import React from "react";
import styled from "styled-components";

const About = () => {
    return <Wrapper className="test">About</Wrapper>;
};

const Wrapper = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;

export default About;