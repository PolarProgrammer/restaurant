const hbox = document.querySelector(".hours");

//HI

let days = [
  { isOpen: false, day: "Mon", time: "time" },
  { day: "Tue" },
  { day: "Wed" },
  { day: "Thu" },
  { day: "Fri" },
  { day: "Sat" },
  { day: "Sun" },
];

const isOpen = document.querySelector(".isopen");



days.map((day) => {
    if(day.isOpen){
        isOpen.classList.add("open");
        isOpen.innerHTML = "Open"
    }
    else{
        isOpen.classList.add("close");
        isOpen.innerHTML = "Close"
    }
  hbox.innerHTML += `
    <div class="days-hours">
    <label>${day.day}</label>
    <p>Closed</p>
</div>
    `;
});

//     hbox.innerHTML = `<h2>Hours</h2>
//     <h3 class="close">Close</h3>
// <div class="days-hours">
//     <label>Mon</label>
//     <p>Closed</p>
// </div>
// <div class="days-hours">
//     <label>Tue</label>
//     <p>11:00 AM - 9:00 PM &nbsp; <span>Today</span></p>
// </div>
// <div class="days-hours">
//     <label>Wed</label>
//     <p>Closed</p>
// </div>
// <div class="days-hours">
//     <label>Thu</label>
//     <p>Closed</p>
// </div>
// <div class="days-hours">
//     <label>Fri</label>
//     <p>Closed</p>
// </div>
// <div class="days-hours">
//     <label>Sat</label>
//     <p>Closed</p>
// </div>
// <div class="days-hours highlight">
//     <label>Sun</label>
//     <p>Closed</p>
// </div>`;
