import React from 'react';
import Button from './Components/Button';
import Image from 'next/image';
import Link from 'next/link';
export default function Home(){
  return(
    <div>
      <div className="h-[900px] w-2/2 bg-gray-900/10 pt-[30px] ">
    <Link href="https://en.wikipedia.org/wiki/Arif_Alvi"><Image src="/images/president2.jpg" alt="picture of President" height={800} width={300}  className="mt-[40px] ml-[50px] "/></Link>
      <h1 className="font-extrabold text-[65px] text-blue-800 ml-[600px] font-sans mt-[-500px]"><strong>Presidential Initiative</strong></h1>
      <h1 className='text-[45px] text-blue-800 ml-[600px] mt-[30px]'>
for Artificial Intelligence & Computing (PIAIC)</h1>
<p className="text-[25px] text-blue-800 ml-[600px] mt-[20px] pr-[200px]">The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. We want Pakistan to become a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented reality, and internet of things.</p>
 <div className="mt-[80px] ml-[50px]"><Button><Link href="https://portal.piaic.org/signup">Enroll now</Link></Button></div> 
 </div>
 <div className="h-[1200px] w-2/2">
  <h1 className=" mt-[50px] text-gray-700 text-[70px] text-center">Available Programs</h1>
<Link href="/Artificial"> <div className="h-[200px] mt-[100px] w-[300px] bg-black-900 ml-[100px] border-2 border-blue-900 transition duration-150 ease-out transform hover:scale-125 hover:-translate-y-[50px]">
 <div className="h-[50px] w-2/2 bg-blue-900">
    </div>
<h1 className="text-[25px] text-center text-blue-900 mt-[30px] font-bold">Artificial Intelligence</h1>
</div></Link>
<Link href="/Web"> <div className="h-[200px]  w-[300px] bg-black-900 ml-[100px] mt-[-300px] border-2 border-purple-900 transition duration-150 ease-out transform hover:scale-125 hover:-translate-y-[50px]">
 <div className="h-[50px] w-2/2 bg-purple-900"> 
    </div>
<h1 className="text-[25px] text-center text-purple-900 mt-[30px] font-bold">Web 3.0 and Metaverse developer</h1>
</div></Link>
 </div>
 <Link href="/Cloud"> <div className="h-[200px]  w-[300px] bg-black-900 ml-[100px] mt-[-980px] border-2 border-green-900 transition duration-150 ease-out transform hover:scale-125 hover:-translate-y-[50px]">
 <div className="h-[50px] w-2/2 bg-green-900"> 
    </div>
<h1 className="text-[25px] text-center text-green-900 mt-[30px] font-bold">Cloud Native Computting</h1>
</div></Link>
<Link href="/Iot"> <div className="h-[200px]  w-[300px] bg-black-900 ml-[100px] mt-[100px] border-2 border-red-700 transition duration-150 ease-out transform hover:scale-125 hover:translate-y-[50px]">
 <div className="h-[50px] w-2/2 bg-red-700"> 
    </div>
<h1 className="text-[25px] text-center text-red-700 mt-[30px] font-bold">Ambient Computting and Iot</h1>
</div></Link>
<Link href="/Genomics"> <div className="h-[200px]  w-[300px] bg-black-900 ml-[100px] mt-[-300px] border-2 border-teal-500 transition duration-150 ease-out transform hover:scale-125 hover:translate-y-[50px]">
 <div className="h-[50px] w-2/2 bg-teal-500">
    </div>
<h1 className="text-[25px] text-center text-teal-500 mt-[30px] font-bold">Genomics and Bioinformatics</h1>
</div></Link>
<Link href="/Network"> <div className="h-[200px]  w-[300px] bg-black-900 ml-[100px] mt-[-300px]  border-2 border-pink-600 transition duration-150 ease-out transform hover:scale-125 hover:translate-y-[50px]">
 <div className="h-[50px] w-2/2 bg-pink-600"> 
    </div>
<h1 className="text-[25px] text-center text-pink-600 mt-[30px] font-bold">Network Programmability and Automation </h1>
</div></Link>
<div className=' mt-[200px] bg-teal-500 h-[750px] w-2/2'>
  <h1 className="text-white text-extrabold ml-[45px] text-[60px] font-serif">Image</h1>
  <Image src="/images/panapic.jpg" alt="picture of inaguration of PIAIC" height={300} width={600} className="ml-[50px] mt-[50px]"/>
   <h1 className="text-black-900 text-[40px] pl-[920px]  mt-[-530px] font-sans font-extrabold]">
   <strong> President launching PIAIC Website</strong> </h1>
 <p className="text-white text-[32px] text-left pl-[920px] mt-[20px] pr-[20px]">President Dr. Arif Alvi launching the official website of PIAIC on December 9,3018.
  From left to right: Mr. Adil Altaf (Director Panacloud), Mr. Zia Ullah Khan (CEO Panacloud),
  Mr. Hunaid Lakhani (Chancellor Iqra University), President Dr. Arif Alvi, Mr. Sulaiman S. Mehdi (Chairman Pakistan Stock  Exchange)
  , Mr. Zeeshan Hanif (CTO Panacloud), Maulana Bashir Farooqi
   (Founder Saylani Welfare 
   Trust),
    Mr. Yousuf Lakhani (President Saylani Welfare Trust).</p>
</div>
<div className="h-[350px] w-2/2 bg-gray-300">
  <h1 className="text-blue-900  font-extrabold text-center text-[55px] pt-[30px]"><strong>Strategic Partners
    </strong></h1><Link href="https://web.facebook.com/groups/deep.learning.edu/?_rdc=1&_rdr"><Image src="/images/panacloud.jpg" height={100} width={250} alt="Logo of Panacloud" 
    className="ml-[500px] mt-[60px]"/></Link>
   <Link href="https://saylaniwelfare.com/en"><Image src="/images/saylani.jpg" height={200} width={500} alt="Logo of Saylani Welfare Trust" 
    className="ml-[900px] mt-[-150px]"/></Link>
</div>
 </div>
  
  )
}
