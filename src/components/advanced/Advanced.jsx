import React from 'react';
import brandIcon from '../../images/icon-brand-recognition.svg';
import detailedIcon from '../../images/icon-detailed-records.svg';
import customizableIcon from '../../images/icon-fully-customizable.svg';
import './Advanced.css';

const Advanced = () => {
  return (
    <>
      <section className='bg-gray-100 py-10 lg:pt-20 lg:pb-40'>
        <div className='max-width'>
          <h2 className='text-4xl font-bold text-slate-800 mb-3 text-center'>
            Advances Statistics
          </h2>
          <p className='text-slate-400 text-center mb-10 lg:mb-20'>
            Track how your links are performing across the web <br />{' '}
            with our advanced statistics dashboard.
          </p>
          <div className='relative card grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
            <div className='line'></div>
            <article className='bg-white p-5 rounded relative'>
              <img
                src={brandIcon}
                alt='Brand Recognition Icon'
                className='p-3 bg-slate-800 rounded-full -mt-12'
              />
              <h3 className='text-slate-800 text-lg mt-5 mb-2 font-bold'>
                Brand Recognition
              </h3>
              <p className='text-slate-400 text-sm'>
                Boost yout brand recognition with each click. Generic
                links don't mean a thing. BRanded links help instil
                confidence in your content.
              </p>
            </article>
            <article className='bg-white p-5 rounded relative'>
              <img
                src={detailedIcon}
                alt='Detailed Records Icon'
                className='p-3 bg-slate-800 rounded-full -mt-12'
              />
              <h3 className='text-slate-800 text-lg mt-5 mb-2 font-bold'>
                Detailed Records
              </h3>
              <p className='text-slate-400 text-sm'>
                Gain insights into who is clicking your links. Kwoning
                when and where people engage with your content helps
                inform better decisions.
              </p>
            </article>
            <article className='bg-white p-5 rounded relative'>
              <img
                src={customizableIcon}
                alt='Fully Customizable Icon'
                className='p-3 bg-slate-800 rounded-full -mt-12'
              />
              <h3 className='text-slate-800 text-lg mt-5 mb-2 font-bold'>
                Fully Customizable
              </h3>
              <p className='text-slate-400 text-sm'>
                Imrove brand awareness and content discoverability
                through customizable links, supercharging audience
                engagement.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Advanced;
