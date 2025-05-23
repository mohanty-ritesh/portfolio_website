import React from 'react'
import Link from "next/link";
import { CodeBracketIcon} from '@heroicons/react/24/solid';
import { motion } from 'framer-motion'; // Import motion

function ProjectCard({imgUrl, Title, Description, gitUrl}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <div className='h-52 md:h-72 rounded-t-xl relative group' style={{background:`url(${imgUrl})`, backgroundSize:"cover", backgroundPosition: "center"}}>
        <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'> {/* Corrected typo: trasition-all to transition-all */}
          <Link href={gitUrl} className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group-hover/link:border-white'> {/* Added group-hover/link for border consistency */}
            <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'/>
          </Link>
        </div>
      </div>
      <div className='text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4'>
        <h5 className='text-xl font-semibold'>{Title}</h5>
        <p className='text-[#ADB7BE]'>{Description}</p>
      </div>
    </motion.div>
  )
}
export default ProjectCard;