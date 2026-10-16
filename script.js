const students = [
  {name:"Aarav Sharma", id:"STU-1024", time:"09:42 AM", initials:"AS", tone:""},
  {name:"Priya Patel", id:"STU-1031", time:"09:35 AM", initials:"PP", tone:"alt"},
  {name:"Rohan Desai", id:"STU-1048", time:"09:18 AM", initials:"RD", tone:"green-alt"},
  {name:"Ananya Shah", id:"STU-1052", time:"08:56 AM", initials:"AS", tone:"alt"},
  {name:"Kabir Mehta", id:"STU-1060", time:"08:41 AM", initials:"KM", tone:"green-alt"},
  {name:"Isha Kulkarni", id:"STU-1073", time:"08:25 AM", initials:"IK", tone:""},
  {name:"Dev Joshi", id:"STU-1081", time:"08:11 AM", initials:"DJ", tone:"alt"}
];

function renderRows() {
  const tbody = document.getElementById("loginRows");
  tbody.innerHTML = students.map(s => `<tr>
    <td><div class="student-cell"><span class="student-avatar ${s.tone}">${s.initials}</span>${s.name}</div></td>
    <td>${s.id}</td><td>${s.time}</td><td><span class="status">Successful</span></td>
  </tr>`).join("");
}
document.getElementById("today").textContent = new Date().toLocaleDateString(undefined, {month:"short", day:"numeric", year:"numeric"});
renderRows();

document.getElementById("refreshBtn").addEventListener("click", () => {
  const now = new Date();
  const time = now.toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"});
  const names = [
    ["Meera Nair","MN"],["Aditya Rao","AR"],["Sara Khan","SK"],["Nikhil Patil","NP"]
  ];
  const selected = names[Math.floor(Math.random()*names.length)];
  students.unshift({name:selected[0],id:"STU-"+(1100+Math.floor(Math.random()*800)),time,initials:selected[1],tone:"alt"});
  students.pop();
  document.getElementById("totalLogins").textContent = Number(document.getElementById("totalLogins").textContent)+1;
  renderRows();
});

document.getElementById("addStudentBtn").addEventListener("click", () => {
  const count = document.getElementById("totalStudents");
  count.textContent = Number(count.textContent)+1;
  document.getElementById("studentTotalSide").textContent = count.textContent;
  document.getElementById("newStudents").textContent = Number(document.getElementById("newStudents").textContent)+1;
  alert("Demo student added! The student count has been updated for this session. No data is saved to a database.");
});
