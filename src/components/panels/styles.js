import styled from 'styled-components';

const PanelsStyles = styled.div`
  padding: 1rem;

  @media only screen and (min-width: 700px) {
    padding: 1rem 2rem;
    width: 90%;
  }
`;

const PanelsItems = styled.ul`
  display: flex;
  gap: 0.25rem;
  padding: 1rem;
`;

const PanelsItem = styled.li`
  color: ${props => props.color || "#BED6C7"};
  cursor: pointer;
`;

const ProductsContainer = styled.div`
  background-color: #ffffff;
  height: 83vh;
  padding: 1rem;
  
  h1 {
    font-size: 1.5rem;
    width: 100%;
    border-bottom: 4px solid #BED6C7;
    padding: 0.5rem;
    margin-bottom: 1.5rem;
  }
`;

export { PanelsStyles, PanelsItems, PanelsItem, ProductsContainer }