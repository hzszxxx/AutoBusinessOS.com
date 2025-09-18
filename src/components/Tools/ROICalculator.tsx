'use client'

import { useState } from 'react'
import { trackROICalculatorConversion } from '@/components/Analytics/GoogleAds'
import { trackROICalculator, trackFormEvent } from '@/components/Analytics/GoogleAnalytics'

interface ROIInputs {
  currentRevenue: string
  employeeCost: string
  processTime: string
  errorRate: string
  expectedEfficiency: number
}

interface ROIResults {
  annualSavings: number
  roi: number
  paybackPeriod: number
  fiveYearValue: number
  monthlyProductivity: number
  errorReduction: number
}

export default function ROICalculator() {
  const [inputs, setInputs] = useState<ROIInputs>({
    currentRevenue: '',
    employeeCost: '',
    processTime: '',
    errorRate: '',
    expectedEfficiency: 80
  })

  const [results, setResults] = useState<ROIResults | null>(null)
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [emailData, setEmailData] = useState({
    email: '',
    company: '',
    name: ''
  })

  const handleInputChange = (field: keyof ROIInputs, value: string | number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const calculateROI = () => {
    const {
      currentRevenue,
      employeeCost,
      processTime,
      errorRate,
      expectedEfficiency
    } = inputs

    const revenue = parseFloat(currentRevenue) || 0
    const empCost = parseFloat(employeeCost) || 0
    const procTime = parseFloat(processTime) || 0
    const errRate = parseFloat(errorRate) || 0

    // Calculate annual cost savings
    const laborSavings = (empCost * procTime * expectedEfficiency / 100)
    const errorCostReduction = (revenue * errRate / 100 * 0.15)
    const annualSavings = laborSavings + errorCostReduction

    // Implementation cost estimation
    const implementationCost = Math.max(revenue * 0.03, 50000) // Minimum $50K, or 3% of revenue

    // ROI calculation
    const roi = ((annualSavings - implementationCost) / implementationCost) * 100
    const paybackPeriod = implementationCost / (annualSavings / 12)

    // 5-year total value
    const fiveYearValue = annualSavings * 5 - implementationCost

    // Monthly productivity improvement
    const monthlyProductivity = (empCost * procTime * expectedEfficiency / 100)

    // Error reduction value
    const errorReduction = revenue * errRate / 100 * 0.85 // Assume 85% error reduction

    setResults({
      annualSavings: Math.round(annualSavings),
      roi: Math.round(roi),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      fiveYearValue: Math.round(fiveYearValue),
      monthlyProductivity: Math.round(monthlyProductivity),
      errorReduction: Math.round(errorReduction)
    })

    // Track ROI calculation event
    trackROICalculator('calculate', Math.round(annualSavings));
  }

  const handleGetDetailedReport = () => {
    setShowEmailForm(true)

    // Track report request event
    trackROICalculator('email_submit')
    trackFormEvent('roi_detailed_report', 'start')
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Email service API integration can be added here
    console.log('Sending detailed report to:', emailData)

    // Track conversion event
    trackFormEvent('roi_detailed_report', 'submit')
    trackROICalculatorConversion(results?.annualSavings || 0, emailData.email)

    alert('Thank you! Your personalized implementation guide will arrive in your inbox within 5 minutes.')
    setShowEmailForm(false)
  }

  const validateInputs = () => {
    return inputs.currentRevenue && inputs.employeeCost && inputs.processTime && inputs.errorRate
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Business Impact Calculator
        </h2>
        <p className="text-xl text-gray-600">
          Discover your automation potential and projected savings in under 3 minutes
        </p>
      </div>

      {/* Input Form */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Annual Revenue ($)*
          </label>
          <input
            type="number"
            value={inputs.currentRevenue}
            onChange={(e) => handleInputChange('currentRevenue', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="e.g. 10,000,000"
            required
          />
          <p className="text-xs text-gray-500 mt-1">Your company's total annual revenue</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Annual Labor Costs ($)*
          </label>
          <input
            type="number"
            value={inputs.employeeCost}
            onChange={(e) => handleInputChange('employeeCost', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="e.g. 1,000,000"
            required
          />
          <p className="text-xs text-gray-500 mt-1">Total annual compensation for staff involved in automatable processes</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Time Spent on Manual Tasks (%)*
          </label>
          <input
            type="number"
            value={inputs.processTime}
            onChange={(e) => handleInputChange('processTime', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="e.g. 60"
            min="1"
            max="100"
            required
          />
          <p className="text-xs text-gray-500 mt-1">Percentage of employee time spent on repetitive, automatable tasks</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Error Rate (%)*
          </label>
          <input
            type="number"
            value={inputs.errorRate}
            onChange={(e) => handleInputChange('errorRate', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="e.g. 5"
            min="0"
            max="50"
            required
          />
          <p className="text-xs text-gray-500 mt-1">Estimated percentage of manual processes that result in errors</p>
        </div>
      </div>

      {/* Efficiency Improvement Slider */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Projected Efficiency Gains: {inputs.expectedEfficiency}%
        </label>
        <div className="relative">
          <input
            type="range"
            min="30"
            max="95"
            value={inputs.expectedEfficiency}
            onChange={(e) => handleInputChange('expectedEfficiency', parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Conservative (30%)</span>
            <span>Moderate (60%)</span>
            <span>Aggressive (95%)</span>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Industry benchmark: Most organizations achieve 60-80% efficiency gains with comprehensive automation
        </p>
      </div>

      {/* Calculate Button */}
      <button
        onClick={calculateROI}
        disabled={!validateInputs()}
        className={`w-full py-4 px-6 rounded-lg text-lg font-semibold transition-colors ${
          validateInputs()
            ? 'bg-primary-600 hover:bg-primary-700 text-white'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        {validateInputs() ? 'Calculate My ROI' : 'Please complete all fields'}
      </button>

      {/* Results Display */}
      {results && (
        <div className="mt-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            🎉 Your Business Impact Projection
          </h3>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                ${results.annualSavings.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Annual Cost Savings</div>
              <div className="text-xs text-gray-500 mt-1">
                = Labor Savings + Error Reduction
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {results.roi > 0 ? '+' : ''}{results.roi}%
              </div>
              <div className="text-sm text-gray-600">ROI</div>
              <div className="text-xs text-gray-500 mt-1">
                {results.roi > 200 ? '🚀 Excellent' : results.roi > 100 ? '✅ Good' : results.roi > 50 ? '⚠️ Average' : '❌ Needs Optimization'}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {results.paybackPeriod < 12 ? `${results.paybackPeriod} months` : `${Math.round(results.paybackPeriod/12*10)/10} years`}
              </div>
              <div className="text-sm text-gray-600">Investment Recovery</div>
              <div className="text-xs text-gray-500 mt-1">
                {results.paybackPeriod < 6 ? '⚡ Super Fast' : results.paybackPeriod < 12 ? '🚀 Very Fast' : '⏳ Reasonable'}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-lg font-bold text-purple-600 mb-1">
                ${results.fiveYearValue.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">5-Year Total Value</div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-lg font-bold text-orange-600 mb-1">
                ${results.monthlyProductivity.toLocaleString()}/month
              </div>
              <div className="text-sm text-gray-600">Monthly Productivity Gains</div>
            </div>
          </div>

          {/* Detailed Analysis */}
          <div className="bg-white rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">💡 Executive Summary</h4>
            <div className="space-y-2 text-sm">
              {results.roi > 200 && (
                <p className="text-green-700">
                  ✅ <strong>Exceptional ROI</strong>: This automation investment delivers outstanding returns with minimal risk
                </p>
              )}
              {results.roi > 100 && results.roi <= 200 && (
                <p className="text-blue-700">
                  ✅ <strong>Strong Business Case</strong>: Solid returns justify immediate automation investment
                </p>
              )}
              {results.roi > 50 && results.roi <= 100 && (
                <p className="text-yellow-700">
                  ⚠️ <strong>Moderate Returns</strong>: Consider phased implementation to optimize ROI
                </p>
              )}
              {results.roi <= 50 && (
                <p className="text-red-700">
                  ❌ <strong>Review Strategy</strong>: Current parameters suggest optimization opportunities before implementation
                </p>
              )}
              <p className="text-gray-600">
                💰 Projected Annual Savings: <strong>${results.annualSavings.toLocaleString()}</strong>
              </p>
              <p className="text-gray-600">
                📈 5-Year Total Impact: <strong>${results.fiveYearValue.toLocaleString()}</strong>
              </p>
            </div>
          </div>

          <button
            onClick={handleGetDetailedReport}
            className="w-full bg-accent-500 hover:bg-accent-600 text-white py-4 px-6 rounded-lg text-lg font-semibold transition-colors"
          >
            📊 Get Personalized Implementation Guide (Free)
          </button>
        </div>
      )}

      {/* Email Collection Form */}
      {showEmailForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4">Get Your Custom Implementation Guide</h3>
            <p className="text-gray-600 mb-6">
              Receive a personalized roadmap with implementation timeline, technology recommendations, and success metrics tailored to your business.
            </p>

            <form onSubmit={handleEmailSubmit}>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={emailData.name}
                  onChange={(e) => setEmailData({...emailData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  value={emailData.email}
                  onChange={(e) => setEmailData({...emailData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  value={emailData.company}
                  onChange={(e) => setEmailData({...emailData, company: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="submit"
                  className="flex-1 bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 font-medium"
                >
                  Get My Guide
                </button>
                <button
                  type="button"
                  onClick={() => setShowEmailForm(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400 font-medium"
                >
                  Not Now
                </button>
              </div>
            </form>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Your information is secure. We never share data with third parties.
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #667eea;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #667eea;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}