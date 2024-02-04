import "./footer.css";
import logoImg from "../../icons_assets/Logo .svg";

import { HashLink } from "react-router-hash-link";

const doormatNavigationLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/#about",
  },
  {
    name: "Menu",
    link: "/#menu",
  },
  {
    name: "Reservations",
    link: "/reservations",
  },
  {
    name: "Order Online",
    link: "/#order-online",
  },
  {
    name: "Login",
    link: "/#login",
  },
];

const contactLinks = [
  {
    name: "Address",
    link: "/#address",
  },
  {
    name: "Phone Number",
    link: "/#phone-number",
  },
  {
    name: "Email",
    link: "/#email",
  },
];

const socialMediaLinks = [
  {
    name: "Facebook",
    link: "/#facebook",
  },
  {
    name: "Instagram",
    link: "/#instagram",
  },
  {
    name: "Twitter",
    link: "/#twitter",
  },
];

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <img src={logoImg} className="footer-image" alt="footer logo"></img>
      <div className="footer-section-container">
        <section
          className="footer-subsection-container"
          id="doormat-navigation"
        >
          <h3 className="footer-subsection-header">Doormat Navigation</h3>
          <div className="link-list-container">
            {doormatNavigationLinks.map((navigation) => {
              return (
                <HashLink
                  to={navigation.link}
                  className="footer-navigation"
                  key={navigation.name}
                >
                  {navigation.name}
                </HashLink>
              );
            })}
          </div>
        </section>
        <section className="footer-subsection-container" id="contact">
          <h3 className="footer-subsection-header">Contact</h3>
          <div className="link-list-container">
            {contactLinks.map((contact) => {
              return (
                <HashLink
                  to={contact.link}
                  className="footer-navigation"
                  key={contact.name}
                >
                  {contact.name}
                </HashLink>
              );
            })}
          </div>
        </section>
        <section className="footer-subsection-container" id="social-media">
          <h3 className="footer-subsection-header">Social Media</h3>
          <div className="link-list-container">
            {socialMediaLinks.map((socialMedia) => {
              return (
                <HashLink
                  to={socialMedia.link}
                  className="footer-navigation"
                  key={socialMedia.name}
                >
                  {socialMedia.name}
                </HashLink>
              );
            })}
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
