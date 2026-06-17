import React from "react";
import { Link, useMatches } from "react-router";
import type { NavHandle } from "../routes";

const NO_OP = () => {};

type Props = {
  navRef: React.RefObject<HTMLElement | null>;
  onClose?: () => void;
};

export function NetworkNavLinks({ onClose = NO_OP }: Pick<Props, "onClose">) {
  return (
    <>
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
    </>
  );
}

function NavBar({ navRef, onClose = NO_OP }: Props) {
  const matches = useMatches() as Array<{ handle?: NavHandle }>;
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
        </li>
        <li>
          <Link to="/industry" onClick={onClose}>
            Industry
          </Link>
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
        </li>
        <li>
          <Link to="/networks" onClick={onClose}>
            Networks
          </Link>
          <ul
            className={`subnav ${!activeSections.includes("Networks") && "collapsed"}`}
          >
            <NetworkNavLinks onClose={onClose} />
          </ul>
        </li>
        <li>
          <Link to="/databases" onClick={onClose}>
            Databases
          </Link>
          <ul
            className={`subnav ${!activeSections.includes("Databases") && "collapsed"}`}
          >
            <li>
              <Link
                to="/databases/entity-relationship-diagrams"
                onClick={onClose}
              >
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
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
