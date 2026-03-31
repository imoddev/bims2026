"use client";

export default function MotorShowRankings() {
  // Motor Show 2026 Top 10
  const motorShow2026 = [
    { rank: 1, brand: 'TOYOTA', logo: '🚗', flag: '🇯🇵', quantity: 5672, percentage: 13.58 },
    { rank: 2, brand: 'MG', logo: '🔴', flag: '🇨🇳', quantity: 4217, percentage: 10.09 },
    { rank: 3, brand: 'OMODA & JAECOO', logo: '⭕', flag: '🇨🇳', quantity: 3984, percentage: 9.54 },
    { rank: 4, brand: 'DEEPAL + NEVO', logo: '🔷', flag: '🇨🇳', quantity: 3828, percentage: 9.16 },
    { rank: 5, brand: 'GEELY', logo: '⬛', flag: '🇨🇳', quantity: 3213, percentage: 7.69 },
    { rank: 6, brand: 'CHERY', logo: '🔶', flag: '🇨🇳', quantity: 2588, percentage: 6.19 },
    { rank: 7, brand: 'GWM', logo: '🔴', flag: '🇨🇳', quantity: 2581, percentage: 6.18 },
    { rank: 8, brand: 'GAC', logo: '🔴', flag: '🇨🇳', quantity: 2489, percentage: 5.96 },
    { rank: 9, brand: 'Honda', logo: 'H', flag: '🇯🇵', quantity: 2479, percentage: 5.93 },
    { rank: 10, brand: 'Mazda', logo: 'M', flag: '🇯🇵', quantity: 2132, percentage: 5.1 },
  ];

  const totalBookings = 41778;
  const othersBookings = 8595;
  const othersPercentage = 20.57;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-900 to-black py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-sm text-gray-400">GRANDPRIX MOTOR SHOW</div>
            <div className="text-sm text-gray-400">BANGKOK INTERNATIONAL MOTOR SHOW</div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-4 text-white">
            MOTOR SHOW 2026
          </h1>
          <h2 className="text-3xl md:text-5xl font-black mb-3">
            10 อันดับยอดจองรถยนต์
          </h2>
          <p className="text-xl text-gray-300">ครึ่งทาง 25 - 30 มีนาคม 2026</p>
        </div>
      </div>

      {/* Top 10 Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {motorShow2026.map((item) => (
            <div
              key={item.rank}
              className="flex flex-col items-center text-center p-8 bg-gray-900/50 rounded-xl hover:bg-gray-900/70 transition-all border border-gray-800"
            >
              {/* Logo */}
              <div className="w-24 h-24 mb-4 flex items-center justify-center bg-white/5 rounded-full">
                <span className="text-5xl">{item.logo}</span>
              </div>

              {/* Brand Name + Flag */}
              <div className="mb-3">
                <div className="font-black text-2xl mb-1">{item.brand} {item.flag}</div>
              </div>

              {/* Rank Badge */}
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-black text-xl mb-4">
                {item.rank}
              </div>

              {/* Quantity */}
              <div className="mb-2">
                <div className="text-4xl font-black">{item.quantity.toLocaleString()} คัน</div>
              </div>

              {/* Percentage */}
              <div className="text-gray-400">คิดเป็น {item.percentage}%</div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-2 gap-8 border-t border-gray-800 pt-12">
          {/* Others */}
          <div className="text-center p-8 bg-gray-900/30 rounded-xl border border-gray-800">
            <div className="text-gray-400 mb-2">ยอดจองแบรนด์อื่น ๆ</div>
            <div className="text-5xl font-black mb-2">{othersBookings.toLocaleString()} คัน</div>
            <div className="text-red-500 text-2xl font-bold">คิดเป็น {othersPercentage}%</div>
          </div>

          {/* Total */}
          <div className="text-center p-8 bg-gradient-to-br from-red-900/30 to-pink-900/30 rounded-xl border border-red-800">
            <div className="text-gray-300 mb-2 flex items-center justify-center gap-2">
              <span className="text-3xl">🚗</span>
              <span>ยอดจองทั้งหมด</span>
            </div>
            <div className="text-6xl font-black">{totalBookings.toLocaleString()} คัน</div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-2">
            *ข้อมูลจากเพจ Bangkok International Motor Show
          </p>
          <div className="flex items-center justify-center gap-4 text-sm">
            <a href="#" className="text-blue-400 hover:underline">📘 iMoD</a>
            <a href="#" className="text-red-400 hover:underline">▶️ iMoD Official</a>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="h-2 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600"></div>
    </div>
  );
}
