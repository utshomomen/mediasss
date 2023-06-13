import React from "react";
import Link from "next/link";
import { SvgLogo } from "./svgs/SvgLogo";
import { SvgFaceBook } from "./svgs/SvgFaceBook";
import { SvgYoutube } from "./svgs/SvgYoutube";
import { SvgInstagram } from "./svgs/SvgInstagram";

const Footer = () => {
  return (
    <footer className="footer dark:border-t dark:border-slate-200/10 dark:bg-gray-900 dark:after:bg-none dark:before:bg-none">
    {/* <footer className="footer bg-yellow-500 dark:bg-gray-800/75 dark:backdrop-blur-md"> */}
      <div className="wrapper">
        <div className="footer__top">
          <div className="footer__links anime">
            <div className="footer__logo">
              <SvgLogo />
            </div>
            <div className="footer__icons anime">
              <Link href="/" className="footer__icon">
                <SvgFaceBook />
              </Link>
              <Link href="/" className="footer__icon">
                <SvgYoutube />
              </Link>
              <Link href="/" className="footer__icon">
                <SvgInstagram />
              </Link>
            </div>
          </div>
          <div className="footer__links anime">
            <p className="footer__desc anime">Lorem ipsum dolor sit amet.</p>
            <p className="footer__desc anime">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="footer__desc anime">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, in! 
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, modi.
            </p>
            <p className="footer__desc anime">Email: mohibul.momen@gmail.com</p>
            <p className="footer__desc anime">Telephone : 01747171290</p>
          </div>
          <div className="footer__links anime">
            <Link href="/" className="footer__link anime">
            Frequently asked questions
            </Link>
            <Link href="/" className="footer__link anime">
            News
            </Link>
            <Link href="/" className="footer__link anime">
            Privacy Policy
            </Link>
          </div>
        </div>
        <div className="footer__bottom border-t border-slate-200/10 pt-6">
          <p className="footer__text">© Logo. All right received</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
