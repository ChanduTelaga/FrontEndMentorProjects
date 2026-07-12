const now = new Date();
const inpDay = document.getElementById("day");
const inpMonth = document.getElementById("month");
const inpYear = document.getElementById("year")

const years = document.getElementById("npYears");
const months = document.getElementById("npMonths");
const days = document.getElementById("npDays");

const objMonths = {
  1: { name: "January", days: 31 },
  2: { name: "February", days: 28 }, // handle leap year separately
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

function calculateAge(inpDay, inpMonth, inpYear) {
    const birthDate = new Date(inpYear, inpMonth - 1, inpDay);
    const now = new Date();

    let yearsN = now.getFullYear() - birthDate.getFullYear();
    let monthsN = now.getMonth() - birthDate.getMonth();
    if(monthsN < 0) {
        monthsN = Math.abs(monthsN);
    }
    let daysN = now.getDate() - birthDate.getDate();
    if(daysN < 0) {
        daysN = Math.abs(daysN);
    }

    years.innerText = yearsN;
    months.innerText = monthsN; 
    days.innerText = daysN;
}

calculateAge(inpDay, inpMonth, inpYear);


