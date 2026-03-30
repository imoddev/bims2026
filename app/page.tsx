"use client";

export default function MotorExpoStats() {
  // Motor Expo 2025 Top 10
  const motorExpo2025 = [
    { rank: 1, brand: "TOYOTA", country: "🇯🇵", quantity: 10872, percentage: 13.40 },
    { rank: 2, brand: "BYD & DENZA", country: "🇨🇳", quantity: 10533, percentage: 12.98 },
    { rank: 3, brand: "OMODA & JAECOO", country: "🇨🇳", quantity: 7266, percentage: 8.96 },
    { rank: 4, brand: "HONDA", country: "🇯🇵", quantity: 6937, percentage: 8.55 },
    { rank: 5, brand: "MG", country: "🇨🇳", quantity: 6622, percentage: 8.16 },
    { rank: 6, brand: "ISUZU", country: "🇯🇵", quantity: 5663, percentage: 6.98 },
    { rank: 7, brand: "MAZDA", country: "🇯🇵", quantity: 3950, percentage: 4.87 },
    { rank: 8, brand: "MITSUBISHI", country: "🇯🇵", quantity: 3656, percentage: 4.51 },
    { rank: 9, brand: "DEEPAL", country: "🇨🇳", quantity: 3501, percentage: 4.31 },
    { rank: 10, brand: "NISSAN", country: "🇯🇵", quantity: 3491, percentage: 4.30 },
  ];

  // Motor Show 2026 Top 10
  const motorShow2026 = [
    { rank: 1, brand: "TOYOTA", country: "🇯🇵", quantity: 5672, percentage: 13.6 },
    { rank: 2, brand: "MG", country: "🇨🇳", quantity: 4217, percentage: 10.1 },
    { rank: 3, brand: "OMODA & JAECOO", country: "🇨🇳", quantity: 3984, percentage: 9.5 },
    { rank: 4, brand: "DEEPAL+NEVO", country: "🇨🇳", quantity: 3828, percentage: 9.2 },
    { rank: 5, brand: "GEELY", country: "🇨🇳", quantity: 3213, percentage: 7.7 },
    { rank: 6, brand: "CHERY", country: "🇨🇳", quantity: 2588, percentage: 6.2 },
    { rank: 7, brand: "GWM", country: "🇨🇳", quantity: 2581, percentage: 6.2 },
    { rank: 8, brand: "GAC", country: "🇨🇳", quantity: 2489, percentage: 6.0 },
    { rank: 9, brand: "HONDA", country: "🇯🇵", quantity: 2479, percentage: 5.9 },
    { rank: 10, brand: "MAZDA", country: "🇯🇵", quantity: 2132, percentage: 5.1 },
  ];

  // 4 Years Data
  const yearlyData = [
    { year: 2022, total: 36679, china: 8189, japan: 21278, europe: 4147, america: 1743, korea: 1290, growth: null },
    { year: 2023, total: 53258, china: 22742, japan: 23695, europe: 3597, america: 1969, korea: 1001, growth: "+45.2%" },
    { year: 2024, total: 54513, china: 26021, japan: 22768, europe: 3343, america: 1358, korea: 1023, growth: "+2.4%" },
    { year: 2025, total: 75246, china: 43137, japan: 26753, europe: 2736, america: 1448, korea: 953, growth: "+38.0%" },
  ];

  // Nationality breakdown Motor Expo 2025
  const nationalities = [
    { name: "จีน", percentage: 60.42, quantity: 48569, color: "from-blue-500 to-cyan-400" },
    { name: "ญี่ปุ่น", percentage: 33.26, quantity: 26753, color: "from-red-500 to-pink-400" },
    { name: "ยุโรป", percentage: 3.34, quantity: 2683, color: "from-yellow-500 to-orange-400" },
    { name: "อเมริกา", percentage: 1.8, quantity: 1448, color: "from-purple-500 to-indigo-400" },
    { name: "เกาหลี", percentage: 1.18, quantity: 953, color: "from-green-500 to-emerald-400" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-xl border-b border-red-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-black bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                iMoD Drive
              </div>
              <div className="hidden md:block text-sm text-gray-400">Motor Statistics 2022-2026</div>
            </div>
            <div className="text-sm text-gray-400">
              อัปเดต: 30 มี.ค. 2569
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Motor Expo & Motor Show
            </span>
          </h1>
          <p className="text-xl text-gray-400">ส่องกระแสความนิยมตลาดยานยนต์ไทย 2022-2026</p>
        </div>

        {/* 4 Years Growth */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-red-500">📊</span>
            4 ปี Motor Expo (2022-2025)
          </h2>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {yearlyData.map((year) => (
              <div key={year.year} className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all">
                <div className="text-sm text-gray-400 mb-2">{year.year}</div>
                <div className="text-4xl font-black mb-2">{year.total.toLocaleString()}</div>
                <div className="text-sm text-gray-400">คัน</div>
                {year.growth && (
                  <div className="mt-4 inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-bold">
                    {year.growth}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Growth Highlights */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-900/10 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/30">
              <div className="text-5xl mb-2">🇨🇳</div>
              <div className="text-2xl font-bold mb-2">จีน โต 526%</div>
              <div className="text-gray-400">8,189 → 43,137 คัน</div>
              <div className="text-sm text-blue-400 mt-2">ครองส่วนแบ่ง 57.3%</div>
            </div>
            <div className="bg-gradient-to-br from-red-500/10 to-red-900/10 backdrop-blur-xl rounded-2xl p-6 border border-red-500/30">
              <div className="text-5xl mb-2">🇯🇵</div>
              <div className="text-2xl font-bold mb-2">ญี่ปุ่น ยังแข็งแกร่ง</div>
              <div className="text-gray-400">21,278 → 26,753 คัน</div>
              <div className="text-sm text-red-400 mt-2">+25.7%</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-900/10 backdrop-blur-xl rounded-2xl p-6 border border-yellow-500/30">
              <div className="text-5xl mb-2">🇪🇺</div>
              <div className="text-2xl font-bold mb-2">ยุโรป ส่วนแบ่งลด</div>
              <div className="text-gray-400">11.3% → 3.6%</div>
              <div className="text-sm text-yellow-400 mt-2">4,147 → 2,736 คัน</div>
            </div>
          </div>
        </div>

        {/* Motor Expo 2025 */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-red-500">🏆</span>
            Motor Expo 2025 (28 พ.ย. - 10 ธ.ค. 68)
          </h2>

          {/* Nationality Breakdown */}
          <div className="grid md:grid-cols-5 gap-4 mb-12">
            {nationalities.map((item) => (
              <div key={item.name} className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
                <div className={`text-5xl font-black mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.percentage}%
                </div>
                <div className="text-lg font-bold mb-1">{item.name}</div>
                <div className="text-2xl font-bold text-white">{item.quantity.toLocaleString()}</div>
                <div className="text-sm text-gray-400">คัน</div>
              </div>
            ))}
          </div>

          {/* Top 10 Rankings */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-red-500/20">
            <h3 className="text-2xl font-bold mb-6">Top 10 อันดับยอดจอง (80,433 คัน)</h3>
            <div className="space-y-3">
              {motorExpo2025.map((item) => (
                <div key={item.rank} className="flex items-center gap-4 bg-black/30 rounded-xl p-4 hover:bg-black/50 transition-all">
                  <div className="text-3xl font-black text-red-500 w-12 text-center">
                    {item.rank}
                  </div>
                  <div className="text-2xl">{item.country}</div>
                  <div className="flex-1">
                    <div className="text-xl font-bold">{item.brand}</div>
                  </div>
                  <div className="text-2xl font-bold text-right">
                    {item.quantity.toLocaleString()}
                  </div>
                  <div className="text-xl font-bold text-red-400 w-20 text-right">
                    {item.percentage}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Motor Show 2026 */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-red-500">⚡</span>
            Motor Show 2026 (25-30 มี.ค. 69)
          </h2>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-red-500/20">
            <h3 className="text-2xl font-bold mb-6">Top 10 อันดับยอดจอง (41,778 คัน)</h3>
            <div className="space-y-3">
              {motorShow2026.map((item) => (
                <div key={item.rank} className="flex items-center gap-4 bg-black/30 rounded-xl p-4 hover:bg-black/50 transition-all">
                  <div className="text-3xl font-black text-red-500 w-12 text-center">
                    {item.rank}
                  </div>
                  <div className="text-2xl">{item.country}</div>
                  <div className="flex-1">
                    <div className="text-xl font-bold">{item.brand}</div>
                  </div>
                  <div className="text-2xl font-bold text-right">
                    {item.quantity.toLocaleString()}
                  </div>
                  <div className="text-xl font-bold text-red-400 w-20 text-right">
                    {item.percentage}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-gray-400 text-sm">
          <p className="mb-2">⚠️ ยอดจอง ≠ ยอดขายจริง</p>
          <p>ข้อมูลนี้สะท้อนกระแสความสนใจของผู้บริโภคในช่วงเวลาหนึ่งเท่านั้น</p>
          <p className="mt-4 text-xs">
            ขอบคุณข้อมูล: TiY, Motor Expo, iMoD Drive
          </p>
        </div>
      </section>
    </div>
  );
}
