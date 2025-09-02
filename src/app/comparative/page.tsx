'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ComparisonData {
  engagementComparison: Array<{ name: string; value: number }>
  durationComparison: Array<{ name: string; value: number }>
  insights: string[]
}

export default function ComparativeAnalyticsPage() {
  const [selectedAnalyses, setSelectedAnalyses] = useState<string[]>([])
  const [comparisonData, setComparisonData] = useState<ComparisonData | null>(null)
  const [loading, setLoading] = useState(false)

  // Mock data
  const availableAnalyses = [
    {
      id: '1',
      fileName: 'Team Meeting - Q1 Review.txt',
      uploadedAt: '2024-01-15',
      duration: 45,
      status: 'completed',
      engagementScore: 85
    },
    {
      id: '2',
      fileName: 'Client Presentation - Product Demo.txt',
      uploadedAt: '2024-01-14',
      duration: 32,
      status: 'completed',
      engagementScore: 92
    },
    {
      id: '3',
      fileName: 'Interview - Senior Developer.txt',
      uploadedAt: '2024-01-13',
      duration: 58,
      status: 'completed',
      engagementScore: 78
    }
  ]

  const handleAnalysisToggle = (analysisId: string) => {
    setSelectedAnalyses(prev => 
      prev.includes(analysisId)
        ? prev.filter(id => id !== analysisId)
        : [...prev, analysisId]
    )
  }

  const handleCompare = async () => {
    if (selectedAnalyses.length < 2) {
      alert('Please select at least 2 analyses to compare')
      return
    }

    setLoading(true)
    
    // Simulate comparison processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Mock comparison data
    setComparisonData({
      engagementComparison: [
        { name: 'Analysis 1', value: 85 },
        { name: 'Analysis 2', value: 72 },
        { name: 'Analysis 3', value: 91 }
      ],
      durationComparison: [
        { name: 'Analysis 1', value: 45 },
        { name: 'Analysis 2', value: 32 },
        { name: 'Analysis 3', value: 58 }
      ],
      insights: [
        'Analysis 3 shows the highest engagement score, suggesting better interaction patterns',
        'Analysis 2 has the most balanced speaker participation',
        'Analysis 1 demonstrates consistent engagement throughout the session'
      ]
    })
    
    setLoading(false)
  }

  const clearComparison = () => {
    setSelectedAnalyses([])
    setComparisonData(null)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Comparative Analytics</h1>
          <p className="text-lg text-gray-600">Compare multiple transcript analyses to identify patterns and insights</p>
        </div>

        {/* Analysis Selection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Select Analyses to Compare</CardTitle>
            <CardDescription>
              Choose 2 or more completed analyses to compare their metrics and insights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {availableAnalyses.map((analysis) => (
                <div
                  key={analysis.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${
                    selectedAnalyses.includes(analysis.id)
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleAnalysisToggle(analysis.id)}
                >
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={selectedAnalyses.includes(analysis.id)}
                      onChange={() => handleAnalysisToggle(analysis.id)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900 truncate">
                        {analysis.fileName}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {new Date(analysis.uploadedAt).toLocaleDateString()} • {analysis.duration} min
                      </p>
                      <div className="flex items-center mt-2">
                        <span className="text-xs font-medium text-green-600">
                          {analysis.engagementScore}% engagement
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                onClick={handleCompare}
                disabled={selectedAnalyses.length < 2 || loading}
                className="flex-1 md:flex-none"
              >
                {loading ? 'Comparing...' : `Compare ${selectedAnalyses.length} Analyses`}
              </Button>
              
              {selectedAnalyses.length > 0 && (
                <Button variant="outline" onClick={clearComparison}>
                  Clear Selection
                </Button>
              )}
            </div>

            {selectedAnalyses.length > 0 && (
              <p className="text-sm text-gray-600 mt-3">
                Selected {selectedAnalyses.length} analysis{selectedAnalyses.length !== 1 ? 'es' : ''}
              </p>
            )}
          </CardContent>
        </Card>

        {/* Comparison Results */}
        {comparisonData && (
          <div className="space-y-8">
            {/* Engagement Comparison */}
            <Card>
              <CardHeader>
                <CardTitle>Engagement Score Comparison</CardTitle>
                <CardDescription>Compare engagement levels across selected analyses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {comparisonData.engagementComparison.map((item, index: number) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-24 text-sm font-medium">{item.name}</div>
                      <div className="flex-1">
                        <div className="bg-gray-200 rounded-full h-4">
                          <div
                            className="bg-blue-500 h-4 rounded-full transition-all duration-500"
                            style={{ width: `${item.value}%` }}
                          />
                        </div>
                      </div>
                      <div className="w-16 text-right text-sm font-medium">{item.value}%</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Insights */}
            <Card>
              <CardHeader>
                <CardTitle>Key Insights</CardTitle>
                <CardDescription>AI-generated insights from the comparison</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {comparisonData.insights.map((insight: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700">{insight}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Export Comparison */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Export Comparison Report
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Download a comprehensive comparison report in your preferred format
                  </p>
                  <div className="flex justify-center space-x-3">
                    <Button variant="outline">Export as PDF</Button>
                    <Button variant="outline">Export as CSV</Button>
                    <Button variant="outline">Share Report</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Empty State */}
        {!comparisonData && selectedAnalyses.length === 0 && (
          <Card>
            <CardContent className="pt-12 pb-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-400 text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Start Comparing Analyses
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Select two or more completed analyses above to begin comparing their metrics, 
                engagement patterns, and insights.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
