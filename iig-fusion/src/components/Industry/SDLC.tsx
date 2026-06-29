import sdlc from "../../assets/SDLC.jpg";
function SDLC() {
  return (
    <main>
      <h1>Introduction to the Software Development Lifecycle</h1>
      <p>
        The Software Development Lifecycle (SDLC) is the structured process used
        to plan, build, test, and maintain software systems.
      </p>
      <p>
        It gives students a practical framework for understanding how real‑world
        software moves from an initial idea to a fully functioning product.
      </p>
      <p>
        By exploring each stage—such as planning, analysis, design,
        implementation, testing, deployment, and maintenance—learners gain
        insight into the technical and organisational decisions that shape
        modern software development.
      </p>
      <p>
        For A‑Level Computer Science, the SDLC provides an essential foundation
        for project work, problem‑solving, and understanding industry‑standard
        practices.
      </p>
      <p>
        It helps students appreciate not just how software is written, but why
        disciplined processes lead to more reliable, secure, and effective
        solutions.
      </p>
      <section className="sec">
        <h2>Stages of the Software Development Lifecycle</h2>
        <ul>
          <li>
            Planning: Defining the project scope, objectives, and requirements.
          </li>
          <li>
            Analysis: Gathering and analysing requirements to understand user
            needs.
          </li>
          <li>
            Design: Creating the architecture and design of the software
            solution.
          </li>
          <li>Implementation: Writing the code to build the software.</li>
          <li>
            Testing: Verifying that the software works as intended and is free
            of defects.
          </li>
          <li>Deployment: Releasing the software to users.</li>
          <li>
            Maintenance: Ongoing support and updates to ensure the software
            continues to meet user needs.
          </li>
        </ul>
        <img src={sdlc} alt="image of SDLC stages" className="sdlc-image" />
      </section>
      <section className="sec">
        <h2>Typical Roles in the SDLC</h2>
        <table>
          <thead>
            <tr>
              <th>OCR Syllabus Heading</th>
              <th>Most Relevant SDLC Stages</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Components of a Computer System</td>
              <td>
                <ul>
                  <li>Analysis</li>
                  <li>Design</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Software & Software Development</td>
              <td>
                <ul>
                  <li>Design</li>
                  <li>Implementation</li>
                  <li>Testing</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Exchanging Data</td>
              <td>
                <ul>
                  <li>Design</li>
                  <li>Implementation</li>
                  <li>Maintenance</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Data Types, Data Structures & Algorithms</td>
              <td>
                <ul>
                  <li>Design</li>
                  <li>Implementation</li>
                  <li>Testing</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Legal, Moral, Ethical & Cultural Issues</td>
              <td>
                <ul>
                  <li>Planning</li>
                  <li>Analysis</li>
                  <li>Design</li>
                  <li>Testing</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Computational Logic</td>
              <td>
                <ul>
                  <li>Analysis</li>
                  <li>Design</li>
                  <li>Implementation</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Programming Techniques</td>
              <td>
                <ul>
                  <li>Implementation</li>
                  <li>Testing</li>
                  <li>Maintenance</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Software Development Lifecycle</td>
              <td>
                <ul>
                  <li>All stages of the SDLC are relevant to this topic</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Algorithms</td>
              <td>
                <ul>
                  <li>Design</li>
                  <li>Implementation</li>
                  <li>Testing</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Programming Project</td>
              <td>
                <ul>
                  <li>All stages of the SDLC are relevant to this topic</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="sec">
        <h2>Real‑World Application of the SDLC</h2>
        <p>
          In the real world, the SDLC is often adapted to fit the specific needs
          of a project or organisation.
        </p>
        <p>
          For example, Agile methodologies focus on iterative development and
          continuous feedback, while Waterfall follows a more linear approach.
        </p>
        <p>
          Understanding the SDLC helps students see how software projects are
          managed, how teams collaborate, and how quality is maintained
          throughout the development process.
        </p>
        <p>
          By learning about the SDLC, students can better prepare for careers in
          software development and gain a deeper appreciation for the
          complexities of building software that meets user needs and industry
          standards.
        </p>
      </section>
    </main>
  );
}

export default SDLC;
