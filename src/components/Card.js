import styled from "styled-components";

export const Card = styled.div`
  color: #fff;
  text-shadow: 1px 1px 0 #000;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: black;
`;

Card.Body = styled.div`
  padding: 0.25em;
`;

Card.Title = styled.h3`
  font-size: 1.2em;
  line-height: 1.2em;
  font-weight: 500;
  margin: 0;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default Card;
