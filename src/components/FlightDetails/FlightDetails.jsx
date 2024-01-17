import FlightCard from "./FlightCard";
import SideBar from "./SideBar";

const FlightDetails = () => {
    return (
        <div className="container mx-auto mt-20">
            <div className="flex flex-col lg:flex-row gap-4">
                <div>
                    <SideBar></SideBar>
                </div>
                <div className="flex-1">
                    <FlightCard></FlightCard>
                </div>
            </div>
        </div>
    );
};

export default FlightDetails;