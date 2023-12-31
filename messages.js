  
const moment = require('moment');

function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().local().format('h:mm a')
  };
}

module.exports = formatMessage;