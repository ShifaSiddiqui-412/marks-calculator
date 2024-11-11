let rollNo = 25;
let nam = "Abrish Siddqui";
let tName = "Miss Maliha";
let cla = "10th";
let eMarks = parseInt(prompt("Enter English's marks out of 100:"));
let uMarks = parseInt(prompt("Enter Urdu's marks out of 100:"));
let mMarks = parseInt(prompt("Enter Maths's marks out of 100:"));
let iMarks = parseInt(prompt("Enter Islamiat's marks out of 100:"));
let psMarks = parseInt(prompt("Enter Pak.Studies marks out of 100:"));
let total = eMarks + uMarks + mMarks + iMarks + psMarks;
let per = total / 500 * 100;
let grade;

if (per <= 100 && per >= 80) { grade = "A+"; }
else if (per <= 79 && per >= 70) { grade = "A"; }
else if (per <= 69 && per >= 60) { grade = "B"; }
else if (per <= 59 && per >= 50) { grade = "c"; }
else if (per <= 49 && per >= 40) { grade = "D"; }
else { (grade = "U"); }

//Details
document.write("<table border=0 width=300 height=90 align=center>");
document.write("<tr><td>Roll no</td><td>:</td><td>", rollNo, "</td></tr>");
document.write("<tr><td>Name<td>:</td></td><td>", nam, "</td></tr>");
document.write("<tr><td>Teacher's Name<td>:</td></td><td>", tName, "</td></tr>");
document.write("<tr><td>Class<td>:</td></td><td>", cla, "</td></tr><br><br>");

//Marksheet
document.write("<table border=6 width=400 height=400 align=center>");
document.write("<br><br><br><tr><th>Subjects</th><th>Marks Obtained</th><th>Out Of</th></tr>");
document.write("<tr><td align=center >English</td><td align=center align=center>", eMarks, "</td><td align=center>100</td>");
document.write("<tr><td align=center >Urdu</td><td align=center>", uMarks, "</td><td align=center>100</td>");
document.write("<tr><td align=center >Maths</td><td align=center>", mMarks, "</td><td align=center>100</td>");
document.write("<tr><td align=center >Islamiat</td><td align=center>", iMarks, "</td><td align=center>100</td>");
document.write("<tr><td align=center >Pak.Stds</td><td align=center>", psMarks, "</td><td align=center>100</td>");
document.write("<tr><td align=center >Total Marks</td><td align=center>", total, "</td><td align=center>500</td>");
document.write("<tr><td align=center >Percentage</td><td align=center colspan=2>", per, "</td>");
document.write("<tr><td align=center >Grade</td><td align=center colspan=2>", grade, "</td>");



