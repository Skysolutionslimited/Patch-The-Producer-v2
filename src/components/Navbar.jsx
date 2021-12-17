import { FaUserAlt, FaShoppingCart, FaFileUpload, FaHeadphonesAlt, FaSearch } from 'react-icons/fa';
import { ModalUpload } from './ModalUpload';
import { AuthProvider } from '../Firebase';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../images/Logo.png';
import styled from 'styled-components';

const Mars = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  position: fixed;
  align-items: flex-start;
  background-color: darkslategray;
`;
const Nav = styled.div`
	width: 100%;
  height: 100%;
  display: flex;
  margin-right: 2em;
  align-items: center;
  justify-content: space-evenly;
`;
const MLink = styled(Link)`
  color: white;
  outline: none;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
  transition: all 300ms ease-in-out;
  &:hover {
    color: #222;
  }
`;
const MLogo = styled.div`
	width: 36px;
	height: 70%;
	display: flex;
	margin-right: 8em;
	border-radius: 50%;
	align-items: center;
	background: url(${Logo}) no-repeat center;
	background-size: cover;
	h2 {
		font-size: 16px;
		margin-left: 44px;
		text-align: center;
	}
	`;
const Smars = styled.div`
	width: 22em;
	height: 32px;
	display: flex; 
	background: #222;
	border-radius: 6px;
	position: relative;
	align-items: center;
	input {
		width: 100%;
		height: 100%;
		border: none;
		color: white;
		outline: none;
		border-radius: 6px;
		background: transparent;
	}
`;
const Search = styled(FaSearch)`
	right: 4px;
	color: gray;
	width: 16px;
	height: 16px;
	position: absolute;
`;
const Icon = styled.div`
  color: white;
  outline: none;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
  transition: all 300ms ease-in-out;
  &:hover {
    color: #222;
  }
`;
const Seperator = styled.div`
  width: 1px;
  min-height: 35%;
  background-color: white;
`;
const Button = styled.button`
  color: white;
  border: none;
  outline: none;
  font-size: 12;
  cursor: pointer;
  padding: 6px 1em;
  font-weight: 600;
  border-radius: 3px;
  background-color: #2a9d8f;
  transition: all 200ms ease-in-out;
  &:hover {
    background-color: #222;
  }
  &:focus {
    outline: none;
  }
`;
export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Mars>
      <AuthProvider>
        <Nav>
        	<MLogo><h2>PatchTheProducer</h2></MLogo>
        	<Smars><Search /><input type='search' placeholder='  Search' /></Smars>
          <MLink to='/Dash'><FaUserAlt /></MLink>
          <MLink to='/Genres'><FaHeadphonesAlt /></MLink>
          <Icon onClick={() => setOpen(!open)}><FaFileUpload /></Icon>
          <ModalUpload open={open} setOpen={setOpen} />
          <MLink to='/'><FaShoppingCart /></MLink>
          <Seperator />
          <MLink to='/Signup'><Button>Sign Up</Button></MLink>
          <MLink to='/Login'>Login</MLink>
        </Nav>
      </AuthProvider>
    </Mars>
  );
}