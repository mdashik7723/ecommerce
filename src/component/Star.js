import React from "react";
import {AiOutlineStar, FaStar, FaStarHalf} from "react-icons/all";
import styled from "styled-components";

const Star = ( { stars, reviews } ) => {

     const ratingStar = Array.from( {length: 5}, (elem,index) => {

          let number = index + 0.5;

          return(
              <span key={index}>
                  {
                  stars >= index+1 ? <FaStar className="icon"/>
                      :stars>= number ? <FaStarHalf className="icon"/>
                      : <AiOutlineStar className="icon"/>
              }
              </span>
          )



       });
       return(
        <Wrapper>
            <div className="icon-style">
                {ratingStar}
                <p>({reviews} customer reviews)</p>

            </div>
        </Wrapper>
       )


};

const Wrapper = styled.section `

`

export default Star;