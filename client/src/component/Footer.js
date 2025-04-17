import styles from './Footer.module.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import flvrma from '../assets/flvrma_logo.jpg';
import vrma from '../assets/vrma_3clogo_member.jpg';
import redsky from '../assets/redsky_logo_wtag.jpg';


function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h4>Contact Us</h4>
          <p><strong>SunHost Corporation</strong></p>
          <a
            href="https://www.google.com/maps/place/12930+Gulf+Ln,+Madeira+Beach,+FL+33708"
            target="_blank"
            rel="noopener noreferrer"
            >
            <p>
            12930 Gulf Lane<br />
            Madeira Beach, FL 33708
            </p>
          </a>
          <p><a href="tel:8007414678">(800) 741-4678</a></p>
          <p><a href="https://www.sunhostresorts.com/contact-us">Contact Us</a></p>
        </div>

        <div className={styles.column}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="https://www.sunhostresorts.com/">Home</a></li>
            <li><a href="https://www.sunhostresorts.com/things-to-do">Things to Do</a></li>
            <li><a href="https://www.sunhostresorts.com/sites/default/files/sunhost_surf_song_3-1-2024.pdf">Rate Card</a></li>
            <li><a href="https://www.sunhostresorts.com/sunhost-rental-policies">Rental Policies</a></li>
          </ul>
        </div>

        <div className={styles.social}>
          <a href="https://www.facebook.com/sunhost/"><FaFacebookF /></a>
          <a href="https://instagram.com/sunhostresorts?igshid=YmMyMTA2M2Y="><FaInstagram /></a>
          <a href="https://twitter.com/sunhostFL"><FaTwitter /></a>
          <a href="https://www.youtube.com/channel/UC3iZrU_S9e_9MMqjz_Qf5hA"><FaYoutube /></a>
        </div>
      </div>

      <div className={styles.members}>
        <span>Proud Members of</span>

        <a
            href="https://www.fvrma.org/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={flvrma} alt="Florida VRMA" />
        </a>

        <a
            href="https://www.vrma.org/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={vrma} alt="VRMA" />
        </a>

        <a
            href="https://www.redskyinsurance.com/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={redsky} alt="RedSky" />
        </a>
    </div>



      <div className={styles.bottomBar}>
        <p>© 2025 Sunhost Resorts. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
