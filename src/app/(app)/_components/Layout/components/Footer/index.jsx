/* eslint-disable jsx-a11y/control-has-associated-label */

import "./animation.js"

const Footer = () => (
  <>
    <div className="md:flex-column items-center w-full md:px-11 px-5 pb-5 bg-black text-white">
      <div className="all-divider-line my-10"></div>
      <div className="flex myfont graycolor flex-row">
        <div className="w-1/2">
          <h2>Liens du site</h2>
        </div>
        <div className="w-1/2">
          <h2>Autres liens</h2>
        </div>
      </div>
      <div className="my-5 flex w-full flex-row graycolor ">
        <div className="w-1/2">
          <a className="link-underline link-underline-black hover:scale-105 duration-200" href="/">
            <p>Haut de page</p>
          </a>
		      <a className="link-underline link-underline-black hover:scale-105 duration-200" href="#why">
            <p>Pourquoi me choisir ?</p>
          </a>
          <a className="link-underline link-underline-black hover:scale-105 duration-200" href="#projects">
            <p>Mes projets</p>
          </a>
        </div>

        <div className="w-1/2 flex items-center space-x-4">
          <a className="link-underline link-underline-black hover:scale-105 duration-200" target="_blank" href="https://www.linkedin.com/in/romain-flori-cantrelle/">
            <img src="/svg/linkedin.svg" className="hover:scale-105 duration-200 cursor-pointer"></img>
          </a>
          <a className="hover:scale-105 duration-200" target="_blank" rel="noopener noreferrer" href="https://github.com/RomainFlori">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="all-divider-line mt-10 mb-4"></div>

      <div className="w-full">
        <div className="flex font-semibold">
          <p className="glitchtext myFont" title="©Romain Flori-Cantrelle">
            ©Romain Flori-Cantrelle {new Date().getFullYear()}.
          </p>
        </div>
        <div className="justify-end flex font-semibold mt-3">
          <p className="graycolor justify-end myFont flex">Site développé avec Next.js - TailwindCss</p>
        </div>
      </div>
    </div>
  </>
)

export default Footer
