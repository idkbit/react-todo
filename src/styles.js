import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 120rem;
  background-color: ${(props) => props.theme.bgColor};
  background-image: ${(props) => props.theme.bgImgDesktop};
  padding-top: 5rem;
`;

export const Container = styled.div`
  max-width: 40rem;
  min-height: 100vh;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  h1 {
    text-transform: uppercase;
    letter-spacing: 1rem;
    color: ${(props) => props.theme.h1};
  }
`;
