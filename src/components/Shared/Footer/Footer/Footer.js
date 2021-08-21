import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FooterCol from "../FooterCol/FooterCol";
import { faFacebook, faGooglePlus, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
const devName = "SA-Shahed";

const Footer = () => {
  const noNamed = [
    { name: "Best Seller", link: "/emergency" },
    { name: "Catalog", link: "/makeup" },
    { name: "illustration", link: "/facial-treatment" },
    { name: "Pencil Sketch", link: "/body-wraps" },
    { name: "Demo", link: "/makeup" },
  ];
  const services = [
    { name: "Order Emergency", link: "/emergency" },
    { name: "Pencil Sketch", link: "/makeup" },
    { name: "Picture Frame", link: "/facial-treatment" },
    { name: "illustration", link: "/body-wraps" },
    { name: "Catalog", link: "/makeup" },
  ];
  const banner = [
    { name: "Wall Banner", link: "/emergency" },
    { name: "Catalog", link: "/makeup" },
    { name: "illustration", link: "/facial-treatment" },
    { name: "Painting", link: "/body-wraps" },
    { name: "Catalog", link: "/makeup" },
  ];
   const ourAddress = [
      {name: "New York - 101010 Hudson" , link: "//google.com/map"},
      {name: "Yards" , link: "//google.com/map"}
  ]
   return (
     <footer className="footer-area">
       <div className="justify-content-center pt-3">
         <div className="row py-5 ms-3">
           <FooterCol key={1} menuTitle={"."} menuItems={noNamed} />
           <FooterCol key={2} menuTitle="Services" menuItems={services} />
           <FooterCol key={3} menuTitle="Banner & Frame" menuItems={banner} />
           <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
             <ul className="social-media list-inline">
               <li className="list-inline-item">
                 <a href="//facebook.com">
                   <FontAwesomeIcon
                     className="icon active-icon"
                     icon={faFacebook}
                   ></FontAwesomeIcon>
                 </a>
               </li>
               <li className="list-inline-item">
                 <a href="//google.com">
                   <FontAwesomeIcon className="icon" icon={faGooglePlus} />
                 </a>
               </li>
               <li className="list-inline-item">
                 <a href="//instagram.com">
                   <FontAwesomeIcon className="icon" icon={faInstagram} />
                 </a>
               </li>
             </ul>
             <div className="mt-5">
               <h6>Call now</h6>
               <button className="btn btn-info w-75"><i class="fa fa-phone" aria-hidden="true"></i>+2025550295</button>
             </div>
           </FooterCol>
         </div>
         <div className="copyRight text-center">
           <p>
             Copyright {new Date().getFullYear()} {devName}, All Rights Reserved
           </p>
         </div>
       </div>
     </footer>
   );
};

export default Footer;