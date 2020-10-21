import * as React from "react";
import Main from "./Components/Main";
import styled from "styled-components";

const Expanded = styled.div`
  height: 400vh;
`;

export default function App() {
  return (
    <Expanded className="App">
      <h1>Bumble Code Test</h1>
      <Main />
    </Expanded>
  );
}
