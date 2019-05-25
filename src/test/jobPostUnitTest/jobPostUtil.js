

export function formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

const moment = require('moment');
export function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
}