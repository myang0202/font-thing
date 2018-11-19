import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 400px auto;
  grid-gap: 0.5rem 1rem;

  > input {
    grid-column: 1 / -1;
    grid-row: -1;
  }
`;

export default Grid;
