'use client'
import React from 'react'
import Container from '../../interfaces/Container'
import FooterList from './FooterList'
import Link from 'next/link'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai'
import { useAuth } from '../Context/AuthContext'

const Footer = () => {
  const { user  } = useAuth();

  return (
    <footer className='bg-black text-slate-200 text-sm'>
      <Container>
        <div className='flex flex-col md:flex-row justify-between pt-16 pb-8'>
          <FooterList>
            <h3 className='text-base font-bold mb-2'>Customer Service</h3>
            <Link href="/contact">Contact Us</Link>
            <Link href="#">Returns & Exchanges</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">FAQs</Link>
          </FooterList>
          <div className='w-full md:w-1/3 mb-6 md:mb-0'>
            <h3 className='text-base font-bold mb-2'>Sas</h3>
            <p className='mb-2'>
              SAS Ecommerce is a website created by the SAS group, <br />
              a leader in web development utilizing cutting-edge technology. We pride ourselves on delivering innovative <br />
              and high-quality web solutions.
            </p>
          </div>
          <FooterList>
            <h3 className='text-base font-bold mb-2'>Quick Link</h3>
            <Link href="/about">About Us</Link>
            {user? (
              <>
                <Link href="/dashboard">My Account</Link>
              </>
            ) : (
              <>
                <Link href="/register">Register</Link>
              </>
            )}
            <Link href="#">Terms of Use</Link>
          </FooterList>
          <FooterList>
            <h3 className='text-base font-bold mb-2'>Follow Us</h3>
            <div className='flex gap-2'>
              <Link href="https://linkedin.com/in" target="_blank">
                <FaLinkedin size={24} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={24} />
              </Link>
              <Link href="https://github.com" target="_blank">
                <FaGithub size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
        <div className='border-t w-full border-gray-300 border-opacity-20 py-4 text-center'>
          <p className='text-gray-700'>&copy; {new Date().getFullYear()} Sas Ecommerce. All rights reserved </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;
