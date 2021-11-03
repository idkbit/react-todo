import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  background-image: url(${(props) => props.theme.bgImgDesktop});
  @media (max-width: 600px) {
    background-image: url(${(props) => props.theme.bgImgMobile});
  }
  background-position: 0 0;
  background-size: contain;
  background-repeat: no-repeat;
  padding-top: 5rem;
`;

export const Container = styled.div`
  max-width: clamp(1rem, 40rem, 90vw);
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  h1 {
    text-transform: uppercase;
    letter-spacing: 1rem;
    color: #fff;
  }
  button {
    background: transparent;
    border: none;
  }
`;
