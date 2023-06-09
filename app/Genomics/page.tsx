import Button from '../Components/Button';
import  Link from 'next/link'
import Footer from '../Components/Footer';
export default function Genomics(){
    return(
        <div>
              <div className="h-[800px] w-2/2 bg-teal-500">
        <h1 className="text-[70px] ml-[300px] text-white pt-[130px] font-extrabold">Genomics and Bioinformatics</h1>
        <p className="pt-[10px] text-[25px] ml-[300px] text-white font-extrabold pr-[50px]">A ONE YEAR PROGRAM OF GENOMICS AND BIOINFORMATICS DESIGNED FOR ABSOLUTE BEGINNERS.</p>
<br/><p className="text-[25px] ml-[280px] text-white font-extrabold pr-[50px]">GETTING PAKISTAN READY FOR THE NEW ERA OF GENOMICS AND BIOINFORMATICS.</p>
       <div className="ml-[-50px] mt-[150px]"><Button><Link href="https://portal.piaic.org/signup">Enroll now</Link></Button></div></div>
        <Footer/></div>
    )
}
