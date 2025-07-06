import herobg from "../assets/herosectionimg.jpeg";

function Hero() {
    return (
        <>

            <section className="px-12 py-14 mt-26 flex justify-between items-center flex-col-reverse md:flex-row ">
                <div className=" mt-6 space-y-6">
                    
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-green-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent">Discover Your Favorite Recipe</h1>
                    <p className="text-gray-600 text-lg italic">Find, cook, and enjoy mouth-watering recipes <br className="hidden md:block"/> that warm your soul and delight your taste buds</p>
                    <button className="px-8 py-3 rounded-lg bg-orange-500 hover:bg-orange-700 text-white">Start Cooking</button>

                </div>

                <div>
                    <img className="  w-96 h-96 rounded-lg" src={herobg} alt="herobg" />
                </div>


            </section>


        </>
    )
}

export default Hero;