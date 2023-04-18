import Button from '../Components/Button';
import  Link from 'next/link'
export default function Genomics(){
    return(
        <div>
              <div className="h-[800px] w-2/2 bg-teal-500">
        <h1 className="text-[85px] ml-[340px] text-white pt-[130px] font-extrabold">Genomics and Bioinformatics</h1>
        <text className="pt-[10px] text-[25px] ml-[340px] text-white font-extrabold">A ONE YEAR PROGRAM OF GENOMICS AND BIOINFORMATICS DESIGNED FOR ABSOLUTE BEGINNERS.</text>
<br/><text className="text-[25px] ml-[280px] text-white font-extrabold">GETTING PAKISTAN READY FOR THE NEW ERA OF GENOMICS AND BIOINFORMATICS.</text>
       <div className="ml-[-50px] mt-[150px]"><Button><Link href="https://portal.piaic.org/signup">Enroll now</Link></Button></div></div>
        </div>
    )
}
