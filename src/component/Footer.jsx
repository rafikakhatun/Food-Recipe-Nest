function Footer() {
  return (
    <>
      <footer
        className="w-full px-18 py-12 flex flex-col md:flex-row justify-between items-center gap-6 mt-15 bg-orange-50"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div data-aos="fade-right" data-aos-duration="1000">
          <h1 className="text-orange-500 text-lg font-semibold">Company</h1>
          <ul className="mt-2 space-y-1">
            <li className="text-gray-700 cursor-pointer hover:underline">About Us</li>
            <li className="text-gray-700 cursor-pointer hover:underline">Our Stories</li>
            <li className="text-gray-700 cursor-pointer hover:underline">Work With Us</li>
            <li className="text-gray-700 cursor-pointer hover:underline">User Testimonials</li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <h1 className="text-orange-500 text-lg font-semibold">Support</h1>
          <ul className="mt-2 space-y-1">
            <li className="text-gray-700 cursor-pointer hover:underline">FAQ</li>
            <li className="text-gray-700 cursor-pointer hover:underline">Menbership</li>
            <li className="text-gray-700 cursor-pointer hover:underline">User Policy</li>
            <li className="text-gray-700 cursor-pointer hover:underline">Customer</li>
          </ul>
        </div>

        <div data-aos="fade-left" data-aos-duration="1000">
          <h1 className="text-orange-500 text-lg font-semibold">Contact</h1>
          <ul className="mt-2 space-y-1">
            <li className="text-gray-700 cursor-pointer hover:underline">Phone Number</li>
            <li className="text-gray-700 cursor-pointer hover:underline">Email Address</li>
            <li className="text-gray-700 cursor-pointer hover:underline">Social Media</li>
            <li className="text-gray-700 cursor-pointer hover:underline">Company Location</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
