'use client'
import Image from "next/image";

export default function Home() {
  return (
    <div className=" h-screen w-full bg-[black] relative flex">
      <div className="w-1/2 flex flex-col justify-center pl-12 text-white">
      <h1 className="text-5xl font-bold mb-6">Wellcome To <br/>
      Uinversal Mobile Zone</h1>
      <p className="text-lg text-white font-medium mb-6 max-w-lg">What you get for this extra investment is slightly better battery life, a slightly larger and higher resolution display, and a significantly better camera setup. So if you plan to use the phone often for taking pictures and shooting video, the better camera setup offered by the iPhone 16 Pro is well worth it.</p>
      <div className="flex space-x-4">
      <button className="bg-[#042440] hover:bg-[black] text-white font-medium px-6 py-3 text-xl rounded-xl">Shop Now →</button>
      </div>
      </div>
      <div className="w-1/2 h-full"> 
      <Image src="/images/newcollection.png" alt="" width={900} height={300} object-cover w-full h-full />
      </div>
      </div>
  )
};