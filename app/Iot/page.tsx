import Link from 'next/link';
import Button from '../Components/Button';
export default function Iot(){
    return(
        <div>
        <div className="h-[800px] w-2/2 bg-red-700">
        <h1 className="text-[85px] ml-[240px] text-white pt-[130px] font-extrabold">Ambient Computing and Internet Of Things</h1>
        <text className="pt-[10px] text-[25px] ml-[240px] text-white font-extrabold">A FIFTEEN MONTHS PROGRAM OF IOT AND AMBIENT COMPUTING DESIGNED FOR ABSOLUTE BEGINNERS.</text>
<br/><text className="text-[25px] ml-[200px] text-white font-extrabold">GETTING PAKISTAN READY FOR THE NEW ERA OF INTERNET OF THINGS AND AMBIENT COMPUTING.</text>
       <div className="ml-[50px] mt-[150px]"><Button><Link href="https://portal.piaic.org/signup">Enroll now</Link></Button></div></div>
        </div>
    )
}
