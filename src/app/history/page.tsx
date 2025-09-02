'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function HistoryPage() {
  const [selectedAnalyses, setSelectedAnalyses] = useState<string[]>([])

  // Mock data
  const analyses = [
    {
      id: '1',
      fileName: 'Team Meeting - Q1 Review.txt',
      uploadedAt: '2024-01-15',
      duration: 45,
      speakers: 6,
      status: 'completed',
      engagementScore: 85,
      tags: ['meeting', 'quarterly', 'team']
    },
    {
      id: '2',
      fileName: 'Client Presentation - Product Demo.txt',
      uploadedAt: '2024-01-14',
      duration: 32,
      speakers: 3,
      status: 'completed',
      engagementScore: 92,
      tags: ['presentation', 'client', 'demo']
    },
    {
      id: '3',
      fileName: 'Interview - Senior Developer.txt',
      uploadedAt: '2024-01-13',
      duration: 58,
      speakers: 2,
      status: 'completed',
      engagementScore: 78,
      tags: ['interview', 'hiring', 'technical']
    }
  ]

  const handleSelectAll = () => {
    if (selectedAnalyses.length === analyses.length) {
      setSelectedAnalyses([])
    } else {
      setSelectedAnalyses(analyses.map(a => a.id))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Analysis History</h1>
          <p className="text-lg text-gray-600">View and manage your transcript analyses</p>
        </div>

        {/* Analyses List */}
        <div className="space-y-4">
          {analyses.map((analysis) => (
            <Card key={analysis.id}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={selectedAnalyses.includes(analysis.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedAnalyses(prev => [...prev, analysis.id])
                        } else {
                          setSelectedAnalyses(prev => prev.filter(id => id !== analysis.id))
                        }
                      }}
                      className="rounded border-gray-300"
                    />
                    <div>
                      <h3 className="font-semibold">{analysis.fileName}</h3>
                      <p className="text-sm text-gray-500">
                        {new Date(analysis.uploadedAt).toLocaleDateString()} • {analysis.duration} min • {analysis.speakers} speakers
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {analysis.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                      {analysis.status}
                    </span>
                    <span className="text-sm font-medium">
                      {analysis.engagementScore}% engagement
                    </span>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Select All */}
        <div className="mt-6 flex items-center space-x-4">
          <Button variant="outline" onClick={handleSelectAll}>
            {selectedAnalyses.length === analyses.length ? 'Deselect All' : 'Select All'}
          </Button>
          <span className="text-sm text-gray-600">
            {analyses.length} total analyses
          </span>
        </div>
      </div>
    </div>
  )
}
