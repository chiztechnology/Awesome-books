import { DateTime } from "./luxon/src/luxon.js";

const showTime = () => {
  const infoDateTime = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  document.getElementById('date').innerText  = infoDateTime;
  setTimeout(showTime, 1000);
};

export default showTime;