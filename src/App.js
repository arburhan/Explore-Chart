import './App.css';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useState } from 'react';
import { useQuery } from 'react-query';
import ChartPie from './Components/ChartPie';

function App() {
  const [dataState, setDataState] = useState([]);
  const [trackCharts, setTrackCharts] = useState('');

  // week data
  const { data: weekData, isLoading: weekLoading } = useQuery(['weekData'], () => fetch(`barWeeklyData.json`)
    .then(res => res.json()));

  // monthly data
  const { data: monthData, isLoading: monthLoading } = useQuery(['monthData'], () => fetch(`barMonthlyData.json`)
    .then(res => res.json()));

  // monthly data
  const { data: yearData, isLoading: yearLoading } = useQuery(['yearData'], () => fetch(`barYearlyData.json`)
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
        <ChartPie></ChartPie>
      </div>
      {/* gradiant */}
      <div>

      </div>
    </div>
  );
}

export default App;
