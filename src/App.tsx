import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  padding: 1rem;
`;

function App() {
  return (
    <Wrapper className={App.name}>
      <Container>
        <h1>カナリアエディタ</h1>
        <p>
          カナリアエディタは現在大規模改修中です。
          <br />
          完成するまで少々お待ち下さい。
        </p>
      </Container>
    </Wrapper>
  );
}

export default App;
