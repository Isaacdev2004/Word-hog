'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function HelpPage() {
  const faqData = [
    {
      question: 'How do I upload my first transcript?',
      answer: 'To upload your first transcript, go to the Analyze page and drag and drop your transcript file (TXT, DOC, or PDF) into the upload area. You can also click to browse and select a file from your computer.'
    },
    {
      question: 'What file formats are supported?',
      answer: 'We currently support TXT, DOC, DOCX, and PDF files. For best results, we recommend using plain text files as they process faster and more accurately.'
    },
    {
      question: 'How long does analysis take?',
      answer: 'Analysis time depends on the length of your transcript. Short transcripts (under 10 minutes) typically process in 1-2 minutes, while longer ones may take 5-10 minutes.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Help & Support</h1>
          <p className="text-lg text-gray-600">Find answers to common questions and learn how to use Wordhog effectively</p>
        </div>

        {/* FAQ Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Common questions and their answers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {faqData.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Support */}
        <Card>
          <CardHeader>
            <CardTitle>Still Need Help?</CardTitle>
            <CardDescription>
              Can&apos;t find what you&apos;re looking for? Our support team is here to help
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 text-xl">📧</span>
                </div>
                <h3 className="text-sm font-medium text-gray-900">Email Support</h3>
                <p className="text-sm text-gray-500 mt-1">support@wordhog.com</p>
                <p className="text-xs text-gray-400 mt-1">Response within 24 hours</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 text-xl">💬</span>
                </div>
                <h3 className="text-sm font-medium text-gray-900">Live Chat</h3>
                <p className="text-sm text-gray-500 mt-1">Available 9 AM - 6 PM EST</p>
                <Button variant="outline" size="sm" className="mt-2">Start Chat</Button>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 text-xl">📚</span>
                </div>
                <h3 className="text-sm font-medium text-gray-900">Documentation</h3>
                <p className="text-sm text-gray-500 mt-1">Comprehensive guides</p>
                <Button variant="outline" size="sm" className="mt-2">Browse Docs</Button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button size="lg">Contact Support Team</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
