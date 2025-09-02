'use client'

import { useState } from 'react'
import Link from 'next/link'

interface FAQItem {
  id: string
  question: string
  answer: string
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>(['file-formats'])

  const faqItems: FAQItem[] = [
    {
      id: 'file-formats',
      question: 'What file formats do you support?',
      answer: 'Currently, Wordhog supports .txt (text) files only. We\'re working on adding support for other formats like .docx and .pdf in the future. Make sure your transcript is in plain text format for the best results.'
    },
    {
      id: 'accuracy',
      question: 'How accurate is the analysis?',
      answer: 'Our AI-powered analysis is highly accurate for identifying speech patterns, filler words, and interruptions. The accuracy depends on the quality and formatting of your transcript. Well-formatted transcripts with clear speaker labels provide the most accurate results.'
    },
    {
      id: 'security',
      question: 'Is my data secure and private?',
      answer: 'Absolutely. We take your privacy seriously. All uploaded files are processed securely and automatically deleted after 10 minutes unless you manually delete them sooner. We don\'t store your transcript content or share it with any third parties.'
    },
    {
      id: 'analysis-time',
      question: 'How long does analysis take?',
      answer: 'Analysis is typically completed within seconds of uploading your file. For larger transcripts (over 1MB), it may take up to a minute. You\'ll see real-time progress updates during processing.'
    },
    {
      id: 'metrics',
      question: 'What metrics do you analyze?',
      answer: 'Wordhog analyzes various communication metrics including: talk time percentage per speaker, interruption frequency, filler word usage (um, uh, like, etc.), long pauses (over 5 seconds), and overall engagement scores.'
    },
    {
      id: 'multiple-meetings',
      question: 'Can I analyze multiple meetings?',
      answer: 'Yes! You can upload and analyze as many meeting transcripts as you need. Each analysis is independent, and you can compare results across different meetings to track improvement over time.'
    },
    {
      id: 'languages',
      question: 'Do you support different languages?',
      answer: 'Currently, Wordhog is optimized for English-language transcripts. We\'re working on adding support for other languages including Spanish, French, and German in future updates.'
    },
    {
      id: 'file-size',
      question: 'What\'s the maximum file size supported?',
      answer: 'The current maximum file size is 10MB per upload. This typically supports transcripts from meetings up to 3-4 hours long. If you have a larger file, consider splitting it into smaller sections.'
    },
    {
      id: 'export',
      question: 'Can I export the analysis results?',
      answer: 'While we don\'t currently offer direct export functionality, you can take screenshots of the charts and metrics. We\'re planning to add PDF export and data download features in upcoming releases.'
    },
    {
      id: 'formatting',
      question: 'How do I format my transcript for best results?',
      answer: 'For optimal analysis, format your transcript with clear speaker labels (e.g., \'Speaker 1:\', \'John:\', or \'Sarah Chen:\') followed by their speech. Include timestamps if available. Avoid excessive formatting or special characters.'
    },
    {
      id: 'cost',
      question: 'Is there a cost to use Wordhog?',
      answer: 'Wordhog is currently free to use while we\'re in beta. We may introduce premium features in the future, but the core analysis functionality will remain free for all users.'
    },
    {
      id: 'help',
      question: 'Can I get help with interpreting the results?',
      answer: 'Each analysis includes helpful tooltips and descriptions. The metrics are designed to be self-explanatory, but if you need additional guidance, check our about page for more context on communication best practices.'
    }
  ]

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-purple-600">Wordhog</Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Home</Link>
              <Link href="/analyze" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Upload</Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">About</Link>
              <Link href="/faq" className="text-blue-600 font-medium px-3 py-2 text-sm border-b-2 border-blue-600">FAQ</Link>
                             <Link href="/privacy" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Privacy</Link>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Terms</a>
            </nav>

            {/* Theme Toggle */}
            <div className="flex items-center">
              <button className="p-2 text-gray-700 hover:text-gray-900">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about Wordhog and meeting transcript analysis.
          </p>
        </div>

        {/* Quick Navigation Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Quick Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Getting Started</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• <button onClick={() => toggleItem('file-formats')} className="hover:text-blue-600">File formats</button></li>
                <li>• <button onClick={() => toggleItem('formatting')} className="hover:text-blue-600">Upload process</button></li>
                <li>• <button onClick={() => toggleItem('analysis-time')} className="hover:text-blue-600">Analysis time</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Features</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• <button onClick={() => toggleItem('metrics')} className="hover:text-blue-600">Metrics analyzed</button></li>
                <li>• <button onClick={() => toggleItem('accuracy')} className="hover:text-blue-600">Accuracy</button></li>
                <li>• <button onClick={() => toggleItem('multiple-meetings')} className="hover:text-blue-600">Multiple meetings</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Privacy & Security</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• <button onClick={() => toggleItem('security')} className="hover:text-blue-600">Data security</button></li>
                <li>• <button onClick={() => toggleItem('file-size')} className="hover:text-blue-600">File deletion</button></li>
                <li>• <button onClick={() => toggleItem('cost')} className="hover:text-blue-600">Privacy policy</button></li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md border border-gray-200">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openItems.includes(item.id) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openItems.includes(item.id) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions Section */}
        <div className="text-center mt-16 p-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-4">
            Can&apos;t find what you&apos;re looking for? Check our{' '}
            <Link href="/about" className="text-blue-600 hover:text-blue-700 underline">
              about page
            </Link>{' '}
            for more information about Wordhog and our mission.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-xl font-bold text-purple-600">Wordhog</Link>
            </div>

            {/* Navigation */}
            <nav className="flex space-x-6 mb-4 md:mb-0">
              <Link href="/" className="text-gray-700 hover:text-gray-900 text-sm">Home</Link>
              <Link href="/analyze" className="text-gray-700 hover:text-gray-900 text-sm">Upload</Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 text-sm">About</Link>
              <Link href="/faq" className="text-gray-700 hover:text-gray-900 text-sm">FAQ</Link>
                             <Link href="/privacy" className="text-gray-700 hover:text-gray-900 text-sm">Privacy</Link>
              <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">Terms</a>
            </nav>

            {/* Copyright */}
            <div className="text-gray-600 text-sm">
              © 2025 Wordhog. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
