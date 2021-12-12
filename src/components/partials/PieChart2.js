import React, { useCallback, useState } from "react";
import '../../App.css';
import {
  PieChart, 
  Pie, 
  Sector,
  ResponsiveContainer,
} from "recharts";

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

export default function PieChart2() {
   
    const [activeIndex2, setActiveIndex2] = useState(0);
    const onPieEnter2 = useCallback(
        (_, index) => {
        setActiveIndex2(index);
        },
        [setActiveIndex2]
    );

    return (
        <div className="pie-chart2" style={{ width: "100%", height: 325 }}>
            <ResponsiveContainer>
                <PieChart>
                <Pie
                    activeIndex={activeIndex2}
                    activeShape={renderActiveShape}
                    data={data3}
                    // cx={200}
                    // cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#FFC0CB"
                    dataKey="value"
                    onMouseEnter={onPieEnter2}
                />
                </PieChart>
            </ResponsiveContainer> 
        </div>
    );
}
