import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const ChartArea = () => {
    const [trackCharts, setTrackCharts] = useState('');

    // week data
    const { data: weekData, isLoading: weekLoading } = useQuery(['weekDataArea'], () => fetch(`barWeeklyData.json`)
        .then(res => res.json()));

    // monthly data
    const { data: monthData, isLoading: monthLoading } = useQuery(['monthDataArea'], () => fetch(`barMonthlyData.json`)
        .then(res => res.json()));

    // monthly data
    const { data: yearData, isLoading: yearLoading } = useQuery(['yearDataArea'], () => fetch(`barYearlyData.json`)
        .then(res => res.json()));

    // loading system 
    if (weekLoading || monthLoading || yearLoading) {
        return <p>Loading ...</p>
    }
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
                    <AreaChart
                        data={weekData}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >

                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="Income" stroke="#8884d8" fill="#2764ff" />
                    </AreaChart>
                </ResponsiveContainer>) || (trackCharts === 'month' && <ResponsiveContainer>
                    <AreaChart
                        data={monthData}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >

                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="Income" stroke="#8884d8" fill="#2764ff" />
                    </AreaChart>
                </ResponsiveContainer>) || (trackCharts === 'year' && <ResponsiveContainer>
                    <AreaChart
                        data={yearData}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >

                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="Income" stroke="#8884d8" fill="#2764ff" />
                    </AreaChart>
                </ResponsiveContainer>)) :
                    <ResponsiveContainer>
                        <AreaChart
                            data={weekData}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >

                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="Income" stroke="#8884d8" fill="#2764ff" />
                        </AreaChart>
                    </ResponsiveContainer>}
            </div>
        </div>
    );
};

export default ChartArea;