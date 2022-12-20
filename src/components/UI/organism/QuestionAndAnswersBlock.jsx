import AnswersBlock from "../molecules/AnswersBlock";
import { Container, Grid, Typography } from "@mui/material";
import styled from "styled-components";
const QuestionAndAnswersBlock = ({ answerClick, question, answers, types }) => {
  return (
    <>
      <StyledTypographyWrapper item xs={12} xl={9}>
        <StyledTypography component="h1">{question}</StyledTypography>
      </StyledTypographyWrapper>
      <Container maxWidth="xs*2" disableGutters>
        <AnswersBlock
          answerClick={answerClick}
          answers={answers}
          types={types}
        />
      </Container>
    </>
  );
};

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

export default QuestionAndAnswersBlock;
