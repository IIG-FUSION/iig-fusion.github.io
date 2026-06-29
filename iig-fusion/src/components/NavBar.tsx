import React from "react";
import { Link, useMatches } from "react-router";
import type { NavHandle } from "../routes";

const NO_OP = () => {};

type Props = {
  navRef: React.RefObject<HTMLElement | null>;
  onClose?: () => void;
};

type SectionNavProps = Pick<Props, "onClose"> & {
  activeSections?: string[];
};

const EMPTY_SECTIONS: string[] = [];

export function NetworkNavLinks({
  onClose = NO_OP,
  activeSections = EMPTY_SECTIONS,
}: SectionNavProps) {
  return (
    <ul
      className={`subnav ${!activeSections.includes("Networks") && "collapsed"}`}
    >
      <li>
        <Link to="/networks/story" onClick={onClose}>
          A Network Story
        </Link>
      </li>
      <li>
        <Link to="/networks/simple-lan" onClick={onClose}>
          Building Simple LAN
        </Link>
      </li>
      <li>
        <Link to="/networks/setting-up-web-server" onClick={onClose}>
          Setting Up Web Server
        </Link>
      </li>
      <li>
        <Link to="/networks/setting-up-dhcp" onClick={onClose}>
          Setting Up DHCP
        </Link>
      </li>
      <li>
        <Link to="/networks/routing-two-lans" onClick={onClose}>
          Routing Two LANs
        </Link>
      </li>
      <li>
        <Link to="/networks/setting-up-email" onClick={onClose}>
          Setting Up Email
        </Link>
      </li>
    </ul>
  );
}

function IndustryNavLinks({
  onClose = NO_OP,
  activeSections,
}: SectionNavProps) {
  return (
    <ul
      className={`subnav ${!activeSections.includes("Industry") && "collapsed"}`}
    >
      <li>
        <Link to="/industry/sdlc" onClick={onClose}>
          Software Development Life Cycle
        </Link>
      </li>
      <li>
        <Link to="/industry/profiles" onClick={onClose}>
          Industry Profiles
        </Link>
      </li>
      <li>
        <Link to="/industry/work-experience" onClick={onClose}>
          Work Experience
        </Link>
      </li>
    </ul>
  );
}

function DatabaseNavLinks({
  onClose = NO_OP,
  activeSections,
}: SectionNavProps) {
  return (
    <ul
      className={`subnav ${!activeSections.includes("Databases") && "collapsed"}`}
    >
      <li>
        <Link to="/databases/entity-relationship-diagrams" onClick={onClose}>
          Entity Relationship Diagrams
        </Link>
      </li>
      <li>
        <Link to="/databases/sql" onClick={onClose}>
          SQL
        </Link>
      </li>
      <li>
        <Link to="/databases/sqlite" onClick={onClose}>
          SQLite
        </Link>
      </li>
      <li>
        <Link to="/databases/normalisation" onClick={onClose}>
          Normalisation
        </Link>
      </li>
      <li>
        <Link to="/databases/terminology" onClick={onClose}>
          Terminology
        </Link>
      </li>
    </ul>
  );
}

function ALeveNavLinks({ onClose = NO_OP, activeSections }: SectionNavProps) {
  return (
    <ul
      className={`subnav ${!activeSections.includes("A-Level") && "collapsed"}`}
    >
      <li>
        <Link to="/a-level/ocr-spec" onClick={onClose}>
          OCR Specification
        </Link>
      </li>
      <li>
        <Link to="/a-level/project" onClick={onClose}>
          A Level Project
        </Link>
      </li>
    </ul>
  );
}

function NavBar({ navRef, onClose = NO_OP }: Props) {
  const matches = (useMatches() as Array<{ handle?: NavHandle }>) || [];
  const activeSections = matches
    .map((m) => m.handle?.navSection)
    .filter(Boolean);

  return (
    <nav className="sidebar" ref={navRef}>
      <h2>IIG Fusion</h2>
      <ul>
        <li>
          <Link to="/" onClick={onClose}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/a-level" onClick={onClose}>
            A-Level
          </Link>
          <ALeveNavLinks activeSections={activeSections} onClose={onClose} />
        </li>
        <li>
          <Link to="/industry" onClick={onClose}>
            Industry
          </Link>
          <IndustryNavLinks activeSections={activeSections} onClose={onClose} />
        </li>

        <li>
          <Link to="/networks" onClick={onClose}>
            Networks
          </Link>
          <NetworkNavLinks activeSections={activeSections} onClose={onClose} />
        </li>
        <li>
          <Link to="/databases" onClick={onClose}>
            Databases
          </Link>
          <DatabaseNavLinks activeSections={activeSections} onClose={onClose} />
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
