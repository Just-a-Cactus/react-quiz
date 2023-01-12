import { Container, Grid } from "@mui/material";
import styled from "styled-components";
import notFound from ".././assets/img/404.png";

const NotFound = () => {
  return (
    <StyledContainer fixed maxWidth="xl" disableGutters>
      <img src={notFound} alt="404" />
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20vh 0;
`;
export default NotFound;
