function GetMonthDays(date) {
    return new Date(new Date(date).getFullYear(), new Date(date).getMonth() + 1, 0).getDate();
}

function DateDifference(first, second) {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
}


let entries = [
    {
        "checkindate": "2024-01-04T19:00:00.000Z",
        "checkoutdate": "2024-01-08T19:00:00.000Z",
        "nonight": 4
    },
    {
        "checkindate": "2024-01-08T19:00:00.000Z",
        "checkoutdate": "2024-01-11T19:00:00.000Z",
        "nonight": 3
    },
    {
        "checkindate": "2024-01-11T19:00:00.000Z",
        "checkoutdate": "2024-01-18T19:00:00.000Z",
        "nonight": 7
    },
    {
        "checkindate": "2024-01-19T19:00:00.000Z",
        "checkoutdate": "2024-01-22T19:00:00.000Z",
        "nonight": 3
    },
    {
        "checkindate": "2024-01-24T19:00:00.000Z",
        "checkoutdate": "2024-02-01T19:00:00.000Z",
        "nonight": 8
    },
    {
        "checkindate": "2024-02-01T19:00:00.000Z",
        "checkoutdate": "2024-02-07T19:00:00.000Z",
        "nonight": 6
    },
    {
        "checkindate": "2024-02-07T19:00:00.000Z",
        "checkoutdate": "2024-02-11T19:00:00.000Z",
        "nonight": 4
    },
    {
        "checkindate": "2024-02-11T19:00:00.000Z",
        "checkoutdate": "2024-02-16T19:00:00.000Z",
        "nonight": 5
    },
    {
        "checkindate": "2024-02-16T19:00:00.000Z",
        "checkoutdate": "2024-02-21T19:00:00.000Z",
        "nonight": 5
    },
    {
        "checkindate": "2024-02-21T19:00:00.000Z",
        "checkoutdate": "2024-02-29T19:00:00.000Z",
        "nonight": 8
    },
    {
        "checkindate": "2024-03-30T19:00:00.000Z",
        "checkoutdate": "2024-04-06T19:00:00.000Z",
        "nonight": 7
    }
]

let entries1 = [
    {
        "checkindate": "2024-02-01T19:00:00.000Z",
        "checkoutdate": "2024-02-07T19:00:00.000Z",
        "nonight": 6
    },
    {
        "checkindate": "2024-02-07T19:00:00.000Z",
        "checkoutdate": "2024-02-11T19:00:00.000Z",
        "nonight": 4
    },
    {
        "checkindate": "2024-02-11T19:00:00.000Z",
        "checkoutdate": "2024-02-16T19:00:00.000Z",
        "nonight": 5
    },
    {
        "checkindate": "2024-02-16T19:00:00.000Z",
        "checkoutdate": "2024-02-21T19:00:00.000Z",
        "nonight": 5
    },
    {
        "checkindate": "2024-02-21T19:00:00.000Z",
        "checkoutdate": "2024-02-29T19:00:00.000Z",
        "nonight": 8
    },
    {
        "checkindate": "2024-03-30T19:00:00.000Z",
        "checkoutdate": "2024-04-06T19:00:00.000Z",
        "nonight": 7
    }
]

function calcuate2(entries,from = '',to = '') {
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    let MonthData = {
    }
    let toDate = to ? new Date(to) : new Date();
    let fromDate = from ? new Date(from) : new Date();

    entries.forEach(x => {

        let checkInDate = new Date(x.checkindate);
        let checkOutDate = new Date(x.checkoutdate);
        

        var compareDate = new Date(checkOutDate.getFullYear(), checkOutDate.getMonth() +1, 1);
        let nextMonthDate = ''
    
        while(checkInDate < compareDate) {
            let monthName = monthNames[new Date(checkInDate).getMonth()]
            let current = new Date(checkInDate)
            nextMonthDate = new Date(current.setDate(current.getDate()+1+(GetMonthDays(checkInDate) - checkInDate.getDate())));
            let nights; 
            let nextMonthTransition = false
            if(Date.parse(checkOutDate) + 1>Date.parse(nextMonthDate)){
                 nights= (GetMonthDays(checkInDate) - checkInDate.getDate());
                 nextMonthTransition = true;
            }
            else {
                 nights= DateDifference(checkInDate, checkOutDate);

            }
            
            if(checkInDate<fromDate){
                let skippedNights = DateDifference(checkInDate, fromDate);
                console.log('skippedNights from DAte',skippedNights);
                nights = nights - skippedNights
                
            }
            const formattedDate = `${monthName} ${new Date(checkInDate).getFullYear()}`;
            if (!MonthData[formattedDate]) MonthData[formattedDate] = 0;
            console.log('nights',formattedDate,nights);
            MonthData[formattedDate] += nights
            const nextformattedDate = `${monthNames[new Date(checkInDate.getFullYear(),checkInDate.getMonth()+1).getMonth()]} ${new Date(checkInDate).getFullYear()}`;
            checkInDate.setDate(checkInDate.getDate()+1+(GetMonthDays(checkInDate) - checkInDate.getDate()));
            if(nextMonthTransition && (checkInDate < compareDate)){
                if (!MonthData[nextformattedDate]) MonthData[nextformattedDate] = 0;
                MonthData[nextformattedDate] += 1

                if(checkOutDate>toDate){
                    let skippedNights = DateDifference(toDate, checkOutDate);
                    console.log('skippedNights toDate',skippedNights);
                    MonthData[nextformattedDate] -= skippedNights
                     
                }
                 
            }
        }

    })
    Object.keys(MonthData).map(month=>{
        if(MonthData[month]<0) delete MonthData[month] 
    })

    console.log(MonthData)
}

calcuate2(entries,'2024-01-01T00:50:48.654Z','2024-03-31T00:50:48.654Z')
