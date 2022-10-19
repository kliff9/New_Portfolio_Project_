import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomeHero() {
  return (
    <div className="home-hero">
      <div className="home-hero-text-container">
        <div className="home-hero-text">
          <p>Hey, my name is</p>
          <p>Cliffton Thelusca</p>
          <p>The man who get things done</p>
          <div className="home-hero-icon-container">
            <a className="home-hero-view-resume" href="cliff_resumePDF.pdf">
              View Resume
            </a>
            <a
              className="home-hero-icon"
              rel="noreferrer"
              href="https://github.com/kliff9"
              target="_blank"
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.5 0C7.38375 0 0 7.38375 0 16.5C0 23.8012 4.72312 29.9681 11.2819 32.1544C12.1069 32.2987 12.4162 31.8037 12.4162 31.3706C12.4162 30.9787 12.3956 29.6794 12.3956 28.2975C8.25 29.0606 7.1775 27.2869 6.8475 26.3587C6.66188 25.8844 5.8575 24.42 5.15625 24.0281C4.57875 23.7187 3.75375 22.9556 5.13562 22.935C6.435 22.9144 7.36312 24.1312 7.6725 24.6262C9.1575 27.1219 11.5294 26.4206 12.4781 25.9875C12.6225 24.915 13.0556 24.1931 13.53 23.7806C9.85875 23.3681 6.0225 21.945 6.0225 15.6337C6.0225 13.8394 6.66188 12.3544 7.71375 11.1994C7.54875 10.7869 6.97125 9.09562 7.87875 6.82687C7.87875 6.82687 9.26062 6.39375 12.4162 8.51812C13.7362 8.14687 15.1388 7.96125 16.5413 7.96125C17.9438 7.96125 19.3463 8.14687 20.6663 8.51812C23.8219 6.37312 25.2038 6.82687 25.2038 6.82687C26.1112 9.09562 25.5338 10.7869 25.3688 11.1994C26.4206 12.3544 27.06 13.8187 27.06 15.6337C27.06 21.9656 23.2031 23.3681 19.5319 23.7806C20.13 24.2962 20.6456 25.2862 20.6456 26.8331C20.6456 29.04 20.625 30.8137 20.625 31.3706C20.625 31.8037 20.9344 32.3194 21.7594 32.1544C25.0349 31.0485 27.8811 28.9433 29.8975 26.1351C31.914 23.3269 32.999 19.9571 33 16.5C33 7.38375 25.6163 0 16.5 0Z"
                  fill="url(#paint0_linear_71:52)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_71:52"
                    x1="16.5"
                    y1="0"
                    x2="16.5"
                    y2="32.1859"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4169e1" />
                    <stop offset="1" stopColor="#577ae4" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
            <a
              className="home-hero-icon"
              rel="noreferrer"
              href="https://www.linkedin.com/in/cliffton-thelusca-581aa8225/"
              target="_blank"
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.375 3.90225C1.375 3.23198 1.64126 2.58917 2.11521 2.11521C2.58917 1.64126 3.23198 1.375 3.90225 1.375H29.095C29.4272 1.37446 29.7562 1.43944 30.0632 1.56622C30.3702 1.693 30.6492 1.87909 30.8842 2.11384C31.1192 2.34859 31.3056 2.62738 31.4327 2.93426C31.5598 3.24114 31.6252 3.57008 31.625 3.90225V29.095C31.6254 29.4272 31.5602 29.7563 31.4333 30.0633C31.3064 30.3703 31.1201 30.6493 30.8853 30.8843C30.6504 31.1193 30.3715 31.3057 30.0646 31.4328C29.7576 31.5599 29.4286 31.6252 29.0964 31.625H3.90225C3.57025 31.625 3.24151 31.5596 2.9348 31.4325C2.62809 31.3054 2.34942 31.1191 2.11473 30.8843C1.88003 30.6495 1.69391 30.3707 1.56698 30.0639C1.44006 29.7572 1.37482 29.4284 1.375 29.0964V3.90225ZM13.3485 12.9085H17.4446V14.9655C18.0359 13.783 19.5484 12.7188 21.8212 12.7188C26.1786 12.7188 27.2113 15.0741 27.2113 19.3958V27.401H22.8016V20.3802C22.8016 17.919 22.2104 16.5303 20.7089 16.5303C18.6257 16.5303 17.7595 18.0276 17.7595 20.3802V27.401H13.3485V12.9085ZM5.786 27.2126H10.197V12.7188H5.786V27.2113V27.2126ZM10.8281 7.9915C10.8364 8.36917 10.7692 8.74471 10.6305 9.09606C10.4917 9.44741 10.2841 9.7675 10.0199 10.0375C9.75578 10.3076 9.44034 10.5221 9.09213 10.6686C8.74392 10.8151 8.36995 10.8906 7.99219 10.8906C7.61442 10.8906 7.24046 10.8151 6.89225 10.6686C6.54404 10.5221 6.2286 10.3076 5.96443 10.0375C5.70027 9.7675 5.4927 9.44741 5.35392 9.09606C5.21514 8.74471 5.14793 8.36917 5.15625 7.9915C5.17257 7.25017 5.47853 6.54471 6.00859 6.02619C6.53866 5.50767 7.25068 5.21732 7.99219 5.21732C8.73369 5.21732 9.44572 5.50767 9.97578 6.02619C10.5058 6.54471 10.8118 7.25017 10.8281 7.9915Z"
                  fill="url(#paint0_linear_71:55)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_71:55"
                    x1="16.5"
                    y1="1.375"
                    x2="16.5"
                    y2="31.625"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4169e1" />
                    <stop offset="1" stopColor="#4169e1" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="home-hero-svg">
        <img src="./ninjalaptop.svg" alt="about" />
      </div>
    </div>
  );
}

export default HomeHero;
