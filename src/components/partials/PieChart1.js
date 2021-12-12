import React, { useCallback, useState } from "react";
import '../../App.css';
import {
  PieChart, 
  Pie, 
  Sector,
  ResponsiveContainer,
} from "recharts";

const data2 = [
    { name: 'Maltese', value: 48, dog: 'Finn' },
    { name: 'Poodle', value: 47, dog: 'Finn' },
    { name: 'Havanese', value: 5, dog: 'Finn' }
];

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
      payload
    //   percent,
    //   value
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
            >{`${payload.name}`}</text>
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


export default function PieChart1() {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const onPieEnter = useCallback(
        (_, index) => {
        setActiveIndex(index);
        },
        [setActiveIndex]
    );

  return (
        <div className="pie-chart1" style={{ width: "100%", height: 340 }}>
            <ResponsiveContainer>
                <PieChart>
                <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={data2}
                    // cx={200}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#82ca9d"
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                />
                </PieChart>
            </ResponsiveContainer>
        </div>
  );
}
