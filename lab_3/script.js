let groups=[
 { membersCount:"15 студентів",
  course:"1 курс",
  faculty:"IIТ",
  groupCode:"КІ-24-1",
 },
 
 { membersCount:"8 студентів",
  course:"2 курс",
  faculty:"IIТ",
  groupCode:"МІТ-23-1К",
 },
 
 { membersCount:"20 студентів",
  course:"4 курс",
  faculty:"IIТ",
  groupCode:"ІСТ-21-1",
 }
];

let sessions=[
{
 subject:"Фронтенд-розробка та веб-дизайн",
 group:"КІ-24-1",
 fullName:"Слабінога М.О",
 dateOfSession:"06.12.2024",
 typeOfFinals:"Екзамен",
},

{
 subject:"Програмування",
 group:"ІСТ-21-1",
 fullName:"Пашковський Б.В",
 dateOfSession:"06.12.2024",
 typeOfFinals:"Екзамен",
},

{	
 subject:"Фізика",
 group:"МІТ-23-1К",
 fullName:"Мокляк В.В",
 dateOfSession:"06.12.2024",
 typeOfFinals:"Залік",
}
];

let subjects=[
{
 Name:"Фронтенд-розробка та веб-дизайн",
 TimeForSubject: "300 годин",
 department:"Кафедра комп'ютерних систем і мереж",
},

{
 Name:"Програмування",
 TimeForSubject:"180 годин",
 department:"Кафедра комп'ютерних систем і мереж",
},

{
 Name:"Фізика",
 TimeForSubject:"180 годин",
 department:"Кафедра загальної та прикладної фізики",
}
];

const sessionsTab=document.getElementById('session');
let sessionsTabContent=`
	<h3>Сесія</h3>
	<table class="table table-striped">
		<thead>
			<tr>
				<th>Дисципліна</th>
				<th>Група</th>
				<th>ПІБ викладача</th>
				<th>Вид контролю</th>
				<th>Дата</th>
			</tr>
		</thead>
		<tbody>
	`;
for(let i=0;i<sessions.length;i++){
	sessionsTabContent+=`
			<tr>
				<td>${sessions[i].subject}</td>
				<td>${sessions[i].group}</td>
				<td>${sessions[i].fullName}</td>
				<td>${sessions[i].typeOfFinals}</td>
				<td>${sessions[i].dateOfSession}</td>
			</tr>
	`;
}
sessionsTabContent+=`</tbody>
	  </table>`;
sessionsTab.innerHTML=sessionsTabContent;	

const groupsTab=document.getElementById('group');
let groupsTabContent=`
	<h3>Група</h3>
	<table class="table table-striped">
		<thead>
			<tr>
				<th>Код групи</th>
				<th>Факультет</th>
				<th>Курс</th>
				<th>Кількість студентів</th>
			</tr>
		</thead>
		<tbody>
	`;
for(let i=0;i<groups.length;i++){
         groupsTabContent+=`
			<tr>
				<td>${groups[i].groupCode}</td>
				<td>${groups[i].faculty}</td>
				<td>${groups[i].course}</td>
				<td>${groups[i].membersCount}</td>
			</tr>
	`;
}
groupsTabContent+=`</tbody>
	  </table>`;
groupsTab.innerHTML=groupsTabContent;
const subjectsTab=document.getElementById('subject');
let subjectsTabContent=`
	<h3>Дисципліна</h3>
	<table class="table table-striped">
		<thead>
			<tr>
				<th>Назва</th>
				<th>Кафедра</th>
				<th>Обсяг годин</th>
			</tr>
		</thead>
		<tbody>
	`;
for(let i=0;i<subjects.length;i++){
	subjectsTabContent+=`
			<tr>
				<td>${subjects[i].Name}</td>
				<td>${subjects[i].department}</td>
				<td>${subjects[i].TimeForSubject}</td>
			</tr>
	`;
}
subjectsTabContent+=`</tbody>
	  </table>`;
subjectsTab.innerHTML=subjectsTabContent;
