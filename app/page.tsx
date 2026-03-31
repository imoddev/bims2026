"use client";

import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function MotorStats() {
  // 4 Years Data
  const yearlyData = [
    { year: '2022', จีน: 8189, ญี่ปุ่น: 21278, ยุโรป: 4147, อเมริกา: 1743, เกาหลี: 1290, total: 36679 },
    { year: '2023', จีน: 22742, ญี่ปุ่น: 23695, ยุโรป: 3597, อเมริกา: 1969, เกาหลี: 1001, total: 53258 },
    { year: '2024', จีน: 26021, ญี่ปุ่น: 22768, ยุโรป: 3343, อเมริกา: 1358, เกาหลี: 1023, total: 54513 },
    { year: '2025', จีน: 43137, ญี่ปุ่น: 26753, ยุโรป: 2736, อเมริกา: 1448, เกาหลี: 953, total: 75246 },
  ];

  // Nationality Motor Expo 2025
  const nationalityData = [
    { name: 'จีน', value: 60.42, quantity: 48569, color: '#3B82F6' },
    { name: 'ญี่ปุ่น', value: 33.26, quantity: 26753, color: '#EF4444' },
    { name: 'ยุโรป', value: 3.34, quantity: 2683, color: '#F59E0B' },
    { name: 'อเมริกา', value: 1.8, quantity: 1448, color: '#8B5CF6' },
    { name: 'เกาหลี', value: 1.18, quantity: 953, color: '#10B981' },
  ];

  // Motor Expo 2025 Top 10
  const motorExpo2025 = [
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

  // Motor Show 2026 Top 10
  const motorShow2026 = [
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
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-black border-b border-gray-800 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded flex items-center justify-center font-black">
              iM
            </div>
            <div className="text-xl font-bold">iMoD Drive</div>
          </div>
          <h1 className="text-3xl md:text-5xl font-black">
            Motor Expo & Motor Show Statistics
          </h1>
          <p className="text-gray-400 mt-2">ส่องกระแสความนิยมตลาดยานยนต์ไทย 2022-2026</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* 4 Years Bar Chart */}
        <section>
          <h2 className="text-3xl font-bold mb-6">📊 4 ปี Motor Expo (2022-2025)</h2>
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={yearlyData}>
                <XAxis dataKey="year" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #ef4444', borderRadius: '8px' }}
                />
                <Legend />
                <Bar dataKey="จีน" stackId="a" fill="#3B82F6" />
                <Bar dataKey="ญี่ปุ่น" stackId="a" fill="#10B981" />
                <Bar dataKey="ยุโรป" stackId="a" fill="#F59E0B" />
                <Bar dataKey="อเมริกา" stackId="a" fill="#EF4444" />
                <Bar dataKey="เกาหลี" stackId="a" fill="#14B8A6" />
              </BarChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-green-500/20 rounded-xl p-4 text-center">
                <div className="text-sm text-gray-400">2022-2023</div>
                <div className="text-2xl font-black text-green-400">+45.2%</div>
              </div>
              <div className="bg-yellow-500/20 rounded-xl p-4 text-center">
                <div className="text-sm text-gray-400">2023-2024</div>
                <div className="text-2xl font-black text-yellow-400">+2.4%</div>
              </div>
              <div className="bg-green-500/20 rounded-xl p-4 text-center">
                <div className="text-sm text-gray-400">2024-2025</div>
                <div className="text-2xl font-black text-green-400">+38.0%</div>
              </div>
              <div className="bg-purple-500/20 rounded-xl p-4 text-center">
                <div className="text-sm text-gray-400">2022-2025</div>
                <div className="text-2xl font-black text-purple-400">+105.1%</div>
              </div>
            </div>
          </div>
        </section>

        {/* Motor Expo 2025 */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🏆 Motor Expo 2025 (28 พ.ย. - 10 ธ.ค. 68)</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Donut Chart */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-xl font-bold mb-4">ยอดจองแบ่งตามสัญชาติ</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={nationalityData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    dataKey="value"
                  >
                    {nationalityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="text-center mb-4">
                <div className="text-4xl font-black">80,433 คัน</div>
                <div className="text-sm text-gray-400">รวมทั้งหมด</div>
              </div>
              <div className="space-y-2">
                {nationalityData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between bg-gray-800/50 rounded p-2">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }}></div>
                      <span>{item.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{item.value}%</div>
                      <div className="text-xs text-gray-400">{item.quantity.toLocaleString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top 10 */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-xl font-bold mb-4">Top 10 อันดับยอดจอง</h3>
              <div className="space-y-2">
                {motorExpo2025.map((item) => (
                  <div key={item.rank} className="flex items-center gap-3 bg-gray-800/50 rounded p-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${item.rank <= 3 ? 'bg-yellow-500 text-black' : 'bg-gray-700'}`}>
                      {item.rank}
                    </div>
                    <div className="text-lg">{item.flag}</div>
                    <div className="flex-1 font-bold">{item.brand}</div>
                    <div className="text-right">
                      <div className="font-bold">{item.quantity.toLocaleString()}</div>
                      <div className="text-xs text-red-400">{item.percentage}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Motor Show 2026 */}
        <section>
          <h2 className="text-3xl font-bold mb-6">⚡ Motor Show 2026 (25-30 มี.ค. 69)</h2>
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <div className="text-center mb-8">
              <div className="text-5xl font-black mb-2">41,778 คัน</div>
              <div className="text-gray-400">ยอดรวมทั้งหมด</div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {motorShow2026.map((item) => (
                <div key={item.rank} className="bg-gray-800/50 rounded-xl p-6 text-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold mx-auto mb-3 ${item.rank <= 3 ? 'bg-red-500' : 'bg-gray-700'}`}>
                    {item.rank}
                  </div>
                  <div className="text-3xl mb-2">{item.flag}</div>
                  <div className="font-bold mb-2">{item.brand}</div>
                  <div className="text-2xl font-black">{item.quantity.toLocaleString()}</div>
                  <div className="text-sm text-red-400">{item.percentage}%</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 py-8">
          <p className="mb-2">⚠️ ยอดจอง ≠ ยอดขายจริง</p>
          <p>ขอบคุณข้อมูล: TiY, Motor Expo, iMoD Drive</p>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="h-2 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600"></div>
    </div>
  );
}
