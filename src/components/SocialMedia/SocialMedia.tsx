import React from 'react';
import { BsTelegram, BsMailbox2, BsLinkedin } from 'react-icons/bs';

import './SocialMedia.scss';

const SocialMedia: React.FC = () => {
  return (
    <div className='social'>
        <div>
            <BsTelegram />
        </div>
        <div>
            <BsMailbox2 />
        </div>
        <div>
            <BsLinkedin />
        </div>
    </div>
  )
}

export default SocialMedia