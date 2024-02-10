
 const calculateMonth = (data) => {
    try{
        let cumulativeExcessNights = 0;
        console.log("=========>",data)
    // return bookedNights.map((book, index) => {
    //   const total = totalNightss[index];
  
    //   if (book > total) {
    //     let difference = book - total;
    //     cumulativeExcessNights += difference;
  
    //     // If it's not the last booking, add the excess only to the next booking
    //     if (index < bookedNights.length - 1) {
    //       bookedNights[index + 1] += cumulativeExcessNights;
    //       cumulativeExcessNights = 0;  // Reset cumulative excess nights after adding to the next booking
    //     }
  
    //     return book - difference;  // Return the original booking without the excess
    //   } else {
    //     // Subtract any excess nights that were added to the previous booking
    //     book -= cumulativeExcessNights;
  
    //     // Reset cumulative excess nights for the current booking
    //     cumulativeExcessNights = 0;
  
    //     return book;
    //   }
    // });
    }catch(err){
        console.log("============>",err)
    }
}

module.expors = calculateMonth



const calculateMonthlyNight = (bookedNights, totalNightss) => {
    
  };