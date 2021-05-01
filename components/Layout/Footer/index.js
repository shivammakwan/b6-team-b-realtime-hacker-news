const Footer = () => {
    return (
        <footer className="hn-footer-area">
            <div className="flex flex-col flex-wrap md:flex-row justify-between">
                <div className="w-full md:w-2/4 lg:w-1/4 box">
                    <h2 className="title">Categories</h2>
                    <ul>
                        <li>Guidelines</li>
                        <li>FAQs</li>
                        <li>Lists</li>
                        <li>Security</li>
                        <li>Legal</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="w-full md:w-2/4 lg:w-1/4 box">
                    <h3 className="title">Developers</h3>
                    <ul>
                        <li>API</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className="w-full md:w-2/4 lg:w-1/4 box">
                    <h3 className="title">Newsletter</h3>
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <div className="w-full md:w-2/4 lg:w-1/4 box">
                    <img src="assets/images/logo-dark-striped.png" />
                    <p className="pt-5">
                        Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Quis ipsum suspend isse ultrices gravida.
                    </p>
                </div>
            </div>
            <div className="bottom-box text-center">Copyright &copy; 2021 HackerNews</div>
        </footer>
    );
};

export default Footer;
