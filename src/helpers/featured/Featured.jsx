import Button from '@mui/material/Button';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Stack from '@mui/material/Stack';



import "./Featured.scss";
import xyz from "./featured_imgs/xyz.jpg";
import americanSniper from "./featured_imgs/americanSniper.jpg";
import avatar from "./featured_imgs/avatar.jpg";
import batman from "./featured_imgs/batman.jpg";
import bigFriendlyGiant from "./featured_imgs/bigFriendlyGiant.jpg";
import captAmerica from "./featured_imgs/captAmerica.jpg";
import deadpool from "./featured_imgs/deadpool.jpg";
import guardianofGalaxy from "./featured_imgs/guardianofGalaxy.jpg";
import inception from "./featured_imgs/inception.jpg";
import joker from "./featured_imgs/joker.jpg";
import rampage from "./featured_imgs/rampage.jpg";
import rougeNation from "./featured_imgs/rougeNation.jpg";
import skullIsland from "./featured_imgs/skullIsland.jpg";
import skyScrapper from "./featured_imgs/skyScrapper.jpg";
import spiderman2 from "./featured_imgs/spiderman2.jpg";
import thecurseOfBlackPearl from "./featured_imgs/thecurseOfBlackPearl.jpg";
import theHobbit from "./featured_imgs/theHobbit.jpg";
import wonderWoman from "./featured_imgs/wonderWoman.jpg";
import netflix_logo from "./featured_imgs/netflix_logo.svg";
import FILM from "./featured_imgs/FILM.svg";


import React from 'react'
const featuredArr=[
    {img:xyz, title:"1917", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."},
    {img:americanSniper, title:"American Sniper", description:"lorem23"},
    {img:avatar, title:"Avatar", description:"lorem23"},
    {img:batman, title:"Batman", description:"lorem23"},
    {img:bigFriendlyGiant, title:"Big Friendly Giant", description:"lorem23"},
    {img:captAmerica, title:"Captain America", description:"lorem23"},
    {img:deadpool, title:"Dead Pool", description:"lorem23"},
    {img:guardianofGalaxy, title:"Guardian Of Galaxy", description:"lorem23"},
    {img:inception, title:"Inception", description:"lorem23"},
    {img:joker, title:"Joker", description:"lorem23"},
    {img:rampage, title:"Rampage", description:"lorem23"},
    {img:rougeNation, title:"Rogue Nation", description:"lorem23"},
    {img:skullIsland, title:"Skull Island", description:"lorem23"},
    {img:skyScrapper, title:"Sky Scrapper", description:"lorem23"},
    {img:wonderWoman, title:"Wonder Woman", description:"lorem23"},
    {img:thecurseOfBlackPearl, title:"The Curse Of Black Pearl", description:"lorem23"},
    {img:theHobbit, title:"The Hobbit", description:"lorem23"},
    {img:spiderman2, title:"Spiderman-II", description:"lorem23"}
]
const featuredNow = Math.floor(Math.random()*18);
function Featured() {
    return (
        <div className="_featured">
            <div>
                <img src={featuredArr[featuredNow].img} alt="" />
                <img className="logo_ic" src={netflix_logo} alt=""/>
                <div className="film_text">FILM</div>
                <div className="film_title">{featuredArr[featuredNow].title}</div>
                <div className="film_description">{featuredArr[0].description}</div>
                <Stack className="button_grp" direction="row" spacing={2}>
                    <Button color="inherit" variant="contained" size="large" className="_btnClick" startIcon={<PlayArrowRoundedIcon color="inherit"/>}>
                      Play
                    </Button>
                    <Button variant="contained" color="info" className="_btnClick"  size="large" startIcon={<InfoOutlinedIcon />}>
                        More Info
                    </Button>
                </Stack>
                <div className="_ageRestrict">16+</div>
            </div>
            
        </div>
    )
}

export default Featured
