import Image from "next/image";
import Link from "next/link";



export default function Navbar(){
  return(
      <div> 
          <div className="flex flex-wrap bg-green-900 h-[100px] ">
              <div className="w-full justify-evenly">
                  <Link href="https://web.facebook.com/groups/piaic/?_rdc=1&_rdr">
                      <Image src="/images/piaiclogo.jpg" alt="logo of PIAIC" height={60} width={110}/>
                  </Link></div>
              
              <div className="flex flex-wrap w-full  text-white text-[30px] ml-[208px] mt-[-109px]  ">
                      <Link href="/" className="mr-4 mb-4 ml-[10px] hover:text-yellow-600 hover:rotate-360">Home</Link>
                      <Link href="https://portal.piaic.org/signup" className="mr-4 ml-[20px] mb-2 hover:text-yellow-600">Apply</Link>
                      <Link href="/About" className="mr-4 mb-4 ml-[20px]  hover:text-yellow-600">About</Link>
                      <Link href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit" className="mr-4 ml-[20px] mb-4 md:mb-0 hover:text-yellow-600">Syllabus</Link>
                      <Link href="/Faculty" className="mr-4 mb-4 ml-[30px]  hover:text-yellow-600">Faculty</Link>
                 
                  <div className="relative ">
                      <div className="dropdown text-white text-[30px] ml-[40px] hover:text-yellow-600 cursor-pointer flex-wrap">
                          Courses
                          <ul className="dropdown-menu hidden bg-green-100 text-black-700 rounded-lg py-2 ">
                              <Link href="/Web" className="block px-4 py-2 hover:bg-gray-500">Web 3.0 and Metaverse developer</Link>
                              <Link href="/Artificial" className="block px-4 py-2 hover:bg-gray-500">Artificial Intelligence</Link>
                              <Link href="/Cloud" className="block px-4 py-2 hover:bg-gray-500">Cloud Native Computting</Link>
                              <Link href="/Iot" className="block px-4 py-2 hover:bg-gray-500">Ambient Computting and Iot</Link>
                              <Link href="/Genomics" className="block px-4 py-2 hover:bg-gray-500">Genomics and Bioinformatics</Link>
                              <Link href="/Network" className="block px-4 py-2 hover:bg-gray-500">Network Programmability and Automation</Link>
                          </ul> </div></div>
                      </div>
                  </div>
              </div>
          
  )
}
