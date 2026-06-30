import { Link, Outlet, type RouteObject } from "react-router";
import Home from "./components/Home";

// A Level
import ALevel from "./components/ALevel/ALevel";
import OCR_Spec from "./components/ALevel/OCR_Spec";
import ALevelProject from "./components/ALevel/ALevelProjects";

// Database components
import Databases from "./components/Databases/Databases";
import EntityRelationshipDiagrams from "./components/Databases/EntityRelationshipDiagrams";
import SQL from "./components/Databases/SQL";
import SQLite from "./components/Databases/SQLite";
import Terminology from "./components/Databases/Terminology";
import Normalisation from "./components/Databases/Normalisation";
import SQLPlayground from "./components/Databases/SQLPlayground";
import { SQLJsProvider } from "./components/Databases/SQLJsContext";

// Networks
import Networks from "./components/Networks/Networks";
import BuildingSimpleLAN from "./components/Networks/BuildingSimpleLAN";
import RoutingTwoLans from "./components/Networks/RoutingTwoLans";
import SettingUpDHCP from "./components/Networks/SettingUpDHCP";
import SettingUpEmail from "./components/Networks/SettingUpEmail";
import SettingUpWebServer from "./components/Networks/SettingUpWebServer";
import NetworkStory from "./components/Networks/NetworkStory";

// Industry
import Industry from "./components/Industry/Industry";
import IndustryProfiles from "./components/Industry/IndustryProfiles";
import WorkExperience from "./components/Industry/WorkExperience";
import SDLC from "./components/Industry/SDLC";

// Root
import App from "./App";

export type NavHandle = {
  navSection: string;
};

function ErrorPage() {
  return (
    <div className="page">
      <div className="layout">
        <div className="content">
          <main>
            <h1>Something went wrong</h1>
            <p>
              Sorry about that — Joe probably just hasn&apos;t implemented this
              page yet.
            </p>
            <Link to="/">Go back to the homepage</Link>
          </main>
        </div>
      </div>
    </div>
  );
}

export const ROUTES: RouteObject[] = [
  {
    path: "/",
    element: (
      <App>
        <Outlet />
      </App>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        handle: { navSection: "Home" },
      },
      {
        path: "a-level",
        handle: { navSection: "A-Level" },
        children: [
          {
            index: true,
            element: <ALevel />,
          },
          {
            path: "ocr-spec",
            element: <OCR_Spec />,
          },
          {
            path: "project",
            element: <ALevelProject />,
          },
        ],
      },
      {
        path: "industry",
        handle: { navSection: "Industry" },
        children: [
          {
            index: true,
            element: <Industry />,
          },
          {
            path: "profiles",
            element: <IndustryProfiles />,
          },
          {
            path: "sdlc",
            element: <SDLC />,
          },
          {
            path: "work-experience",
            element: <WorkExperience />,
          },
        ],
      },
      {
        path: "networks",
        handle: { navSection: "Networks" },
        children: [
          {
            index: true,
            element: <Networks />,
          },
          {
            path: "story",
            element: <NetworkStory />,
          },
          {
            path: "simple-lan",
            element: <BuildingSimpleLAN />,
          },
          {
            path: "routing-two-lans",
            element: <RoutingTwoLans />,
          },
          {
            path: "setting-up-dhcp",
            element: <SettingUpDHCP />,
          },
          {
            path: "setting-up-email",
            element: <SettingUpEmail />,
          },
          {
            path: "setting-up-web-server",
            element: <SettingUpWebServer />,
          },
        ],
      },
      {
        path: "databases",
        handle: { navSection: "Databases" },
        children: [
          {
            index: true,
            element: <Databases />,
          },
          {
            path: "entity-relationship-diagrams",
            element: <EntityRelationshipDiagrams />,
          },
          {
            path: "sql",
            element: <SQL />,
          },
          {
            path: "sqlite",
            element: <SQLite />,
          },
          {
            path: "normalisation",
            element: <Normalisation />,
          },
          {
            path: "terminology",
            element: <Terminology />,
          },
          {
            path: "playground",
            element: (
              <SQLJsProvider>
                <SQLPlayground />
              </SQLJsProvider>
            ),
          },
        ],
      },
    ],
  },
];
