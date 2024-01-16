import air from '../../assets/air.png'
import arrow from '../../assets/arrow.webp'
import { IoIosArrowDown } from "react-icons/io";
const FlightCard = () => {
    return (
        <div>
            <div>
                <h2 className="text-center font-bold text-4xl">Flights From Dhaka to Chittagong</h2>
                <div className="flex flex-col lg:flex-row justify-center mt-6">
                    <div className="card w-full bg-gray-200 shadow-xl">
                        <div className="card-body">
                            <h3 className="text-xl font-bold">Cheapest</h3>
                            <p className="text-xl">To get the cheapest available flights</p>
                        </div>
                    </div>
                    <div className="divider lg:divider-horizontal"></div>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h3 className="text-xl font-bold">Shortest</h3>
                            <p className="text-xl">To get the shortest available flights</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="card card-side bg-base-100 shadow-xl mt-6 flex flex-col md:flex-row justify-around gap-4 text-center  py-6 mb-6">
                    <div className='text-center'>
                        <img className='w-[150px] ml-32 md:ml-8' src={air} alt="" />
                        <p className='text-xl mb-2'>Biman Bangladesh Airlines</p>
                        <p className='text-accent'>Partially refundable</p>
                    </div>
                    <div>
                        <p>Depart</p>
                        <h4 className='text-xl font-bold mt-2 mb-2'>19:00</h4>
                        <p className='text-xl mb-2'>Tue,30 Jan, 2024</p>
                        <p>Dhaka (DAC)</p>
                    </div>
                    <div>
                        <p className='text-xl'>Biman Bangladesh Airlines</p>
                        <img className='w-[200px] mt-4 mb-4' src={arrow} alt="" />
                        <p className='text-xl mb-2'>Biman Bangladesh Airlines</p>
                        <p className='text-accent'>Partially refundable</p>
                    </div>

                    <div>
                        <p>Arrive</p>
                        <h4 className='text-xl font-bold mt-2 mb-2'>19:00</h4>
                        <p className='text-xl mb-2'>Tue,30 Jan, 2024</p>
                        <p>Chittagong (CGP)</p>
                    </div>
                    <div>
                        <p>Price </p>
                        <h4 className='text-xl font-bold mt-2 mb-2'>BDT 5,816</h4>
                    </div>
                    <div className='flex flex-col gap-32'>
                        <button className='btn bg-[#eb1933] text-white'>Book Now</button>
                        <button className='btn text-[#eb1933]'>Flight Details <IoIosArrowDown /></button>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl mt-6 flex flex-col md:flex-row justify-around gap-4 text-center  py-6 mb-6">
                    <div className='text-center'>
                        <img className='w-[150px] ml-32 md:ml-8' src={air} alt="" />
                        <p className='text-xl mb-2'>Biman Bangladesh Airlines</p>
                        <p className='text-accent'>Partially refundable</p>
                    </div>
                    <div>
                        <p>Depart</p>
                        <h4 className='text-xl font-bold mt-2 mb-2'>19:00</h4>
                        <p className='text-xl mb-2'>Tue,30 Jan, 2024</p>
                        <p>Dhaka (DAC)</p>
                    </div>
                    <div>
                        <p className='text-xl'>Biman Bangladesh Airlines</p>
                        <img className='w-[200px] mt-4 mb-4' src={arrow} alt="" />
                        <p className='text-xl mb-2'>Biman Bangladesh Airlines</p>
                        <p className='text-accent'>Partially refundable</p>
                    </div>

                    <div>
                        <p>Arrive</p>
                        <h4 className='text-xl font-bold mt-2 mb-2'>19:00</h4>
                        <p className='text-xl mb-2'>Tue,30 Jan, 2024</p>
                        <p>Chittagong (CGP)</p>
                    </div>
                    <div>
                        <p>Price </p>
                        <h4 className='text-xl font-bold mt-2 mb-2'>BDT 5,816</h4>
                    </div>
                    <div className='flex flex-col gap-32'>
                        <button className='btn bg-[#eb1933] text-white'>Book Now</button>
                        <button className='btn text-[#eb1933]'>Flight Details <IoIosArrowDown /></button>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl mt-6 flex flex-col md:flex-row justify-around gap-4 text-center  py-6 mb-6">
                    <div className='text-center'>
                        <img className='w-[150px] ml-32 md:ml-8' src={air} alt="" />
                        <p className='text-xl mb-2'>Biman Bangladesh Airlines</p>
                        <p className='text-accent'>Partially refundable</p>
                    </div>
                    <div>
                        <p>Depart</p>
                        <h4 className='text-xl font-bold mt-2 mb-2'>19:00</h4>
                        <p className='text-xl mb-2'>Tue,30 Jan, 2024</p>
                        <p>Dhaka (DAC)</p>
                    </div>
                    <div>
                        <p className='text-xl'>Biman Bangladesh Airlines</p>
                        <img className='w-[200px] mt-4 mb-4' src={arrow} alt="" />
                        <p className='text-xl mb-2'>Biman Bangladesh Airlines</p>
                        <p className='text-accent'>Partially refundable</p>
                    </div>

                    <div>
                        <p>Arrive</p>
                        <h4 className='text-xl font-bold mt-2 mb-2'>19:00</h4>
                        <p className='text-xl mb-2'>Tue,30 Jan, 2024</p>
                        <p>Chittagong (CGP)</p>
                    </div>
                    <div>
                        <p>Price </p>
                        <h4 className='text-xl font-bold mt-2 mb-2'>BDT 5,816</h4>
                    </div>
                    <div className='flex flex-col gap-32'>
                        <button className='btn bg-[#eb1933] text-white'>Book Now</button>
                        <button className='btn text-[#eb1933]'>Flight Details <IoIosArrowDown /></button>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl mt-6 flex flex-col md:flex-row justify-around gap-4 text-center  py-6 mb-6">
                    <div className='text-center'>
                        <img className='w-[150px] ml-32 md:ml-8' src={air} alt="" />
                        <p className='text-xl mb-2'>Biman Bangladesh Airlines</p>
                        <p className='text-accent'>Partially refundable</p>
                    </div>
                    <div>
                        <p>Depart</p>
                        <h4 className='text-xl font-bold mt-2 mb-2'>19:00</h4>
                        <p className='text-xl mb-2'>Tue,30 Jan, 2024</p>
                        <p>Dhaka (DAC)</p>
                    </div>
                    <div>
                        <p className='text-xl'>Biman Bangladesh Airlines</p>
                        <img className='w-[200px] mt-4 mb-4' src={arrow} alt="" />
                        <p className='text-xl mb-2'>Biman Bangladesh Airlines</p>
                        <p className='text-accent'>Partially refundable</p>
                    </div>

                    <div>
                        <p>Arrive</p>
                        <h4 className='text-xl font-bold mt-2 mb-2'>19:00</h4>
                        <p className='text-xl mb-2'>Tue,30 Jan, 2024</p>
                        <p>Chittagong (CGP)</p>
                    </div>
                    <div>
                        <p>Price </p>
                        <h4 className='text-xl font-bold mt-2 mb-2'>BDT 5,816</h4>
                    </div>
                    <div className='flex flex-col gap-32'>
                        <button className='btn bg-[#eb1933] text-white'>Book Now</button>
                        <button className='btn text-[#eb1933]'>Flight Details <IoIosArrowDown /></button>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl mt-6 flex flex-col md:flex-row justify-around gap-4 text-center  py-6 mb-6">
                    <div className='text-center'>
                        <img className='w-[150px] ml-32 md:ml-8' src={air} alt="" />
                        <p className='text-xl mb-2'>Biman Bangladesh Airlines</p>
                        <p className='text-accent'>Partially refundable</p>
                    </div>
                    <div>
                        <p>Depart</p>
                        <h4 className='text-xl font-bold mt-2 mb-2'>19:00</h4>
                        <p className='text-xl mb-2'>Tue,30 Jan, 2024</p>
                        <p>Dhaka (DAC)</p>
                    </div>
                    <div>
                        <p className='text-xl'>Biman Bangladesh Airlines</p>
                        <img className='w-[200px] mt-4 mb-4' src={arrow} alt="" />
                        <p className='text-xl mb-2'>Biman Bangladesh Airlines</p>
                        <p className='text-accent'>Partially refundable</p>
                    </div>

                    <div>
                        <p>Arrive</p>
                        <h4 className='text-xl font-bold mt-2 mb-2'>19:00</h4>
                        <p className='text-xl mb-2'>Tue,30 Jan, 2024</p>
                        <p>Chittagong (CGP)</p>
                    </div>
                    <div>
                        <p>Price </p>
                        <h4 className='text-xl font-bold mt-2 mb-2'>BDT 5,816</h4>
                    </div>
                    <div className='flex flex-col gap-32'>
                        <button className='btn bg-[#eb1933] text-white'>Book Now</button>
                        <button className='btn text-[#eb1933]'>Flight Details <IoIosArrowDown /></button>
                    </div>
                </div>

                <div className="pagination  flex justify-end mt-4">
      <button className="pagination-item btn btn-square bg-[#eb1933] text-white" aria-label="1">1</button>
      <button className="pagination-item btn btn-square bg-[#eb1933] text-white" aria-label="2">2</button>
      <button className="pagination-item btn btn-square bg-[#eb1933] text-white" aria-label="3">3</button>
      <button className="pagination-item btn btn-square bg-[#eb1933] text-white" aria-label="4">4</button>
    </div>
            </div>
        </div>
    );
};

export default FlightCard;