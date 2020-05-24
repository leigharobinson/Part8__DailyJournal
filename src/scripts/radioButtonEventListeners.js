import API from "./data.js";
import renderJournalEntries from "./entriesDOM.js";

const radioButtons = document.querySelectorAll("input[type='radio'");
const dailyEntryLog = document.querySelector(".entryLog");

const eventListenerRadioButtons = () => {
  radioButtons.forEach((button) =>
    button.addEventListener("click", () => {
      const mood = event.target.value;
      API.getJournalEntries().then((entry) => {
        let filterMoods = entry.filter((entry) => entry.myMood == mood);
        renderJournalEntries(filterMoods);
      });
    })
  );
};

// MY ORIGINAL WAY OF GETTING SORTED RESULTS May 23rd 2020
// const happy = document.querySelector("#happy");
// const fine = document.querySelector("#fine");
// const sad = document.querySelector("#sad");
// const happyEntries = API.getHappyJournalEntries();
// const fineEntries = API.getFineJournalEntries();
// const sadEntries = API.getSadJournalEntries();

// const eventListenerRadioButtons = () => {
//   document
//     .querySelector(".radio__buttons")
//     .addEventListener("click", (event) => {
//       event.preventDefault;
//       if (happy.checked) {
//         // console.log("happy selected");
//         happyEntries.then(renderJournalEntries);
//       } else if (fine.checked) {
//         // console.log("fine selected");
//         fineEntries.then(renderJournalEntries);
//       } else if (sad.checked) {
//         // console.log("sad selected");
//         sadEntries.then(renderJournalEntries);
//       }
//     });
// };
export default eventListenerRadioButtons;
