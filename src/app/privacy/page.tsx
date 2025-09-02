import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Wordhog logo and navigation (Privacy highlighted) */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                Wordhog
              </Link>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link href="/analyze" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Upload
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                About
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                FAQ
              </Link>
              <Link href="/privacy" className="text-blue-600 font-semibold px-3 py-2 text-sm font-medium">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Terms
              </Link>
            </nav>

            {/* Theme Toggle */}
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use Wordhog.
          </p>
        </div>

        {/* Last Updated */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
          <p className="text-blue-800 text-center">
            <strong>Last Updated:</strong> December 2024
          </p>
        </div>

        {/* Privacy Policy Sections */}
        <div className="space-y-12">
          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Transcript Data</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Meeting transcripts you upload for analysis</li>
                <li>Analysis results and generated insights</li>
                <li>Temporary processing data (automatically deleted after 10 minutes)</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-4">Usage Information</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>How you interact with our service</li>
                <li>Features you use and analysis preferences</li>
                <li>Technical information about your device and browser</li>
              </ul>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li><strong>Provide Services:</strong> Process your transcripts and generate communication insights</li>
                <li><strong>Improve Our Service:</strong> Analyze usage patterns to enhance functionality</li>
                <li><strong>Technical Support:</strong> Troubleshoot issues and provide customer assistance</li>
                <li><strong>Security:</strong> Protect against fraud, abuse, and security threats</li>
                <li><strong>Legal Compliance:</strong> Meet legal obligations and enforce our terms</li>
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Encryption</h3>
                  <p className="text-gray-700">All data is encrypted in transit and at rest using industry-standard protocols.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Access Control</h3>
                  <p className="text-gray-700">Strict access controls ensure only authorized personnel can access your data.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Automatic Deletion</h3>
                  <p className="text-gray-700">Transcripts are automatically deleted after 10 minutes unless manually removed sooner.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Regular Audits</h3>
                  <p className="text-gray-700">We conduct regular security audits and penetration testing.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Retention</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Transcripts</h3>
                    <p className="text-gray-700">Automatically deleted after 10 minutes of processing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Analysis Results</h3>
                    <p className="text-gray-700">Stored temporarily for your session, deleted when you close the browser</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Usage Analytics</h3>
                    <p className="text-gray-700">Aggregated data retained for service improvement (no personal information)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="font-semibold text-gray-800 mb-2">Access</h3>
                  <p className="text-gray-700 text-sm">Request information about what data we have about you</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="font-semibold text-gray-800 mb-2">Deletion</h3>
                  <p className="text-gray-700 text-sm">Request deletion of your personal information</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="font-semibold text-gray-800 mb-2">Correction</h3>
                  <p className="text-gray-700 text-sm">Request correction of inaccurate information</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="font-semibold text-gray-800 mb-2">Portability</h3>
                  <p className="text-gray-700 text-sm">Request a copy of your data in a portable format</p>
                </div>
              </div>
            </div>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Services</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                We use trusted third-party services to help operate our platform:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Cloud Infrastructure:</strong> Secure cloud hosting for data processing</li>
                <li><strong>Analytics:</strong> Anonymous usage statistics to improve our service</li>
                <li><strong>Security:</strong> Threat detection and security monitoring</li>
              </ul>
              <p className="text-gray-700 mt-4">
                All third-party services are bound by strict data protection agreements and never have access to your transcript content.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-blue-800 text-center mb-4">
                If you have questions about this privacy policy or how we handle your data, please contact us:
              </p>
              <div className="text-center space-y-2">
                <p className="text-blue-800">
                  <strong>Email:</strong> privacy@wordhog.com
                </p>
                <p className="text-blue-800">
                  <strong>Response Time:</strong> Within 48 hours
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer with navigation and copyright */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo and Copyright */}
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-xl font-bold text-blue-600">
                Wordhog
              </Link>
              <span className="text-gray-500">|</span>
              <span className="text-gray-500 text-sm">© 2024 Wordhog. All rights reserved.</span>
            </div>
            
            {/* Footer Navigation */}
            <nav className="flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-gray-900 text-sm">Home</Link>
              <Link href="/analyze" className="text-gray-700 hover:text-gray-900 text-sm">Upload</Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 text-sm">About</Link>
              <Link href="/faq" className="text-gray-700 hover:text-gray-900 text-sm">FAQ</Link>
              <Link href="/privacy" className="text-blue-600 font-semibold text-sm">Privacy</Link>
              <Link href="/terms" className="text-gray-700 hover:text-gray-900 text-sm">Terms</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
