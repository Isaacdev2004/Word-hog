import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-blue-600">Wordhog</Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Home</Link>
              <Link href="/analyze" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Upload</Link>
                             <Link href="/about" className="text-blue-600 font-medium px-3 py-2 text-sm border-b-2 border-blue-600">About</Link>
               <Link href="/faq" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">FAQ</Link>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">About Wordhog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wordhog transforms meeting transcripts into actionable communication insights, helping teams understand their dynamics and improve collaboration through data-driven analysis.
          </p>
        </div>

        {/* Our Mission Section */}
        <section className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe that effective communication is the foundation of successful teams. By analyzing meeting patterns, identifying communication gaps, and providing actionable insights, Wordhog empowers teams to have more balanced, productive, and inclusive discussions.
            </p>
          </div>
        </section>

        {/* Why Choose Wordhog Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Wordhog?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">AI-Powered Analysis</h3>
              <p className="text-gray-600">
                Advanced algorithms analyze speech patterns, interruptions, and communication dynamics to provide actionable insights.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Instant Results</h3>
              <p className="text-gray-600">
                Get comprehensive meeting analysis in seconds, not hours. Upload your transcript and see results immediately.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Privacy First</h3>
              <p className="text-gray-600">
                Your data is processed securely and automatically deleted. We prioritize your privacy and confidentiality.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Actionable Insights</h3>
              <p className="text-gray-600">
                Understand speaking patterns, identify communication gaps, and improve team collaboration with data-driven insights.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Team Dynamics</h3>
              <p className="text-gray-600">
                Analyze how team members interact, who dominates conversations, and how to create more balanced discussions.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Visual Analytics</h3>
              <p className="text-gray-600">
                Beautiful charts and graphs make it easy to understand complex communication patterns at a glance.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Upload Transcript</h3>
              <p className="text-gray-600">
                Simply upload your meeting transcript file (.txt format)
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">AI Analysis</h3>
              <p className="text-gray-600">
                Our AI analyzes speech patterns, interruptions, and filler words
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Get Insights</h3>
              <p className="text-gray-600">
                Receive detailed reports with actionable communication insights
              </p>
            </div>
          </div>
        </section>

        {/* Perfect For Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Perfect For</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Team Leaders</h3>
              <p className="text-gray-600">
                Understand team dynamics and ensure everyone has a voice in meetings.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">HR Professionals</h3>
              <p className="text-gray-600">
                Analyze communication patterns to improve team collaboration.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Consultants</h3>
              <p className="text-gray-600">
                Provide data-driven insights to help clients improve their meetings.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Researchers</h3>
              <p className="text-gray-600">
                Study communication patterns and meeting effectiveness.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-xl font-bold text-blue-600">Wordhog</Link>
            </div>

            {/* Navigation */}
            <nav className="flex space-x-6 mb-4 md:mb-0">
              <Link href="/" className="text-gray-700 hover:text-gray-900 text-sm">Home</Link>
              <Link href="/analyze" className="text-gray-700 hover:text-gray-900 text-sm">Upload</Link>
                             <Link href="/about" className="text-gray-700 hover:text-gray-900 text-sm">About</Link>
               <Link href="/faq" className="text-gray-700 hover:text-gray-900 text-sm">FAQ</Link>
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
