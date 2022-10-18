import React from "react";
import styled from "styled-components";
import FilterSection from "./component/FilterSection";
import Sort from "./component/Sort";
import ProductList from "./component/ProductList";

const Products = () => {

    return <Wrapper>
        <div className="container grid grid-filter-column">
            <FilterSection/>
        </div>
        <div className="product-view--sort">
            <div className="sort-filter">
                <Sort/>
            </div>
            <div className="main-product">
                <ProductList/>
            </div>
        </div>
    </Wrapper>;
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;