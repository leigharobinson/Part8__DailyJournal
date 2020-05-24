const API = {
  getJournalEntries() {
    return fetch("http://localhost:8088/entries").then((response) =>
      response.json()
    );
  },
  saveJournalEntry(newEntryObject) {
    return fetch("http://localhost:8088/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntryObject),
    });
  },
  getHappyJournalEntries() {
    return fetch(
      "http://localhost:8088/entries?myMood=happy"
    ).then((response) => response.json());
  },
  getFineJournalEntries() {
    return fetch("http://localhost:8088/entries?myMood=fine").then((response) =>
      response.json()
    );
  },
  getSadJournalEntries() {
    return fetch("http://localhost:8088/entries?myMood=sad").then((response) =>
      response.json()
    );
  },
};

export default API;
