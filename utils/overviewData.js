
const BookingDataByTomorrow = (today, data) => {
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1); 

    
    const filteredData = data.filter((item) => {
        const checkinDate = new Date(item.checkindate);
        return checkinDate.toISOString().split('T')[0] === tomorrow.toISOString().split('T')[0] ? item : null;
    });
    const Total_Tomorrow_Checkin = filteredData.map(date => ({ [date.checkindate]: 1 })).reduce((acc, obj) => {const [date, count] = Object.entries(obj)[0]; return acc + count; }, 0);
    const Total_Tomorrow_Roomtrentamount = filteredData.map((data) => JSON.parse(data.roomrentamount)).reduce((acc , data) => acc + data ,0)
    const Total_Tomorrow_Hostpayble = filteredData.map((data) => data.roomrenthostpayable == "undefined" && data.roomrenthostpayable == " " ? null : data.roomrenthostpayable).reduce((acc , data) => acc + data ,0)
    const Total_Tomorrow_securitydepost = filteredData.map((data) => JSON.parse(data.securitydeposit)).reduce((acc , data) => acc + data ,0)
    const Total_Tomorrow_HostmanagementFees = filteredData.map((data) => JSON.parse(data.hostmanagementfee)).reduce((acc , data) => acc + data ,0)
    const Total_Approved_Booking = filteredData.map((data) => data.softdelete === false).reduce((acc , data) => acc + data ,0)
    const Total_Cancel_Booking = filteredData.map((data) => data.softdelete === true).reduce((acc , data) => acc + data ,0)
    const Total_Guests = filteredData.map((data) => data.guestname == undefined && data.guestname == " " ? null :  data.guestname)
    const datas = filteredData.filter((data) => data.softdelete === false).sort((a,b) =>  b._id - a._id).slice(0,4)

    const checkoutfilteredData = data.filter((item) => {
        const checkoutDate = new Date(item.checkoutdate);
        return checkoutDate.toISOString().split('T')[0] === tomorrow.toISOString().split('T')[0] ? item : null;
    });

    const Total_Tomorrow_Checkout = checkoutfilteredData.map(date => ({ [date.checkoutdate]: 1 })).reduce((acc, obj) => {const [date, count] = Object.entries(obj)[0]; return acc + count; }, 0);
    const Total_Checkout_Tomorrow_Roomtrentamount = checkoutfilteredData.map((data) => JSON.parse(data.roomrentamount)).reduce((acc , data) => acc + data ,0)
    const Total_Checkout_Tomorrow_Hostpayble = checkoutfilteredData.map((data) => data.roomrenthostpayable == "undefined" && data.roomrenthostpayable == " " ? null : data.roomrenthostpayable).reduce((acc , data) => acc + data ,0)
    const Total_Checkout_Tomorrow_securitydepost = checkoutfilteredData.map((data) => JSON.parse(data.securitydeposit)).reduce((acc , data) => acc + data ,0)
    const Total_Checkout_Tomorrow_HostmanagementFees = checkoutfilteredData.map((data) => JSON.parse(data.hostmanagementfee)).reduce((acc , data) => acc + data ,0)
    const Total_Checkout_Approved_Booking = checkoutfilteredData.map((data) => data.softdelete === false).reduce((acc , data) => acc + data ,0)
    const TotalCheckout__Cancel_Booking = checkoutfilteredData.map((data) => data.softdelete === true).reduce((acc , data) => acc + data ,0)
    const Total_Checkout_Guests = checkoutfilteredData.map((data) => data.guestname == undefined && data.guestname == " " ? null :  data.guestname)
    const checkoutData = checkoutfilteredData.filter((data) => data.softdelete === false).sort((a,b) =>  b._id - a._id).slice(0,4)
    return {
        Total_Tomorrow_Checkin : Total_Tomorrow_Checkin,
        Total_Tomorrow_Roomtrentamount : JSON.parse(Number(Total_Tomorrow_Roomtrentamount).toFixed(2)),
        Total_Tomorrow_Hostpayble : Number(Total_Tomorrow_Hostpayble).toFixed(2),
        Total_Tomorrow_securitydepost : JSON.parse(Number(Total_Tomorrow_securitydepost).toFixed(2)),
        Total_Tomorrow_HostmanagementFees : JSON.parse(Number(Total_Tomorrow_HostmanagementFees).toFixed(2)),
        Total_Approved_Booking : Total_Approved_Booking,
        Total_Cancel_Booking : Total_Cancel_Booking,
        Total_Guests : Total_Guests.length,
        data: datas,
        Total_Tomorrow_Checkout : Total_Tomorrow_Checkout,
        Total_Checkout_Tomorrow_Roomtrentamount : Total_Checkout_Tomorrow_Roomtrentamount,
        Total_Tomorrow_Roomtrentamount : JSON.parse(Number(Total_Tomorrow_Roomtrentamount).toFixed(2)),
        Total_Checkout_Tomorrow_Hostpayble : Number(Total_Checkout_Tomorrow_Hostpayble).toFixed(2),
        Total_Checkout_Tomorrow_securitydepost : JSON.parse(Number(Total_Checkout_Tomorrow_securitydepost).toFixed(2)),
        Total_Checkout_Tomorrow_HostmanagementFees : JSON.parse(Number(Total_Checkout_Tomorrow_HostmanagementFees).toFixed(2)),
        Total_Checkout_Approved_Booking : Total_Checkout_Approved_Booking,
        TotalCheckout__Cancel_Booking : TotalCheckout__Cancel_Booking,
        Total_Checkout_Guests : Total_Checkout_Guests.length,
        checkoutData : checkoutData
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

const Checkout_filteredData =  data.filter((item) => {
    const checkoutDate = new Date(item.checkoutdate);
        if(checkoutDate > today && checkoutDate <= nextWeek) {
          return item
        }
    })

    const Total_Weekly_Checkin = filteredData.map(date => ({ [date.checkindate]: 1 })).reduce((acc, obj) => {const [date, count] = Object.entries(obj)[0]; return acc + count; }, 0);
    const Total_Weekly_Roomtrentamount = filteredData.map((data) => JSON.parse(data.roomrentamount)).reduce((acc , data) => acc + data ,0)
    const Total_Weekly_Hostpayble = filteredData.map((data) => data.roomrenthostpayable == "undefined" ? null : JSON.parse(data.roomrenthostpayable)).reduce((acc , data) => acc + data ,0)
    const Total_Weekly_securitydepost = filteredData.map((data) => JSON.parse(data.securitydeposit)).reduce((acc , data) => acc + data ,0)
    const Total_Weekly_HostmanagementFees = filteredData.map((data) => JSON.parse(data.hostmanagementfee)).reduce((acc , data) => acc + data ,0)
    const Total_Approved_Booking = filteredData.map((data) => data.softdelete === false).reduce((acc , data) => acc + data ,0)
    const Total_Cancel_Booking = filteredData.map((data) => data.softdelete === true).reduce((acc , data) => acc + data ,0)
    const Total_Guests = filteredData.map((data) => data.guestname == undefined && data.guestname == " " ? null :  data.guestname)
    const datas = filteredData.filter((data) => data.softdelete === false).sort((a,b) =>  b._id - a._id).slice(0,4)


    const Total_Weekly_Checkout = Checkout_filteredData.map(date => ({ [date.checkoutdate]: 1 })).reduce((acc, obj) => {const [date, count] = Object.entries(obj)[0]; return acc + count; }, 0);
    const Total_Weekly_Checkout_Roomtrentamount = Checkout_filteredData.map((data) => JSON.parse(data.roomrentamount)).reduce((acc , data) => acc + data ,0)
    const Total_Weekly_Checkout_Hostpayble = Checkout_filteredData.map((data) => data.roomrenthostpayable == "undefined" ? null : JSON.parse(data.roomrenthostpayable)).reduce((acc , data) => acc + data ,0)
    const Total_Weekly_Checkout_securitydepost = Checkout_filteredData.map((data) => JSON.parse(data.securitydeposit)).reduce((acc , data) => acc + data ,0)
    const Total_Weekly_Checkout_HostmanagementFees = Checkout_filteredData.map((data) => JSON.parse(data.hostmanagementfee)).reduce((acc , data) => acc + data ,0)
    const Total_Approved_Checkout_Booking = Checkout_filteredData.map((data) => data.softdelete === false).reduce((acc , data) => acc + data ,0)
    const Total_Cancel_Checkout_Booking = Checkout_filteredData.map((data) => data.softdelete === true).reduce((acc , data) => acc + data ,0)
    const Total_Checkout_Guests = Checkout_filteredData.map((data) => data.guestname == undefined && data.guestname == " " ? null :  data.guestname)
    const Checkout = Checkout_filteredData.filter((data) => data.softdelete === false).sort((a,b) =>  b._id - a._id).slice(0,4)
    

    return {
        Total_Weekly_Checkin : Total_Weekly_Checkin,
        Total_Weekly_Roomtrentamount : JSON.parse(Number(Total_Weekly_Roomtrentamount).toFixed(2)),
        Total_Weekly_Hostpayble : JSON.parse(Number(Total_Weekly_Hostpayble).toFixed(2)),
        Total_Weekly_securitydepost : JSON.parse(Number(Total_Weekly_securitydepost).toFixed(2)),
        Total_Weekly_HostmanagementFees : JSON.parse(Number(Total_Weekly_HostmanagementFees).toFixed(2)),
        Total_Approved_Booking : Total_Approved_Booking,
        Total_Cancel_Booking : Total_Cancel_Booking,
        Total_Guests :  Total_Guests.length,
        data: datas,
        Total_Weekly_Checkout : Total_Weekly_Checkout,
        Total_Weekly_Checkout_Roomtrentamount : JSON.parse(Number(Total_Weekly_Checkout_Roomtrentamount).toFixed(2)),
        Total_Weekly_Checkout_Hostpayble : JSON.parse(Number(Total_Weekly_Checkout_Hostpayble).toFixed(2)),
        Total_Weekly_Checkout_securitydepost : JSON.parse(Number(Total_Weekly_Checkout_securitydepost).toFixed(2)),
        Total_Weekly_Checkout_HostmanagementFees : JSON.parse(Number(Total_Weekly_Checkout_HostmanagementFees).toFixed(2)),
        Total_Approved_Checkout_Booking : Total_Approved_Checkout_Booking,
        Total_Cancel_Checkout_Booking : Total_Cancel_Checkout_Booking,
        Total_Checkout_Guests :  Total_Checkout_Guests.length,
        checkoutData: Checkout
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

const CheckoutfilteredData = data.filter((item) => {
    const checkoutDate = new Date(item.checkoutdate);
    return checkoutDate > today && checkoutDate <= nextMonth;
});

const Total_Monthly_Checkin = filteredData.map(date => ({ [date.checkindate]: 1 })).reduce((acc, obj) => {const [date, count] = Object.entries(obj)[0]; return acc + count; }, 0);
const Total_Monthly_Roomtrentamount = filteredData.map((data) => JSON.parse(data.roomrentamount)).reduce((acc , data) => acc + data ,0)
const Total_Monthly_Hostpayble = filteredData.map((data) => data.roomrenthostpayable == "undefined" ? null : JSON.parse(data.roomrenthostpayable)).reduce((acc , data) => acc + data ,0)
const Total_Monthly_securitydepost = filteredData.map((data) => JSON.parse(data.securitydeposit)).reduce((acc , data) => acc + data ,0)
const Total_Monthly_HostmanagementFees = filteredData.map((data) => JSON.parse(data.hostmanagementfee)).reduce((acc , data) => acc + data ,0)
const Total_Approved_Booking = filteredData.map((data) => data.softdelete === false).reduce((acc , data) => acc + data ,0)
const Total_Cancel_Booking = filteredData.map((data) => data.softdelete === true).reduce((acc , data) => acc + data ,0)
const Total_Guests = filteredData.map((data) => data.guestname == undefined && data.guestname == " " ? null :  data.guestname)
const datas = filteredData.filter((data) => data.softdelete === false).sort((a,b) =>  b._id - a._id).slice(0,4)


const Total_Monthly_Checkout = CheckoutfilteredData.map(date => ({ [date.checkoutdate]: 1 })).reduce((acc, obj) => {const [date, count] = Object.entries(obj)[0]; return acc + count; }, 0);
const Total_Monthly_Checkout_Roomtrentamount = CheckoutfilteredData.map((data) => JSON.parse(data.roomrentamount)).reduce((acc , data) => acc + data ,0)
const Total_Monthly_Checkout_Hostpayble = CheckoutfilteredData.map((data) => data.roomrenthostpayable == "undefined" ? null : JSON.parse(data.roomrenthostpayable)).reduce((acc , data) => acc + data ,0)
const Total_Monthly_Checkout_securitydepost = CheckoutfilteredData.map((data) => JSON.parse(data.securitydeposit)).reduce((acc , data) => acc + data ,0)
const Total_Monthly_Checkout_HostmanagementFees = CheckoutfilteredData.map((data) => JSON.parse(data.hostmanagementfee)).reduce((acc , data) => acc + data ,0)
const Total_Approved_Checkout_Booking = CheckoutfilteredData.map((data) => data.softdelete === false).reduce((acc , data) => acc + data ,0)
const Total_Cancel_Checkout_Booking = CheckoutfilteredData.map((data) => data.softdelete === true).reduce((acc , data) => acc + data ,0)
const Total_Checkout_Guests = CheckoutfilteredData.map((data) => data.guestname == undefined && data.guestname == " " ? null :  data.guestname)
const checkoutData = CheckoutfilteredData.filter((data) => data.softdelete === false).sort((a,b) =>  b._id - a._id).slice(0,4)

return {
    Total_Monthly_Checkin : Total_Monthly_Checkin,
    Total_Monthly_Roomtrentamount : JSON.parse(Number(Total_Monthly_Roomtrentamount).toFixed(2)),
    Total_Monthly_Hostpayble : JSON.parse(Number(Total_Monthly_Hostpayble).toFixed(2)),
    Total_Monthly_securitydepost : JSON.parse(Number(Total_Monthly_securitydepost).toFixed(2)),
    Total_Monthly_HostmanagementFees : JSON.parse(Number(Total_Monthly_HostmanagementFees).toFixed(2)),
    Total_Approved_Booking : Total_Approved_Booking,
    Total_Cancel_Booking : Total_Cancel_Booking,
    Total_Guests :  Total_Guests.length,
    data: datas,
    Total_Monthly_Checkout : Total_Monthly_Checkout,
    Total_Monthly_Checkout_Roomtrentamount : JSON.parse(Number(Total_Monthly_Checkout_Roomtrentamount).toFixed(2)),
    Total_Monthly_Checkout_Hostpayble : JSON.parse(Number(Total_Monthly_Checkout_Hostpayble).toFixed(2)),
    Total_Monthly_Checkout_securitydepost : JSON.parse(Number(Total_Monthly_Checkout_securitydepost).toFixed(2)),
    Total_Monthly_Checkout_HostmanagementFees : JSON.parse(Number(Total_Monthly_Checkout_HostmanagementFees).toFixed(2)),
    Total_Approved_Checkout_Booking : Total_Approved_Checkout_Booking,
    Total_Cancel_Checkout_Booking : Total_Cancel_Checkout_Booking,
    Total_Checkout_Guests :  Total_Checkout_Guests.length,
    checkoutData: checkoutData
};
}

const BookingDataByYearly = (today , data) => {
const nextYear = new Date(today);
nextYear.setFullYear(nextYear.getFullYear() + 1);

const filteredData = data.filter((item) => {
    const checkinDate = new Date(item.checkindate);
    return checkinDate > today && checkinDate <= nextYear;
});

const Checkout_filteredData = data.filter((item) => {
    const checkoutDate = new Date(item.checkoutdate);
    return checkoutDate > today && checkoutDate <= nextYear;
});

const Total_Yearly_Checkin = filteredData.map(date => ({ [date.checkindate]: 1 })).reduce((acc, obj) => {const [date, count] = Object.entries(obj)[0]; return acc + count; }, 0);
const Total_Yearly_Roomtrentamount = filteredData.map((data) => JSON.parse(data.roomrentamount)).reduce((acc , data) => acc + data ,0)
const Total_Yearly_Hostpayble = filteredData.map((data) => data.roomrenthostpayable == "undefined" ? null : JSON.parse(data.roomrenthostpayable)).reduce((acc , data) => acc + data ,0)
const Total_Yearly_securitydepost = filteredData.map((data) => JSON.parse(data.securitydeposit)).reduce((acc , data) => acc + data ,0)
const Total_Yearly_HostmanagementFees = filteredData.map((data) => JSON.parse(data.hostmanagementfee)).reduce((acc , data) => acc + data ,0)
const Total_Approved_Booking = filteredData.map((data) => data.softdelete === false).reduce((acc , data) => acc + data ,0)
const Total_Cancel_Booking = filteredData.map((data) => data.softdelete === true).reduce((acc , data) => acc + data ,0)
const Total_Guests = filteredData.map((data) => data.guestname == undefined && data.guestname == " " ? null :  data.guestname)
const datas = filteredData.filter((data) => data.softdelete === false).sort((a,b) =>  Date.parse(b.checkindate) - Date.parse(a.checkindate)).slice(0,4)

const Total_Yearly_Checkout = Checkout_filteredData.map(date => ({ [date.checkoutdate]: 1 })).reduce((acc, obj) => {const [date, count] = Object.entries(obj)[0]; return acc + count; }, 0);
const Total_Yearly_Checkout_Roomtrentamount = Checkout_filteredData.map((data) => JSON.parse(data.roomrentamount)).reduce((acc , data) => acc + data ,0)
const Total_Yearly_Checkout_Hostpayble = Checkout_filteredData.map((data) => data.roomrenthostpayable == "undefined" ? null : JSON.parse(data.roomrenthostpayable)).reduce((acc , data) => acc + data ,0)
const Total_Yearly_Checkout_securitydepost = Checkout_filteredData.map((data) => JSON.parse(data.securitydeposit)).reduce((acc , data) => acc + data ,0)
const Total_Yearly_Checkout_HostmanagementFees = Checkout_filteredData.map((data) => JSON.parse(data.hostmanagementfee)).reduce((acc , data) => acc + data ,0)
const Total_Approved_Checkout_Booking = Checkout_filteredData.map((data) => data.softdelete === false).reduce((acc , data) => acc + data ,0)
const Total_Cancel_Checkout_Booking = Checkout_filteredData.map((data) => data.softdelete === true).reduce((acc , data) => acc + data ,0)
const Total_Checkout_Guests = Checkout_filteredData.map((data) => data.guestname == undefined && data.guestname == " " ? null :  data.guestname)
const Checkout = Checkout_filteredData.filter((data) => data.softdelete === false).sort((a,b) =>  Date.parse(b.checkoutdate) - Date.parse(a.checkoutdate)).slice(0,4)


return {
    Total_Yearly_Checkin : Total_Yearly_Checkin,
    Total_Yearly_Roomtrentamount : JSON.parse(Number(Total_Yearly_Roomtrentamount).toFixed(2)),
    Total_Yearly_Hostpayble : JSON.parse(Number(Total_Yearly_Hostpayble).toFixed(2)),
    Total_Yearly_securitydepost : JSON.parse(Number(Total_Yearly_securitydepost).toFixed(2)),
    Total_Yearly_HostmanagementFees : JSON.parse(Number(Total_Yearly_HostmanagementFees).toFixed(2)),
    Total_Approved_Booking : Total_Approved_Booking,
    Total_Cancel_Booking : Total_Cancel_Booking,
    Total_Guests :  Total_Guests.length,
    data: datas,
    Total_Yearly_Checkout : Total_Yearly_Checkout,
    Total_Yearly_Checkout_Roomtrentamount : JSON.parse(Number(Total_Yearly_Checkout_Roomtrentamount).toFixed(2)),
    Total_Yearly_Checkout_Hostpayble : JSON.parse(Number(Total_Yearly_Checkout_Hostpayble).toFixed(2)),
    Total_Yearly_Checkout_securitydepost : JSON.parse(Number(Total_Yearly_Checkout_securitydepost).toFixed(2)),
    Total_Yearly_Checkout_HostmanagementFees : JSON.parse(Number(Total_Yearly_Checkout_HostmanagementFees).toFixed(2)),
    Total_Approved_Checkout_Booking : Total_Approved_Checkout_Booking,
    Total_Cancel_Checkout_Booking : Total_Cancel_Checkout_Booking,
    Total_Checkout_Guests :  Total_Checkout_Guests.length,
    Checkout: Checkout
};
}

const TenantDataOverview = (today , data) => {
    
    const ActiveTenantContract = data.filter((data) => new Date(data.contractenddate) > new Date() ? data : null)
    const ExpireTenantContract = data.filter((data) =>  new Date(data.contractenddate) < new Date() ? data : null  ).length
    
    const next90Days = new Date();
    next90Days.setDate(today.getDate() + 90);
    const TotalUpcomingContractin90Days =  data.filter((data) => {
        const startDate = new Date(data.contractstartdate)
        return startDate >= today && startDate <= next90Days;
    })

    const previous90Days = new Date();
    previous90Days.setDate(today.getDate() - 90);
    const Totalexpiredcontractsin90Days =  data.filter((data) => {
        const startDate = new Date(data.contractstartdate)
       return startDate >= previous90Days && startDate <= today;
    })
   
    const totalTerminatedContracts =  data.map((data) => data.contractupdation === "terminated").reduce((acc,data) => acc + data , 0)
    const totalSecurityDepost = data.map((data) => data.securitydepositamount != "undefined" ? Number(data.securitydepositamount) : null).reduce((acc , data) => acc + data ,0)

    const earlythreemonths = new Date()
    earlythreemonths.setMonth(today.getMonth() - 3)

    const threeMonthsRevnue = data.filter((data) => {
        const startDate = new  Date(data.contractstartdate);
        if(startDate >= earlythreemonths && startDate <= today){
            return data
        }
    })

   const totalrevnue = threeMonthsRevnue.map((data) => Number(data.rentalamount)).reduce((acc, data) => acc + data ,0)

    return{
        ActiveTenantContract : ActiveTenantContract.slice(0,4),
        TotalActiveTenantContract : ActiveTenantContract.length,
        TotalExpireTenantContract : ExpireTenantContract,
        TotalUpcomingContractin90Days : TotalUpcomingContractin90Days.length,
        UpcomingContractin90Days : TotalUpcomingContractin90Days.slice(0,4),
        TotalnoOfexpiredcontractsin90days : Totalexpiredcontractsin90Days.length,
        expiredcontractsin90days : Totalexpiredcontractsin90Days.slice(0,4),
        TotalTerminatedContracts : totalTerminatedContracts,
        TotalSecurityDeposit : totalSecurityDepost,
        threeMonthsRevnue : threeMonthsRevnue.slice(0,4),
        TotalThreeMonthsRevenue: totalrevnue
    }
}

const TenantPropertyData = (data) => {
   return {
   propertiesDetails : data.slice(0,4),
   totalProperties : data.length
   }
}

const ManagementContractOverview = (today ,data)  => {

   const totalActiveContracts = data.filter((item) => item.contractenddate > today)
   const totalExpiredContracts = data.filter((item) => item.contractenddate < today)
   const totallongtermContracts = data.filter((item) => item.contractperiod === "Long Term")
   const totalshorttermContracts = data.filter((item) => item.contractperiod === "Short Term")

   const next90Days = new Date();
   next90Days.setDate(today.getDate() + 90);
   const TotalUpcomingActiveContractin90Days =  data.filter((data) => {
       const startDate = new Date(data.contractstartdate)
       return startDate > today && startDate <= next90Days;
   })

   const previous90Days = new Date();
    previous90Days.setDate(today.getDate() - 90);
    const Totalexpiredcontractsin90Days =  data.filter((data) => {
        const startDate = new Date(data.contractstartdate)
       return startDate >= previous90Days && startDate < today;
    })

   const managementfee =  data.filter((item) => item.managementfee != "" && item.managementfee != undefined ? Number(item.managementfee) : null)
   const totoalmanagementfee = managementfee.map((data) => Number(data.managementfee)).reduce((acc,data) => acc+ data,0)


    return{
        Total_Active_Contracts : totalActiveContracts.length,
        Total_Expired_Contracts : totalExpiredContracts.length,
        Total_LongTerm_Contracts : totallongtermContracts.length,
        Total_ShortTerm_Contracts : totalshorttermContracts.length,
        UpcomingActiveContractsIn90Days : TotalUpcomingActiveContractin90Days.slice(0,4),
        UpcomingExpiredContractsIn90Days : Totalexpiredcontractsin90Days.slice(0,4),
        TotalManagementFees : totoalmanagementfee
    }
}

const SaleregisterOverview = (data) => {
   

    const totalUnsuccessfultransaction = data.filter((item) => item.transaction_type === "Unsuccessful");
    const totalsuccessfultransaction = data.filter((item) => item.transaction_type === "Successful");
    const totalinprogresstransaction = data.filter((item) => item.transaction_type === "InProgress");
    const totalseller = data.filter((item) => item.seller_id)
    const totalbuyer = data.filter((data) => data.buyer_id != undefined && data.buyer_id !== "")

    

    
    

        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();

       const filteredData = data.filter((item) => {
            if(new Date(item.createdAt).getFullYear() === currentYear){
                return item
            }
            
        })
      const totalSOld =  filteredData.filter((data) => data.sold_for != "" && data.sold_for != undefined ?  Number(data.sold_for) : null)
      const soldfor = totalSOld.map((data) => Number(data.sold_for)).reduce((acc,data) => acc+ data , 0)


      const totalappartment = data.filter((item) => item.propertytypesegration === "Residential- Apartment")
      const totaltownhouse = data.filter((item) => item.propertytypesegration === "Townhouse")
      const totalbunglow = data.filter((item) => item.propertytypesegration === "Bungalow")
      const totalvilla = data.filter((item) => item.propertytypesegration === "Villa")
    
     
      
    return {
        Total_Unsuccessful_Transaction : totalUnsuccessfultransaction.length,
        Total_Successful_Transaction : totalsuccessfultransaction.length,
        Total_Inprogress_Transaction : totalinprogresstransaction.length,
        Total_Seller : totalseller.length,
        Total_Buyer : totalbuyer.length,
        Yearly_Sold_Amount : soldfor,
        Total_Appartment : totalappartment.length,
        Total_Townhouse : totaltownhouse.length,
        Total_Bunglow : totalbunglow.length,
        Total_Villa : totalvilla.length

    }
}
module.exports = {
    BookingDataByTomorrow,
    BookingDataByWeekly,
    BookingDataByMonthly,
    BookingDataByYearly,
    TenantDataOverview,
    TenantPropertyData,
    ManagementContractOverview,
    SaleregisterOverview
}