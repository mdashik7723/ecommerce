import React, {useState} from "react";
import styled from "styled-components";

const MyImage = ({ imgs =[{url:""}] }) => {

    const [mainImage, setMainImage ] = useState(imgs[0]);
    return(
        <>
        <Wrapper>
            <div className="grid grid-four-column">
                {
                    imgs.map((curElm, index) => {
                        return(
                            <figure>
                                <img src={curElm.url} alt={curElm.filename} className="box-image--style"
                                key={index}
                                     onClick = {() => setMainImage(curElm)}/>
                            </figure>
                        );
                    })
                }
            </div>
            {/*// 2nd column*/}

<div className="main-screen">
    <img src={mainImage.url} alt={mainImage.filename}/>
</div>
        </Wrapper>
        </>
    )
};

export default MyImage;

const Wrapper = styled.section`
.container {
  padding: 9rem 0;
}
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    
    .product-data-warranty {
      width: 100%;
      display: flex;
    }
    
  }
`