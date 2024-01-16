import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
const Banner = () => {
    return (
        <div>
            <div className="container mx-auto bg-base-100 mt-10 p-4 shadow-2xl rounded-2xl">
                <div className="flex gap-6 font-bold mb-6">
                    <div className="flex gap-2">
                        <input type="radio" name="radio-8" className="radio radio-error" /> <h2>One Way</h2>
                    </div>
                    <div className="flex gap-2">
                        <input type="radio" name="radio-8" className="radio radio-error" /> <h2>Round Trip</h2>
                    </div>
                    <div className="flex gap-2">
                        <input type="radio" name="radio-8" className="radio radio-error" /> <h2>Multi City</h2>
                    </div>
                </div>

                <div className="relative">
                    <div className="flex flex-col lg:flex-row justify-center">
                        <div className="card bg-base-100 shadow-xl border">
                            <div className="card-body">
                                <p>From</p>
                                <h2 className="text-xl font-bold">Dhaka</h2>
                                <p>Hazrat Shahjalal International Airport</p>
                            </div>
                        </div>
                        <div className="absolute left-[400px] bottom-[60px] z-10 hidden lg:block">
                            <button className="btn btn-circle bg-gray-200 "><p className="text-[#eb1933]"><FaArrowRight /><FaArrowLeft /></p></button>
                        </div>
                        <div className="card  bg-base-100 shadow-xl border">
                            <div className="card-body">
                                <p>To</p>
                                <h2 className="text-xl font-bold">Chittagong</h2>
                                <p>Shah Amanat International</p>
                            </div>
                        </div>
                        <div className="card  bg-base-100 shadow-xl border lg:ml-4">
                            <div className="flex ">
                                <div className="card-body">
                                    <p className="flex items-center gap-2">Departure <IoIosArrowDown /></p>
                                    <h2 className="text-xl font-bold">16 Jan 24</h2>
                                    <p>Tuesday</p>
                                </div>
                                <div className="divider divider-horizontal"></div>
                                <div className="card-body">
                                    <p className="flex items-center gap-2">Return <IoIosArrowDown /></p>
                                    <p>Tap to Book Return ticket</p>
                                    <p>For More Savings</p>
                                </div>
                            </div>
                        </div>
                        <div className="card  bg-base-100 shadow-xl border lg:ml-4">
                            <div className="card-body">
                                <p>Travelers & Booking Class</p>
                                <h2 className="text-xl font-bold">1 Traveler</h2>
                                <p>Economy</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4 mt-4 mb-6">
                    <h3 className="font-bold">Fare Type : </h3>
                    <button className="btn bg-red-100"><input type="radio" name="radio-8" className="radio radio-error" />Regular Fares</button>
                    <button className="btn bg-red-100"><input type="radio" name="radio-8" className="radio radio-error" />Seaman Fares</button>
                </div>
            </div>
            <div className="flex justify-center -mt-5 ">
                <button className="btn bg-[#eb1933] text-white text-xl">Modify Search</button>
            </div>
        </div>
    );
};

export default Banner;