import React from 'react';

const Rr = () => {
  return (
    <section className="bg-gradient-to-r from-[#d3c7dbd7] to-[#9034c29e] flex justify-center items-center h-screen">
      <div className="max-w-md px-4 py-8 rounded-lg shadow-md bg-white flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-center">Get in Touch</h1>
        <form className="w-full flex flex-col space-y-4">
          <input
            className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:px-4 md:px-6" // Adjust padding for different screen sizes
            type="text"
            placeholder="Your Name"
            name="name"
            required
          />
          <input
            className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:px-4 md:px-6"
            type="email"
            placeholder="Your Email"
            name="email"
            required
          />
          <textarea
            className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 h-24 resize-none sm:px-4 md:px-6" // Adjust padding for different screen sizes
            placeholder="Your Message"
            name="message"
            required
          ></textarea>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-sm"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Rr;
