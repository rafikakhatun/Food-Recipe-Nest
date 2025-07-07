function Subscribe() {
  return (
    <>
      <section
        className="py-10 px-12"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1
          className="text-2xl text-center italic text-gray-700"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          Join learn Recipe and embark on a culinary journey{" "}
          <span className="hidden sm:inline">
            <br />
          </span>
          to explores create , and savor amazing recipes
        </h1>

        <div
          className="flex items-center justify-center mt-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <input
            className="w-1/2 px-6 py-3 border border-gray-400 rounded-l-lg shadow bg-gray-50 outline-none"
            type="Email"
            placeholder="Enter Your Email"
          />
          <button className="px-3 py-3 border border-orange-500 bg-orange-500 hover:bg-orange-600 text-white rounded-r-lg">
            Subscribe
          </button>
        </div>
      </section>
    </>
  );
}

export default Subscribe;
