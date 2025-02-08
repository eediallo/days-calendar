 export const weekdays=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

 function populateDaysOfMonth()
 {
    const daysOfMonth=[];
    for(let i=1;i<=31;i++)
        {
            daysOfMonth.push(i);
        }
        return daysOfMonth;
 }
 
export {populateDaysOfMonth};