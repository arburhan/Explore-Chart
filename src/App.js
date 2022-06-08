import './App.css';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useState } from 'react';

function App() {
  const [dataState, setDataState] = useState([]);

  const weekData = [
    {
      name: 'Saturday',
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: 'Sunday',
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: 'Monday',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Tuesday',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Wednesday',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Thursday',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Friday',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const monthData = [
    {
      name: 'January',
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: 'February',
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: 'March',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'April',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'June',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'July',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'August',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'September',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'October',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'November',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'December',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const yearData = [
    {
      name: 2011,
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: 2012,
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: 2013,
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 2014,
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 2015,
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 2016,
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 2017,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 2018,
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 2019,
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 2020,
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 2021,
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 2022,
      uv: 3490,
      pv: 4300,
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
      <select onChange={trackChart} className="select select-bordered w-md max-w-xs">
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
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
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
                  <Legend />
                  <Bar dataKey="pv" fill="#8884d8" />
                  <Bar dataKey="uv" fill="#82ca9d" />
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
                  <Legend />
                  <Bar dataKey="pv" fill="#8884d8" />
                  <Bar dataKey="uv" fill="#82ca9d" />
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
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
        }
      </div>

    </div>
  );
}

export default App;
