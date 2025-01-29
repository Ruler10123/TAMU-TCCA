export default function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tzu Chi Collegiate Association
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Founded in 2012 at Texas A&M University
          </p>
        </div>

        <div className="mt-10">
          <div className="prose prose-emerald mx-auto lg:max-w-3xl">
            <p className="text-gray-500 leading-relaxed mb-6">
              Welcome to TCCA at Texas A&M University. We are dedicated to promoting morals, strengthening character, 
              and instilling a spirit of "great mercy even to strangers, and great compassion for all." Our organization 
              exemplifies humility, respect, and elegance in character, serving as an example for all young people in our community.
            </p>

            <h3 className="text-2xl font-bold text-emerald-900 mt-8 mb-4">Our Mission</h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              Our mission is to promote, develop, and execute the four major Tzu Chi missions: charity, medicine, education, 
              and culture. At the collegiate level, we focus primarily on volunteer work and community service, putting our 
              values into action and making a positive impact in our community.
            </p>

            <h3 className="text-2xl font-bold text-emerald-900 mt-8 mb-4">Our Values</h3>
            <ul className="list-disc text-gray-500 ml-6 space-y-2">
              <li>Great Mercy: Extending compassion to strangers and those in need</li>
              <li>Great Compassion: Caring for all beings with an open heart</li>
              <li>Humility: Maintaining a modest and respectful approach in all actions</li>
              <li>Character: Building strong moral foundations through service</li>
              <li>Community Service: Actively participating in volunteer work</li>
            </ul>

            <h3 className="text-2xl font-bold text-emerald-900 mt-8 mb-4">Get Involved</h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              Join our community and be part of something meaningful. We welcome all students who share our values 
              and wish to make a positive impact. Connect with us through our monthly email list or join our Discord 
              community to stay updated on upcoming events and volunteer opportunities.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://discord.gg/gZ9f4Cu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
              >
                Join Our Discord
              </a>
              <a 
                href="https://www.facebook.com/tamutzuchi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-emerald-600 bg-white border-emerald-600 hover:bg-emerald-50"
              >
                Follow Us on Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 