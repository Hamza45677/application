"use clint"
import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  return (
    <div>
      <section className="bg-[black] text-white py-20 px-4 lg:px-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           

            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
              <p className="mb-2">
                <span className="font-bold">ha9823850@gmail.com</span>
              </p>
              <p className="mb-2">
                <span className="font-bold">Call Us:</span> 0327-2010706
              </p>
              <p className="mb-2">
                <span className="font-bold">Text Us:</span> 0327-2010706
              </p>
              <p className="mb-4">
                <span className="font-bold">AMMA TOWER MALL Shop No:G116 Saddar</span><br />
                Karachi, Pakistan
              </p>

            
              <form className="space-y-4" action="https://getform.io/f/bzylpqga" method="POST">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full p-2 bg-[white] border border-[black] rounded-md text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full p-2 bg-[white] border border-[black] rounded-md text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full p-2 bg-[white] border border-[black] rounded-md text-white"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full py-2 bg-[white] text-[black] font-bold rounded-md hover:bg-[gray]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="relative w-full h-64 overflow-hidden rounded-lg mb-4">
                {/* <img
                  src="/images/shoplogo.png"
                  alt="Mobile image"
                  className="absolute inset-0 w-full h-full object-cover"
                /> */}
                <img
                  src="/images/new2.jpg"
                  alt="Mobile image"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>
              <h4 className="text-xl font-bold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-[#25D366]">
                  <FaWhatsapp className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-[#DD2A7B]">
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-[#1877F2]">
                  <FaFacebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}