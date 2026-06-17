import img_1 from "../../assets/gitbook/image (1).png";
import img_2 from "../../assets/gitbook/image (2).png";
import img_3 from "../../assets/gitbook/image (3).png";
import img_4 from "../../assets/gitbook/image (4).png";
import img_5 from "../../assets/gitbook/image (5).png";
function Networks() {
  return (
    <main>
      <h1>Development of Networks</h1>
      <p>
        Networks are the means by which multiple computer systems can be
        connected together for the purposes of sharing resources. There are a
        variety of network models you need to understand, so let's see how those
        developed by telling a story.
      </p>
      <h2>A Law Firm</h2>
      <p>
        A law firm have just moved into their offices. They employ the
        following:
      </p>
      <ul>
        <li>
          Lawyer - The courtroom presence of the firm, maintains files on
          clients and organises their defence
        </li>
        <li>Investigator - Gathers intel on their cases</li>
        <li>Accountant - keeps track of incomings & outgoings</li>
      </ul>
      <h3>First Setup - Independent Machines</h3>
      <p>
        Initially they each have their own computer, but they are not networked
        in any way. Each employee does their job largely in isolation. When they
        need to share files they use a USB stick to move files from one machine
        to another. Here is a diagram of this initial setup.
      </p>
      <img src={img_1} alt="Initial Setup - Independent Machines" />
      <h3>Second Setup - Peer to Peer file sharing</h3>
      <p>
        After a while, they become rather tired of having to copy files using
        the USB stick, so they decide to network the machines together. For this
        they need the following hardware:
      </p>
      <ul>
        <li>NIC - Network Interface Cards for each machine</li>
        <li>Cables - Copper Ethernet cables generally used in LANs</li>
        <li>Switch - For connecting machines together</li>
      </ul>
      <p>
        For this they invest in a <strong>switch</strong> and connect the
        machines to form a Local Area Network (LAN). A <strong>LAN</strong> is a
        network that
      </p>
      <ul>
        <li>Covers a small geographical area</li>
        <li>The hardware is usually owned by a single organisation</li>
      </ul>
      <p>Networking their computers gives the following benefits</p>
      <ul>
        <li>Easier to share files (and other resources like printers)</li>
      </ul>
      <p>But it incurs the following risks:</p>
      <ul>
        <li>
          Viruses can spread more easily, with constant connection between
          machines
        </li>
        <li>
          Cost of network hardware (although at this stage, relatively low)
        </li>
      </ul>
      <p>
        The three employees still store their files on their own machines, but
        they are able to see the files on the other machines. This model of
        sharing is known as <strong>Peer to Peer</strong>. Characteristics of
        this are
      </p>
      <ul>
        <li>
          All machines are equal, they have the same role of storing, providing
          and accessing files
        </li>
        <li>
          Each peer is responsible for providing its own
          <ul>
            <li>Backup</li>
            <li>Security</li>
          </ul>
        </li>
      </ul>
      <p>The advantages of peer to peer are:</p>
      <ul>
        <li>Simple and cheap to setup</li>
        <li>No dependency on a single machine</li>
        <li>Easy to maintain, no specialist hardware/software required</li>
      </ul>
      <p>The disadvantages of sharing files this way are</p>
      <ul>
        <li>Each machine has to maintain its own backups/security</li>
        <li>
          It is harder to keep the files organised (taken a single logical set
          of files), since different bits of data can be found on different
          machines
        </li>
        <li>
          Network is less secure, due to all machines having equal roles and
          rights.
        </li>
      </ul>
      <p>The network now looks like this.</p>
      <img
        src={img_2}
        alt="Local Area Network with Peer to Peer file sharing"
      />
      <h3>Third Setup - Client Server</h3>
      <p>
        Once the firm grows in size, it becomes necessary to take on an
        additional Lawyer, this means that the files for court cases get split
        awkwardly across both Lawyer machines and it becomes apparent that a new
        solution will be required.
      </p>
      <p>
        The company invest in a <strong>Server</strong> to host all their files
        in a single well organised system. The server does the following:
      </p>
      <ul>
        <li>Server controls access to a single file store</li>
        <li>Server manages printing jobs</li>
        <li>Server provides email services</li>
        <li>Server runs backups centrally</li>
        <li>Server provides security for all the data in one place.</li>
      </ul>
      <p>
        Clients then simply access the resources on the server. The advantages
        are:
      </p>
      <ul>
        <li>Easier to manage security of files</li>
        <li>Easier to backup files</li>
        <li>Easier to provide software update to all computers</li>
      </ul>
      <p>Disadvantages are:</p>
      <ul>
        <li>Can be more expensive to setup and maintain</li>
        <li>Requires specialist IT</li>
        <li>
          Server is a single point of failure, if it goes down the network
          becomes near useless.
        </li>
      </ul>
      <p>Our network now looks like this:</p>
      <img src={img_3} alt="Client Server LAN" />
      <h3>Fourth Setup - The Internet & Cloud</h3>
      <p>
        Some time goes by, and it becomes apparent that law firms will need to
        exchange information with other firms and regulatory bodies over the
        Internet. The internet is a large array of interconnected networks. In
        addition to accessing services, the law firms all start to use cloud
        storage instead of their own locally hosted solutions. This has the
        following advantages:
      </p>
      <ul>
        <li>
          Responsibility for data storage is given out to third party providers,
          who can distribute your data for resilient physical storage across the
          world
        </li>
        <li>No longer need to maintain specialist hardware in house</li>
      </ul>
      <p>The risks are</p>
      <ul>
        <li>
          If the internet connection goes down, you lose access to all your
          data.
        </li>
        <li>
          You are trusting the third party to store your data alongside other
          peoples in a secure way, you lose some control
        </li>
      </ul>
      <p>
        To connect to the internet, a new device called a{" "}
        <strong>Router</strong> will be required. A Router allows different IP
        networks to interconnect, routing <em>packets</em> between them. In this
        example the private LAN and the global internet IP network. The internet
        is an example of a <strong>Wide Area Network</strong> (WAN) which has
        the following characteristics:
      </p>
      <ul>
        <li>Distributed over wide geographical area</li>
        <li>
          The hardware is owned by several organisations/the connection to the
          WAN is leased/managed by a third party.
        </li>
      </ul>
      <p>The system now looks like this:</p>
      <img src={img_4} alt="Internet and the Cloud" />
      <p>
        Our law firm LAN still has a server, but it is only providing DHCP in
        this network, most real LANs get this functionality from a single box
        (usually referred to as a router, but actually contains a Server, Router
        and Switch all in one).
      </p>
      <h3>Fifth Setup - Wireless</h3>
      <p>
        Visitors to the law firm require internet access during their visits, so
        they can look various details up of their cases on their mobile devices.
        For this, the firm invests in a <strong>Wireless Access Point</strong>,
        these have the following advantages
      </p>
      <ul>
        <li>Portability of devices</li>
        <li>Ease of access</li>
      </ul>
      <p>And the following disadvantages</p>
      <ul>
        <li>
          Less secure, now that physical connections are no longer required
        </li>
        <li>
          Wireless connections tend to be slower, due to the inherent losses of
          radio interfaces
        </li>
      </ul>
      <p>
        The security issue is mitigated by using <strong>Encryption</strong> on
        the air interface, protected by a password that is required by each
        machine that wishes to join the network.
      </p>
      <h3>Sixth Setup - Virtual Network</h3>
      <p>
        Once an organisation spans multiple buildings or sites, it may be
        necessary to setup multiple Virtual LAN's on a single Physical one.
      </p>
      <p>
        Consider a school with student computers, administrator computers and
        teacher computers. They are all connected to a single physical LAN, but
        in order to keep the various functions secure from each other, the IT
        administrators could setup 3 distinct VLAN's sitting on top of the
        physical one.
      </p>
      <p>
        This sort of system can also be used to establish a single Logical
        Network that people working at home can join, and their experience is
        then indistinguishable from working at the office.
      </p>
      <p>
        <a href="https://www.bbc.co.uk/bitesize/guides/zvspfcw/revision/7">
          BBC Bitesize LAN
        </a>
        <a href="https://www.teach-ict.com/2016/GCSE\_Computing/OCR\_J276/1\_4\_wired\_wireless\_networks/virtual\_networks/miniweb/pg2.php">
          Teach ICT - LAN
        </a>
      </p>
      <h2>Cisco Packet Tracer</h2>

      <p>
        Cisco Packet tracer can be freely downloaded and used to simulate
        various network topologies. I have used Packet Tracer version 7.3 to
        create a few demonstrations of networking.
      </p>

      <h3> Routing Between Two LANs</h3>

      <p>
        This shows how to communicate across two LANs with a WAN in between.
      </p>

      <img src={img_5} alt="Routing Across Two LANs" />
    </main>
  );
}

export default Networks;
