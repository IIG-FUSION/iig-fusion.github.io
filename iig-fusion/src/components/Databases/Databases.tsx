import WarningBox from "../WarningBox";

function Databases() {
  return (
    <main>
      <h1>Why Databases?</h1>
      <p>
        Imagine that you have a LOT of friends and you like to keep track of who
        they are, when you met them and when you're at the same events. So you
        decide to do a journal or diary and want it digital. Now you have a
        folder contain files, like:
      </p>
      <ul>
        <li>
          PARTY 25-12-2024, containing details of the party and who attended
          (including any new friends)
        </li>
        <li>
          John SMITH from school, containing details about John Smith (from
          School, not that other John Smith)
        </li>
        <li>
          Friends List Update 25-12-2024, containing all the new frineds you
          made at the party.
        </li>
        <li>
          Friends List Update 26-12-2024, containing all those you once called
          friends but are so unfriending.
        </li>
        <li>Current friends list</li>
      </ul>
      <p>
        As you can imagine, as the year go by, the number of files just keep on
        increasing and increasing. You start to drown in the digital weight of
        your journal. It takes AGES (unless you are lucky) to find out
        information. The only way to improve finding information would be to add
        MORE FILES to act as an index to your journal. The only way to make it
        easier to do anything with the journal would be to add other people to
        maintain or query the data. But adding people may mean it 'accidentally'
        gets deleted.
      </p>
      <p>
        Or alternatively you can created your friends database. We'll call it
        FaceBase - totally unique name for a data BASE of friendly FACEs!
      </p>
      <p>
        When starting to create a database we have to decide what information we
        want to store. For FaceBase we will store:
      </p>
      <ul>
        <li>Different events and their attendees</li>
        <li>Details about different friends (or former friends)</li>
        <li>
          List of current friends and history of when people are added or
          unfriended
        </li>
      </ul>
      <WarningBox level="warning">
        Please do not create your own FaceBase. Not because I've trademarked
        that awesome name or the idea itself. But rather, if you remember, we
        have rights to our data under Data Protection Act and GDPR. I don't
        think FaceBase will pass GDPR unless it's empty of any data relating to
        real people!
      </WarningBox>
      <div className="eg">
        Now will we draft our first version of the data:
        <ol>
          <li>
            EVENTS TABLE
            <ul>
              <li>Event ID</li>
              <li>Name</li>
              <li>Location</li>
              <li>Start Date Time</li>
              <li>End Date Time</li>
              <li>
                Details of attendees
                <ul>
                  <li>Name</li>
                  <li>Age</li>
                  <li>Is Friend?</li>
                </ul>
              </li>
            </ul>
          </li>
          <br />
          <li>
            PEOPLE TABLE
            <ul>
              <li>Personal ID</li>
              <li>Name</li>
              <li>Gender</li>
              <li>DoB</li>
              <li>Is Friend Now?</li>
              <li>Last Updated "Is Friend Now?"</li>
            </ul>
          </li>
          <br />
          <li>
            FRIENDS TABLE
            <ul>
              <li>Friend ID</li>
              <li>Name</li>
              <li>Last Added</li>
              <li>Is Friend Now?</li>
              <li>
                History of friendship
                <ul>
                  <li>Updated At</li>
                  <li>Is Friend?</li>
                  <li>Reason for update</li>
                </ul>
              </li>
            </ul>
          </li>
        </ol>
      </div>
      <p>
        Now if we created this database we could organise the data much easier.
        Better yet we can create READ ONLY roles and let other people run
        queries. We can even setup backups so that if our data was lost (or
        someone corrupted it) then we could recover it. Therefore databases are
        awesome when:
      </p>
      <ol>
        <li>
          We have lots of data we want to keep updated (and we don't want a
          million files)
        </li>
        <li>We want to reduce keeping duplicate information</li>
        <li>
          We need to be able to get information (aka run queries) from this data
        </li>
        <li>
          We want to ensure consistency of data as database ensure it confirms
          to your schema
        </li>
        <li>
          Much better security as we can limit access using different user roles
        </li>
        <li>
          Also better security of data as we can regularly backup (and if needed
          restore)
        </li>
      </ol>
      <WarningBox level="danger">
        Excel and other spreadsheets may <i>appear</i> similar to databases. But
        they are NOT databases. Using a spreadsheet as a database may result in
        data being lost or corrupted. More importantly the benefits above we
        don't get. So don't confuse Excel with databases.
      </WarningBox>
    </main>
  );
}

export default Databases;
