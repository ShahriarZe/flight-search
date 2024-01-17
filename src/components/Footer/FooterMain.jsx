import logo from '../../assets/logo.svg'
import bank from '../../assets/bank.webp'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const FooterMain = () => {
    return (
        <div>
            <footer className="footer p-10 text-base-content justify-evenly">
                <aside className='text-[#eb1933]'>
                    <img src={logo} alt="" />
                    <p>Flight Expert Dhaka (Main Branch)</p>
                    <p>90/1 , Motijheel City Center, Level 25</p>
                    <p>B-1,Lift 26, Dhaka 1000,Bangladesh</p>
                    <div className='flex gap-4 text-2xl mt-2'>
                        <FaFacebookF />
                        <FaInstagram />
                        <FaXTwitter />
                        <FaLinkedinIn />
                        <FaPinterestP />
                    </div>
                </aside>
                <nav>
                    <header className="footer-title">About</header>
                    <a className="link link-hover">Flight Expert</a>
                    <a className="link link-hover">Best Price</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie Policy</a>
                </nav>
                <nav>
                    <header className="footer-title">Help</header>
                    <a className="link link-hover">FAQs</a>
                    <a className="link link-hover">Easy EMI</a>
                    <a className="link link-hover">Payment Methods</a>
                    <a className="link link-hover">Contact US</a>
                </nav>
                <nav>
                    <header className="footer-title">Have Questions ?</header>
                    <a className="link link-hover">+88-09617-111-888</a>
                    <a className="link link-hover">sales@flightexpert.com</a>
                    <a className="link link-hover">Dedicated Customer Support</a>
                </nav>
                <nav>
                    <header className="footer-title">Accepted Payments</header>
                    <img className='w-[300px]' src={bank} alt="" />
                </nav>
            </footer>
        </div>
    );
};

export default FooterMain;