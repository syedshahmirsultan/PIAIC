import Link from 'next/link';
import Button from '../Components/Button';
export default function Cloud(){
    return(
        <div>
         <div className="h-[800px] w-2/2 bg-green-900">
        <h1 className="text-[70px] ml-[340px] text-white pt-[120px] font-extrabold">Cloud Native Computing</h1>
        <p className="pt-[10px] text-[25px] ml-[340px] text-white font-extrabold">A ONE YEAR CLOUD COMPUTING PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS.</p>
<br/><p className="text-[25px] ml-[240px] text-white font-extrabold">GETTING PAKISTAN READY FOR THE NEW ERA OF MICROSERVICES AND MULTI-CLOUD NATIVE COMPUTING.</p>
       <div className="ml-[-50px] mt-[150px]"><Button><Link href="https://portal.piaic.org/signup">Enroll now</Link></Button></div></div>
        </div>
    )
}
