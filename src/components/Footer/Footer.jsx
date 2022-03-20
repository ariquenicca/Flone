import { Input } from "../Input.style";
import { FooterColumn } from "./FooterColumn.style";
import { FooterLink } from "./FooterLink.style";
const Footer = ({ className }) => {
  return (
    <div className={className}>
      <FooterColumn>
        <h1>Flone.</h1>
        <p>© 2021 </p>
        <p>All Rights Reserved</p>
      </FooterColumn>
      <FooterColumn>
        <h4>ABOUT US</h4>
        <FooterLink>About us</FooterLink>
        <FooterLink>Store location</FooterLink>
        <FooterLink>Contact</FooterLink>
        <FooterLink>Orders tracking</FooterLink>
      </FooterColumn>
      <FooterColumn>
        <h4>USEFUL LINKS</h4>
        <FooterLink>Returns</FooterLink>
        <FooterLink>SUpport Policy</FooterLink>
        <FooterLink>Size Guide</FooterLink>
        <FooterLink>FAQs</FooterLink>
      </FooterColumn>
      <FooterColumn>
        <h4>FOLLOW US</h4>
        <FooterLink>Facebook</FooterLink>
        <FooterLink>Twitter</FooterLink>
        <FooterLink>Instagram</FooterLink>
        <FooterLink>Youtube</FooterLink>
      </FooterColumn>
      <FooterColumn>
        <h4>SUBSCRIBE</h4>
        <p>Get E-mail updates about our latest shop and special offers.</p>
        <Input placeholder="Enter your email here.." />
        <br />
        <FooterLink textDecoration="underline">SUBSCRIBE</FooterLink>
      </FooterColumn>
    </div>
  );
};

export default Footer;
