import React from 'react';
import logo from '../images/logo.png';
import { github_URL } from '../utils/constants';
import github_logo from '../images/github-logo.png';
import ISTDateTime from './Date';

const Header = () => {
  return (
    <div className=' my-4 left-1/2 transform -translate-x-1/2  h-[10%] w-[98%] bg-white bg-opacity-15 backdrop-filter backdrop-blur-sm absolute top-0 rounded-full xl xl:rounded-2xl '>
      <div className='flex justify-between w-full border-2 border-white px-3  h-full items-center rounded-full  xl:rounded-2xl'>
        <div className='xl:flex xl:items-center'>
          <img className='w-14 ml-4 xl:ml-0' src={logo} alt='logo'/>
          <p className='  text-white font-bold text-2xl'>SkyWatch</p>
        </div>
        <div >
          <ISTDateTime/>
        </div>
        <div className='flex justify-center items-center w-14 h-full'>
          <a href={github_URL} target="_blank" rel="noopener noreferrer">
            <img src={github_logo} alt='logo'/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
