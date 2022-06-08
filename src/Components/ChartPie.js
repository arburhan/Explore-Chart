import React, { useState } from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const ChartPie = () => {
    const [trackCharts, setTrackCharts] = useState('');
    const weekData = [
        { name: 'Shopping', value: 400 },
        { name: 'Home', value: 300 },
        { name: 'Other', value: 300 },
    ];
    const monthData = [
        { name: 'Shopping', value: 1200 },
        { name: 'Home', value: 1100 },
        { name: 'Other', value: 500 },
    ];
    const yearData = [
        { name: 'Shopping', value: 36000 },
        { name: 'Home', value: 38000 },
        { name: 'Other', value: 5000 },
    ];
    const COLORS = ['#394dff', '#57d3dd', '#f75555'];
    // function
    const trackChart = (e) => {
        setTrackCharts(e.target.value);
    }
    return (
        <div>
            <div>
                <select onChange={trackChart} className="select select-bordered w-md max-w-xs my-3">
                    <option value='week' selected>Weekly</option>
                    <option value='month' >Monthly</option>
                    <option value='year' >Yearly</option>
                </select>
            </div>
            <div style={{ width: '100%', height: 300 }}>
                {trackCharts ? ((trackCharts === 'week' && <ResponsiveContainer>
                    <PieChart width={800} height={400}>
                        <Pie
                            data={weekData}
                            cx={120}
                            cy={200}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >

                            {weekData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>) || (trackCharts === 'month' && <ResponsiveContainer>
                    <PieChart width={800} height={400}>
                        <Pie
                            data={monthData}
                            cx={120}
                            cy={200}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >

                            {monthData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>) || (trackCharts === 'year' && <ResponsiveContainer>
                    <PieChart width={800} height={400}>
                        <Pie
                            data={yearData}
                            cx={120}
                            cy={200}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >

                            {yearData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>)) :
                    <ResponsiveContainer>
                        <PieChart width={800} height={400}>
                            <Pie
                                data={yearData}
                                cx={120}
                                cy={200}
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >

                                {yearData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>}
            </div>

        </div>
    );
};

export default ChartPie;