import { Input } from "../Input.style";
import { FooterRoot, FooterColumn, FooterLink } from "./Footer.style";
const Footer = () => {
    return (
        <FooterRoot>
            <FooterColumn>
                <h1>Flone.</h1>
                <p>© 2021 </p>
                <p>All Rights Reserved</p>
            </FooterColumn>
            <FooterColumn>
                <h4>ABOUT US</h4>
                <FooterLink href="/">About us</FooterLink>
                <FooterLink href="/">Store location</FooterLink>
                <FooterLink href="/">Contact</FooterLink>
                <FooterLink href="/">Orders tracking</FooterLink>
            </FooterColumn>
            <FooterColumn>
                <h4>USEFUL LINKS</h4>
                <FooterLink href="/">Returns</FooterLink>
                <FooterLink href="/">Support Policy</FooterLink>
                <FooterLink href="/">Size Guide</FooterLink>
                <FooterLink href="/">FAQs</FooterLink>
            </FooterColumn>
            <FooterColumn>
                <h4>FOLLOW US</h4>
                <FooterLink href="/">Facebook</FooterLink>
                <FooterLink href="/">Twitter</FooterLink>
                <FooterLink href="/">Instagram</FooterLink>
                <FooterLink href="/">Youtube</FooterLink>
            </FooterColumn>
            <FooterColumn>
                <h4>SUBSCRIBE</h4>
                <p>
                    Get E-mail updates about our latest shop and special offers.
                </p>
                <Input placeholder="Enter your email here.." />
                <br />
                <FooterLink textDecoration="underline">SUBSCRIBE</FooterLink>
            </FooterColumn>
        </FooterRoot>
    );
};

export default Footer;
