import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Shop
                    <a className="grey-text text-lighten-4 right" href="#!">React Shop</a>
                </div>
            </div>
        </footer>

    );
}

export default Footer;
