import Link from 'next/link';
import Button from '../Components/Button';
import Footer from '../Components/Footer';
export default function Web(){
    return(
        <div>  <div className="h-[800px] w-2/2 bg-purple-900">
        <h1 className="text-[70px] ml-[300px] text-white pt-[130px] font-extrabold">Web 3.0 and Metaverse Developer </h1>
        <p className="pt-[10px] text-[25px] ml-[260px] text-white font-extrabold pr-[50px]">A ONE YEAR PROGRAM OF WEB 3.0 AND METAVERSE DEVELOPMENT DESIGNED FOR ABSOLUTE BEGINNERS.</p>
<br/><p className="text-[25px] ml-[260px] text-white font-extrabold pr-[50px]">GETTING PAKISTAN READY FOR THE NEW ERA OF WEB 3.0 AND METAVERSE.</p>
       <div className="ml-[-50px] mt-[150px]"><Button><Link href="https://portal.piaic.org/signup">Enroll now</Link></Button></div></div>

       <Footer/> </div>
    )
}
