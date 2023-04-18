import Button from "../Components/Button";
import Link from "next/link";
export default function Artificial(){
    return(
        <div>
        <div className="h-[800px] w-2/2 bg-blue-900">
        <h1 className="text-[85px] ml-[240px] text-white pt-[230px] font-extrabold">Artificial Intelligence</h1>
        <text className="pt-[10px] text-[25px] ml-[240px] text-white font-extrabold">A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS.</text>
<br/><text className="text-[25px] ml-[220px] text-white font-extrabold">GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF AI.</text>
       <div className="ml-[-50px] mt-[150px]"><Button><Link href="https://portal.piaic.org/signup">Enroll now</Link></Button></div></div>
     
        </div>
    )
}
