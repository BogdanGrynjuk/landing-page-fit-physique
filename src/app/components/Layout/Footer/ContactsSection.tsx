'use client';

import React from 'react';
import Image from 'next/image';

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const ContactsSection = () => {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="visually-hidden">Contacts</h2>
      <Link href="/">
        <Image
          src={'/assets/img/logo.png'}
          width={117}
          height={55}
          alt="icon fit physique"
        />
      </Link>
      <p className="text-sm/7 mobile:text-base/7 text-white/70">
        Fit Physical Pvt Ltd is for build and fitness body
      </p>
      <address className="flex flex-col gap-6">
        <div className="flex gap-4 items-center">
          <FaMapMarkerAlt className="text-2xl text-accent" />
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm mobile:text-base text-white/70 hover:text-accent transition-all duration-300"
          >
            <div className="flex flex-col">
              <span>Lincoln Park</span>
              <span>Chicago, Illinois</span>
            </div>
          </a>
        </div>

        <div className="flex gap-4 items-center">
          <FaPhoneAlt className="text-2xl text-accent" />
          <div className="flex flex-col">
            <a
              href="tel:5107103464"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm mobile:text-base text-white/70 hover:text-accent transition-all duration-300"
            >
              (510) 710-3464
            </a>
            <a
              href="tel:5106406326"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm mobile:text-base text-white/70 hover:text-accent transition-all duration-300"
            >
              (510) 640-6326
            </a>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <FaEnvelope className="text-2xl text-accent" />
          <div className="flex flex-col">
            <a
              href="mailto:hello@templatesjungle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm mobile:text-base text-white/70 hover:text-accent"
            >
              hello@templatesjungle.com
            </a>
            <a
              href="mailto:info@templatesjungle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm mobile:text-base text-white/70 hover:text-accent"
            >
              info@templatesjungle.com
            </a>
          </div>
        </div>
      </address>
    </section>
  );
};

export default ContactsSection;
