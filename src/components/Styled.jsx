import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.png';
import Signup from '../images/Signup.png';

export const Row = styled.div`
  display: flex:
  align-items: center;
  justify-content: center;
`;
export const Col = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const MLogo = styled.div`
  width: 22px;
  height: 22px;
  display: flex;
  border-radius: 50%;
  background: url(${Logo}) no-repeat center;
  background-size: 42px;
  `;
export const Pbody= styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  min-height: 76vh;
  align-items: center;
  flex-direction: column;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
`;
export const Fbox = styled.div`
	width: 100%;
  display: flex;
  margin-top: 10px;
  align-items: center;
  flex-direction: column;
  form {
  	width: 100%;
	  display: flex;
	  flex-direction: column;
	  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
  }
  input {
  	width: 100%;
	  height: 40px;
	  outline: none;
	  padding: 0 10px;
	  box-sizing: border-box;
	  border-radius: 6px;
	  transition: all, 200ms ease-in-out;
	  border-bottom: 1.4px solid transparent;
	  border: 1px solid rgba(200, 200, 200, 0.03);
	  &::placeholder {
	    color: rgba(170, 170, 170, 1);
	  }
	  &:not(:last-of-type) {
	    border-bottom: 1.4px solid rgba(200, 200, 200, 0.4);
	  }
	  &:focus {
	    outline: none;
	    //box-shadow: 0px 0px 2px rgba(200, 200, 200, 1);
	    border-bottom: 2px solid #5963c3;
	  }
  }
  button {
  	width: 60%;
	  color: white;
	  cursor: pointer;
	  font-size: 15px;
	  margin-top: 10px;
	  font-weight: 600;
	  padding: 10px 10%;
	  transition: all, 240ms ease-in-out;
	  border-radius: 100px 100px 100px 100px;
	  background: darkslategray;
  }
`;
export const Flink = styled(Link)`
	margin: 10px 0;
  font-size: 11px;
  font-weight: 500;
  text-decoration: none;
  color: rgba(170, 170, 170, 1);
`;
export const Slink = styled(Link)`
  margin: 0 3px;
  font-size: 11px;
  cursor: pointer;
  font-weight: 600;
  color: limegreen;
  text-decoration: none;
`;
export const Fmars = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: url(${Signup}) no-repeat center;
	background-size: cover;
`;
export const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
};
export const size = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1536',
};
export const divice = {
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
  xxl: `(min-width: ${size.xxl})`,
};
const commonStyle = {
  margin: 'auto',
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};
// eslint-disable-next-line
const sizeItem = {
  small: '10px',
  default: '12px',
  large: '14px'
}
// eslint-disable-next-line
const sizeContainer = {
  small: '24px',
  default: '30px',
  large: '36px'
}
// eslint-disable-next-line
const borderRadiusContainerSize = {
  small: '12px',
  default: '15px',
  large: '18px'
}

const load = keyframes`
 0% {
 top: 19px;
 left: 19px;
}
 100% {
}
`;
const Container = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 75px;
  display: inline-block;
  vertical-align: middle;
`;
const ItemDiv = styled.div`
  position: absolute;
  animation: ${load} ${props => props.speed || 1}s ease alternate infinite;
  transform: scale(0.2);
  &::before {
    position: absolute;
    content: '';
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background: ${props => props.color || '#00adb5'} ;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }
  &::after {
    position: absolute;
    content: '';
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background:${props => props.color || '#00adb5'} ;
    border-radius: 50px 50px 0 0;
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`;
const ItemFirst = styled(ItemDiv)`
  top: 0;
  left: 30px;
`;
const ItemTwo = styled(ItemDiv)`
  left: 60px;
  top: 30px;
`;
const ItemThree = styled(ItemDiv)`
  top: 60px;
  left: 30px;
`;
const ItemFour = styled(ItemDiv)`
  left: 0;
  top: 30px;
`;
export const Loading = ({ style = commonStyle, speed, color }) => {
  return (
    <Container {...{ style, speed, color }}>
      <ItemFirst color={color} speed={speed}></ItemFirst>
      <ItemTwo color={color} speed={speed} />
      <ItemThree color={color} speed={speed} />
      <ItemFour color={color} speed={speed} />
    </Container>
  );
};
export const device = { mobile: 640, tablet: 768, laptop: 1424, desktop: 2224,};
export const Global = createGlobalStyle`
* {
  	margin: 0px;
  	padding: 0px;
    box-sizing: border-box;
  }
  body {
    margin: 0px;
    padding: 0px;
    color: white;
    background: black;
    font-size: 1.15em;
    font-family: 'Poppins', sans-serif;
  }
  p {
    opacity: 0.6;
    line-height: 1.5;
  }
  img {
    max-width: auto;
    max-height: auto;
  }
  *::-webkit-scrollbar {
  	display: none;
  }
`;