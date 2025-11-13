import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { PieChart, Pie, Cell } from "recharts";

const data = [
    { name: "Employees", value: 62 },
    { name: "Contractors", value: 38 },
];
const COLORS = ["#00008B", "#00BFFF"];

const CardsContainer = () => {
    return (
        <div className="absolute top-1/4 right-0 w-1/2 h-full flex items-center justify-center">
            <div className="relative w-full h-full">
                {/* Person Card */}
                <Card className="absolute top-[-5rem] left-[6rem] w-[15rem] h-[19rem] bg-blue-200 rounded-2 shadow-lg">
                    <CardContent className="p-0 relative h-full">
                       
                    </CardContent>
                </Card>

                {/* Logo Card */}
                <Card className="absolute top-[2rem] right-[10rem] w-20 h-20 rounded-3 shadow-lg flex items-center justify-center">
                    <CardContent className="p-2">
                        <Image
                            src="./logoverd.png"
                            alt="Logo"
                            width={80}
                            height={80}
                        />
                    </CardContent>
                </Card>

                {/* Stats Card */}
                <Card className="absolute top-[12rem] left-[13rem] w-60 h-[17rem] rounded-2 shadow-lg">
                    <CardContent className="p-6 h-full flex flex-col">
                        
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default CardsContainer;
