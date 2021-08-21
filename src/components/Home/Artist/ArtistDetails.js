import React from 'react';
import "./Artist.css"
import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const ArtistDetails = ({artist}) => {
   return (
     <div className="col-md-3 pb-4">
       <div className="artist-member bg-light shadow rounded">
         <figure className="effect-zoe p-1">
           <div>
             <img
               className="img-fluid"
               src={`data:image/png;base64,${artist.image.img}`} alt={artist.name}
             />
           </div>
           <div className="artist-attr mt-4 mb-4">
             <h5 className="text-brand artist-name">{artist.name}</h5>
             <span className="fst-italic">{artist.position}</span>
           </div>
           <figcaption className="">
             <p className="icon-links">
               <Link to={artist.facebook}>
                 <FontAwesomeIcon icon={faFacebook} />
               </Link>
               <Link to={artist.instagram}>
                 <FontAwesomeIcon icon={faInstagram} />
               </Link>
               <Link to={artist.email}>
                 <FontAwesomeIcon icon={faEnvelope}  />
               </Link>
             </p>
             <p className="phone-number">
               <a>
                 <FontAwesomeIcon icon={faPhone} className="" />
                 {artist.phone}
               </a>
             </p>
           </figcaption>
         </figure>
       </div>
       <div className="dividewhite4"></div>
     </div>
   );
};

export default ArtistDetails;