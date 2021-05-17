import { DateTime } from "luxon"

const DATE = {
  formatDate(isoDate) {
    return DateTime.fromISO(isoDate).toFormat('dd-MM-yyyy HH:mm:ss');
  },
  
}

export default DATE