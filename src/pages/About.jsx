import React from "react";
import "./AboutUs.css";
import aboutImg from "../assets/images/h1.png";
import tutorImg from "../assets/images/about-tutor.png";
const classes = [
{ title: "Class 1st", desc: "Basic foundations with easy learning." },
{ title: "Class 2nd", desc: "Concept building with fun learning." },
{ title: "Class 3rd", desc: "Stronger basics in all subjects." },
{ title: "Class 4th", desc: "Improving understanding & practice." },
{ title: "Class 5th", desc: "Deep learning with confidence building." },
{ title: "Class 6th", desc: "Strong NCERT concepts & revision." },
{ title: "Class 7th", desc: "Better clarity through examples." },
{ title: "Class 8th", desc: "Foundation for higher classes." },
{ title: "Class 9th", desc: "Detailed subject guidance & tests." },
{ title: "Class 10th", desc: "Full Board preparation." },
{ title: "Class 11th", desc: "Concept mastery in PCM/PCB/Commerce." },
{ title: "Class 12th", desc: "Boards + career-oriented preparation." },
{ title: "Computer Programming", desc: "Learn C, C++, Python, Web Dev." },
{ title: "Competitive Exam", desc: "Neet, IIT, Olympiad, and other." }
];
const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <img src={aboutImg} alt="yattra Tutorials Banner" className="hero-img" />
        <div className="hero-overlay"></div>
        <div className="hero-text">
    <h1>
      Unlock Your Potential with <span>Yattra Tutorials</span>
    </h1>
    <p>
      <strong>Personalized Learning, Anytime!</strong> Connecting passionate tutors with eager students across Prayagraj, helping you achieve academic success from the comfort of your home.
    </p>
</div>

      </section>

      {/* About Section */}
      <section className="about-intro">
        <div className="about-image">
          <img src={tutorImg} alt="About Tutors" className="tutor-image" />
          <p className="tutor-quote">
            Home Tuition is the #1 secret of{" "}
            <strong>ACADEMIC EXCELLENCE</strong>
          </p>
        </div>
        <div className="about-content">
          <h2>Who We Are</h2>
          <p>
            <strong>JP Tutorial</strong> is a trusted home tutoring platform in
            Prayagraj (Allahabad), connecting students with expert tutors for{" "}
            <b>Classes 1–12</b>, <b>Computer Courses</b>, and{" "}
            <b>Competitive Exams</b>. Our mission is to bring quality education
            right to your doorstep.
          </p>
          <p>
            Our tutors provide <strong>personalized learning</strong> and
            one-on-one mentorship to help students build confidence and improve
            academic results.
          </p>
          <p>
            With <strong>JP Tutorials</strong>, education becomes engaging,
            flexible, and results-driven — because every child deserves the best
            learning experience.
          </p>
          <p><strong>JP Tutorial</strong> established in the year <strong><i>2002</i></strong> and since then has been providing students with teachers who are professional in their subjects.our students from different <b> ICSE ISC CBSE Boards, </b> schools and Colleges.. These students have done very well in their life and many of our students are in medical professional , and other fields, JP sir is a very good person coperative person for students as well as for teachers . <strong>Join our tutorial for the best teachers provided by JP sir</strong></p>
        </div>
      </section>

      {/* How It Works */}
      <section className="steps-section">
        <h2>How JP Tutorial Works</h2>
        <div className="steps-grid">
          <div className="step">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="profile"
            />
            <p>1️⃣ Create Profile</p>
          </div>
          <div className="step">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
              alt="search"
            />
            <p>2️⃣ Find Perfect Tutor</p>
          </div>
          <div className="step">
            <img
              src="https://cdn-icons-png.flaticon.com/512/747/747310.png"
              alt="book"
            />
            <p>3️⃣ Schedule Class</p>
          </div>
          <div className="step">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3145/3145765.png"
              alt="learn"
            />
            <p>4️⃣ Start Learning</p>
          </div>
        </div>
      </section>

{/* Updated Courses Section */}
        <section className="course-section">
        <h2>Courses We Offer</h2>
        <div className="class-grid">
        {classes.map((item, idx) => (
        <div className="class-card" key={idx}>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        </div>
        ))}
        </div>
        </section>

      {/* Area Section */}
      <section className="area-section">
        <h2>Areas We Cover in <span>Prayagraj (Allahabad)</span></h2>
        <p>
          JP Tutorials proudly provides tutors across major colonies, roads, and
          apartments of Prayagraj. <strong>Wherever you live — quality
          education will reach your doorstep!</strong>
        </p>

        <div className="area-lists">
          <div>
            <h3>🏙️ Civil Lines & Posh Areas</h3>
            <p>
              Agnipath Colony, Vivek Vihar Colony, Gayatri Puram Colony, Sacha
              Dham Colony, PWD Colony, Nirupama Colony, Pt. Mulla Colony,
              Professor Colony, Judge’s Colony, Maa Sharda Colony, Lalita Vihar,
              PHQ Colony, Pratap Enclave, Galaxy Enclave, Ekanki Kunj,
              Shashipuram Colony, Officers Residence, Vivek Vihar, Railway
              Colony, Loco Colony, Jankipuram Colony, etc.
            </p>
          </div>

          <div>
            <h3>🛣️ Major Roads</h3>
            <p>
              Mahatma Gandhi Marg, Sardar Patel Marg, Dr. Lohia Marg, Taskand
              Marg, Strechi Road, Lal Bahadur Shastri Road, Cooper Road, Patrika
              Marg, Tej Bahadur Sapru Road, Sarojini Naidu Road, Dayanand
              Saraswati Road, Stanley Road, Clive Road, and more.
            </p>
          </div>

          <div>
            <h3>🏡 Colonies</h3>
            <p>
              Ashok Nagar, Yogendra Puri, Akash Puri, Nevada, Indira Vihar,
              Sukriti Vihar, Tapovan, Alka Puri, Harsh Vihar, Saraswati Vihar,
              Yamuna Vihar, Patrakar Colony, Tulsi Park, Durga Puja Park, etc.
            </p>
          </div>

          <div>
            <h3>📍 Other Localities</h3>
            <p>
              Darbhanga, Georgetown, Tagore Town, Rambagh, Chauk, Baluaghat,
              Meerapur, Sohbatiyabagh, Allapur, Bairhna, Alopibagh, Jhusi,
              Shantipuram, Lukergunj, Sulem Sarai, Bamrauli, Jhalwa, Transport
              Nagar, Beniganj, Chaufatka, Chakiya, Kareli, Kalindipuram, and
              more.
            </p>
          </div>
        </div>
      </section>

      {/* Apartments */}
      <section className="apartment-section">
        <h2>🏢 Apartments Covered</h2>
        <p>We provide home tutors in all leading apartments of Prayagraj.</p>
        <div className="apartment-grid">
          <ul>
            <li>Pusp Krishna Palace</li>
            <li>Mayan Enclave</li>
            <li>Mahima Enclave</li>
            <li>Shree Shanti Niketan</li>
            <li>Bhumi Apartment</li>
            <li>Gulteriyaa Apartment</li>
            <li>Vasant Vihar</li>
            <li>Vinayak Lata Kunj</li>
            <li>Shree Shailam Apartment</li>
            <li>Neo Heights</li>
            <li>Anand Palms Apartment</li>
            <li>Sai Dham Apartment</li>
            <li>Durga Apartment</li>
            <li>Avtar Apartment</li>
            <li>Shanti Niketan</li>
            <li>Sukriti Vihar Apartment</li>
            <li>Vasist Vinayak</li>
            <li>Dev Apartment</li>
            <li>Ashok Vihar Apartment</li>
            <li>Sarojini Apartment</li>
            <li>Vasant Plaza</li>
            <li>Vinayak Enclave</li>
            <li>Sterling Apartment</li>
            <li>Neo Heights</li>
            <li>Shriya Apartment</li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial-section">
        <h2>What Students Say</h2>
        <div className="testimonial-grid">
          {[
            {
              name: "Riya Sharma",
              text: "JP Tutorials helped me score 95% in Class 10th! The tutor was patient and made learning fun.",
            },
            {
              name: "Ankit Verma",
              text: "Best home tuition in Prayagraj. I cleared my NDA exam with their guidance!",
            },
            {
              name: "Sneha Singh",
              text: "The computer classes were excellent! I learned HTML and Python easily.",
            },
            {
              name: "Aman Gupta",
              text: "My maths concepts became crystal clear. Highly recommended!",
            },
            {
              name: "Priya Yadav",
              text: "Very cooperative tutors and smooth process to find the right teacher.",
            },
          ].map((t, i) => (
            <div className="testimonial-card" key={i}>
              <p>"{t.text}"</p>
              <h4>- {t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <h3>
          JP Tutorial - <span>Learn. Grow. Succeed.</span>
        </h3>
        <p>
          Building a brighter educational future for Prayagraj.{" "}
          <strong>Contact us today for top tutors at your home!</strong>
        </p>
      </footer>
    </div>
  );
};

export default About;
