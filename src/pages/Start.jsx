import { Container, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import hand from ".././assets/img/hand.png";
import Button from "../components/UI/atoms/Button";

const Start = ({ setOnScreen }) => {
  return (
    <StyledContainer fixed maxWidth={"xl"} disableGutters>
      <StyledStart container>
        <StyledLeftGrid item xs={12} xl={6}>
          <img src={hand} alt="hand" />
        </StyledLeftGrid>
        <StyledRightGrid item xs={12} xl={5}>
          <Container>
            <StyledTypography component="h1">
              Who wants to be a millionaire?
            </StyledTypography>
          </Container>
          <Button
            disableRipple
            variant="contained"
            onClick={() => setOnScreen("game")}
          >
            Start
          </Button>
        </StyledRightGrid>
      </StyledStart>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  @media print, screen and (min-width: 1440px) {
    padding-left: 80px;
    padding-right: 80px;
  }
`;

const StyledTypography = styled(Typography)`
  font-weight: 600;
  font-size: 32px;
  margin-bottom: 102px;
  text-align: center;

  @media print, screen and (min-width: 1440px) {
    font-size: 56px;
    margin-bottom: 64px;
    text-align: left;
  }
`;

const StyledLeftGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 24px;

  @media print, screen and (min-width: 1440px) {
    margin-bottom: 0;
    justify-content: center;
  }
`;

const StyledRightGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: start;

  Button {
    max-width: 100%;
    margin: 0 16px;
  }

  > div {
    padding: 0;
    margin: 0;
    max-width: 100%;
  }

  @media print, screen and (min-width: 1440px) {
    justify-content: center;

    Button {
      max-width: 50%;
      margin: 0;
    }
  }
`;

const StyledStart = styled(Grid)`
  height: 100vh;
`;

export default Start;
