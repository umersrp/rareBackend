
const BookingDataByTomorrow = (today, data) => {
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1); 

    
    const filteredData = data.filter((item) => {
        const checkinDate = new Date(item.checkindate);
        return checkinDate.toISOString().split('T')[0] === tomorrow.toISOString().split('T')[0] ? item : null;
    });

    return filteredData;
};

const BookingDataByWeekly = (today , data) => {
    const nextWeek = new Date(today); 
    nextWeek.setDate(today.getDate() + 7);
    
    if (nextWeek.getMonth() !== today.getMonth()) {
        nextWeek.setMonth(today.getMonth() + 1);
    
        if (nextWeek.getMonth() < today.getMonth()) {
            nextWeek.setFullYear(today.getFullYear() + 1);
        }
    }
    
    
return  data.filter((item) => {
const checkinDate = new Date(item.checkindate);
    if(checkinDate > today && checkinDate <= nextWeek) {
      return item
    }
})
}

const BookingDataByMonthly = (today , data) => {
    const nextMonth = new Date(today);

    nextMonth.setDate(1);
    nextMonth.setMonth(nextMonth.getMonth() + 1);

const filteredData = data.filter((item) => {
    const checkinDate = new Date(item.checkindate);
    return checkinDate > today && checkinDate <= nextMonth;
});

return filteredData;
}

const BookingDataByYearly = (today , data) => {
const nextYear = new Date(today);
nextYear.setFullYear(nextYear.getFullYear() + 1);

const filteredData = data.filter((item) => {
    const checkinDate = new Date(item.checkindate);
    return checkinDate >= today && checkinDate < nextYear;
});

return filteredData;
}


module.exports = {
    BookingDataByTomorrow,
    BookingDataByWeekly,
    BookingDataByMonthly,
    BookingDataByYearly
}