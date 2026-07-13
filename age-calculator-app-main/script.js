const inpDay = document.getElementById("day");
const inpMonth = document.getElementById("month");
const inpYear = document.getElementById("year")

const years = document.getElementById("npYears");
const months = document.getElementById("npMonths");
const days = document.getElementById("npDays");
const btn = document.getElementById("down-arrow");

const objMonths = {
  1: { name: "January", days: 31 },
  2: { name: "February", days: 28 },
  3: { name: "March", days: 31 },
  4: { name: "April", days: 30 },
  5: { name: "May", days: 31 },
  6: { name: "June", days: 30 },
  7: { name: "July", days: 31 },
  8: { name: "August", days: 31 },
  9: { name: "September", days: 30 },
  10: { name: "October", days: 31 },
  11: { name: "November", days: 30 },
  12: { name: "December", days: 31 }
};

btn.addEventListener("click", () => {
    const d = parseInt(inpDay.value);
    const m = parseInt(inpMonth.value);
    const y = parseInt(inpYear.value);
    const birthDate = new Date(y, m - 1, d);
    const now = new Date();
    
    if (isNaN(d) || d < 1 || d > 31) {
        alert("Day must be between 1 and 31");
        return;
    }
    if (isNaN(m) || m < 1 || m > 12) {
        alert("Month must be between 1 and 12");
        return;
    }
    if (isNaN(y) || y > now.getFullYear()) {
        alert("Year must not be in the future");
        return;
    }


    let maxDays = objMonths[m].days;
    if(m == 2 && ((y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0))) {
        maxDays = 29;
    }

    if(d> maxDays) {
        alert(`${objMonths[m].name} doesnt have more than ${maxDays} days`);
        return;
    }

    let yearsN = now.getFullYear() - birthDate.getFullYear();
    console.log(yearsN)

    let monthsN = now.getMonth() - birthDate.getMonth();
    console.log(monthsN);
    if(monthsN < 0) {
        yearsN--;
        monthsN += 12;
    }

    let daysN = now.getDate() - birthDate.getDate();
    console.log(daysN);
    if(daysN < 0) {
        monthsN--;
        daysN += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }

    years.innerText = yearsN;
    months.innerText = monthsN; 
    days.innerText = daysN;
})



