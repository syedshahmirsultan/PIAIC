import Link from "next/link";
import Image from "next/image";
import Footer from '../app/Components/Footer';

export default function Faculty(){
    return(
        <div>
        <div className="h-[1100px] w-2/2 bg-white">
           <div className="flex mt-[100px]">
        <div className="h-[400px] w-[650px] bg-blue-900 mr-[50px] ml-[50px] ">
       <Link href="https://www.linkedin.com/in/ziaukhan/?originalSubdomain=pk"><Image src="/images/ziakhanpro.jpg" alt="picture of Zia Khan" height={169} width={169} className=" ml-[180px] rounded-full mt-[20px]"/></Link>
        <text className="text-white text-[35px] mt-[50px] ml-[190px]">Zia Khan</text>
        <div>
       </div><h1 className="text-[30px] text-black-900 font-extrabold mt-[40px] ml-[80px]">LEAD FACULTY MEMBER</h1>
       <text className="pl-[2px] text-[25px] mt-[30px] ml-[80px] text-white">Teaching Web3 and Metaverse technologies</text>
        </div>
        <div className="h-[400px] w-[650px] bg-blue-900  ">
        <Link href="https://www.linkedin.com/in/hira-khan-76523540/?originalSubdomain=pk"><Image src="/images/hirakhan.pro.jpg" alt="picture of Hira Khan" height={169} width={169} className="rounded-full mt-[20px] ml-[180px]"/></Link>
        <text className="text-white text-[35px] mt-[50px] ml-[190px]">Hira Khan</text>
         <h1 className="text-[30px] text-black-900 font-extrabold mt-[20px] ml-[50px]">DIRECTOR AT THE WOMEN EMPOWERMENT DIVISION.</h1>
       <text className="pl-[2px] text-white text-[25px] mt-[20px] ml-[40px] ">Teaching TypeScript and Nextjs technologies
         </text></div></div>
           <div className="flex mt-[100px]">
        <div className="h-[400px] w-[650px] bg-blue-900 ml-[50px]  mr-[50px]">
       <Link href="https://www.linkedin.com/in/adilaltaf/"><Image className="rounded-full mt-[20px] ml-[180px]" src="/images/adilaltafpro.jpg" alt="picture of Adil Altaf" height={169} width={169}/></Link>
        <text className="text-white text-[35px] mt-[50px] ml-[170px]">Adil Altaf</text>
        <h1 className="text-[30px] text-black-900 font-extrabold mt-[20px] ml-[40px]">FULL STACK CLOUD DEVELOPER</h1>
       <text className="text-white pl-[2] text-[25px] mt-[20px] ml-[40px]">Teaching TypeScript and Nextjs technologies
       </text>
        </div>
        <div className="h-[400px] w-[650px] bg-blue-900 ">
        <Link href="https://www.linkedin.com/in/daniyalnagori/?originalSubdomain=pk"><Image className="rounded-full mt-[20px] ml-[180px]" src="/images/daniyalnagoripro.jpg" alt="picture of Daniyal Nagori" height={169} width={169}/></Link>
        <text className="text-white text-[35px] mt-[50px] ml-[160px]">Daniyal Nagori</text>
        <h1 className="text-white-700 text-[30px] font-extrabold mt-[20px] ml-[40px]">SOFTWARE DEVELOPMENT LEAD</h1>
       <text className="text-[25px] mt-[20px] ml-[40px] text-white ">Teaching TypeScript and Nextjs technologies
       </text>
       </div></div>
        </div><Footer/></div>

        
    )
}
