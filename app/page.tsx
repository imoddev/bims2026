"use client";

import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function MotorExpoInfographic() {
  // 4 Years Data for Stacked Bar Chart
  const yearlyData = [
    { year: '2022', จีน: 8189, ญี่ปุ่น: 21278, ยุโรป: 4147, อเมริกา: 1743, เกาหลี: 1290, total: 36679 },
    { year: '2023', จีน: 22742, ญี่ปุ่น: 23695, ยุโรป: 3597, อเมริกา: 1969, เกาหลี: 1001, total: 53258 },
    { year: '2024', จีน: 26021, ญี่ปุ่น: 22768, ยุโรป: 3343, อเมริกา: 1358, เกาหลี: 1023, total: 54513 },
    { year: '2025', จีน: 43137, ญี่ปุ่น: 26753, ยุโรป: 2736, อเมริกา: 1448, เกาหลี: 953, total: 75246 },
  ];

  // Donut Chart Data (Motor Expo 2025)
  const nationalityData = [
    { name: 'จีน', value: 60.42, quantity: 48569, color: '#3B82F6' },
    { name: 'ญี่ปุ่น', value: 33.26, quantity: 26753, color: '#EF4444' },
    { name: 'ยุโรป', value: 3.34, quantity: 2683, color: '#F59E0B' },
    { name: 'อเมริกา', value: 1.8, quantity: 1448, color: '#8B5CF6' },
    { name: 'เกาหลี', value: 1.18, quantity: 953, color: '#10B981' },
  ];

  // Top 10 Motor Expo 2025
  const topBrands2025 = [
    { rank: 1, brand: 'TOYOTA', flag: '🇯🇵', quantity: 10872, percentage: 13.40 },
    { rank: 2, brand: 'BYD & DENZA', flag: '🇨🇳', quantity: 10533, percentage: 12.98 },
    { rank: 3, brand: 'OMODA & JAECOO', flag: '🇨🇳', quantity: 7266, percentage: 8.96 },
    { rank: 4, brand: 'HONDA', flag: '🇯🇵', quantity: 6937, percentage: 8.55 },
    { rank: 5, brand: 'MG', flag: '🇨🇳', quantity: 6622, percentage: 8.16 },
    { rank: 6, brand: 'ISUZU', flag: '🇯🇵', quantity: 5663, percentage: 6.98 },
    { rank: 7, brand: 'MAZDA', flag: '🇯🇵', quantity: 3950, percentage: 4.87 },
    { rank: 8, brand: 'MITSUBISHI', flag: '🇯🇵', quantity: 3656, percentage: 4.51 },
    { rank: 9, brand: 'DEEPAL', flag: '🇨🇳', quantity: 3501, percentage: 4.31 },
    { rank: 10, brand: 'NISSAN', flag: '🇯🇵', quantity: 3491, percentage: 4.30 },
  ];

  // Top 10 Motor Show 2026
  const topBrands2026 = [
    { rank: 1, brand: 'TOYOTA', flag: '🇯🇵', quantity: 5672, percentage: 13.6 },
    { rank: 2, brand: 'MG', flag: '🇨🇳', quantity: 4217, percentage: 10.1 },
    { rank: 3, brand: 'OMODA & JAECOO', flag: '🇨🇳', quantity: 3984, percentage: 9.5 },
    { rank: 4, brand: 'DEEPAL+NEVO', flag: '🇨🇳', quantity: 3828, percentage: 9.2 },
    { rank: 5, brand: 'GEELY', flag: '🇨🇳', quantity: 3213, percentage: 7.7 },
    { rank: 6, brand: 'CHERY', flag: '🇨🇳', quantity: 2588, percentage: 6.2 },
    { rank: 7, brand: 'GWM', flag: '🇨🇳', quantity: 2581, percentage: 6.2 },
    { rank: 8, brand: 'GAC', flag: '🇨🇳', quantity: 2489, percentage: 6.0 },
    { rank: 9, brand: 'HONDA', flag: '🇯🇵', quantity: 2479, percentage: 5.9 },
    { rank: 10, brand: 'MAZDA', flag: '🇯🇵', quantity: 2132, percentage: 5.1 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-950 to-black text-white p-4 md:p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center font-black text-xl">
              iM
            </div>
            <div>
              <div className="text-2xl font-black">iMoD Drive</div>
              <div className="text-xs text-gray-400">Motor Statistics Dashboard</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">อัปเดต</div>
            <div className="text-sm font-bold">31 มี.ค. 2569</div>
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-2">
          <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            4 ปี MOTOR EXPO
          </span>
        </h1>
        <p className="text-xl text-gray-300">ส่องกระแสความนิยมตลาดยานยนต์ไทย</p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Stacked Bar Chart Section */}
        <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-3xl p-6 md:p-10 border border-red-500/30 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">ยอดจองรถยนต์ MOTOR EXPO ปี 2022 - 2025</h2>
          
          <div className="mb-6">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={yearlyData}>
                <XAxis dataKey="year" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #ef4444', borderRadius: '8px' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Legend />
                <Bar dataKey="จีน" stackId="a" fill="#3B82F6" />
                <Bar dataKey="ญี่ปุ่น" stackId="a" fill="#10B981" />
                <Bar dataKey="ยุโรป" stackId="a" fill="#F59E0B" />
                <Bar dataKey="อเมริกา" stackId="a" fill="#EF4444" />
                <Bar dataKey="เกาหลี" stackId="a" fill="#14B8A6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Growth Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-green-500/20 rounded-xl p-4 border border-green-500/50">
              <div className="text-sm text-gray-300">2022-2023</div>
              <div className="text-3xl font-black text-green-400">+45.2%</div>
            </div>
            <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/50">
              <div className="text-sm text-gray-300">2023-2024</div>
              <div className="text-3xl font-black text-yellow-400">+2.4%</div>
            </div>
            <div className="bg-green-500/20 rounded-xl p-4 border border-green-500/50">
              <div className="text-sm text-gray-300">2024-2025</div>
              <div className="text-3xl font-black text-green-400">+38.0%</div>
            </div>
            <div className="bg-purple-500/20 rounded-xl p-4 border border-purple-500/50">
              <div className="text-sm text-gray-300">2022-2025</div>
              <div className="text-3xl font-black text-purple-400">+105.1%</div>
            </div>
          </div>

          {/* Key Insights */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/30">
              <div className="text-3xl mb-2">🇨🇳</div>
              <div className="text-xl font-bold mb-2">จีน ยอดจองเติบโตก้าวกระโดด</div>
              <div className="text-sm text-gray-300 mb-2">โต 5 เท่า (526%) ใน 4 ปี</div>
              <div className="text-sm text-blue-400 font-bold">ครองส่วนแบ่ง 57.3%</div>
            </div>
            <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
              <div className="text-3xl mb-2">🇯🇵</div>
              <div className="text-xl font-bold mb-2">ญี่ปุ่น เติบโตแต่ช้าลง</div>
              <div className="text-sm text-gray-300">21,278 → 26,753 คัน (+25.7%)</div>
            </div>
            <div className="bg-orange-500/10 rounded-xl p-6 border border-orange-500/30">
              <div className="text-3xl mb-2">🇪🇺</div>
              <div className="text-xl font-bold mb-2">ยุโรป ส่วนแบ่งลดลง</div>
              <div className="text-sm text-gray-300 mb-2">4,147 → 2,736 คัน</div>
              <div className="text-sm text-orange-400 font-bold">จาก 11.3% เหลือ 3.6%</div>
            </div>
          </div>
        </div>

        {/* Donut Chart + Top 10 Motor Expo 2025 */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Donut Chart */}
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-red-500/30 shadow-2xl">
            <h2 className="text-2xl font-bold mb-4">MOTOR EXPO 2025</h2>
            <p className="text-sm text-gray-400 mb-6">ยอดจองรถแบ่งตามสัญชาติ</p>
            
            <div className="flex flex-col items-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={nationalityData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {nationalityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #ef4444', borderRadius: '8px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              
              <div className="text-center mb-6">
                <div className="text-4xl font-black mb-1">80,433</div>
                <div className="text-sm text-gray-400">รวมทั้งหมด (คัน)</div>
              </div>

              <div className="w-full space-y-2">
                {nationalityData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }}></div>
                      <span className="font-bold">{item.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-black text-lg">{item.value}%</div>
                      <div className="text-xs text-gray-400">{item.quantity.toLocaleString()} คัน</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top 10 Motor Expo 2025 */}
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-red-500/30 shadow-2xl">
            <h2 className="text-2xl font-bold mb-2">10 อันดับยอดจอง</h2>
            <p className="text-sm text-gray-400 mb-6">MOTOR EXPO 2025 (28 พ.ย. - 10 ธ.ค. 68)</p>
            
            <div className="space-y-2">
              {topBrands2025.map((item) => (
                <div 
                  key={item.rank} 
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                    item.rank <= 3 
                      ? 'bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/50' 
                      : 'bg-gray-800/50 hover:bg-gray-700/50'
                  }`}
                >
                  <div className={`text-2xl font-black w-8 text-center ${item.rank <= 3 ? 'text-yellow-400' : 'text-gray-400'}`}>
                    {item.rank}
                  </div>
                  <div className="text-xl">{item.flag}</div>
                  <div className="flex-1">
                    <div className="font-bold text-sm">{item.brand}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-black text-lg">{item.quantity.toLocaleString()}</div>
                    <div className="text-xs text-red-400">{item.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top 10 Motor Show 2026 */}
        <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-purple-500/30 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">10 อันดับยอดจอง</h2>
          <p className="text-sm text-gray-400 mb-6">MOTOR SHOW 2026 (25-30 มี.ค. 69) — รวม 41,778 คัน</p>
          
          <div className="grid md:grid-cols-2 gap-3">
            {topBrands2026.map((item) => (
              <div 
                key={item.rank} 
                className={`flex items-center gap-3 p-4 rounded-xl transition-all ${
                  item.rank <= 3 
                    ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50' 
                    : 'bg-gray-800/50 hover:bg-gray-700/50'
                }`}
              >
                <div className={`text-2xl font-black w-8 text-center ${item.rank <= 3 ? 'text-yellow-400' : 'text-gray-400'}`}>
                  {item.rank}
                </div>
                <div className="text-xl">{item.flag}</div>
                <div className="flex-1">
                  <div className="font-bold">{item.brand}</div>
                </div>
                <div className="text-right">
                  <div className="font-black text-lg">{item.quantity.toLocaleString()}</div>
                  <div className="text-xs text-purple-400">{item.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-400 py-8 space-y-2">
          <p>⚠️ ยอดจอง ≠ ยอดขายจริง ข้อมูลนี้สะท้อนกระแสความสนใจของผู้บริโภคในช่วงเวลาหนึ่งเท่านั้น</p>
          <p className="text-xs">ขอบคุณข้อมูล: TiY, Motor Expo, iMoD Drive</p>
          <div className="text-xs text-gray-500 mt-4">© 2026 iMoD Drive — Motor Statistics Dashboard</div>
        </div>
      </div>
    </div>
  );
}
