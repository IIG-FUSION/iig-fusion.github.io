import { Link } from "react-router";

function ALevel() {
  return (
    <main>
      <h1>Computer Science A Level</h1>
      <p>
        The A Level project is a real opportunity to connect the academic
        practices with industry. The project is entirely marked on the report
        (rather than runnable code). These pages will outline how each section
        of the A Level project report relates to roles and skills required by
        industry.
      </p>
      <section className="sec1">
        <h1>AS and A Level Computer Science - H046, H446</h1>
        <p>
          Content on this site based upon the syllabus described by{" "}
          <a href="https://www.ocr.org.uk/Images/170844-specification-accredited-a-level-gce-computer-science-h446.pdf">
            Cambridge OCR
          </a>
        </p>
        <p>
          Whilst the syllabus covers a wider range of topics this site focuses
          on:
        </p>
        <ul>
          <li>
            1.1 The characteristics of contemporary processors, input, output
            and storage devices
          </li>
          <li>
            <b>1.2 Software and software development</b>
          </li>
          <ul>
            <li>1.2.1 Systems Software</li>
            <li>1.2.2 Applications Generation</li>
            <li>
              <Link to="/industry/sdlc">
                <b>1.2.3 Software Development</b>
              </Link>
            </li>
            <li>
              <b>
                <Link to="/programming">
                  1.2.4 Types of Programming Language
                </Link>
              </b>
            </li>
          </ul>
          <li>
            <b>1.3 Exchanging data</b>
          </li>
          <ul>
            <li>1.3.1 Compression, Encryption and Hashing</li>
            <li>
              <b>
                <Link to="/databases">1.3.2 Databases</Link>
              </b>
            </li>
            <li>
              <b>
                <Link to="/networks">1.3.3 Networks</Link>
              </b>
            </li>
            <li>1.3.4 Web Technologies</li>
          </ul>
          <li>1.4 Data types, data structures and algorithms</li>
          <li>1.5 Legal, moral, cultural and ethical issues</li>
          <li>2.1 Elements of computational thinking</li>
          <li>2.2 Problem solving and programming</li>
          <li>2.3 Algorithms</li>
          <li>3.1. Analysis of the problem</li>
          <li>3.2 Design of the solution</li>
          <li>3.3 Developing the solution</li>
        </ul>
      </section>
    </main>
  );
}

export default ALevel;
