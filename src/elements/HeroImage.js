import React from 'react';
import { StyledHeroImage } from '../styles/StyledHeroImage';

const HeroImage = ({ image, title }) => (
    <StyledHeroImage image={image}>
        <div className="heroimage-content">
            <div className="heroimage-text">
                <h1>{title}</h1>
            </div>
        </div>
    </StyledHeroImage>
)

export default HeroImage




//Reduntant Code for future use
    // <div className="card bg-dark text-white">
    //     <img src={image} class="card-img" alt="..." />
    //     <div className="card-img-overlay">
    //         <h5 className="card-title">{title}</h5>
    //         {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //         <p class="card-text">Last updated 3 mins ago</p> */}
    //     </div>
    // </div>