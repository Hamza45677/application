import Link from "next/link";
import Image from "next/image";

export default function Navbar(){
    return(
        <nav className="bg-[#042440] text-white py-6">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Image src="/images/icon.png" alt="" width={40} height={40} className="mr-4"/>
                    <span className="text-lg font-bold">UNIVERSAL MOBILE ZONE</span>
                </div>
                <ul className="flex space-x-6">
                <li className="mr-6 font-medium"><Link href='/'>Home</Link></li>
                <li className="mr-6 font-medium"><Link href='/about'>About</Link></li>
               <li className="mr-6 font-medium"><Link href='/product'>Product</Link></li>
              <li className="mr-6"><Link href='/reviews'>Reviews</Link></li>
                <li className="mr-6 font-medium"><Link href='/contactUs'>ContactUs</Link></li>
           </ul>
           <div className="flex items-center">
            <Link href="#" className="hover:text-black font-medium mr-4">Sign In</Link>
            <Link href="#" className="hover:text-black font-medium mr-4">Sign Up</Link>
           </div>
            </div>
             </nav>        
           
    )
}

// {/* <h1 className="fonts-bold text-[60px] text-center">UNIVERSAL MOBILE ZONE</h1> */}
            // <ul className="flex justify-end items-end">
            //    <li className="mr-6"><Link href='/'>Home</Link></li>
            //    <li className="mr-6"><Link href='/about'>About</Link></li>
            //    <li className="mr-6"><Link href='/shop'>Shop</Link></li>
            //    <li className="mr-6"><Link href='/services'>Services</Link></li>
            //    <li className="mr-6"><Link href='/contactUs'>ContactUs</Link></li>
            // </ul>