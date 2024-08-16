import React from 'react';
import Head from 'next/head';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import santiImage from '../../assets/santi.jpg'
import aboutUs from '../../assets/aboutus.jpg'
import { DiCodeigniter } from "react-icons/di";
import { GiAbstract008, GiAbstract069, GiTeamIdea  } from "react-icons/gi";
import { AiOutlineThunderbolt } from "react-icons/ai"
import { BsBrilliance } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa6";


const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us - Our E-commerce Journey</title>
        <meta name="description" content="Learn more about our e-commerce journey, innovative solutions, and dedicated team. Discover our story, values, and the people behind our mission." />
        <meta name="keywords" content="about us, e-commerce, company story, innovation, team" />
        <meta property="og:title" content="About Us - Our E-commerce Journey" />
        <meta property="og:description" content="Learn more about our e-commerce journey, innovative solutions, and dedicated team. Discover our story, values, and the people behind our mission." />
        <meta property="og:image" content="/assets/aboutus.jpg" />
        <meta property="og:url" content="http://localhost:3000/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Our E-commerce Journey" />
        <meta name="twitter:description" content="Learn more about our e-commerce journey, innovative solutions, and dedicated team. Discover our story, values, and the people behind our mission." />
        <meta name="twitter:image" content="/assets/aboutus.jpg" />
      </Head>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row md:gap-8 mt-40 mb-8">
          <div className="flex-1 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Our Story</h1>
            <p className="text-base mb-4">
              Welcome to our e-commerce site! We started with a simple mission: to bring high-quality products to our customers with a seamless shopping experience. Our team is passionate about curating the best selection of products and providing excellent customer service.
            </p>
            <p className="text-sm">
              With a focus on innovation and customer satisfaction, we continue to grow and improve our offerings. Thank you for being a part of our journey!
            </p>
          </div>
          <div className="flex-1">
            <Image
              src={aboutUs}
              alt="Image illustrating the story of our company with an attractive design"
              className="w-180 h-80"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-40 mb-8">
          <div className="p-4 bg-white shadow-md text-center rounded-lg transition duration-300 hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white">
            <h2 className="text-xl font-semibold mb-2">Innovative Solutions</h2>
            <div className='flex justify-center items-center mb-4'><DiCodeigniter size={50} /></div>
            <p className="text-gray-600">We strive to bring innovative solutions that enhance user experience and satisfaction.</p>
          </div>
          <div className="p-4 bg-white shadow-md text-center rounded-lg transition duration-300 hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white">
            <h2 className="text-xl font-semibold mb-2">Customer Focused</h2>
            <div className='flex justify-center items-center mb-4'><GiAbstract008 size={50} /></div>
            <p className="text-gray-600">Our team is dedicated to understanding and meeting the needs of our customers.</p>
          </div>
          <div className="p-4 bg-white shadow-md text-center rounded-lg transition duration-300 hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white">
            <h2 className="text-xl font-semibold mb-2">Quality Assurance</h2>
            <div className='flex justify-center items-center mb-4'><GiAbstract069 size={50} /></div>
            <p className="text-gray-600">We maintain high standards for product quality and service excellence.</p>
          </div>
          <div className="p-4 bg-white shadow-md text-center rounded-lg transition duration-300 hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white">
            <h2 className="text-xl font-semibold mb-2">Team Collaboration</h2>
            <div className='flex justify-center items-center mb-4'><GiTeamIdea size={50} /></div>
            <p className="text-gray-600">Our collaborative approach ensures effective problem-solving and innovation.</p>
          </div>
        </div>

        <div className="flex flex-col items-center md:flex-row md:justify-center gap-8 mt-40">
          <div className="flex-shrink-0">
            <Image
              src={santiImage}
              alt="Santiago Alegre, Founder & CEO"
              className="w-60 h-60 rounded-full shadow-lg"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Santiago Alegre</h3>
            <p className="text-lg mb-2">Founder & CEO</p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com/in" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-40 mb-8 flex justify-center px-4">
          <div className="max-w-screen-lg w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-11 gap-6">
              <div className="hidden lg:block lg:col-span-1"></div>
              <div className="hidden lg:block lg:col-span-1"></div>
              <div className="hidden lg:block lg:col-span-1"></div>

              <div className="col-span-1 sm:col-span-1 lg:col-span-2 p-4 bg-white shadow-md text-center rounded-lg transition duration-300 hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white max-w-xs mx-auto">
                <h2 className="text-xl font-semibold mb-2">Innovation</h2>
                <div className='flex justify-center items-center mb-4'><FaRegLightbulb size={50} /></div>
                <p className="text-gray-600">We continuously seek innovative solutions to enhance our offerings.</p>
              </div>
              <div className="col-span-1 sm:col-span-1 lg:col-span-2 p-4 bg-white shadow-md text-center rounded-lg transition duration-300 hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white max-w-xs mx-auto">
                <h2 className="text-xl font-semibold mb-2">Speed</h2>
                <div className='flex justify-center items-center mb-4'><AiOutlineThunderbolt size={50} /></div>
                <p className="text-gray-600">Our team ensures rapid execution and fast delivery.</p>
              </div>
              <div className="col-span-1 sm:col-span-1 lg:col-span-2 p-4 bg-white shadow-md text-center rounded-lg transition duration-300 hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white max-w-xs mx-auto">
                <h2 className="text-xl font-semibold mb-2">Cutting-Edge</h2>
                <div className='flex justify-center items-center mb-4'><BsBrilliance size={50} /></div>
                <p className="text-gray-600">We stay ahead of trends to provide the latest solutions and technologies.</p>
              </div>

              <div className="hidden lg:block lg:col-span-1"></div>
              <div className="hidden lg:block lg:col-span-1"></div>
              <div className="hidden lg:block lg:col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;