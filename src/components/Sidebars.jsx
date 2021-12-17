import { FaSearch, FaHome, FaMicrophone, FaFireAlt, FaMusic,
 FaFileAudio, FaVolumeUp, FaUser, FaCog, FaBell, FaComment, 
 FaBookmark, FaSignOutAlt, FaFlask } from 'react-icons/fa';
import { divice, Col, MLogo } from './Styled';
import { ModalUpload } from './ModalUpload';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { auth } from '../Firebase';
import { useState } from 'react';
import styled from 'styled-components';
import Audio from '../images/Audio.png';

const LMars = styled.div`
	display: none;
	@media ${divice.sm} {
		z-index: 2;
		display: flex;
		padding: 12px;
		height: 100vh;
		background: #111;
 		flex-direction: column;
	}
	@media ${divice.xl} {
		width: 202px;
		padding: 8px;
		height: 100vh;
		position: fixed;
		background: #111;
		overflow: hidden;
		align-items: flex-start;
	}
`;
const Row = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	span {
		display: none;
		@media ${divice.xl} {
			font-size: 16px;
			margin-left: 8px;
			display: inline-flex;
		}
	}
`;
const Search = styled.div`
	display: none;
	@media ${divice.xl} {
		width: 100%;
		padding: 6px;
		height: 28px;
		display: flex; 
		background: #222;
		margin-top: 12px;
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
	}
`;
const LSLink = styled(Link)`
	width: 36px;
	height: 36px;
	padding: 8px;
	margin: 2px;
	color: white;
	display: flex;
	text-decoration: none;
	i {
			display: flex;
			font-size: 22px;
			color: mediumspringgreen;
		}
	&:hover {
		cursor: pointer;
		background: #222;
		border-radius: 50%;
	}
  @media ${divice.xl} {
  	width: 160px;
  	font-size: 1rem;
  	line-height: 1.4rem;
		justify-content: flex-start;
		&:hover {
	    cursor: pointer;
	    background: #222;
	    border-radius: 10px;
		}
	}
`;
const MUpload = styled.div`
	width: 36px;
	height: 36px;
	padding: 8px;
	margin: 2px;
	color: white;
	display: flex;
	text-decoration: none;
	&:hover {
		cursor: pointer;
		background: #222;
		border-radius: 50%;
	}
  @media ${divice.xl} {
  	width: 160px;
  	font-size: 1rem;
  	line-height: 1.4rem;
		justify-content: flex-start;
		&:hover {
	    cursor: pointer;
	    background: #222;
	    border-radius: 10px;
		}
	}
`;
const MSpan = styled.span` 
	display: none;
	@media ${divice.xl} {
		font-size: 16px;
		margin-left: 12px;
		display: inline-flex;
	}
`;
const Track = styled.div`
	display: none; 
	@media ${divice.xl} {
		display: flex;
		margin-top: 12px;
		padding-top: 18px;
		padding-bottom: 8px;
		flex-direction: column;
		border-top: 1px solid gray;
	}
`;
const Top = styled.div`
	display: flex; 
	align-items: center;
	justify-content: space-evenly;
	img {
		width: 44px;
		height: 44px;
	}
	p {
		color: white;
		font-size: 14px;
		margin-left: 12px;
	}
	span {
		color: white;
		display: block;
		font-size: 12px;
	}
`;
const Bottom = styled.div`
	color: gray;
	display: flex;
	margin-top: 20px;
	align-items: center;
	justify-content: center;
	input {
		width: 67%;
		border: none;
		outline: none;
		margin: 0 8px;
		border-radius: 8px;
	}
`;
const SIcon = styled(FaSearch)`
	right: 4px;
	color: gray;
	width: 16px;
	height: 16px;
	position: absolute;
`;
const WavUpload = styled(FaFileAudio)`
	font-size: 22px;
	color: mediumspringgreen;
`;
const VolUP = styled(FaVolumeUp)`
	font-size: 18px;
`;
const Music = styled(FaMusic)`
	font-size: 12px;
`;

export const SidebarL = () => {
	const [open, setOpen] = useState(false);
	
	return(
		<LMars>
			<Row><MLogo /><span>Patch The Producer</span></Row>
			<Search><SIcon /><input type='search' placeholder='  Search...' /></Search>
			<LSLink to='/'><i><FaHome/></i><MSpan>Home</MSpan></LSLink>
			<LSLink to='/'><i><FaFireAlt/></i><MSpan>Top</MSpan></LSLink>
			<LSLink to='/'><i><FaMicrophone/></i><MSpan>Artist</MSpan></LSLink>
			<LSLink to='/'><i><FaMusic/></i><MSpan>Genre</MSpan></LSLink>
			<MUpload onClick={() => setOpen(!open)}><WavUpload /><MSpan>Upload</MSpan></MUpload>
			<ModalUpload open={open} setOpen={setOpen} />
			<Track>
				<Top><img src={Audio} alt='' /><p>audioName</p><span>artist</span></Top>
				<Bottom><VolUP /><input type='range' /><Music/></Bottom>
			</Track>
		</LMars>
	);
};

const RMars = styled.div`
	display: none;
	@media ${divice.sm} {
		top: 0;
		right: 0;
		z-index: 2;
		padding: 6px;
		height: 100vh;
		display: flex;
		position: fixed;
		background: #111;
		align-items: center;
 		flex-direction: column;
		justify-content: space-between;
	}
`;
const RSLink = styled(Link)`
	padding: 8px;
	display: flex;
	cursor: pointer;
	font-size: 22px;
	font-weight: 400;
	margin-top: 22px;
	align-items: center;
	text-decoration: none;
	justify-content: center;
	color: mediumspringgreen;
	&:hover {
		cursor: pointer;
		background: #222;
		border-radius: 50%;
	}
`;

export const SidebarR = () => {
	return(
		<RMars>
			<Col>
				<RSLink to='/'><FaUser /></RSLink>
				<RSLink to='/'><FaCog /></RSLink>
				<RSLink to='/'><FaBell /></RSLink>
				<RSLink to='/'><FaComment /></RSLink>
				<RSLink to='/'><FaBookmark /></RSLink>
			</Col>
			<Col>
				<RSLink to='/Login'><FaSignOutAlt onClick={() => signOut(auth)} /></RSLink>
				<RSLink to='/Test'><FaFlask /></RSLink>
			</Col>
		</RMars>
	);
};

