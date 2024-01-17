import basis from '../../assets/basis.webp'
import duns from '../../assets/duns.webp'
import iata from '../../assets/iata.webp'
import google from '../../assets/google.png'

const FooterSecond = () => {
    return (
        <div>
            <footer className="footer p-10 text-base-content justify-evenly border-b-2">
                <nav>
                    <header className="footer-title">Accredited Member</header>
                    <img src={basis} alt="" />
                </nav>
                <nav>
                    <header className="footer-title">Registered At</header>
                    <img src={duns} alt="" />
                </nav>
                <nav>
                    <header className="footer-title">Authorised By</header>
                    <img src={iata} alt="" />
                </nav>
                <nav>
                    <header className="footer-title">Our Partner</header>
                    <img src={google} alt="" />
                </nav>
            </footer>
        </div>
    );
};

export default FooterSecond;