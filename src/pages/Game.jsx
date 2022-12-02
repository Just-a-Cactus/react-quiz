import { Container, Grid, Typography } from "@mui/material";
import AnswersBlock from "../components/UI/molecules/AnswersBlock";
import AnswerButton from "../components/UI/atoms/AnswerButton";
import RewardList from "../components/UI/molecules/RewardList";
import LabelButton from "../components/UI/atoms/LabelButton";
import styled from "styled-components";

const Game = () => {
  return (
    <StyledContainer fixed maxWidth={"xl"} disableGutters>
      <StyledGame container>
        <StyledLeftGrid item xs={12} xl={8}>
          <StyledTypographyWrapper item xs={12} xl={9}>
            <StyledTypography component="h1">
              How old your elder brother was 10 years before you was born, mate?
            </StyledTypography>
          </StyledTypographyWrapper>
          <Container maxWidth="xs*2" disableGutters>
            <AnswersBlock>
              <AnswerButton
                letter={"A"}
                state={"wrong"}
                title={"test_Question"}
              ></AnswerButton>
            </AnswersBlock>
          </Container>
        </StyledLeftGrid>
        <StyledRightGrid item xl={4}>
          <RewardList>
            <LabelButton title={"$1,000"} />
          </RewardList>
        </StyledRightGrid>
      </StyledGame>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  @media print, screen and (min-width: 1440px) {
    padding-left: 80px;
  }
`;

const StyledTypographyWrapper = styled(Grid)`
  @media print, screen and (max-width: 320px) {
    padding-left: 16px;
    padding-right: 16px;
    text-align: center;
  }
`;

const StyledTypography = styled(Typography)`
  font-weight: 600;
  font-size: 18px;

  @media print, screen and (min-width: 1440px) {
    font-size: 32px;
  }
`;

const StyledLeftGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 20vh;
  margin-bottom: 5vh;

  @media print, screen and (min-width: 1440px) {
    margin-top: 20vh;
    margin-bottom: 20vh;
  }
`;

const StyledRightGrid = styled(Grid)`
  display: none;
  @media print, screen and (min-width: 1440px) {
    display: flex;
  }
  flex-direction: column;
  justify-content: center;
`;

const StyledGame = styled(Grid)`
  height: 100vh;
`;

export default Game;
