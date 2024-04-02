import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" py-16  ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-5 ">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Ritesh's Portfolio</h2>
          <p className="text-lg leading-relaxed">
            Thank you for exploring my portfolio! I hope you found it
            informative. If you are interested, have any questions or would like
            to connect, feel free to reach out. Your visit means a lot to me,
            and I look forward to the possibility of collaborating in the
            future.
          </p>
        </div>
        <div className="w-full xl:px-8 lg:px-8 md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="list-none mt-4">
            <li>
              <a
                href="#hi"
                className="text-lg hover:text-[#935fade8] transition duration-300 ease-in-out"
              >
                Hello!
              </a>
            </li>
            <li>
              <a
                href="#about_me"
                className="text-lg hover:text-[#935fade8] transition duration-300 ease-in-out"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-lg hover:text-[#935fade8] transition duration-300 ease-in-out"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-lg hover:text-[#935fade8] transition duration-300 ease-in-out"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#get_in_touch"
                className="text-lg hover:text-[#935fade8] transition duration-300 ease-in-out"
              >
                Lets Connect..
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-bold mb-4">Contact Info</h2>
          <ul className="list-none mt-4">
            <li>
              <span className="text-lg">📞 Phone:</span> https://t.me/shamp99
            </li>
            <li>
              <span className="text-lg">✉️ Email:</span>{" "}
              mohantyritesh811+portfolio@gmail.com
            </li>
            <li>
              <span className="text-lg">📍 Location:</span> New Delhi, India
            </li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/mohanty-ritesh/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="/Images/linkedin.png" alt="LinkedIn" className="filter invert" width={32} height={32} />
            </a>
            <a
              href="https://github.com/mohanty-ritesh"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="/Images/gh.png" alt="GitHub" className="filter invert" width={32} height={32} />
            </a>
            <a
              href="https://t.me/shamp99"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="/Images/telegram.png" alt="Telegram" className="filter invert"width={32} height={32} />
            </a>
            <a href="mailto:mohantyritesh811@gmail.com" target="_blank" rel="noreferrer">
              <Image src="/Images/gm.png" className="filter invert" alt="Gmail" width={32} height={32} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
