import React, { useCallback, useState } from "react";
import '../../App.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart, 
  Pie, 
  Sector,
} from "recharts";

const data = [
  {
    name: "8am",
    finn: 100,
    nina: 90,
    amt: 2400
  },
  {
    name: "10am",
    finn: 20,
    nina: 40,
    amt: 2210
  },
  {
    name: "12pm",
    finn: 40,
    nina: 70,
    amt: 2290
  },
  {
    name: "2pm",
    finn: 30,
    nina: 40,
    amt: 2000
  },
  {
    name: "4pm",
    finn: 40,
    nina: 80,
    amt: 2181
  },
  {
    name: "6pm",
    finn: 40,
    nina: 30,
    amt: 2500
  },
  {
    name: "8pm",
    finn: 50,
    nina: 10,
    amt: 2100
  }
];
const data2 = [
    { name: 'Maltese', value: 48, dog: 'Finn' },
    { name: 'Poodle', value: 47, dog: 'Finn' },
    { name: 'Havanese', value: 5, dog: 'Finn' }
];
const data3 = [
    { name: 'Pekingese', value: 17, dog: 'Nina' },
    { name: 'Schnauzer', value: 14, dog: 'Nina' },
    { name: 'Poodle', value: 20, dog: 'Nina' },
    { name: 'Lapphund', value: 11, dog: 'Nina' },
    { name: 'Lhasa Apso', value: 9, dog: 'Nina' },
    { name: 'Barbet', value: 6, dog: 'Nina' },
    { name: 'McNab', value: 4, dog: 'Nina' },
    { name: 'Other', value: 19, dog: 'Nina' }
    
];

const CustomizedDot = (props) => {
  const { cx, cy } = props;
    return (
        <svg version="1.1" viewBox="0 0 67.693 76.774" x={cx - 10} y={cy - 10} width={20} height={20}>
            <g transform="translate(-154.72 -445.4)">
            <g transform="matrix(.4949 0 0 .4949 -104.21 37.949)">
            <path d="m589.87 859.23c0.70395-14.314 18.303-35.198 21.353-35.432 3.0505-0.2347-6.5702 33.086-9.1514 35.432s-11.967 0.704-12.202 0z" fill="#b3b3b3" fillRule="evenodd" stroke="#000" strokeLinejoin="round" strokeWidth=".98148"/>
            <path d="m580.71 853.05c-8.1147 3.0017-13.458 10.698-15.16 20.178-4.5202-2.9341-9.4544-3.9149-13.855-2.287-6.9937 2.587-10.68 11.014-9.9994 20.885-9.9558 4.668-13.972 18.833-8.9248 32.478 3.7205 10.058 11.348 17.116 19.352 18.967 0.26801 0.931 0.55833 1.8595 0.90285 2.7908 5.3851 14.558 18.178 23.252 28.56 19.412 3.4033-1.2589 6.1122-3.737 8.0456-6.973 7.2086 6.6326 16.287 9.3814 24.321 6.4094 10.07-3.725 15.507-15.366 14.376-28.39 2.4842 0.1737 4.9406-0.1562 7.2913-1.0257 12.36-4.5723 17.078-22.628 10.539-40.306l-0.0946-0.2557c-6.0244-16.003-19.235-26.118-30.838-24.309-7.77-14.4-22.239-22.112-34.513-17.572z" fill="#fff" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".98148"/>
            <path d="m630.9 968.21c0 10.109-8.2034 9.7474-18.317 9.7474-10.109 0-18.317 0.3614-18.317-9.7474 0-10.113 8.2081-18.317 18.317-18.317 10.113 0 18.317 8.2034 18.317 18.317z" fill="#b3b3b3" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".98148"/>
            <path d="m588.65 968.21c0 10.109-8.2034 9.7474-18.317 9.7474-5.6222 0-10.653 0.1126-14.013-1.5252-2.6844-1.3094-4.3035-3.7357-4.3035-8.2222 0-10.113 8.2081-18.317 18.317-18.317 10.113 0 18.317 8.2034 18.317 18.317z" fill="#b3b3b3" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".98148"/>
            <path d="m577.07 976.48c1.6426-5.3172-0.23465-11.521-0.23465-11.521" fill="#b3b3b3" stroke="#000" strokeLinecap="round" strokeWidth=".98148"/>
            <path d="m568.61 977.66c-2.0133-8.5648 0.29097-15.36 0.29097-15.36" fill="#b3b3b3" stroke="#000" strokeLinecap="round" strokeWidth=".98148"/>
            <path d="m560.05 976.77c-4.1345-6.4998-0.59132-11.817-0.59132-11.817" fill="#b3b3b3" stroke="#000" strokeLinecap="round" strokeWidth=".98148"/>
            <path d="m583.77 847.69c-6.8314 2.6126-11.33 9.3109-12.762 17.562-3.8053-2.5538-7.9592-3.4074-11.664-1.9906-5.8877 2.2517-8.991 9.5858-8.418 18.178-8.3813 4.0629-11.763 16.391-7.5133 28.267 3.1321 8.7538 9.5532 14.897 16.291 16.508 0.22563 0.8104 0.47003 1.6185 0.76008 2.429 4.5334 12.671 15.303 20.238 24.043 16.895 2.8651-1.0957 5.1456-3.2525 6.7732-6.069 6.0686 5.7727 13.711 8.1652 20.475 5.5784 8.4775-3.2421 13.055-13.374 12.102-24.709 2.0913 0.1511 4.1592-0.136 6.1382-0.8928 10.406-3.9795 14.377-19.695 8.872-35.081l-0.0796-0.2225c-5.0717-13.929-16.193-22.732-25.961-21.158-6.5412-12.534-18.722-19.246-29.055-15.294z" fill="#fff" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".98148"/>
            <path d="m589.52 887.99a12.851 12.851 0 1 1 -25.702 0 12.851 12.851 0 1 1 25.702 0z" fill="#fff" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".98148"/>
            <path d="m619.36 887.99a12.851 12.851 0 1 1 -25.702 0 12.851 12.851 0 1 1 25.702 0z" fill="#fff" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".98148"/>
            <path d="m584.5 889.46a3.9884 3.9884 0 1 1 -7.9764 0 3.9884 3.9884 0 1 1 7.9764 0z" strokeWidth=".555"/>
            <path d="m606.36 889.46a3.9884 3.9884 0 1 1 -7.9764 0 3.9884 3.9884 0 1 1 7.9764 0z" strokeWidth=".555"/>
            <path d="m603.35 918.23c0 6.4622-7.0771 11.709-11.765 11.709-5.045 0-11.761-5.2468-11.761-11.709 0-6.467 5.2702-8.1096 11.761-8.1096 6.4951 0 11.765 1.6426 11.765 8.1096z" strokeWidth=".555"/>
            <path d="m606.35 976.48c-1.6426-5.3172 0.23465-11.521 0.23465-11.521" fill="#b3b3b3" stroke="#000" strokeLinecap="round" strokeWidth=".98148"/>
            <path d="m614.81 977.66c2.0133-8.5648-0.29097-15.36-0.29097-15.36" fill="#b3b3b3" stroke="#000" strokeLinecap="round" strokeWidth=".98148"/>
            <path d="m623.37 976.77c4.1345-6.4998 0.59132-11.817 0.59132-11.817" fill="#b3b3b3" stroke="#000" strokeLinecap="round" strokeWidth=".98148"/>
            <path d="m559.93 864.16c-25.774-1.8209-39.201 29.237-35.681 38.389 2.8627 7.4384 18.673 14.943 18.035 8.1189-2.0696-22.142 25.685-45.94 17.646-46.508z" fill="#b3b3b3" fillRule="evenodd" stroke="#000" strokeLinejoin="round" strokeWidth=".98148"/>
            <path d="m623.25 864.16c25.774-1.8209 39.201 29.237 35.681 38.389-2.8627 7.4384-18.673 14.943-18.035 8.1189 2.0696-22.142-25.685-45.94-17.646-46.508z" fill="#b3b3b3" fillRule="evenodd" stroke="#000" strokeLinejoin="round" strokeWidth=".98148"/>
            </g>
            </g>
        </svg>
    );
};

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";
    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
            {payload.dog}
            </text>
            <Sector
            cx={cx}
            cy={cy}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            startAngle={startAngle}
            endAngle={endAngle}
            fill={fill}
            />
            <Sector
            cx={cx}
            cy={cy}
            startAngle={startAngle}
            endAngle={endAngle}
            innerRadius={outerRadius + 6}
            outerRadius={outerRadius + 10}
            fill={fill}
            />
            <path
            d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
            stroke={fill}
            fill="none"
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text
            x={ex + (cos >= 0 ? 1 : -1) * 12}
            y={ey}
            textAnchor={textAnchor}
            fill="#333"
            >{`Breed: ${payload.name}`}</text>
            <text
            x={ex + (cos >= 0 ? 1 : -1) * 12}
            y={ey}
            dy={18}
            textAnchor={textAnchor}
            fill="#999"
            >
            {`(${payload.value}%)`}
            </text>
        </g>
    );
}


export default function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeIndex2, setActiveIndex2] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
        setActiveIndex(index);
        },
        [setActiveIndex]
    );
    const onPieEnter2 = useCallback(
        (_, index) => {
        setActiveIndex2(index);
        },
        [setActiveIndex2]
    );

  return (
      <div>
        <div className="line-chart">
            <h3>Daily Energy levels</h3>
            <LineChart
            width={1000}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 200,
                left: 100,
                bottom: 5
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend width={800}/>
            <Line
                type="monotone"
                dataKey="nina"
                stroke="#FFC0CB"
                dot={<CustomizedDot />}
            />
            <Line type="monotone" dataKey="finn" stroke="#82ca9d" dot={<CustomizedDot />} />
            </LineChart>
        </div>
        <div className="pie-chart">
                <PieChart width={550} height={400} margin={{right: 200}}>
            <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={data2}
                cx={200}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
                dataKey="value"
                onMouseEnter={onPieEnter}
            />
            </PieChart>
        </div>
        <div className="pie-chart">
                <PieChart width={650} height={400} margin={{left: 100}}>
            <Pie
                activeIndex={activeIndex2}
                activeShape={renderActiveShape}
                data={data3}
                cx={200}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#FFC0CB"
                dataKey="value"
                onMouseEnter={onPieEnter2}
            />
            </PieChart>
        </div>
    </div>
  );
}
