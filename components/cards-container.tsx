import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { PieChart, Pie, Cell } from "recharts";

const data = [
    { name: "Employees", value: 62 },
    { name: "Contractors", value: 38 },
];
const COLORS = ["#2563eb", "#06b6d4"];

const CardsContainer = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-full h-[500px]">
                {/* Developer Card - Main Image */}
                <Card className="absolute top-0 left-0 w-64 h-80 bg-white rounded-xl shadow-lg overflow-hidden border-none">
                    <CardContent className="p-0 relative h-full">
                        <Image
                            src="/maledev.png"
                            alt="Software Developer"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                            <h3 className="text-white font-bold text-sm">Lead Developer</h3>
                            <p className="text-white/80 text-xs">Full Stack Engineer</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Logo Card */}
                <Card className="absolute top-16 right-12 w-20 h-20 rounded-xl shadow-md flex items-center justify-center bg-white border-none">
                    <CardContent className="p-2">
                        <Image
                            src="/logoverd.png"
                            alt="Verdsoft Logo"
                            width={60}
                            height={60}
                            className="object-contain"
                        />
                    </CardContent>
                </Card>

                {/* Stats & Team Card */}
                <Card className="absolute bottom-0 right-0 w-56 h-64 rounded-xl shadow-lg bg-white border-none">
                    <CardContent className="p-4 h-full flex flex-col">
                        <h3 className="text-sm font-bold text-gray-900 mb-3">Team Statistics</h3>

                        {/* Pie Chart */}
                        <div className="flex-1 flex items-center justify-center">
                            <PieChart width={140} height={140}>
                                <Pie
                                    data={data}
                                    cx={70}
                                    cy={70}
                                    innerRadius={35}
                                    outerRadius={55}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </div>

                        {/* Legend */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                                    <span className="text-gray-700">Employees</span>
                                </div>
                                <span className="font-semibold text-gray-900">62%</span>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                                    <span className="text-gray-700">Contractors</span>
                                </div>
                                <span className="font-semibold text-gray-900">38%</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Projects Badge */}
                <Card className="absolute top-32 right-28 w-32 h-16 rounded-lg shadow-md bg-gradient-to-br from-blue-600 to-cyan-500 border-none">
                    <CardContent className="p-3 h-full flex flex-col justify-center items-center">
                        <div className="text-2xl font-bold text-white">50+</div>
                        <div className="text-xs text-white/90">Projects Done</div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default CardsContainer;
