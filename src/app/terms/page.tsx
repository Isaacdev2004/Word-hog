import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Wordhog logo and navigation (Terms highlighted) */}
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
              <Link href="/privacy" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Privacy
              </Link>
              <Link href="/terms" className="text-blue-600 font-semibold px-3 py-2 text-sm font-medium">
                Terms
              </Link>
            </nav>

            {/* Theme Toggle */}
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Please read these terms carefully before using Wordhog&apos;s meeting analysis service.
          </p>
          <p className="text-lg text-gray-500 mt-4">
            Last updated: January 2025
          </p>
        </div>

        {/* Key Summary Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200">
            <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Fair Use</h3>
            <p className="text-sm text-gray-600">Service provided as-is for legitimate analysis purposes</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200">
            <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">No Warranty</h3>
            <p className="text-sm text-gray-600">Results provided for informational purposes only</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200">
            <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">User Responsibility</h3>
            <p className="text-sm text-gray-600">You&apos;re responsible for the content you upload</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200">
            <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Privacy Protected</h3>
            <p className="text-sm text-gray-600">Your data remains private and secure</p>
          </div>
        </div>

        {/* Terms of Service Sections */}
        <div className="space-y-8">
          {/* Acceptance of Terms */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using Wordhog, you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          {/* Description of Service */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Description of Service</h2>
            <p className="text-gray-700 mb-4">
              Wordhog is an AI-powered meeting analysis service that provides automated insights into communication patterns 
              and meeting dynamics. Our service includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Automated analysis of speaking patterns and communication metrics</li>
              <li>Generation of visual charts and insights based on transcript content</li>
              <li>Temporary storage and processing of uploaded text files</li>
              <li>User interface for viewing and managing analysis results</li>
            </ul>
          </section>

          {/* User Responsibilities */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Content Ownership</h3>
                <p className="text-gray-700">
                  You must own or have permission to use any content you upload to our service. 
                  You retain ownership of your uploaded content.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Prohibited Content</h3>
                <p className="text-gray-700 mb-2">You agree not to upload content that:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Contains personal information of individuals without their consent</li>
                  <li>Violates any applicable laws or regulations</li>
                  <li>Contains malicious code, viruses, or harmful content</li>
                  <li>Infringes on intellectual property rights of others</li>
                  <li>Contains confidential information you&apos;re not authorized to share</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Acceptable Use</h3>
                <p className="text-gray-700">
                  The service is intended for legitimate business and analysis purposes. 
                  You agree not to reverse engineer, hack, or abuse the service.
                </p>
              </div>
            </div>
          </section>

          {/* Service Availability */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Availability</h2>
            <p className="text-gray-700 mb-4">
              While we strive to maintain high availability, we do not guarantee uninterrupted access to our service. 
              Service may be unavailable due to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Scheduled maintenance and updates</li>
              <li>Technical issues or system failures</li>
              <li>Third-party service dependencies</li>
              <li>Force majeure events beyond our control</li>
            </ul>
          </section>

          {/* Data and Privacy */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data and Privacy</h2>
            <p className="text-gray-700 mb-4">
              We take your privacy seriously. Please review our{' '}
              <Link href="/privacy" className="text-blue-600 hover:text-blue-700 underline">
                Privacy Policy
              </Link>{' '}
              for detailed information about how we handle your data. Key points include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Automatic deletion of uploaded files after 10 minutes</li>
              <li>Secure processing of your data</li>
              <li>No sharing of your content with third parties</li>
            </ul>
          </section>

          {/* Disclaimers and Limitations */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimers and Limitations</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">No Warranty</h3>
                <p className="text-gray-700">
                  The service is provided &quot;as is&quot; without warranties of any kind. 
                  We do not guarantee the accuracy or completeness of analysis results.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Limitation of Liability</h3>
                <p className="text-gray-700">
                  We shall not be liable for any indirect, incidental, special, or consequential damages 
                  arising from your use of the service.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Analysis Results</h3>
                <p className="text-gray-700">
                  Results are provided for informational purposes only and should not be used as the sole basis 
                  for important decisions. Results may vary based on transcript quality and formatting.
                </p>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              Wordhog owns all content, features, and functionality of the service, which are protected by 
              copyright, trademark, and other intellectual property laws. You retain ownership of any content 
              you upload to our service.
            </p>
          </section>

          {/* Termination */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              We may terminate or suspend your access to the service at any time, for any reason, including 
              breach of these terms. Upon termination, any uploaded content will be deleted from our systems.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these terms at any time. For material revisions, we will provide 
              at least 30 days&apos; notice. Your continued use of the service after changes constitutes 
              acceptance of the new terms.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about these terms, please visit our{' '}
              <Link href="/faq" className="text-blue-600 hover:text-blue-700 underline">FAQ page</Link>{' '}
              or{' '}
              <Link href="/about" className="text-blue-600 hover:text-blue-700 underline">about page</Link>{' '}
              for more information.
            </p>
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
              <span className="text-gray-500 text-sm">© 2025 Wordhog. All rights reserved.</span>
            </div>
            
            {/* Footer Navigation */}
            <nav className="flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-gray-900 text-sm">Home</Link>
              <Link href="/analyze" className="text-gray-700 hover:text-gray-900 text-sm">Upload</Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 text-sm">About</Link>
              <Link href="/faq" className="text-gray-700 hover:text-gray-900 text-sm">FAQ</Link>
              <Link href="/privacy" className="text-gray-700 hover:text-gray-900 text-sm">Privacy</Link>
              <Link href="/terms" className="text-blue-600 font-semibold text-sm">Terms</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
