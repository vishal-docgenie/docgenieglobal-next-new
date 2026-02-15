
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";

interface BenefitsChartProps {
  type: "noshow" | "time" | "satisfaction";
}

const BenefitsChart = ({ type }: BenefitsChartProps) => {
  const colors = {
    primary: "#2D6FC9",
    secondary: "#FAC0A1",
    accent: "#10B981",
    gray: "#94A3B8"
  };

  if (type === "noshow") {
    const data = [
      { name: "Traditional Practice", rate: 25, color: colors.gray },
      { name: "With Telemedicine", rate: 12, color: colors.primary }
    ];

    return (
      <div className="h-48 sm:h-56 md:h-64">
        <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4 text-center">No-Show Rate Comparison</h4>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              interval={0}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis 
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              domain={[0, 30]}
              label={{ value: 'No-Show Rate (%)', angle: -90, position: 'insideLeft', style: { fontSize: '10px' } }}
            />
            <Bar 
              dataKey="rate" 
              fill={colors.primary}
              radius={[4, 4, 0, 0]}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p className="text-xs sm:text-sm text-center text-gray-600 mt-6 sm:mt-4">
          40% reduction in no-shows = 13 percentage point improvement
        </p>
      </div>
    );
  }

  if (type === "time") {
    const data = [
      { month: "Jan", traditional: 160, withTelemedicine: 360 },
      { month: "Feb", traditional: 160, withTelemedicine: 360 },
      { month: "Mar", traditional: 160, withTelemedicine: 360 },
      { month: "Apr", traditional: 160, withTelemedicine: 360 },
      { month: "May", traditional: 160, withTelemedicine: 360 },
      { month: "Jun", traditional: 160, withTelemedicine: 360 }
    ];

    return (
      <div className="h-48 sm:h-56 md:h-64">
        <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4 text-center">Monthly Staff Hours Available</h4>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              label={{ value: 'Hours', angle: -90, position: 'insideLeft', style: { fontSize: '10px' } }}
            />
            <Bar dataKey="traditional" fill={colors.gray} name="Traditional" radius={[4, 4, 0, 0]} />
            <Bar dataKey="withTelemedicine" fill={colors.primary} name="With Telemedicine" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-xs sm:text-sm text-center text-gray-600 mt-6 sm:mt-4">
          +200 hours saved monthly for patient care focus
        </p>
      </div>
    );
  }

  if (type === "satisfaction") {
    const data = [
      { name: "Likely to Return", value: 83, color: colors.primary },
      { name: "Unlikely", value: 17, color: colors.gray }
    ];

    return (
      <div className="h-48 sm:h-56 md:h-64">
        <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4 text-center">Patient Retention with Telehealth</h4>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={60}
              dataKey="value"
              startAngle={90}
              endAngle={450}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mt-6 sm:mt-4 mb-2">
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 rounded-full bg-brand-blue"></div>
            <span className="text-xs sm:text-sm text-gray-600">83% Likely to Return</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            <span className="text-xs sm:text-sm text-gray-600">17% Unlikely</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default BenefitsChart;
