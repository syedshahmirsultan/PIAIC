import Link from 'next/link';
import Button from '../Components/Button';
export default function Cloud(){
    return(
        <div>
                    <div className="h-[800px] w-2/2 bg-green-900">
        <h1 className="text-[85px] ml-[440px] text-white pt-[130px] font-extrabold">Cloud Native Computing</h1>
        <text className="pt-[10px] text-[25px] ml-[440px] text-white font-extrabold">A ONE YEAR CLOUD COMPUTING PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS.</text>
<br/><text className="text-[25px] ml-[300px] text-white font-extrabold">GETTING PAKISTAN READY FOR THE NEW ERA OF MICROSERVICES AND MULTI-CLOUD NATIVE COMPUTING.</text>
       <div className="ml-[-50px] mt-[150px]"><Button><Link href="https://portal.piaic.org/signup">Enroll now</Link></Button></div></div>
        </div>
    )
}