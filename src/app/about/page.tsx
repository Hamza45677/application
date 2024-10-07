"use client"
import Image from "next/image"
export default function About() {
    return (
      <div className="bg-[black] w-full min-h-screen py-12">
        <div className="text-white max-w-[1200px] mx-auto my-12"id="about">
          <div className="grid md:grid-cols-2 sm:py-16 gap-8 items-center">
            <div className="mt-4 md:mt-0 text-left flex">
                <div className="my-auto mx-6">
                    <h2 className="text-4xl font-bold md-4 text-white">About</h2>
                    <p className="text-base lg:text-lg">
                    At [Universal Mobile Zone], we're passionate about [your core mission or values]. Our team is committed to providing [describe products/services] that not only meet your needs but also inspire and empower you. With a focus on quality and customer satisfaction, we aim to create meaningful connections and a seamless experience. Join us as we strive to make a positive impact in our community and beyond!
                    <button className="bg-[#042440] hover:bg-[#5f5f5f] text-white font-medium px-3 py-1 text-lg rounded-lg">More Info...</button>
                    </p>
                </div>
            </div>
            <Image className="mx-auto rounded-3xl w-full h-auto object-cover " src="/images/newcollection.png" alt="" width={500} height={300} />
        </div>
      </div>
      </div>
    );
  };