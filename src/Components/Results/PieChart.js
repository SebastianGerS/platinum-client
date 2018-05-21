import React, { Component } from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import uuidv4 from 'uuid/v4';
/* eslint-disable react/prop-types, no-mixed-operators */
export default class PieChartResult extends Component {
  render() {
    const data = [];

    this.props.options.forEach((element) => {
      const option = {
        name: element.name,
        value: element.votes,
      };

      data.push(option);
    });
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
      cx, cy, midAngle, innerRadius, outerRadius, percent,
    }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
        <text
          x={x}
          y={y}
          fill="white"
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
        >
          {percent !== 0 ? `${(percent * 100).toFixed(0)}%` : ''}
        </text>
      );
    };

    return (
      <ResponsiveContainer height={400}>
        <PieChart width={800} height={400} onMouseEnter={this.onPieEnter} >
          <Pie
            verticalAlign="middle"
            data={data}
            dataKey="value"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
          >
            {
          data.map((entry, index) => <Cell key={uuidv4()} fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
