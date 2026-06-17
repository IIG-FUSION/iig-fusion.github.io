import { NetworkNavLinks } from "../NavBar";

function Networks() {
  return (
    <main>
      <h2>Networks</h2>
      <p>
        This section contains tutorials which use Cisco Packet Tracer to
        simulate all the networking topics required by the curriculum. This
        software is extremely powerful, effectively giving students a cabinet
        full of virtual networking equipment to experiment with.
      </p>
      <p>
        The first page is more of a story which explains how escalating
        requirements from networks introduce new challenges and requirements.
      </p>
      <p>
        The tutorials then go step by step, building on each other to construct
        a small model of the internet. It is recommended to follow them in
        order.
      </p>
      <NetworkNavLinks />
      <a
        href="https://www.netacad.com/courses/getting-started-cisco-packet-tracer?courseLang=en-US"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get Started with Cisco Packet Tracer
      </a>
      <p>
        Students will need to create a NetAcad account, which is free. This then
        allows them to access the Cisco Packet Tracer software and complete the
        tutorials.
      </p>
    </main>
  );
}

export default Networks;
