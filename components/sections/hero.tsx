import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Left Content */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <span className="text-gray-600">Introducing our Insights Business</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          With Mento, Task Planning is Easier Than Ever
        </h1>
        
        <p className="text-gray-600 text-lg">
          Customize your business journey effortlessly with Youflow&apos;s dashboard, backed by a suite of powerful tools at your fingertips.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg font-medium flex items-center gap-2">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button className="px-6 py-3 border border-gray-300 rounded-lg font-medium flex items-center gap-2">
            Learn More
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Right Content - Metrics Card */}
      <div className="bg-white rounded-3xl p-6 shadow-lg space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Average Rate</h2>
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-gray-300 rounded-full" />
            <div className="w-1 h-1 bg-gray-300 rounded-full" />
            <div className="w-1 h-1 bg-gray-300 rounded-full" />
          </div>
        </div>

        <div className="text-4xl font-bold text-green-500">
          79.59%
        </div>

        <div className="h-24">
          <div className="flex items-end h-full gap-1">
            {Array(24).fill(null).map((_, i) => (
              <div 
                key={i} 
                className={`w-full ${i > 11 ? 'bg-green-500' : 'bg-green-100'}`}
                style={{ 
                  height: `${i > 11 ? '100%' : '60%'}`
                }}
              />
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Team performance</h3>
          <p className="text-gray-500">Keep track of everything you need to</p>
        </div>

        <div className="bg-green-500 text-white rounded-xl p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">Spending Limits</span>
            <span className="text-sm bg-white/20 px-2 py-1 rounded-full">↗ +3.1%</span>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold">$1,347.00</div>
            <div className="text-sm text-white/70">used from $4,000.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;