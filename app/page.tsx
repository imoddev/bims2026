"use client";

export default function BIMS2026() {
  const rankings = [
    { rank: 1, brand: "TOYOTA", quantity: 5672, percentage: 13.6, trend: "up" },
    { rank: 2, brand: "MG", quantity: 4217, percentage: 10.1, trend: "flat" },
    { rank: 3, brand: "OMODA & JAECOO", quantity: 3984, percentage: 9.5, trend: "up" },
    { rank: 4, brand: "DEEPAL+NEVO", quantity: 3828, percentage: 9.2, trend: "up" },
    { rank: 5, brand: "GEELY", quantity: 3213, percentage: 7.7, trend: "up" },
    { rank: 6, brand: "CHERY", quantity: 2588, percentage: 6.2, trend: "flat" },
    { rank: 7, brand: "GWM", quantity: 2581, percentage: 6.2, trend: "up" },
    { rank: 8, brand: "GAC", quantity: 2489, percentage: 6.0, trend: "up" },
    { rank: 9, brand: "HONDA", quantity: 2479, percentage: 5.9, trend: "down" },
    { rank: 10, brand: "MAZDA", quantity: 2132, percentage: 5.1, trend: "flat" },
  ];

  const totalBookings = 41778;

  return (
    <div className="bg-[#051426] text-[#d5e3fd] font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#051426]/80 backdrop-blur-xl border-b border-[#c6c6c7]/15">
        <div className="flex justify-between items-center px-8 py-4 max-w-[1920px] mx-auto">
          <div className="text-2xl font-black tracking-tighter text-[#a8c8ff] italic">BIMS 2026</div>
          <div className="hidden md:flex items-center space-x-8">
            <a className="uppercase tracking-wider text-sm font-bold text-[#a8c8ff] border-b-2 border-[#a8c8ff] pb-1" href="#">Home</a>
            <a className="uppercase tracking-wider text-sm font-bold text-[#c6c6c7] hover:text-[#a8c8ff] transition-colors" href="#">Brand Rankings</a>
            <a className="uppercase tracking-wider text-sm font-bold text-[#c6c6c7] hover:text-[#a8c8ff] transition-colors" href="#">Market Insights</a>
          </div>
          <button className="bg-gradient-to-r from-[#a8c8ff] to-[#116bc7] px-6 py-2 rounded text-[#e6edff] font-bold uppercase tracking-widest text-xs">
            Get Tickets
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-50" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj__rCX8_xbX_4bbY5On2IU-Yjjfp9uWB81IHd7dtAd7nBmES59dSsxp-mc3oW-9_c0Y79ysGFMTUyozn1KLv-BWMdrHsdDgoI9p4oMOLTznJprvZQ77bTyQsMHRzV19GND7wVrD-upE_dPxSN1J3FEKvVOu5s8sX2Ns91PWuarYJwYQ9CFg9r7LQMYncwmFzlT3cfvhVZ88PLU_NZhh0m6fLhS7q6L4aPz3zo6QemfAi77E16dpl555GN4ypA5Vc1sRsqXSsvcTc"
            alt="Motor Show Hero" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051426] via-transparent to-[#051426]/40"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="uppercase tracking-[0.4em] text-[#a8c8ff] text-sm font-bold block mb-4">The Kinetic Monolith</span>
            <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter italic text-white leading-tight mb-8">
              Motor Show <br/>
              <span className="text-[#a8c8ff]">2026</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-[#2c3a4e]/40 backdrop-blur-xl p-6 rounded-lg border border-[#a8c8ff]/15 max-w-sm">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#ffb59d] text-2xl">⚡</span>
                  <span className="text-xs uppercase tracking-widest text-[#c6c6c7]">Live Progress</span>
                </div>
                <div className="text-5xl font-bold text-white mb-2">{totalBookings.toLocaleString()}</div>
                <div className="text-[#a8c8ff] font-medium">TOTAL CAR BOOKINGS</div>
                <div className="mt-4 h-1 w-full bg-[#273649] overflow-hidden rounded-full">
                  <div className="h-full bg-[#ffb59d] w-1/2"></div>
                </div>
                <p className="text-[#c6c6c7] text-xs mt-3 uppercase">Halfway through exhibition</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Top 10 Rankings */}
      <section className="py-24 bg-[#0d1c2f]">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-bold uppercase tracking-tighter mb-4 italic">
                Performance <span className="text-[#a8c8ff]">Leaderboard</span>
              </h2>
              <p className="text-[#c6c6c7]">Real-time booking data from Bangkok International Motor Show 2026</p>
            </div>
          </div>

          <div className="space-y-2">
            {rankings.map((item) => (
              <div
                key={item.rank}
                className="grid grid-cols-12 py-5 px-6 bg-[#010f21] hover:bg-[#1c2b3e] transition-colors border border-[#a8c8ff]/10 rounded items-center"
              >
                <div className="col-span-1 font-bold text-2xl text-[#a8c8ff]">
                  {item.rank.toString().padStart(2, '0')}
                </div>
                <div className="col-span-5 md:col-span-6 flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center font-bold text-xs">
                    {item.brand.charAt(0)}
                  </div>
                  <span className="text-lg font-bold tracking-tight">{item.brand}</span>
                </div>
                <div className="col-span-3 md:col-span-2 text-right text-xl font-bold">
                  {item.quantity.toLocaleString()}
                </div>
                <div className="col-span-2 text-right text-lg font-bold text-[#a8c8ff]">
                  {item.percentage}%
                </div>
                <div className="col-span-1 text-right">
                  {item.trend === "up" && <span className="text-[#ffb59d]">↗</span>}
                  {item.trend === "flat" && <span className="text-[#a8c8ff]">→</span>}
                  {item.trend === "down" && <span className="text-[#c6c6c7]">↘</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Share */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Chart Placeholder */}
            <div className="relative">
              <div className="w-[400px] h-[400px] rounded-full border-[30px] border-[#122033] relative flex items-center justify-center mx-auto">
                <div className="text-center">
                  <div className="text-6xl font-black text-white">55.8%</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#a8c8ff]">China Origin</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div className="bg-[#122033] p-6 border border-[#a8c8ff]/10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-[#a8c8ff] rounded-full"></div>
                    <span className="text-xs uppercase text-[#c6c6c7]">China</span>
                  </div>
                  <div className="text-2xl font-bold">55.8%</div>
                </div>
                <div className="bg-[#122033] p-6 border border-[#a8c8ff]/10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-[#ffb59d] rounded-full"></div>
                    <span className="text-xs uppercase text-[#c6c6c7]">Japan</span>
                  </div>
                  <div className="text-2xl font-bold">24.6%</div>
                </div>
              </div>
            </div>

            {/* Insights */}
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-[#ffb59d] font-bold block mb-4">Shift in Power</span>
              <h2 className="text-5xl font-bold uppercase tracking-tighter mb-8 italic">
                The Rise of <span className="text-[#a8c8ff]">Chinese Brands</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 bg-[#1c2b3e] rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-[#a8c8ff] text-3xl">📊</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">MARKET CONCENTRATION</h4>
                    <p className="text-[#c6c6c7] leading-relaxed">
                      Chinese brands now occupy <span className="text-white font-bold">7 of Top 10</span> positions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d1c2f] py-12 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-xl font-bold text-[#a8c8ff] mb-4">BIMS 2026</div>
          <p className="text-sm text-[#c6c6c7]">
            Bangkok International Motor Show 2026 — The Kinetic Monolith
          </p>
          <p className="text-xs text-[#c6c6c7] mt-4">
            © 2026 iMoD Drive. Data as of March 30, 2026.
          </p>
        </div>
      </footer>
    </div>
  );
}
