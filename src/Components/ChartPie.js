import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const ChartPie = () => {
    const [trackCharts, setTrackCharts] = useState('');
    const { data: weekData, isLoading: weekLoading } = useQuery(['weekDataPie'], () => fetch(`pieWeeklyData.json`)
        .then(res => res.json()));
    console.log(weekData)

    // monthly data
    const { data: monthData, isLoading: monthLoading } = useQuery(['monthDataPie'], () => fetch(`pieMonthlyData.json`)
        .then(res => res.json()));

    // monthly data
    const { data: yearData, isLoading: yearLoading } = useQuery(['yearDataPie'], () => fetch(`pieYearlyData.json`)
        .then(res => res.json()));

    // loading system 
    if (weekLoading || monthLoading || yearLoading) {
        return <p>Loading ...</p>
    }

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
                        <Legend label={weekData} iconType="circle" horizontalAlign="right" height={36} />
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
                        <Legend iconType="circle" horizontalAlign="right" height={36} />
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
                        <Legend iconType="circle" horizontalAlign="right" height={36} />
                    </PieChart>
                </ResponsiveContainer>)) :
                    <ResponsiveContainer>
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

                                {yearData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend iconType="circle" horizontalAlign="right" height={36} />

                        </PieChart>
                    </ResponsiveContainer>}
            </div>

        </div>
    );
};

export default ChartPie;