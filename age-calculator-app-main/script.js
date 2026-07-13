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

btn.addEventListener("click", (e) => {
    if(parseInt(inpDay.value) >31) {
        alert("Input value of Day should be in rage of 1 to 31");
        e.preventDefault();
    }
    if(parseInt(inpMonth.value) >12) {
        alert("Input value of Month should be in rage of 1 to 12 as there are only 12 months lol 😂");
        e.preventDefault();
    }

    if(parseInt(inpDay.value) > objMonths[parseInt(inpMonth.value)].days) {
        console.log(objMonths[parseInt(inpMonth.value)].days);
        alert(`${objMonths[parseInt(inpMonth.value)].name} doesnt have more than ${objMonths[parseInt(inpMonth.value)].days} days`);
        e.preventDefault();
    }
})

function calculateAge() {
    console.log("ran")
    const d = parseInt(inpDay.value);
    const m = parseInt(inpMonth.value);
    const y = parseInt(inpYear.value)
    const birthDate = new Date(y, m - 1, d);
    console.log("BirthDate: ", birthDate)

    const now = new Date();
    console.log("Now: ", now)

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
}

btn.addEventListener("click", calculateAge);  




