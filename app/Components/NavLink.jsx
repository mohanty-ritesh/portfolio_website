import Link from "next/link"
const NavLink=({href, title})=>{
    return(
        <Link href={href} className="block py-2 px-3 font-bold  text-[#ADB7BE] border-current  sm:text-lx rounded-lg md: hover:text-[#efa620]  hover:bg-[#272727] transition duration-250 ease-in-out">{title}</Link>
    );
};
export default NavLink;

