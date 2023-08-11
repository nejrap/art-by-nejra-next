import {  FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function SocialMedia() {
  return (
    <>
      <a href="https://www.facebook.com/your-profile-url" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://www.instagram.com/artbynejra/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.linkedin.com/in/nejra-pezo/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
    </>
  );
}
