import React from 'react';
import facebook from '../../images/icon-facebook.svg';
import pinterest from '../../images/icon-pinterest.svg';
import twitter from '../../images/icon-twitter.svg';
import instagram from '../../images/icon-instagram.svg';
import logo from '../../images/footer-logo.svg';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className='bg-slate-900 py-10  lg:py-20'>
        <div className='footerCard max-width grid grid-cols-1 gap-5 md:grid-cols-4 lg:grid-cols-5'>
          <article>
            <img src={logo} alt='footer-logo' />
          </article>
          <article>
            <h3 className='text-white text-lg font-bold tracking-wide'>
              Features
            </h3>
            <ul>
              <li>
                <button className='text-slate-200 text-sm mt-1'>
                  Link Shortnening
                </button>
              </li>
              <li>
                <button className='text-slate-200 text-sm mt-1'>
                  Branded Links
                </button>
              </li>
              <li>
                <button className='text-slate-200 text-sm mt-1'>
                  Analytics
                </button>
              </li>
            </ul>
          </article>
          <article>
            <h3 className='text-white text-lg font-bold tracking-wide'>
              Resources
            </h3>
            <ul>
              <li>
                <button className='text-slate-200 text-sm mt-1'>
                  Blog
                </button>
              </li>
              <li>
                <button className='text-slate-200 text-sm mt-1'>
                  Developers
                </button>
              </li>
              <li>
                <button className='text-slate-200 text-sm mt-1'>
                  Support
                </button>
              </li>
            </ul>
          </article>
          <article>
            <h3 className='text-white text-lg font-bold tracking-wide mt-1'>
              Company
            </h3>
            <ul>
              <li>
                <button className='text-slate-200 text-sm mt-1'>
                  About
                </button>
              </li>
              <li>
                <button className='text-slate-200 text-sm mt-1'>
                  Our Team
                </button>
              </li>
              <li>
                <button className='text-slate-200 text-sm mt-1'>
                  Careers
                </button>
              </li>
              <li className='footerContact'>
                <button className='text-slate-200 text-sm mt-1'>
                  Contacts
                </button>
              </li>
            </ul>
          </article>
          <article>
            <ul className='flex items-center justify-center'>
              <li>
                <img src={facebook} alt='facebook logo' />
              </li>
              <li className='ml-4'>
                <img src={twitter} alt='twitter logo' />
              </li>
              <li className='mx-5'>
                <img src={pinterest} alt='pinterest logo' />
              </li>
              <li>
                <img src={instagram} alt='pinterest logo' />
              </li>
            </ul>
          </article>
        </div>
      </footer>
    </>
  );
};

export default Footer;
