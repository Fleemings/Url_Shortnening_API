import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import bgMobile from '../../images/bg-shorten-mobile.svg';
import bgDesktop from '../../images/bg-shorten-desktop.svg';
import './Shortener.css';

const storage = () => {
  let links = localStorage.getItem('links');
  if (links) {
    return JSON.parse(localStorage.getItem('links'));
  } else {
    return [];
  }
};

const Shortener = () => {
  const [text, setText] = useState('');
  const [links, setLinks] = useState(storage());

  const errorLink = () => {
    Swal.fire({
      icon: 'error',
      title: 'You must insert a link',
      showCloseButton: true,
      timer: 2000,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      return errorLink();
    } else {
      const shortenerLink = async () => {
        const response = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${text}`
        );
        const data = await response.json();
        setLinks(data.result);
        setText('');
      };
      shortenerLink();
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(links.full_short_link);
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'Your link has been copied',
      showConfirmationButton: true,
      timer: 2000,
    });
  };

  const handleRedirect = () => {
    if (links.full_short_link) {
      window.location.href = links.full_short_link;
    } else {
      return;
    }
  };

  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(links));
  }, [links]);

  return (
    <>
      <section className='max-width shortener relative'>
        <picture>
          <source media='(min-width: 768px)' srcSet={bgMobile} />
          <img src={bgDesktop} alt='Deskopt Background' />
        </picture>
        <form className='form' onSubmit={handleSubmit}>
          <div className='flex flex-col md:flex-row'>
            <input
              type='url'
              placeholder='Shorten a link here'
              className='w-full py-2 px-5 rounded-lg mb-2 md:mb-0 md:w-2/3'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              type='submit'
              className='btn-cta rounded-lg w-full md:w-40 md:ml-5'
              onClick={handleSubmit}
            >
              Shorten It!
            </button>
          </div>
        </form>
        <div className='flex flex-col items-center justify-center bg-white text-center md:flex-row md:justify-between p-3 mt-3 rounded-lg shadow'>
          <article>
            <h6 className='mb-3 md:mb-0'>{links.original_link}</h6>
          </article>
          <article>
            <ul className='md:flex md:items-center'>
              <li className='mr-5'>
                <button
                  className='text-cyan-500'
                  onClick={handleRedirect}
                >
                  {links.full_short_link}
                </button>
              </li>
              <li>
                <button
                  className='btn-cta rounded-full text-sm focus:bg-slate-800'
                  onClick={handleCopy}
                >
                  Copy
                </button>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
};

export default Shortener;
