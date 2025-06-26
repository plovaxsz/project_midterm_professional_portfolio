import React from 'react';
// Import BsGithub, dan hapus FaFacebookF
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://x.com/plovaxyz" target="_blank" rel="noopener noreferrer">
        <BsTwitter />
      </a>
    </div>
    <div>
      {/* Ganti ikon Facebook dengan BsGithub */}
      <a href="https://github.com/plovaxsz" target="_blank" rel="noopener noreferrer">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/plovaxs" target="_blank" rel="noopener noreferrer">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;

