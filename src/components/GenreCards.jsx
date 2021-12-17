import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Mars = styled.div`
  color: white;
  width: 300px;
  height: 102px;
  display: flex;
  overflow: hidden;
  align-items: center;
  border-radius: 22px;
  flex-direction: column;
  justify-content: center;
  background-color: darkslategray;
`;
const CircleMars = styled.div` 
  width: 22%;
  height: 22%;
`;
const HHCircle = styled.div`
  width: 222px;
  height: 222px;
  display: flex;
  margin: -1em 3.5em;
  border-radius: 50%; 
  background-color: #222;
`;
const RBCircle = styled.div`
  width: 222px;
  height: 222px;
  margin: -1em -12em;
  border-radius: 50%; 
  background-color: #222;
`;
const PCircle = styled.div`
  width: 222px;
  height: 222px;
  display: flex;
  margin: -7.5em 3.5em;
  border-radius: 50%; 
  background-color: #222;
`;
const OCircle = styled.div`
  width: 222px;
  height: 222px;
  display: flex;
  margin: -7.5em -12em;
  border-radius: 50%; 
  background-color: #222;
`;
const MarsLink = styled(Link)`
  color: white;
  font-size: 40px;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    color: #000;
  }
`;
export function HipHop() {
  return (
    <Mars>
      <CircleMars><HHCircle /></CircleMars>
      <MarsLink to='/'>Hip-Hop/Rap</MarsLink>
    </Mars>
  );
}
export function RBSoul() {
  return (
    <Mars>
      <CircleMars><RBCircle /></CircleMars>
      <MarsLink to='/'>R&B/Soul</MarsLink>
    </Mars>
  );
}export function Pop() {
  return (
    <Mars>
      <CircleMars><PCircle /></CircleMars>
      <MarsLink to='/'>Pop</MarsLink>
    </Mars>
  );
}export function Other() {
  return (
    <Mars>
      <CircleMars><OCircle /></CircleMars>
      <MarsLink to='/'>Other</MarsLink>
    </Mars>
  );
}