import { FaHeadphones, FaRegClock, FaRegHeart, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { AudioPlayer } from './AudioPlayer';
import { divice } from './Styled';
import styled from 'styled-components';

export const Songs = [
  {
		id:0,
		favourite: false,
		songName:'DEEPER PURPLE PLUCK',
		artist:'funky yeezy',
		img:'../Aeris.png',
		song: '../beats/FunkyYeezy/funky yeezy_14 DEEPER PURPLE_PLUCK C2ogg.wav'
	},
	{
		id:1,
		favourite: false,
		songName:'ACOUSTICG',
		artist:'funky yeezy',
		img:'../Aeris.png',
		song: '../beats/FunkyYeezy/funky yeezy_ACOUSTICG 1_C3.wav'
	},
	{
		id:2,
		favourite: false,
		songName:'BooBass',
		artist:'funky yeezy',
		img:'../Aeris.png',
		song: '../beats/FunkyYeezy/funky yeezy_BooBass.wav'
	},
	{
		id:3,
		favourite: false,
		songName:'FLS Crash a',
		artist:'funky yeezy',
		img:'../Aeris.png',
		song: '../beats/FunkyYeezy/funky yeezy_FLS Crash 02a.wav'
	},
	{
		id:4,
		favourite: false,
		songName:'FLS Crash b',
		artist:'funky yeezy',
		img:'../Aeris.png',
		song: '../beats/FunkyYeezy/funky yeezy_FLS Crash 02b.wav'
	},
	{
		id:5,
		favourite: false,
		songName:'FLS Kick',
		artist:'funky yeezy',
		img:'../Aeris.png',
		song: '../beats/FunkyYeezy/funky yeezy_FLS_Kick 02.wav'
	},
	{
		id:6,
		favourite: false,
		songName:'FLS Rim',
		artist:'funky yeezy',
		img:'../Aeris.png',
		song: '../beats/FunkyYeezy/funky yeezy_FLS_Rim 02.wav'
	},
	{
		id:7,
		favourite: false,
		songName:'Master',
		artist:'funky yeezy',
		img:'../Aeris.png',
		song: '../beats/FunkyYeezy/funky yeezy_Master.wav'
	},
	{
		id:8,
		favourite: false,
		songName:'Selected',
		artist:'funky yeezy',
		img:'../Aeris.png',
		song: '../beats/FunkyYeezy/funky yeezy_Selected.wav'
	},
	{
		id:9,
		favourite: false,
		songName:'DEEPER PURPLE PLUCK',
		artist:'give me me ,i c no equal',
		img:'../Aeris.png',
		song: '../beats/GiveMeMe/give me me ,i c no equal_33 DEEPER PURPLE_PLUCK G3ogg.wav'
	},
	{
		id:10,
		favourite: false,
		songName:'808-Stick1',
		artist:'give me me ,i c no equal',
		img:'../Aeris.png',
		song: '../beats/GiveMeMe/give me me ,i c no equal_808-Stick1.wav'
	},
	{
		id:11,
		favourite: false,
		songName:'ACOUSTICG',
		artist:'give me me ,i c no equal',
		img:'../Aeris.png',
		song: '../beats/GiveMeMe/give me me ,i c no equal_ACOUSTICG 1_A4.wav'
	},
	{
		id:12,
		favourite: false,
		songName:'Bass',
		artist:'give me me ,i c no equal',
		img:'../Aeris.png',
		song: '../beats/GiveMeMe/give me me ,i c no equal_Bass.wav'
	},
	{
		id:13,
		favourite: false,
		songName:'BooBass',
		artist:'give me me ,i c no equal',
		img:'../Aeris.png',
		song: '../beats/GiveMeMe/give me me ,i c no equal_BooBass.wav'
	},
	{
		id:14,
		favourite: false,
		songName:'HHats17',
		artist:'give me me ,i c no equal',
		img:'../Aeris.png',
		song: '../beats/GiveMeMe/give me me ,i c no equal_HHats17.wav'
	},
	{
		id:15,
		favourite: false,
		songName:'Jupiter',
		artist:'give me me ,i c no equal',
		img:'../Aeris.png',
		song: '../beats/GiveMeMe/give me me ,i c no equal_Jupiter.wav'
	},
	{
		id:16,
		favourite: false,
		songName:'Master',
		artist:'give me me ,i c no equal',
		img:'../Aeris.png',
		song: '../beats/GiveMeMe/give me me ,i c no equal_Master.wav'
	},
	{
		id:17,
		favourite: false,
		songName:'Selected',
		artist:'give me me ,i c no equal',
		img:'../Aeris.png',
		song: '../beats/GiveMeMe/give me me ,i c no equal_Selected.wav'
	},
	{
		id:18,
		favourite: false,
		songName:'Venus',
		artist:'give me me ,i c no equal',
		img:'../Aeris.png',
		song: '../beats/GiveMeMe/give me me ,i c no equal_Venus.wav'
	}
];

const Mars = styled.div`
	padding: 12px 22px;
`;
const Mtracks = styled.div`
	height: 322px;
	overflow-y: scroll;
	@media ${divice.xl} {
		margin-left: 202px;
	}
`;
const Tracks = styled.div`
	width: 100%;
	color: white;
	display: flex;
	font-size: 14px;
	font-weight: 600;
	margin: 4px 0px;
	padding-bottom: 6px;
	align-items: center;
	p {
		margin-right: 12px;
	}
`;
const Track = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	padding-bottom: 6px;
	border-bottom: 1px solid gray;
`;
const Mimage = styled.div`
	width: 33px;
	height: 33px;
	background: red;
	overflow: hidden;
	margin-right: 12px;
	border-radius: 22px;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
const Section = styled.div`
	width: 100%;
	display: flex;
	p {
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	span {
		margin-left: 0;
		font-size: 12px;
	}
`;
const Hits = styled.div`
	display: flex;
	margin-left: auto;
	align-items: center;
	p {
		margin: 0 22px;
	}
	i {
		margin: 6px;
	}
`;
const Fav = styled.div`
	@media ${divice.sm} {
		margin-right: 44px;
	}
`;

export const AudioList = () => {
	const [auto, setAuto] = useState(false);
	const [songs, setSongs] = useState(Songs);
  const [song, setSong] = useState(songs[0].song);
  const [img, setImage] = useState(songs[0].imgSrc);
 
  useEffect(() => {
    const allSongs = document.querySelectorAll(".songs");
    function changeActive() {
      allSongs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    allSongs.forEach((n) => n.addEventListener("click", changeActive));
  }, []);

  const changeFavourite = (id) => {
    Songs.forEach((song) => {
      if (song.id === id) {
        song.favourite = !song.favourite;
      }
    });
    setSongs([...songs]);
  };
  const setMainSong = (songSrc, imgSrc) => {
    setSong(songSrc);
    setImage(imgSrc);
    setAuto(true);
  };

	return (
		<Mars>
			<Mtracks>
					{songs && songs.map((song) => (
						<Tracks key={song?.id} onClick={() => setMainSong(song?.song, song?.img)}>
							<Track>
								<Mimage><img src={song?.img} alt='' /></Mimage>
								<Section>
									<p>{song?.songName}{''}<span>{song?.artist}</span></p>
									<Hits>
										<p><i><FaShoppingCart /></i></p>
										<p><i><FaHeadphones /></i>22,032,993</p>
										<p><i><FaRegClock /></i>02:22</p>
										<Fav onClick={() => changeFavourite(song?.id)}>
											{song?.favourite ? (<FaHeart />) : (<FaRegHeart />)}
										</Fav>
									</Hits>
								</Section>
							</Track>
						</Tracks>
					))}
			</Mtracks>
			<AudioPlayer song={song} img={img} autoplay={auto} />
		</Mars>
	);
};