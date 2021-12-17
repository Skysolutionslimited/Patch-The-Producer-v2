import styled from 'styled-components';
import Logo2 from '../images/Logo2.png';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

const Mars = styled.div`
	width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: darkslategray;
`;
const Row = styled.div`
	width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  img {
  	width: 22em;
	  height: 30em;
	  margin-right: 2em;
	  margin-top: 2em;
  }
`;
const Title = styled.div`
	margin: 1em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  h2{
  	width: 150%;
	  color: white;
	  font-size: 40px;
	  font-weight: 700;
	  margin-left: 6em;
	  margin-bottom: 1em;
  }
  button {
  	color: white;
	  border: none;
	  margin: 2em;
	  cursor: pointer;
	  padding: 6px 1em;
	  font-weight: 600;
	  border-radius: 3px;
	  background: mediumseagreen;
	  transition: all 200ms ease-in-out;
	  &:hover {
	    background-color: #21867a;
	  }
  }
`;
const Header = styled.h3`
	margin: 8px;
	color: white;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  text-align: start;
`;
const MLink = styled(Link)`
  color: white;
  outline: none;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  transition: all 200ms ease-in-out;
  &:hover {
    color: #0C090A;
  }
`;
const Marginer = styled.div`
	margin: 4em;
`;

export const Advertise = () => {
	return (
		<Mars>
			<Row>
				<Title>
					<h2>Why Patch The Producer?</h2>
					<button>About</button>
					<Header>Users are only charged $1.00 per transaction</Header>
					<Header>Your piece of the pie increase with your value</Header>
					<Header>Users are empowered with the ability to request and vote on annual upgrades</Header>
				</Title>
				<Title>
					<Marginer />
					<Header>We attract more serious artists and producers knowing beats sales/leases are capped at 6</Header>
					<Header>All purchases grants artist unlimited streams, sales, performances and more</Header>
					<Header>Serious hardworking artist can opt to save by bundling beats with a subscription</Header>
					<MLink to='/Signup'><button>Sign Up</button></MLink>
				</Title>
				<img src={Logo2} alt='join-as-artist' />
			</Row>
		</Mars>
	);
};

const Fmars = styled.div`
	width: 100%;
  display: flex;
  min-height: 210px;
  background: black;
  flex-direction: column;
  justify-content: space-between;
  border-top: 0.4px solid rgb(0, 0, 0, 0.3);
`;
const Ftop = styled.div`
	width: 100%;
  display: flex;
  margin-top: 1em;
`;
const FTL = styled.div`
	display: flex;
  margin-left: 1em;
  padding-bottom: 0em;
  flex-direction: column;
  align-items: flex-start;
  &:not(:last-of-type) {
    margin-right: 3%;
  }
`;
const FTR = styled.div`
	display: flex;
	margin: 0em 1em;
  align-items: center;
  flex-direction: column;
  h3 {
  	margin: 1px;
	  font-size: 22px;
	  font-weight: 500;
	  text-align: center;
  }
`;
const FBottom = styled.div`
	height: 50px;
  display: flex;
  padding: 0 10px;
  align-items: center;
  justify-content: space-between;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);
  h6 {
	  color: #a3a3a3;
	  font-size: 11px;
	  margin-top: 5px;
	  margin-left: 10px;
	  align-items: center;
  }
`;
const Ftitle = styled.div`
	color: white;
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 8px;
`;
const Flink = styled(Link)`
	color: #6f6f6f;
  font-size: 15px;
  cursor: pointer;
  font-weight: 500;
  margin: 6px;
  text-decoration: none;
`;
const Facebook = styled(FaFacebook)`
	color: grey;
	margin: 8px;
	font-size: 22px;
`;
const Ficons = styled.div`

`;
const Twitter = styled(FaTwitter)`
	color: grey;
	margin: 8px;
	font-size: 22px;
`;

export const Footer = () => {
	return (
		<Fmars>
			<Ftop>
			  <FTL>
				  <Ftitle>Instrumentals</Ftitle>
					<Flink to='/'>Hip-Hop/Rap</Flink>
					<Flink to='/'>R&B/Soul</Flink>
					<Flink to='/'>Other</Flink>
					<Flink to='/'>Pop</Flink>
				</FTL>
				<FTL>
					<Ftitle>Access</Ftitle>
					<Flink to='Login'>Login</Flink>
					<Flink to='Signup'>Sign Up</Flink>
				</FTL>
				<FTR>
					<Ftitle>Terms</Ftitle>
					<h3>Users are responsible for and own 100% of all the</h3>
          <h3>content uploaded. Patch The Producer LLC collects</h3>
          <h3>$1.00 from every transaction made on</h3>
          <h3>PatchTheProducer.com</h3>
				</FTR>
				<FTR>
					<Ftitle>Contact</Ftitle>
					<h3>management@patchtheproducer.com</h3>
				</FTR>
			</Ftop>
			<FBottom>
				<h3>PatchTheProducer.com</h3>
				<h6>All Rights Reserved. 2021</h6>
				<Ficons>
					<Facebook />
					<Twitter />
				</Ficons>
			</FBottom>
		</Fmars>
	);
};