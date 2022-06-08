import React from 'react';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

const ChartPie = () => {
    const data = [
        { name: 'Shopping', value: 400 },
        { name: 'Home', value: 300 },
        { name: 'Other', value: 300 },

    ];
    const COLORS = ['#0088FE', '#00C49F', '#f75555'];
    return (
        <div>
            <div>
                <PieChart width={800} height={400}>
                    <Pie
                        data={data}
                        cx={120}
                        cy={200}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"

                        dataKey="value"
                    >

                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>

            </div>

        </div>
    );
};

export default ChartPie;