import EmailCapture from "@/components/EmailCapture";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent to-white dark:from-gray-900 dark:to-background">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-24 sm:pb-32">
          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-2 tracking-tight">
              Snowbyrds
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span>Launching Soon</span>
            </div>
          </div>

          {/* Hero Headline */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Seasonal Rentals Made Simple
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-12">
              Built for snowbirds, by hosts.
            </p>

            {/* Main Email Capture */}
            <EmailCapture showRoleButtons={true} size="large" />
          </div>

          {/* Quick Stats or Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">30+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Night Minimum
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">0%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Hidden Fees
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Verified Homes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Why Snowbyrds?
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Snowbyrds is a midterm rental platform designed specifically for
            snowbirds looking for reliable seasonal stays, and hosts looking for
            dependable long-term guests. No more dealing with inflated fees or
            complicated booking processes—just simple, transparent rentals that
            work for everyone.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* For Guests */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                For Guests
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Find Your Winter Home
              </h3>

              <ul className="space-y-6 mb-8">
                <li className="flex gap-4">
                  <span className="text-3xl flex-shrink-0">🏡</span>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                      Verified homes for seasonal living
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Every property is vetted for quality and comfort
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-3xl flex-shrink-0">🔍</span>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                      Filters that matter
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Search by pets, washer/dryer, stay length & more
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-3xl flex-shrink-0">✅</span>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                      No inflated fees
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Say goodbye to surprise Airbnb-style charges
                    </p>
                  </div>
                </li>
              </ul>

              <EmailCapture buttonText="Join as Guest" />
            </div>

            {/* For Hosts */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                For Hosts
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Maximize Your Returns
              </h3>

              <ul className="space-y-6 mb-8">
                <li className="flex gap-4">
                  <span className="text-3xl flex-shrink-0">💵</span>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                      Flat listing fees
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Keep more of your profits with transparent pricing
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-3xl flex-shrink-0">📆</span>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                      HOA & city compliant
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      30-night minimums keep you in good standing
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-3xl flex-shrink-0">⭐</span>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                      Long-term, reliable guests
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Less turnover means less hassle and more income
                    </p>
                  </div>
                </li>
              </ul>

              <EmailCapture buttonText="Join as Host" />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="text-4xl">📈</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Already Growing
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Dozens of hosts and guests have already joined the waitlist.
            <br />
            Don't miss your early access.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-8 py-4">
              <div className="text-3xl font-bold mb-1">Coming Soon</div>
              <div className="text-sm text-blue-100">Winter 2025</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-8 py-4">
              <div className="text-3xl font-bold mb-1">Early Access</div>
              <div className="text-sm text-blue-100">Join Waitlist</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-b from-white to-accent dark:from-background dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Be the First to Know
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-12">
            No spam — just early access and launch updates.
          </p>

          <EmailCapture
            showRoleButtons={true}
            size="large"
            placeholder="Your email address"
          />

          <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
            Join the waitlist today and get exclusive access when we launch. 🎉
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Snowbyrds</h3>
            <p className="text-sm mb-6">Seasonal Rentals Made Simple</p>
            <div className="flex justify-center gap-8 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-xs">
              <p>&copy; 2025 Snowbyrds. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
