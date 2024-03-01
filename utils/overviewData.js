
const BookingDataByTomorrow = (today, data) => {
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1); 

    
    const filteredData = data.filter((item) => {
        const checkinDate = new Date(item.checkindate);
        return checkinDate.toISOString().split('T')[0] === tomorrow.toISOString().split('T')[0] ? item : null;
    });
    const Total_Tomorrow_Checkin = filteredData.map(date => ({ [date.checkindate]: 1 })).reduce((acc, obj) => {const [date, count] = Object.entries(obj)[0]; return acc + count; }, 0);
    const Total_Tomorrow_Checkout = filteredData.map(date => ({ [date.Total_Tomorrow_Checkout]: 1 })).reduce((acc, obj) => {const [date, count] = Object.entries(obj)[0]; return acc + count; }, 0);
    const Total_Tomorrow_Roomtrentamount = filteredData.map((data) => JSON.parse(data.roomrentamount)).reduce((acc , data) => acc + data ,0)
    const Total_Tomorrow_Hostpayble = filteredData.map((data) => JSON.parse(data.roomrenthostpayable)).reduce((acc , data) => acc + data ,0)
    const Total_Tomorrow_securitydepost = filteredData.map((data) => JSON.parse(data.securitydeposit)).reduce((acc , data) => acc + data ,0)
    const Total_Tomorrow_HostmanagementFees = filteredData.map((data) => JSON.parse(data.hostmanagementfee)).reduce((acc , data) => acc + data ,0)
    const Total_Approved_Booking = filteredData.map((data) => data.softdelete === false).reduce((acc , data) => acc + data ,0)
    const Total_Cancel_Booking = filteredData.map((data) => data.softdelete === true).reduce((acc , data) => acc + data ,0)
    const Total_Guests = filteredData.map((data) => data.totaloccupants == undefined && data.totaloccupants == " " ? null :  data.totaloccupants).reduce((acc , data) => acc + data ,0)
    
    return {
        Total_Tomorrow_Checkin : Total_Tomorrow_Checkin,
        Total_Tomorrow_Checkout : Total_Tomorrow_Checkout,
        Total_Tomorrow_Roomtrentamount : JSON.parse(Number(Total_Tomorrow_Roomtrentamount).toFixed(2)),
        Total_Tomorrow_Hostpayble : JSON.parse(Number(Total_Tomorrow_Hostpayble).toFixed(2)),
        Total_Tomorrow_securitydepost : JSON.parse(Number(Total_Tomorrow_securitydepost).toFixed(2)),
        Total_Tomorrow_HostmanagementFees : JSON.parse(Number(Total_Tomorrow_HostmanagementFees).toFixed(2)),
        Total_Approved_Booking : Total_Approved_Booking,
        Total_Cancel_Booking : Total_Cancel_Booking,
        Total_Guests : Total_Guests,
        data: filteredData
    };
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
    
    
const filteredData =  data.filter((item) => {
const checkinDate = new Date(item.checkindate);
    if(checkinDate > today && checkinDate <= nextWeek) {
      return item
    }
})

    const Total_Weekly_Checkin = filteredData.map(date => ({ [date.checkindate]: 1 })).reduce((acc, obj) => {const [date, count] = Object.entries(obj)[0]; return acc + count; }, 0);
    const Total_Weekly_Checkout = filteredData.map(date => ({ [date.Total_Tomorrow_Checkout]: 1 })).reduce((acc, obj) => {const [date, count] = Object.entries(obj)[0]; return acc + count; }, 0);
    const Total_Weekly_Roomtrentamount = filteredData.map((data) => JSON.parse(data.roomrentamount)).reduce((acc , data) => acc + data ,0)
    const Total_Weekly_Hostpayble = filteredData.map((data) => data.roomrenthostpayable == "undefined" ? null : JSON.parse(data.roomrenthostpayable)).reduce((acc , data) => acc + data ,0)
    const Total_Weekly_securitydepost = filteredData.map((data) => JSON.parse(data.securitydeposit)).reduce((acc , data) => acc + data ,0)
    const Total_Weekly_HostmanagementFees = filteredData.map((data) => JSON.parse(data.hostmanagementfee)).reduce((acc , data) => acc + data ,0)
    const Total_Approved_Booking = filteredData.map((data) => data.softdelete === false).reduce((acc , data) => acc + data ,0)
    const Total_Cancel_Booking = filteredData.map((data) => data.softdelete === true).reduce((acc , data) => acc + data ,0)
    const Total_Guests = filteredData.map((data) => data.totaloccupants == undefined && data.totaloccupants == " " ? null :  data.totaloccupants).reduce((acc , data) => acc + data ,0)
    
    return {
        Total_Weekly_Checkin : Total_Weekly_Checkin,
        Total_Weekly_Checkout : Total_Weekly_Checkout,
        Total_Weekly_Roomtrentamount : JSON.parse(Number(Total_Weekly_Roomtrentamount).toFixed(2)),
        Total_Weekly_Hostpayble : JSON.parse(Number(Total_Weekly_Hostpayble).toFixed(2)),
        Total_Weekly_securitydepost : JSON.parse(Number(Total_Weekly_securitydepost).toFixed(2)),
        Total_Weekly_HostmanagementFees : JSON.parse(Number(Total_Weekly_HostmanagementFees).toFixed(2)),
        Total_Approved_Booking : Total_Approved_Booking,
        Total_Cancel_Booking : Total_Cancel_Booking,
        Total_Guests : Total_Guests,
        data: filteredData
    };
}

const BookingDataByMonthly = (today , data) => {
    const nextMonth = new Date(today);

    nextMonth.setDate(1);
    nextMonth.setMonth(nextMonth.getMonth() + 1);

const filteredData = data.filter((item) => {
    const checkinDate = new Date(item.checkindate);
    return checkinDate > today && checkinDate <= nextMonth;
});

const Total_Monthly_Checkin = filteredData.map(date => ({ [date.checkindate]: 1 })).reduce((acc, obj) => {const [date, count] = Object.entries(obj)[0]; return acc + count; }, 0);
const Total_Monthly_Checkout = filteredData.map(date => ({ [date.Total_Tomorrow_Checkout]: 1 })).reduce((acc, obj) => {const [date, count] = Object.entries(obj)[0]; return acc + count; }, 0);
const Total_Monthly_Roomtrentamount = filteredData.map((data) => JSON.parse(data.roomrentamount)).reduce((acc , data) => acc + data ,0)
const Total_Monthly_Hostpayble = filteredData.map((data) => data.roomrenthostpayable == "undefined" ? null : JSON.parse(data.roomrenthostpayable)).reduce((acc , data) => acc + data ,0)
const Total_Monthly_securitydepost = filteredData.map((data) => JSON.parse(data.securitydeposit)).reduce((acc , data) => acc + data ,0)
const Total_Monthly_HostmanagementFees = filteredData.map((data) => JSON.parse(data.hostmanagementfee)).reduce((acc , data) => acc + data ,0)
const Total_Approved_Booking = filteredData.map((data) => data.softdelete === false).reduce((acc , data) => acc + data ,0)
const Total_Cancel_Booking = filteredData.map((data) => data.softdelete === true).reduce((acc , data) => acc + data ,0)
const Total_Guests = filteredData.map((data) => data.totaloccupants == undefined && data.totaloccupants == " " ? null :  data.totaloccupants).reduce((acc , data) => acc + data ,0)

return {
    Total_Monthly_Checkin : Total_Monthly_Checkin,
    Total_Monthly_Checkout : Total_Monthly_Checkout,
    Total_Monthly_Roomtrentamount : JSON.parse(Number(Total_Monthly_Roomtrentamount).toFixed(2)),
    Total_Monthly_Hostpayble : JSON.parse(Number(Total_Monthly_Hostpayble).toFixed(2)),
    Total_Monthly_securitydepost : JSON.parse(Number(Total_Monthly_securitydepost).toFixed(2)),
    Total_Monthly_HostmanagementFees : JSON.parse(Number(Total_Monthly_HostmanagementFees).toFixed(2)),
    Total_Approved_Booking : Total_Approved_Booking,
    Total_Cancel_Booking : Total_Cancel_Booking,
    Total_Guests : Total_Guests,
    data: filteredData
};
}

const BookingDataByYearly = (today , data) => {
const nextYear = new Date(today);
nextYear.setFullYear(nextYear.getFullYear() + 1);

const filteredData = data.filter((item) => {
    const checkinDate = new Date(item.checkindate);
    return checkinDate >= today && checkinDate < nextYear;
});

const Total_Yearly_Checkin = filteredData.map(date => ({ [date.checkindate]: 1 })).reduce((acc, obj) => {const [date, count] = Object.entries(obj)[0]; return acc + count; }, 0);
const Total_Yearly_Checkout = filteredData.map(date => ({ [date.Total_Tomorrow_Checkout]: 1 })).reduce((acc, obj) => {const [date, count] = Object.entries(obj)[0]; return acc + count; }, 0);
const Total_Yearly_Roomtrentamount = filteredData.map((data) => JSON.parse(data.roomrentamount)).reduce((acc , data) => acc + data ,0)
const Total_Yearly_Hostpayble = filteredData.map((data) => data.roomrenthostpayable == "undefined" ? null : JSON.parse(data.roomrenthostpayable)).reduce((acc , data) => acc + data ,0)
const Total_Yearly_securitydepost = filteredData.map((data) => JSON.parse(data.securitydeposit)).reduce((acc , data) => acc + data ,0)
const Total_Yearly_HostmanagementFees = filteredData.map((data) => JSON.parse(data.hostmanagementfee)).reduce((acc , data) => acc + data ,0)
const Total_Approved_Booking = filteredData.map((data) => data.softdelete === false).reduce((acc , data) => acc + data ,0)
const Total_Cancel_Booking = filteredData.map((data) => data.softdelete === true).reduce((acc , data) => acc + data ,0)
const Total_Guests = filteredData.map((data) => data.totaloccupants == undefined && data.totaloccupants == " " ? null :  data.totaloccupants).reduce((acc , data) => acc + data ,0)

return {
    Total_Yearly_Checkin : Total_Yearly_Checkin,
    Total_Yearly_Checkout : Total_Yearly_Checkout,
    Total_Yearly_Roomtrentamount : JSON.parse(Number(Total_Yearly_Roomtrentamount).toFixed(2)),
    Total_Yearly_Hostpayble : JSON.parse(Number(Total_Yearly_Hostpayble).toFixed(2)),
    Total_Yearly_securitydepost : JSON.parse(Number(Total_Yearly_securitydepost).toFixed(2)),
    Total_Yearly_HostmanagementFees : JSON.parse(Number(Total_Yearly_HostmanagementFees).toFixed(2)),
    Total_Approved_Booking : Total_Approved_Booking,
    Total_Cancel_Booking : Total_Cancel_Booking,
    Total_Guests : Total_Guests,
    data: filteredData
};
}


module.exports = {
    BookingDataByTomorrow,
    BookingDataByWeekly,
    BookingDataByMonthly,
    BookingDataByYearly
}