import API from "./data.js";
import renderJournalEntries from "./entriesDOM.js";
import journalEntryFormFactory from "./entriesFactory.js";
import eventListenerRadioButtons from "./radioButtonEventListeners.js";
console.log("keep the faith Leigha");

API.getJournalEntries().then(renderJournalEntries);

journalEntryFormFactory();
eventListenerRadioButtons();
