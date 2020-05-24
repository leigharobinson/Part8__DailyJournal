import API from "./data.js";
import createJournalEntry from "./createEntry.js";
import renderJournalEntries from "./entriesDOM.js";

const journalEntryFormFactory = () => {
  document
    .querySelector("#recordJournalEntry")
    .addEventListener("click", (event) => {
      event.preventDefault();
      let journalDate = document.querySelector("#journalDate").value;
      let conceptsCovered = document.querySelector("#conceptsCovered").value;
      let journalEntry = document.querySelector("#journalEntry").value;
      let mood = document.querySelector("#mood").value;

      let newJournalEntry = createJournalEntry(
        journalDate,
        conceptsCovered,
        journalEntry,
        mood
      );

      if (journalDate == "") {
        alert("Please pick a date");
      } else if (conceptsCovered == "") {
        alert("Please fill in 'Concepts coverd'");
      } else if (journalEntry == "") {
        alert("Please fill in 'Journal entry'");
      } else if (mood == "") {
        alert("Please fill in 'Mood of the day'");
      } else {
        API.saveJournalEntry(newJournalEntry)
          .then(API.getJournalEntries)
          .then(renderJournalEntries);
        alert("Your Journal Entry has been Added!");

        document.querySelector("#journalDate").value = "";
        document.querySelector("#conceptsCovered").value = "";
        document.querySelector("#journalEntry").value = "";
        document.querySelector("#mood").value = "";
      }
    });
};

export default journalEntryFormFactory;
