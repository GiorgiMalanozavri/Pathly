export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-blue-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
        
        <div className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              Pathly uses cookies for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              <li><strong>Functional Cookies:</strong> Enable enhanced functionality and personalization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Strictly Necessary Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  These cookies are essential for the website to function and cannot be switched off. They are usually set in response to actions made by you, such as setting your privacy preferences or filling in forms.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are most popular and see how visitors move around the site.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Functionality Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the service and refine marketing efforts. These third-party cookies are subject to the respective privacy policies of these third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Managing Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit www.allaboutcookies.org.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements. We will notify you of any material changes by posting the new Cookie Policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about our use of cookies, please contact us at privacy@pathly.com
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
