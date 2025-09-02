'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'

export default function AnalyzePage() {
  const [file, setFile] = useState<File | null>(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0]
      if (droppedFile.type === 'text/plain' || droppedFile.name.endsWith('.txt')) {
        setFile(droppedFile)
      } else {
        alert('Please upload a .txt file only.')
      }
    }
  }

  const handleBrowseClick = () => {
    fileInputRef.current?.click()
  }

  const handleAnalyze = () => {
    if (!file) return
    
    // Here you would typically send the file to your API
    console.log('Analyzing file:', file.name)
    alert('Analysis started! This would connect to your backend API.')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Wordhog
              </h1>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Home</a>
              <a href="/analyze" className="text-blue-600 font-medium px-3 py-2 text-sm border-b-2 border-blue-600">Upload</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">FAQ</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Privacy</a>
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
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Upload Transcript</h1>
          <p className="text-lg text-gray-600">
            Upload your meeting transcript file to get started with AI-powered analysis.
          </p>
        </div>

        {/* File Upload Card */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center justify-center">
              <svg className="w-6 h-6 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Select Your Transcript File
            </h2>
            <p className="text-gray-600 text-center">
              Drag and drop a .txt file or click to browse your files.
            </p>
          </div>

          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            accept=".txt"
            onChange={handleFileChange}
            className="hidden"
          />

          {/* Drag and Drop Area */}
          <div
            className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
              isDragOver 
                ? 'border-blue-500 bg-blue-50' 
                : file 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-gray-300 bg-gray-50'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            
            {file ? (
              <div>
                <p className="text-lg font-medium text-gray-800 mb-2">
                  File Selected: {file.name}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Size: {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setFile(null)}
                  className="text-red-600 border-red-600 hover:bg-red-50"
                >
                  Remove File
                </Button>
              </div>
            ) : (
              <div>
                <p className="text-lg font-medium text-gray-800 mb-2">
                  Drop your transcript file here
                </p>
                <p className="text-gray-600 mb-4">or</p>
                <Button onClick={handleBrowseClick} variant="outline">
                  Browse Files
                </Button>
              </div>
            )}
          </div>

          {/* File Requirements */}
          <div className="mt-6 flex items-start space-x-2 text-sm text-gray-600">
            <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-medium">File Requirements:</p>
              <p>Only .txt files are accepted. Maximum file size is 10MB. Files are automatically deleted after 10 minutes unless manually deleted.</p>
            </div>
          </div>
        </div>

        {/* Analyze Button */}
        <div className="text-center">
          <Button
            onClick={handleAnalyze}
            disabled={!file}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Analyze Transcript
          </Button>
          
          <p className="text-sm text-gray-500 mt-4">
            Your uploaded files are processed securely and deleted automatically after analysis.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Wordhog
              </h3>
            </div>

            {/* Navigation */}
            <nav className="flex space-x-6 mb-4 md:mb-0">
              <a href="/" className="text-gray-700 hover:text-gray-900 text-sm">Home</a>
              <a href="/analyze" className="text-gray-700 hover:text-gray-900 text-sm">Upload</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">About</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">FAQ</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">Privacy</a>
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
