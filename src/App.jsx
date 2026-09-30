
function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 py-6">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-600">
          Sanjana<span className="text-gray-800">.</span>
        </h1>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#home" className="hover:text-purple-600 transition">Home</a>
          <a href="#about" className="hover:text-purple-600 transition">About</a>
          <a href="#skills" className="hover:text-purple-600 transition">Skills</a>
          <a href="#projects" className="hover:text-purple-600 transition">Projects</a>
          <a href="#education" className="hover:text-purple-600 transition">Education</a>
          <a href="#contact" className="hover:text-purple-600 transition">Contact</a>
        </div>

        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden md:inline-block rounded-full bg-purple-600 px-6 py-3 text-sm font-medium text-white hover:bg-purple-700 transition"
        >
          Let's Talk
        </a>

      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex min-h-[85vh] flex-col-reverse items-center justify-center gap-12 px-6 py-12 md:flex-row md:px-16 lg:px-24"
      >

        {/* Left Content */}
        <div className="w-full md:w-1/2">

          <p className="mb-4 font-medium text-purple-600">
            Hello, I'm
          </p>

          <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Sanjana Kumari
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-gray-600 sm:text-3xl">
            Full Stack Developer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-500">
            I'm a passionate developer who enjoys building modern,
            responsive, and user-friendly web applications. I love
            turning ideas into real-world digital experiences using
            React, Node.js, and MongoDB.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="rounded-full bg-purple-600 px-7 py-3 font-medium text-white shadow-lg shadow-purple-200 hover:bg-purple-700 transition"
            >
              View My Work
            </a>

            <a
              href="/Resume.pdf"
              download
              className="rounded-full border border-gray-300 px-7 py-3 font-medium text-gray-700 hover:border-purple-600 hover:text-purple-600 transition"
            >
              Download CV
            </a>

          </div>

          {/* Social Links */}
          <div className="mt-8 flex gap-6 text-sm font-medium text-gray-500">
            <a
              href="https://github.com/sanjana47210"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-600 transition"
            >
              GitHub ↗
            </a>

            <a
              href="#contact"
              className="hover:text-purple-600 transition"
            >
              LinkedIn ↗
            </a>
          </div>

        </div>

        {/* Right Content - Profile Image */}
        <div className="flex w-full justify-center md:w-1/2">

          <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-purple-100 sm:h-80 sm:w-80 lg:h-96 lg:w-96">

            <div className="absolute inset-4 rounded-full border-2 border-dashed border-purple-300"></div>

            <img
              src="/profile2.jpeg"
              alt="Sanjana Kumari"
              className="relative h-64 w-64 rounded-full border-8 border-white object-cover shadow-xl sm:h-72 sm:w-72 lg:h-80 lg:w-80"
            />

          </div>

        </div>

      </section>
      
      {/* About Section */}
      <section
        id="about"
        className="bg-gray-50 px-6 py-20 md:px-16 lg:px-24"
      >
        <div className="mx-auto max-w-6xl">

          {/* Section Heading */}
          <div className="mb-12 text-center">
            <p className="mb-3 font-medium text-purple-600">
              Get to Know Me
            </p>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              About Me
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-purple-600"></div>
          </div>

          {/* About Content */}
          <div className="grid items-center gap-10 md:grid-cols-2">

            {/* Left Side */}
            <div>
              <h3 className="mb-5 text-2xl font-semibold leading-relaxed text-gray-800">
                Passionate about creating meaningful digital experiences.
              </h3>

              <p className="mb-4 leading-8 text-gray-600">
                Hello! I'm Sanjana Kumari, a BCA graduate from Indira Gandhi
                National Open University (IGNOU), with a strong interest in
                software development and modern web technologies.
              </p>

              <p className="mb-4 leading-8 text-gray-600">
                I enjoy building responsive and user-friendly applications
                using React, JavaScript, Node.js, Express.js, and MongoDB.
                Through my projects, I've gained practical experience in
                frontend development, backend integration, and working with
                databases and APIs.
              </p>

              <p className="leading-8 text-gray-600">
                I'm continuously learning, improving my problem-solving
                skills, and looking forward to opportunities where I can
                contribute, collaborate, and grow as a software engineer.
              </p>
            </div>

            {/* Right Side - Highlights */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              <div className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 text-3xl">🎓</div>
                <h4 className="mb-2 font-semibold text-gray-900">
                  Education
                </h4>
                <p className="text-sm leading-6 text-gray-500">
                  Bachelor of Computer Applications (BCA)
                </p>
              </div>

              <div className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 text-3xl">💻</div>
                <h4 className="mb-2 font-semibold text-gray-900">
                  Development
                </h4>
                <p className="text-sm leading-6 text-gray-500">
                  Frontend and Full-Stack Web Development
                </p>
              </div>

              <div className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 text-3xl">🚀</div>
                <h4 className="mb-2 font-semibold text-gray-900">
                  Projects
                </h4>
                <p className="text-sm leading-6 text-gray-500">
                  Building practical applications and learning by doing
                </p>
              </div>

              <div className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 text-3xl">🌱</div>
                <h4 className="mb-2 font-semibold text-gray-900">
                  Growth
                </h4>
                <p className="text-sm leading-6 text-gray-500">
                  Always learning and improving my skills
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">

          {/* Section Heading */}
          <div className="mb-12 text-center">
            <p className="mb-3 font-medium text-purple-600">
              What I Know
            </p>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              My Skills
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-purple-600"></div>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-500">
              Technologies and tools I use to build responsive,
              functional, and user-friendly web applications.
            </p>
          </div>

          {/* Skills Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* Frontend */}
            <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100 text-2xl">
                🎨
              </div>

              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                Frontend
              </h3>

              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Redux Toolkit"].map((skill) => (
                  <span key={skill} className="rounded-full bg-purple-50 px-3 py-2 text-sm text-purple-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                ⚙️
              </div>

              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                Backend
              </h3>

              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Socket.IO"].map((skill) => (
                  <span key={skill} className="rounded-full bg-blue-50 px-3 py-2 text-sm text-blue-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-2xl">
                🗄️
              </div>

              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                Database
              </h3>

              <div className="flex flex-wrap gap-2">
                {["MongoDB", "Mongoose", "SQL"].map((skill) => (
                  <span key={skill} className="rounded-full bg-green-50 px-3 py-2 text-sm text-green-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-2xl">
                🛠️
              </div>

              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                Tools & Others
              </h3>

              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "VS Code", "Postman", "Vercel", "Render"].map((skill) => (
                  <span key={skill} className="rounded-full bg-orange-50 px-3 py-2 text-sm text-orange-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="bg-gray-50 px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">

          {/* Section Heading */}
          <div className="mb-12 text-center">
            <p className="mb-3 font-medium text-purple-600">
              My Recent Work
            </p>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Featured Projects
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-purple-600"></div>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-500">
              Here are some of the projects I've built to apply my
              skills and solve real-world problems.
            </p>
          </div>

          {/* Project Card */}
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition hover:shadow-xl">

            
            {/* Project Preview */}
          <div className="h-64 overflow-hidden sm:h-80">
           <img
              src="/foodiezone.png"
              alt="FoodieZone project screenshot"
              className="h-full w-full object-cover"
           />
          </div>

            {/* Project Details */}
            <div className="p-6 sm:p-8">

              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-2xl font-bold text-gray-900">
                  FoodieZone – Online Food Ordering
                </h3>

                <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
                  Completed
                </span>
              </div>

              <p className="mb-6 leading-8 text-gray-600">
                FoodieZone is a full-stack food ordering web application
                that connects customers, shop owners, and delivery
                partners. Users can browse food items, place orders,
                make payments, and track deliveries in real time.
                Shop owners can manage menus and orders, while delivery
                partners can accept and update assigned deliveries.
              </p>

              {/* Technologies */}
              <div className="mb-7">
                <h4 className="mb-3 font-semibold text-gray-800">
                  Technologies Used
                </h4>

                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Tailwind CSS",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "Redux Toolkit",
                    "Socket.IO",
                    "Razorpay",
                    "Cloudinary",
                    "Leaflet"
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex flex-wrap gap-4">

                <a
                  href="https://foodie-zone-hazel.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-purple-600 px-6 py-3 font-medium text-white transition hover:bg-purple-700"
                >
                  Live Demo ↗
                </a>

                <a
                  href="https://github.com/sanjana47210/foodieZone"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:border-purple-600 hover:text-purple-600"
                >
                  GitHub ↗
                </a>

              </div>

            </div>
          </div>

        </div>
      </section>
      
      {/* Education Section */}
      <section id="education" className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl">

          <div className="mb-12 text-center">
            <p className="mb-3 font-medium text-purple-600">
              My Academic Background
            </p>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Education
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-purple-600"></div>
          </div>

          <div className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm sm:p-8">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Bachelor of Computer Applications (BCA)
                </h3>

                <p className="mt-2 font-medium text-purple-600">
                  Indira Gandhi National Open University (IGNOU)
                </p>

                <p className="mt-3 leading-7 text-gray-600">
                  Studied computer applications, programming,
                  database management, and software development.
                  Completed a full-stack web development project
                  as part of my academic journey.
                </p>
              </div>

              <span className="w-fit shrink-0 rounded-full bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700">
                Completed
              </span>

            </div>

          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-3 font-medium text-purple-600">
            Get in Touch
          </p>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Let's Work Together
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-purple-600"></div>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-600">
            I'm currently looking for opportunities to learn,
            contribute, and grow as a software developer.
            If you have an opportunity or would like to connect,
            feel free to reach out!
          </p>

          <a
            href="mailto:sanjanakumari47210@gmail.com"
            className="mt-8 inline-block rounded-full bg-purple-600 px-8 py-4 font-medium text-white shadow-lg shadow-purple-200 transition hover:bg-purple-700"
          >
            Send Me an Email ↗
          </a>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-600">

            <a
              href="https://github.com/sanjana47210"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-purple-600"
            >
              GitHub ↗
            </a>

            <a
              href="www.linkedin.com/in/sanjana-kumari-575268349"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-purple-600"
            >
              LinkedIn ↗
            </a>

          </div>

        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white px-6 py-6 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Sanjana Kumari. All rights reserved.
        </p>

        <p className="mt-2 text-sm text-gray-400">
          Designed and built with React & Tailwind CSS.
        </p>
      </footer>

    </div>
  )
}

export default App