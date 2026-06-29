import { Link } from "react-router";

function ALevel() {
  return (
    <main>
      <h1>Computer Science A Level</h1>
      <p>The two goals of IIG Fusion are:</p>
      <ul>
        <li>
          <Link to="ocr-spec">
            Provide curriculum support for tricky areas of the specification.
          </Link>
        </li>
        <li>
          <Link to="project">
            Help teachers professionalise the A Level Project
          </Link>
        </li>
      </ul>
    </main>
  );
}

export default ALevel;
