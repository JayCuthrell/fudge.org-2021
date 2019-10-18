import styled from 'styled-components';

const Card = styled.div`
  background: none;
  border: none;
  box-shadow: 0 1px 5px rgba(0,0,0,0.05);
  margin-bottom: 30px;
  padding: 75px 100px;

  @media only screen and (max-width: 600px) {
    border-left: none;
    border-right: none;
    padding: 75px 15px;
  }
`;

export default Card;
