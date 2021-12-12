import '../../App.css';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const data4 = [
  {
    name: "Mon",
    nina: 4000,
    finn: 2400
  },
  {
    name: "Tues",
    nina: 3000,
    finn: 1398
  },
  {
    name: "Wed",
    nina: 5000,
    finn: 1800
  },
  {
    name: "Thurs",
    nina: 3780,
    finn: 1908
  },
  {
    name: "Fri",
    nina: 3890,
    finn: 800
  },
  {
    name: "Sat",
    nina: 2390,
    finn: 500
  },
  {
    name: "Sun",
    nina: 3490,
    finn: 1200
  }
];

export default function AreaChart1() {
    
  return (
      <div>
          <div className="area-chart" style={{ width: '100%', height: 300 }}>
              <ResponsiveContainer>
                <AreaChart
                  width={1300}
                  height={400}
                  data={data4}
                  margin={{ left: 250, right: 300}}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="finn"
                  stackId="1"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />
                <Area
                  type="monotone"
                  dataKey="nina"
                  stackId="1"
                  stroke="#FFC0CB"
                  fill="#FFC0CB"
                />
              </AreaChart>
              </ResponsiveContainer>
          </div>   
      </div>
  );
}
