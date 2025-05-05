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
]
sessionsLastId=3;
groupsLastId=3;
subjectsLastId=3;
function displaySessions(){
const sessionsTab=document.getElementById('session');
let sessionsTabContent=`
	<h3>Сесія</h3>
	<button id="addSession" class="btn btn-success" data-toggle="modal" data-target="#sessionModal">Додати</button>
	<table class="table table-striped">
		<thead>
			<tr>
				<th>Дисципліна</th>
				<th>Група</th>
				<th>ПІБ викладача</th>
				<th>Вид контролю</th>
				<th>Дата</th>
				<th>Дії</th>
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
				<td>
						<button data-id="${sessions[i].id}" class="edit-session btn btn-warning">Редагувати</button>
						<button data-id="${sessions[i].id}" class="delete-session btn btn-danger">Видалити</button>
				</td>
			</tr>
	`;
}
sessionsTabContent+=`</tbody>
	  </table>`;
sessionsTab.innerHTML=sessionsTabContent;	
}
function displayGroups(){
const groupsTab=document.getElementById('group');
const sessionSelect=document.getElementById('sessionGroupInput');
let groupSelectContent=``;
let groupsTabContent=`
	<h3>Група</h3>
	<button id="addGroup" class="btn btn-success" data-toggle="modal" data-target="#groupModal">Додати</button>
	<table class="table table-striped">
		<thead>
			<tr>
				<th>Код групи</th>
				<th>Факультет</th>
				<th>Курс</th>
				<th>Кількість студентів</th>
				<th>Дії</th>
			</tr>
		</thead>
		<tbody>
	`;
for(let i=0;i<groups.length;i++){
	groupSelectContent+=`<option value="${groups[i].groupCode}">${groups[i].groupCode}</option>`
         groupsTabContent+=`
			<tr>
				<td>${groups[i].groupCode}</td>
				<td>${groups[i].faculty}</td>
				<td>${groups[i].course}</td>
				<td>${groups[i].membersCount}</td>
				<td>
						<button data-id="${groups[i].id}" class="edit-group btn btn-warning">Редагувати</button>
						<button data-id="${groups[i].id}" class="delete-group btn btn-danger">Видалити</button>
				</td>
			</tr>
	`;
}
groupsTabContent+=`</tbody>
	  </table>`;
groupsTab.innerHTML=groupsTabContent;
groupSelect.innerHTML=groupSelectContent;
}
function displaySubjects(){
const subjectsTab=document.getElementById('subject');
const sessionSelect=document.getElementById('sessionSubjectInput');
let subjectSelectContent=``;
let subjectsTabContent=`
	<h3>Дисципліна</h3>
	<button id="addSubject" class="btn btn-success" data-toggle="modal" data-target="#subjectModal">Додати</button>
	<table class="table table-striped">
		<thead>
			<tr>
				<th>Назва</th>
				<th>Кафедра</th>
				<th>Обсяг годин</th>
				<th>Дії</th>
			</tr>
		</thead>
		<tbody>
	`;
for(let i=0;i<subjects.length;i++){
	subjectSelectContent+=`<option value="${subjects[i].Name}">${subjects[i].Name}</option>`
	subjectsTabContent+=`
			<tr>
				<td>${subjects[i].Name}</td>
				<td>${subjects[i].department}</td>
				<td>${subjects[i].TimeForSubject}</td>
					<td>
						<button data-id="${subjects[i].id}" class="edit-subject btn btn-warning">Редагувати</button>
						<button data-id="${subjects[i].id}" class="delete-subject btn btn-danger">Видалити</button>
				</td>
			</tr>
	`;
}
subjectsTabContent+=`</tbody>
	  </table>`;
subjectsTab.innerHTML=subjectsTabContent;
subjectSelect.innerHTML=subjectSelectContent;
}
displaySessions();
displayGroups();
displaySubjects();
document.addEventListener('click', function(e){
  if(e.target.classList.contains('delete-session')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	for(let i=0;i<sessions.length;i++){
		if(elementId==sessions[i].id){
			sessions.splice(i,1);
			break;
		}
	}
	displaySessions();
  } else if(e.target.classList.contains('delete-group')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	for(let i=0;i<groups.length;i++){
		if(elementId==groups[i].id){
			groups.splice(i,1);
			break;
		}
	}
	displayGroups();
  } else if(e.target.classList.contains('delete-subject')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	for(let i=0;i<subjects.length;i++){
		if(elementId==subjects[i].id){
			subjects.splice(i,1);
			break;
		}
	}
	displaySubjects();
  } else if(e.target.classList.contains('edit-subject')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	for(let i=0;i<subjects.length;i++){
		if(elementId==subjects[i].id){
			document.getElementById('subjectIdInput').value=subjects[i].id;
			document.getElementById('subjectNameInput').value=subjects[i].Name;
			document.getElementById('subjectDepartmentInput').value=subjects[i].department; 
			document.getElementById('subjectTimeForSubjectInput').value=subjects[i].TimeForSubject;
			document.getElementById('addSubject').click();
			break;
		}
	}
  } else if(e.target.classList.contains('edit-groups')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	for(let i=0;i<groups.length;i++){
		if(elementId==groups[i].id){
			document.getElementById('groupsIdInput').value=groups[i].id;
			document.getElementById('groupsGroupCodeInput').value=groups[i].groupCode;
			document.getElementById('groupsFacultyInput').value=groups[i].faculty; 
			document.getElementById('groupsCourseInput').value=groups[i].course;
			document.getElementById('groupsMembersCountInput').value=groups[i].membersCount;
			document.getElementById('addGroups').click();
			break;
		}
	}
  } else if(e.target.classList.contains('edit-session')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	for(let i=0;i<sessions.length;i++){
		if(elementId==sessions[i].id){
			document.getElementById('sessionsIdInput').value=sessions[i].id;
			document.getElementById('sessionsSubjectInput').value=sessions[i].subject;
			document.getElementById('sessionsGroupInput').value=sessions[i].group; 
			document.getElementById('sessionsFullNameInput').value=sessions[i].fullName;
			document.getElementById('sessionsTypeOfFinalsInput').value=sessions[i].typeOfFinals;
			document.getElementById('sessionsDateOfSessionInput').value=sessions[i].dateOfSession;
			document.getElementById('addSessions').click();
			break;
		}
	}
  }
});
document.addEventListener('submit', function(e){
	if(e.target.id=="subjectForm"){
		e.preventDefault();
		let id=document.getElementById('subjectIdInput').value;
		let name=document.getElementById('subjectNameInput').value;
		let department=document.getElementById('subjectDepartmentInput').value; 
		let TimeForSubject=document.getElementById('subjectTimeForSubjectInput').value;
		if(id==""){
			let newSubject={
				id:++subjectsLastId,
				name:name,
				department:department,
				TimeForSubject:TimeForSubject
				}
			subjects.push(newSubject);
		} else{
			for(let i=0;i<subjects.length;i++){
				if(id==subjects[i].id){
					subjects[i].id=document.getElementById('conferenceIdInput').value;
					subjects[i].name=document.getElementById('subjectNameInput').value;
					subjects[i].department=document.getElementById('subjectDepartmentInput').value; 
					subjects[i].TimeForSubject=document.getElementById('subjectTimeForSubjectInput').value;
					break;
				}
			}
		}
		displaySubjects();
		document.getElementById('subjectIdInput').value="";
		document.getElementById('subjectForm').reset();
		document.getElementById('closeSubjectModal').click();
		
	} else if(e.target.id=="groupsForm"){
		e.preventDefault();
		let id=document.getElementById('groupIdInput').value;
		let groupCode=document.getElementById('groupGroupCodeInput').value;
		let faculty=document.getElementById('groupFacultyInput').value; 
		let course=document.getElementById('groupCourseInput').value;
		let membersCount=document.getElementById('groupMembersCountInput').value;
		if(id==""){
			let newGroup={
				id:++groupsLastId,
				groupCode:groupCode,
				faculty:faculty,
				course:course,
				membersCount:membersCount
				}
			groups.push(newGroup)
		} else{
			for(let i=0;i<groups.length;i++){
				if(id==groups[i].id){
					groups[i].id=document.getElementById('groupIdInput').value
					groups[i].groupCode=document.getElementById('groupGroupCodeInput').value
					groups[i].faculty=document.getElementById('groupFacultyInput').value
					groups[i].course=document.getElementById('groupCourseInput').value
					groups[i].membersCount=document.getElementById('groupMembersCountInput').value
					break;
				}
			}
		}
		displayGroups();
		document.getElementById('groupIdInput').value="";
		document.getElementById('groupsForm').reset();
		document.getElementById('closeGroupModal').click();
		
	} else if(e.target.id=="sessionForm"){
		e.preventDefault();
		let id=document.getElementById('sessionIdInput').value;
		let subject=document.getElementById('sessionsSubjectInput').value;
		let group=document.getElementById('sessionsGroupInput').value; 
		let fullname=document.getElementById('sessionsFullNameInput').value;
		let typeOfFinals=document.getElementById('sessionsTypeOfFinalsInput').value;
		let dateOfSession=document.getElementById('sessionsDateOfSessionInput').value;
		if(id==""){
			let newSession={
				id:++sessionsLastId,
				subject:subject,
				group:group,
				fullname:fullname,
				typeOfFinals:typeOfFinals,
				durdateOfSessionation:dateOfSession
				}
			sessions.push(newSession)
		} else{
			for(let i=0;i<sessions.length;i++){
				if(id==sessions[i].id){
					sessions[i].id=document.getElementById('sessionIdInput').value
					sessions[i].subject=document.getElementById('sessionsSubjectInput').value
					sessions[i].group=document.getElementById('sessionsGroupInput').value
					sessions[i].fullname=document.getElementById('sessionsFullNameInput').value
					sessions[i].typeOfFinals=document.getElementById('sessionsTypeOfFinalsInput').value
					sessions[i].dateOfSession=document.getElementById('sessionsDateOfSessionInput').value
					break;
				}
			}
		}
		displaySessions();
		document.getElementById('sessionIdInput').value="";
		document.getElementById('sessionForm').reset();
		document.getElementById('closeSessionModal').click();
	} 
  });
