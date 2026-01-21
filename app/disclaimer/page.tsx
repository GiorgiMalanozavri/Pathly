export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-blue-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Disclaimer</h1>
        
        <div className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">General Information</h2>
            <p className="text-gray-700 leading-relaxed">
              The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, Pathly excludes all representations, warranties, obligations, and liabilities arising out of or in connection with this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Not Legal Advice</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="text-gray-800 font-semibold mb-2">⚠️ Important Notice</p>
              <p className="text-gray-700 leading-relaxed">
                The information provided by Pathly, including AI-generated responses about visas, CPT, OPT, and work authorization, is for general informational purposes only and does not constitute legal advice. Pathly is not a law firm and does not provide legal services.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              You should always consult with a qualified immigration attorney or your Designated School Official (DSO) for advice regarding your specific visa situation. Laws and regulations change frequently, and the information provided may not reflect the most current legal developments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Career and Resume Advice</h2>
            <p className="text-gray-700 leading-relaxed">
              While Pathly provides AI-powered resume analysis and career guidance, we cannot guarantee specific outcomes. Resume improvements, skill gap analysis, and company recommendations are suggestions based on general best practices and should be used as guidance only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">No Guarantees</h2>
            <p className="text-gray-700 leading-relaxed">
              Pathly does not guarantee:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>That you will receive internship offers</li>
              <li>That companies will sponsor your visa</li>
              <li>The accuracy of company visa-friendliness scores</li>
              <li>That your resume will pass ATS systems</li>
              <li>Specific career outcomes or results</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites. Pathly is not responsible for the content, privacy policies, or practices of any third-party websites. You access third-party websites at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              To the maximum extent permitted by law, Pathly shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Accuracy of Information</h2>
            <p className="text-gray-700 leading-relaxed">
              While we strive to provide accurate and up-to-date information, Pathly makes no representations or warranties about the accuracy, completeness, or suitability of the information provided. Information may contain technical inaccuracies or typographical errors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this disclaimer, please contact us at support@pathly.com
            </p>
          </section>

          <div className="pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
