import { FaRegHeart, FaHeart, FaStepBackward,FaBackward, FaPause, FaPlay, FaForward, 
	FaStepForward, FaEllipsisH, FaHeadphones, FaUser  } from 'react-icons/fa';
import { AudioList } from './AudioList';
import { useState, useRef } from 'react';
import { divice } from './Styled';
import styled from 'styled-components';
import Audio from '../images/Audio.png';
import Aeris from '../images/Aeris.png';

const Mars = styled.div`
	width: 100%;
	display: flex;
	padding: 12px 0;
`;
const AudioImg = styled.div`
	width: 76px;
	height: 76px;
	overflow: hidden;
	border-radius: 12px;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	@media ${divice.xl} {
		margin-left: 202px;
	}
`;
const Player = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Liked = styled.div`
	display: flex;
	align-items: center;
`;
const Col = styled.div`
	width: 100%;
	display: flex;
	margin-top: 12px;
	flex-direction: column;
`;
const Row = styled.div`
	display: flex;
	font-size: 16px;
	cursor: pointer;
	align-items: center;
	justify-content: space-evenly;
`;
const RegHeart = styled(FaRegHeart)`
	margin: 12px;
	color: purple;
`;
const Heart = styled(FaHeart)`
	margin: 12px;
	color: purple;
`;
const Play = styled.div`
	width: 38px;
	height: 38px;
	display: flex;
	border-radius: 50%;
	align-items: center;
	justify-content: center;
	background: mediumspringgreen;
`;
const Time = styled.div`
	margin-right: 22px;
`;
const Progress = styled.div`
	width:76%;
	height: 6px;
	outline: none;
	apperance: none;
	margin-top: 16px;
	position: relative;
	border-radius: 12px;
	background: mediumspringgreen;
`;
const Duration = styled.div`
	color: white;
	font-size: 12px;
	font-weight: bold;
	margin-left: 22px;
`;

export const AudioPlayer = () => {
	const prog = useRef();
	const audio = useRef();
	const [liked, setLiked] = useState(false);
	const [runtime, setRuntime] = useState(0);
	const [presentTime, setPresentTime] = useState(0);

	const togglePlay = () => {
		audio.current.paused ? audio.current.play() : audio.current.pause();
	};
	const time = (s) => {
		return(s - (s %= 60)) / 60 + (9 < s ? ':' : '0') + ~~s;
	};
	const handleProg = (e) => {
		const timeprog = (e.target.value * runtime) / 100;
		setPresentTime(timeprog);
		audio.current.presentTime = timeprog;
	};
	
	return(
		<Mars>
			<AudioImg><img src={Aeris} alt='' /></AudioImg>
			<Player>
				<audio />
				<Liked>
					<Heart /><RegHeart />
				</Liked>
				<Col>
					<Row>
						<FaStepBackward /><FaBackward />
						<Play><FaPlay /><FaPause /></Play>
						<FaForward /><FaStepForward />
					</Row>
					<Row>
						<Time> </Time>
						<Progress 
							type='range' 
							defaultValue='0'
						/>
						<Duration> </Duration>
					</Row>
				</Col>
			</Player>
		</Mars>
	);
};

const MarsN = styled.div`
	z-index: 1;
	flex-grow: 1;
	height: 100vh;
`;
const Banner = styled.div`
	width: 100%;
	height: 202px;
	position: relative;
	img {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		position: absolute;
		filter: grayscale(100);
	}
`;
const Bcontent = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	padding: 22px;
	position: relative;
	flex-direction: column;
	@media ${divice.xl} {
		margin-left: 202px;
	}
`;
const Top = styled.div`
	display: flex;
	align-items: center;
	p {
		padding: 0 4px;
		color: darkgrey;
	}
	span {
		color: white;
	}
`;
const EllipsisH = styled(FaEllipsisH)`
	top: 20px;
	right: 20px;
	color: gray;
	font-size: 22px;
	cursor: pointer;
	position: absolute;
	@media ${divice.xl} {
		margin-right: 202px;
	}
`;
const Bartist = styled.div`
	color: gray;
	display: flex;
	margin-top: auto;
	margin-left: 12px;
	flex-direction: column;
	align-items: flex-start;
	h2 {
		color: white;
		font-size: 44px;
		position: relative;
	}
	p {
		color: white;
		font-size: 12px;
	}
	span {
		color: darkgrey;
		margin-left: 6px;
	}

`;
const Headphones = styled(FaHeadphones)`
	margin-right: 6px;
`;
const Bottom = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	@media ${divice.xl} {
		margin-right: 202px;
	}
`;
const MPlay = styled.button`
	width: 76px;
	height: 22px;
	border: none;
	color: white;
	cursor: pointer;
	margin-right: 12px;
	border-radius: 50px;
	background: mediumspringgreen;
`;
const Follow = styled.button`
	width: 102px;
	height: 22px;
	border: none;
	color: white;
	cursor: pointer;
	border-radius: 50px;
	background: darkgrey;
	@media ${divice.sm} {
		margin-right: 44px;
	}
`;
const MenuList = styled.div`
	width: 100%;
	padding: 12px;
	display: flex;
	background: #333;
	align-items: center;
	justify-content: space-between;
	ul {
		display: flex;
		align-items: center;
	}
	li {
		margin: 0 22px;
		list-style: none;
	}
	p {
		color: white;
		font-size: 12px;
		margin-right: 44px;
	}
	@media ${divice.xl} {
		width: 84.1%;
		margin-left: 202px;
	}
`;
const Users = styled(FaUser)`
	font-size: 12px;
	margin-right: 6px;
`;

export const MBanner = () => {
	return(
		<MarsN>
			<Banner>
				<img src={Aeris} alt= ''/>
				<Bcontent>
					<Top>
						<p>Home</p><span>/ Popular Artist</span>
						<EllipsisH />
					</Top>
					<Bartist>
						<h2>Aeris</h2>
						<p><Headphones />22,199,102<span>Monthly Listeners</span></p>
					</Bartist>
					<Bottom>
						<MPlay>Play</MPlay>
						<Follow>Follow</Follow>
					</Bottom>
				</Bcontent>
			</Banner>
			<MenuList>
				<ul>
					<li>Popular</li>
					<li>Tracks</li>
					<li>Fans</li>
				</ul>
				<p><Users />22.2M<span>Followers</span></p>
			</MenuList>
			<AudioList />
		</MarsN>
	);
};