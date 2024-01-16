import { useEffect, useState } from "react";
import { FiSunrise } from "react-icons/fi";
import { LuSun } from "react-icons/lu";
import { FiSunset } from "react-icons/fi";


const SideBar = () => {

    const [minutes, setMinutes] = useState(15);
    const [seconds, setSeconds] = useState(60);

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                if (minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else {

                    clearInterval(interval);
                }
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [minutes, seconds]);

    return (
        <div>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body ">
                        <h3 className="text-center font-bold">Session Timeout in</h3>
                        <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center mb-4">
                            <div className="flex flex-col p-2 bg-[#eb1933] rounded-box text-white">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": minutes }}></span>
                                </span>
                                <span className="text-xs">min</span>
                            </div>
                            <div className="flex flex-col p-2 bg-[#eb1933] rounded-box text-white">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": seconds }}></span>
                                </span>
                                <span className="text-xs">sec</span>
                            </div>
                        </div>
                        <div className="border-t-2  mb-4">
                            <p className="font-bold mt-4">One Way Price</p>
                            <input type="range" min={0} max={100} defaultValue={40} className="range range-error h-5 my-2" />
                            <p className="font-bold">5,816 tk - 7,390 tk</p>
                        </div>
                        <div className="border-t-2">
                            <p className="font-bold mt-4">Departure Time in Dhaka</p>
                            <div className="grid grid-cols-2 gap-2 mt-2 mb-4">
                                <div className="text-center font-bold border-2 border-black p-2 rounded-xl">
                                    <div className="flex justify-center text-xl">
                                        <FiSunrise />
                                    </div>
                                    <p>Morning</p>
                                    <p>06.00 - 11:59 (7)</p>
                                </div>
                                <div className="text-center font-bold border-2 border-black p-2 rounded-xl">
                                    <div className="flex justify-center text-xl">
                                        <LuSun />
                                    </div>
                                    <p>Afternoon</p>
                                    <p>06.00 - 11:59 (7)</p>
                                </div>
                                <div className="text-center font-bold border-2 border-black p-2 rounded-xl">
                                    <div className="flex justify-center text-xl">
                                        <FiSunset />
                                    </div>
                                    <p>Evening</p>
                                    <p>06.00 - 11:59 (7)</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t-2">
                            <p className="font-bold mt-4">Stops From Dhaka</p>
                            <div className="flex justify-between mt-2">
                                <div className="flex items-center gap-2 mb-2">
                                    <input type="checkbox" className="checkbox checkbox-error" />
                                    <span className="label-text">Remember me</span>
                                </div>
                                <div>
                                    BDT 5,816
                                </div>
                            </div>
                        </div>
                        <div className="border-t-2">
                            <p className="font-bold mt-4">Check in Baggage Allowance</p>
                            <div className="flex items-center gap-2 mt-2">
                                <input type="checkbox" className="checkbox checkbox-error" />
                                <span className="label-text">20 kg</span>
                            </div>
                        </div>
                        <div className="border-t-2">
                            <p className="font-bold mt-4">Refundable</p>
                            <div className="flex items-center gap-2 mt-2">
                                <input type="checkbox" className="checkbox checkbox-error" />
                                <span className="label-text">Partially Refundable (19)</span>
                            </div>
                        </div>
                        <div className="border-t-2">
                           <div className="flex justify-between">
                          <div> <p className="font-bold mt-4">Stops From Dhaka</p></div>
                          <div> <p className="font-bold mt-4">Arriving at</p></div>
                           </div>
                            <div className="flex justify-between mt-2">
                                <div className="flex items-center gap-2 mb-2">
                                    <input type="checkbox" className="checkbox checkbox-error" />
                                    <span className="label-text">DAC</span>
                                </div>
                                <div className="flex items-center gap-2 mb-2">
                                    <input type="checkbox" className="checkbox checkbox-error" />
                                    <span className="label-text">CGP</span>
                                </div>
                            </div>
                        </div>


                        <div className="border-t-2">
                            <p className="font-bold mt-4">Airlines</p>
                            <div className="flex justify-between mt-2">
                                <div className="flex items-center gap-2 mb-2">
                                    <input type="checkbox" className="checkbox checkbox-error" />
                                    <span className="label-text">Biman Bangladesh Airlines</span>
                                </div>
                                <div>
                                    BDT 5,816
                                </div>
                            </div>
                            <div className="flex justify-between mt-2">
                                <div className="flex items-center gap-2 mb-2">
                                    <input type="checkbox" className="checkbox checkbox-error" />
                                    <span className="label-text">US Bangla Airlines</span>
                                </div>
                                <div>
                                    BDT 5,816
                                </div>
                            </div>
                            <div className="flex justify-between mt-2">
                                <div className="flex items-center gap-2 mb-2">
                                    <input type="checkbox" className="checkbox checkbox-error" />
                                    <span className="label-text">Air Astra</span>
                                </div>
                                <div>
                                    BDT 5,816
                                </div>
                            </div>
                            <div className="flex justify-between mt-2">
                                <div className="flex items-center gap-2 mb-2">
                                    <input type="checkbox" className="checkbox checkbox-error" />
                                    <span className="label-text">Novo Air</span>
                                </div>
                                <div>
                                    BDT 5,816
                                </div>
                            </div>
                        </div>

                        <div className="border-t-2">
                            <p className="font-bold mt-4">Transit Time (Dhaka - Chittagong)</p>
                            <div className="flex items-center gap-2 mt-2">
                                <input type="checkbox" className="checkbox checkbox-error" />
                                <span className="label-text">No Ttransit Time (19)</span>
                            </div>
                            <div>
                                <button className="btn w-full mt-6 bg-[#eb1933] text-white text-xl">Clear Filter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;