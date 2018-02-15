'use strict';

const JapaneseHolidays = require('japanese-holidays');


exports.isHoliday = () => {
  return Boolean(JapaneseHolidays.isHoliday(new Date()));
};
