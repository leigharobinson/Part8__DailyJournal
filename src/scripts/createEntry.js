const createJournalEntry = (
  journalDate,
  conceptsCovered,
  journalEntry,
  mood
) => ({
  dateOfEntry: journalDate,
  conceptsCovered: conceptsCovered,
  longForm: journalEntry,
  myMood: mood,
});

export default createJournalEntry;
