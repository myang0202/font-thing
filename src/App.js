import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import Header from "./components/Header/Header";
import TextInput from "./components/TextInput/TextInput";
import Text from "./components/Text/Text";
import ControlBar from "./components/ControlBar/ControlBar";
import Grid from "./components/Grid/Grid";
import Wrapper from "./components/Wrapper/Wrapper";

import useText from "./utilities/useText";
import useFontSize from "./utilities/useFontSize";
import useBold from "./utilities/useBold";
import useItalic from "./utilities/useItalic";
import useUnderline from "./utilities/useUnderline";
import useRotation from "./utilities/useRotation";

import theme from "./styles/theme";

const GlobalStyle = createGlobalStyle`
  :root {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    max-width: 1080px;
    margin: 0 auto;
    padding: 4em 2em;
    font-family: sans-serif;
    color: ${props => props.theme.colorPrimary};
  }
`;

function App() {
  const { text, handleChangeText } = useText();
  const { fontSize, handleChangeFontSize } = useFontSize(16);
  const { bold, handleToggleBold } = useBold();
  const { italic, handleToggleItalic } = useItalic();
  const { underline, handleToggleUnderline } = useUnderline();
  const {
    xDeg,
    yDeg,
    zDeg,
    handleChangeXDeg,
    handleChangeYDeg,
    handleChangeZDeg
  } = useRotation();

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Grid>
          <ControlBar
            fontSize={fontSize}
            xDeg={xDeg}
            yDeg={yDeg}
            zDeg={zDeg}
            bold={bold}
            italic={italic}
            underline={underline}
            handleChangeFontSize={handleChangeFontSize}
            handleChangeXDeg={handleChangeXDeg}
            handleChangeYDeg={handleChangeYDeg}
            handleChangeZDeg={handleChangeZDeg}
            handleToggleBold={handleToggleBold}
            handleToggleItalic={handleToggleItalic}
            handleToggleUnderline={handleToggleUnderline}
          />
          <Wrapper>
            <Text
              fontSize={fontSize}
              xDeg={xDeg}
              yDeg={yDeg}
              zDeg={zDeg}
              bold={bold}
              italic={italic}
              underline={underline}
            >
              {text}
            </Text>
          </Wrapper>
          <TextInput value={text} onChange={handleChangeText} />
        </Grid>
      </>
    </ThemeProvider>
  );
}

export default App;
