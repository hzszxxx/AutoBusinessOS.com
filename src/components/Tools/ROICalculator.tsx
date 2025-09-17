'use client'

import { useState } from 'react'

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

    // 计算年度节省成本
    const laborSavings = (empCost * procTime * expectedEfficiency / 100) * 12
    const errorCostReduction = (revenue * errRate / 100 * 0.15) * 12
    const annualSavings = laborSavings + errorCostReduction

    // 实施成本估算
    const implementationCost = Math.max(revenue * 0.03, 30000) // 最少3万，或营收的3%

    // ROI计算
    const roi = ((annualSavings - implementationCost) / implementationCost) * 100
    const paybackPeriod = implementationCost / (annualSavings / 12)

    // 5年总价值
    const fiveYearValue = annualSavings * 5 - implementationCost

    // 月度生产力提升
    const monthlyProductivity = (empCost * procTime * expectedEfficiency / 100)

    // 错误减少价值
    const errorReduction = revenue * errRate / 100 * 0.85 // 假设减少85%错误

    setResults({
      annualSavings: Math.round(annualSavings),
      roi: Math.round(roi),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      fiveYearValue: Math.round(fiveYearValue),
      monthlyProductivity: Math.round(monthlyProductivity),
      errorReduction: Math.round(errorReduction)
    })

    // 记录计算事件
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'roi_calculation', {
        event_category: 'tools',
        event_label: 'roi_calculator_use',
        value: Math.round(annualSavings)
      })
    }
  }

  const handleGetDetailedReport = () => {
    setShowEmailForm(true)

    // 记录转化事件
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'lead_generation', {
        event_category: 'conversion',
        event_label: 'detailed_report_request'
      })
    }
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // 这里可以集成邮件服务API
    console.log('发送详细报告到:', emailData)

    // 记录转化完成事件
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'conversion', {
        event_category: 'lead',
        event_label: 'email_captured',
        value: results?.annualSavings
      })
    }

    alert('感谢您的信息！详细ROI分析报告将在5分钟内发送到您的邮箱。')
    setShowEmailForm(false)
  }

  const validateInputs = () => {
    return inputs.currentRevenue && inputs.employeeCost && inputs.processTime && inputs.errorRate
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          自动化ROI计算器
        </h2>
        <p className="text-xl text-gray-600">
          3分钟计算自动化为您企业带来的投资回报
        </p>
      </div>

      {/* 输入表单 */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            年营收（万元）*
          </label>
          <input
            type="number"
            value={inputs.currentRevenue}
            onChange={(e) => handleInputChange('currentRevenue', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="例如：1000"
            required
          />
          <p className="text-xs text-gray-500 mt-1">公司年度总营业收入</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            人力成本（万元/年）*
          </label>
          <input
            type="number"
            value={inputs.employeeCost}
            onChange={(e) => handleInputChange('employeeCost', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="例如：100"
            required
          />
          <p className="text-xs text-gray-500 mt-1">涉及流程的员工年度薪酬总成本</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            人工处理时间占比（%）*
          </label>
          <input
            type="number"
            value={inputs.processTime}
            onChange={(e) => handleInputChange('processTime', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="例如：60"
            min="1"
            max="100"
            required
          />
          <p className="text-xs text-gray-500 mt-1">可自动化的工作时间占比</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            人为错误率（%）*
          </label>
          <input
            type="number"
            value={inputs.errorRate}
            onChange={(e) => handleInputChange('errorRate', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="例如：5"
            min="0"
            max="50"
            required
          />
          <p className="text-xs text-gray-500 mt-1">当前人工操作的错误频率</p>
        </div>
      </div>

      {/* 效率提升滑块 */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          预期效率提升：{inputs.expectedEfficiency}%
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
            <span>保守(30%)</span>
            <span>适中(60%)</span>
            <span>激进(95%)</span>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          基于行业平均水平，大多数企业可实现60-80%的效率提升
        </p>
      </div>

      {/* 计算按钮 */}
      <button
        onClick={calculateROI}
        disabled={!validateInputs()}
        className={`w-full py-4 px-6 rounded-lg text-lg font-semibold transition-colors ${
          validateInputs()
            ? 'bg-primary-600 hover:bg-primary-700 text-white'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        {validateInputs() ? '计算ROI' : '请填写所有必填项'}
      </button>

      {/* 结果展示 */}
      {results && (
        <div className="mt-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            🎉 您的自动化投资回报分析
          </h3>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {results.annualSavings.toLocaleString()}万元
              </div>
              <div className="text-sm text-gray-600">年度节省成本</div>
              <div className="text-xs text-gray-500 mt-1">
                = 人力节省 + 错误减少
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {results.roi > 0 ? '+' : ''}{results.roi}%
              </div>
              <div className="text-sm text-gray-600">投资回报率</div>
              <div className="text-xs text-gray-500 mt-1">
                {results.roi > 200 ? '🚀 优秀' : results.roi > 100 ? '✅ 良好' : results.roi > 50 ? '⚠️ 一般' : '❌ 需优化'}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {results.paybackPeriod < 12 ? `${results.paybackPeriod}个月` : `${Math.round(results.paybackPeriod/12*10)/10}年`}
              </div>
              <div className="text-sm text-gray-600">投资回收期</div>
              <div className="text-xs text-gray-500 mt-1">
                {results.paybackPeriod < 6 ? '⚡ 超快' : results.paybackPeriod < 12 ? '🚀 很快' : '⏳ 合理'}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-lg font-bold text-purple-600 mb-1">
                {results.fiveYearValue.toLocaleString()}万元
              </div>
              <div className="text-sm text-gray-600">5年累计价值</div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-lg font-bold text-orange-600 mb-1">
                {results.monthlyProductivity.toLocaleString()}万元/月
              </div>
              <div className="text-sm text-gray-600">月度生产力提升</div>
            </div>
          </div>

          {/* 详细分析 */}
          <div className="bg-white rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">💡 投资建议</h4>
            <div className="space-y-2 text-sm">
              {results.roi > 200 && (
                <p className="text-green-700">
                  ✅ <strong>强烈推荐</strong>：ROI超过200%，自动化投资价值极高
                </p>
              )}
              {results.roi > 100 && results.roi <= 200 && (
                <p className="text-blue-700">
                  ✅ <strong>推荐投资</strong>：ROI超过100%，投资回报良好
                </p>
              )}
              {results.roi > 50 && results.roi <= 100 && (
                <p className="text-yellow-700">
                  ⚠️ <strong>谨慎考虑</strong>：ROI适中，建议优化实施方案
                </p>
              )}
              {results.roi <= 50 && (
                <p className="text-red-700">
                  ❌ <strong>需要优化</strong>：当前ROI较低，建议重新评估需求
                </p>
              )}
              <p className="text-gray-600">
                💰 预计年度节省：<strong>{results.annualSavings.toLocaleString()}万元</strong>
              </p>
              <p className="text-gray-600">
                📈 5年累计收益：<strong>{results.fiveYearValue.toLocaleString()}万元</strong>
              </p>
            </div>
          </div>

          <button
            onClick={handleGetDetailedReport}
            className="w-full bg-accent-500 hover:bg-accent-600 text-white py-4 px-6 rounded-lg text-lg font-semibold transition-colors"
          >
            📊 获取详细ROI分析报告（免费）
          </button>
        </div>
      )}

      {/* 邮箱收集表单 */}
      {showEmailForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4">获取详细ROI分析报告</h3>
            <p className="text-gray-600 mb-6">
              我们将为您生成包含实施建议、工具推荐、风险评估的完整分析报告
            </p>

            <form onSubmit={handleEmailSubmit}>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="您的姓名 *"
                  value={emailData.name}
                  onChange={(e) => setEmailData({...emailData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  required
                />
                <input
                  type="email"
                  placeholder="邮箱地址 *"
                  value={emailData.email}
                  onChange={(e) => setEmailData({...emailData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  required
                />
                <input
                  type="text"
                  placeholder="公司名称"
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
                  立即获取报告
                </button>
                <button
                  type="button"
                  onClick={() => setShowEmailForm(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400 font-medium"
                >
                  稍后再说
                </button>
              </div>
            </form>

            <p className="text-xs text-gray-500 mt-4 text-center">
              我们重视您的隐私，不会向第三方分享您的信息
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