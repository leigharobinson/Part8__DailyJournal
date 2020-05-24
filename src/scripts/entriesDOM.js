// entriesDOM.js - Move the code that is
// responsible for modifying the DOM into this file.

import makeJournalEntryComponent from "./entryComponent.js";

const dailyEntryLog = document.querySelector(".entryLog");

const renderJournalEntries = (entries) => {
  dailyEntryLog.innerHTML = "";
  for (let i = 0; i < entries.length; i++) {
    dailyEntryLog.innerHTML += makeJournalEntryComponent(entries[i]);
  }
};

export default renderJournalEntries;
