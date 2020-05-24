// Move the code that is responsible for creating the j
// ournal entry HTML component into this file.

const makeJournalEntryComponent = (journalEntry) => {
  return `
    <div class="dailyEntry">
        <h1>${journalEntry.dateOfEntry}</h1>
        <section>${journalEntry.conceptsCovered}</section>
        <p>${journalEntry.longForm}</p>
        <aside>${journalEntry.myMood}</aside>
        <hr/>
    </div> 
    `;
};

export default makeJournalEntryComponent;
