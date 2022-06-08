import './App.css';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useState } from 'react';

function App() {
  const [dataState, setDataState] = useState([]);

  const weekData = [
    {
      name: 'Saturday',
      Income: 590,
      Expenses: 800,
      amt: 1400,
    },
    {
      name: 'Sunday',
      Income: 868,
      Expenses: 967,
      amt: 1506,
    },
    {
      name: 'Monday',
      Income: 2000,
      Expenses: 9800,
      amt: 2290,
    },
    {
      name: 'Tuesday',
      Income: 2780,
      Expenses: 3908,
      amt: 2000,
    },
    {
      name: 'Wednesday',
      Income: 1890,
      Expenses: 4800,
      amt: 2181,
    },
    {
      name: 'Thursday',
      Income: 2390,
      Expenses: 3800,
      amt: 2500,
    },
    {
      name: 'Friday',
      Income: 3490,
      Expenses: 4300,
      amt: 2100,
    },
  ];
  const monthData = [
    {
      name: 'January',
      Income: 590,
      Expenses: 800,
      amt: 1400,
    },
    {
      name: 'February',
      Income: 868,
      Expenses: 967,
      amt: 1506,
    },
    {
      name: 'March',
      Income: 2000,
      Expenses: 9800,
      amt: 2290,
    },
    {
      name: 'April',
      Income: 2780,
      Expenses: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      Income: 1890,
      Expenses: 4800,
      amt: 2181,
    },
    {
      name: 'June',
      Income: 2390,
      Expenses: 3800,
      amt: 2500,
    },
    {
      name: 'July',
      Income: 3490,
      Expenses: 4300,
      amt: 2100,
    },
    {
      name: 'August',
      Income: 2000,
      Expenses: 9800,
      amt: 2290,
    },
    {
      name: 'September',
      Income: 2780,
      Expenses: 3908,
      amt: 2000,
    },
    {
      name: 'October',
      Income: 1890,
      Expenses: 4800,
      amt: 2181,
    },
    {
      name: 'November',
      Income: 2390,
      Expenses: 3800,
      amt: 2500,
    },
    {
      name: 'December',
      Income: 3490,
      Expenses: 4300,
      amt: 2100,
    },
  ];
  const yearData = [
    {
      name: 2011,
      Income: 590,
      Expenses: 800,
      amt: 1400,
    },
    {
      name: 2012,
      Income: 868,
      Expenses: 967,
      amt: 1506,
    },
    {
      name: 2013,
      Income: 2000,
      Expenses: 9800,
      amt: 2290,
    },
    {
      name: 2014,
      Income: 2780,
      Expenses: 3908,
      amt: 2000,
    },
    {
      name: 2015,
      Income: 1890,
      Expenses: 4800,
      amt: 2181,
    },
    {
      name: 2016,
      Income: 2390,
      Expenses: 3800,
      amt: 2500,
    },
    {
      name: 2017,
      Income: 3490,
      Expenses: 4300,
      amt: 2100,
    },
    {
      name: 2018,
      Income: 2000,
      Expenses: 9800,
      amt: 2290,
    },
    {
      name: 2019,
      Income: 2780,
      Expenses: 3908,
      amt: 2000,
    },
    {
      name: 2020,
      Income: 1890,
      Expenses: 4800,
      amt: 2181,
    },
    {
      name: 2021,
      Income: 2390,
      Expenses: 3800,
      amt: 2500,
    },
    {
      name: 2022,
      Income: 3490,
      Expenses: 4300,
      amt: 2100,
    },
  ];
  const [trackCharts, setTrackCharts] = useState('');
  console.log(trackCharts)
  const trackChart = (e) => {
    setTrackCharts(e.target.value);
  }

  return (
    <div className="App">
      {/* bar chart */}
      <div>
        <select onChange={trackChart} className="select select-bordered w-md max-w-xs my-3">
          <option value='week' selected>Weekly</option>
          <option value='month' >Monthly</option>
          <option value='year' >Yearly</option>
        </select>
        <div style={{ width: '100%', height: 300 }}>
          {
            trackCharts ?
              ((trackCharts === 'week' && <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={weekData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >

                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend iconType="circle" verticalAlign="top" height={36} />
                  <Bar dataKey="Expenses" fill="#394dff" />
                  <Bar dataKey="Income" fill="#57d3dd" />
                </BarChart>
              </ResponsiveContainer>) ||
                (trackCharts === 'month' && <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    width={500}
                    height={300}
                    data={monthData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >

                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend iconType="circle" verticalAlign="top" height={36} />
                    <Bar dataKey="Expenses" fill="#394dff" />
                    <Bar dataKey="Income" fill="#57d3dd" />
                  </BarChart>
                </ResponsiveContainer>) ||
                (trackCharts === 'year' && <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    width={500}
                    height={300}
                    data={yearData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >

                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend iconType="circle" verticalAlign="top" height={36} />
                    <Bar dataKey="Expenses" fill="#394dff" />
                    <Bar dataKey="Income" fill="#57d3dd" />
                  </BarChart>
                </ResponsiveContainer>)) :
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={weekData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >

                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend iconType="circle" verticalAlign="top" height={36} />
                  <Bar dataKey="Expenses" fill="#394dff" />
                  <Bar dataKey="Income" fill="#57d3dd" />
                </BarChart>
              </ResponsiveContainer>
          }
        </div>
      </div>
      {/* pie chart */}
      <div>

      </div>
      {/* gradiant */}
      <div>

      </div>
    </div>
  );
}

export default App;
