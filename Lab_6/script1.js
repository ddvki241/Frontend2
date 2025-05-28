class Group{
	id=null;
	membersCount=null;
	course=null;
	faculty=null;
	groupCode=null;
	constructor(dataObj){
		this.id=dataObj.id;
		this.membersCount=dataObj.membersCount;
		this.course=dataObj.course;
		this.faculty=dataObj.faculty;
		this.groupCode=dataObj.groupCode;
	}
	displayAsTableRow(){
		return `<tr>
					<td>${this.membersCount}</td>
					<td>${this.course}</td>
					<td>${this.faculty}</td>
					<td>${this.groupCode}</td>
					<td>
						<button data-id="${this.id}" class="edit-group btn btn-warning">Редагувати</button>
						<button data-id="${this.id}" class="delete-group btn btn-danger">Видалити</button>
					</td>
				</tr>`
	}
	displayAsOption(){
		return `<option value="${this.groupCode}">${this.groupCode}</option>`
	}
	edit(dataObj){
		this.membersCount=dataObj.membersCount;
		this.course=dataObj.course;
		this.faculty=dataObj.faculty;
		this.groupCode=dataObj.groupCode;
	}
}

class Subject{
	id=null;
	Name=null;
	TimeForSubject=null;
	department=null;
	constructor(dataObj){
		this.id=dataObj.id;
		this.Name=dataObj.Name;
		this.TimeForSubject=dataObj.TimeForSubject;
		this.department=dataObj.department;
	}
	displayAsTableRow(){
		return `<tr>
					<td>${this.Name}</td>
					<td>${this.TimeForSubject}</td>
					<td>${this.department}</td>
					<td>
						<button data-id="${this.id}" class="edit-subject btn btn-warning">Редагувати</button>
						<button data-id="${this.id}" class="delete-subject btn btn-danger">Видалити</button>
					</td>
				</tr>`
	}
	displayAsOption(){
		return `<option value="${this.Name}">${this.Name}</option>`
	}
	edit(dataObj){
		this.Name=dataObj.Name;
		this.TimeForSubject=dataObj.TimeForSubject;
		this.department=dataObj.department;
	}
}
class Session{
	constructor(dataObj){
		this.id=dataObj.id;
		this.subject=dataObj.subject;
		this.group=dataObj.group;
		this.fullName=dataObj.fullName;
		this.dateOfSession=dataObj.dateOfSession;
		this.typeOfFinals=dataObj.typeOfFinals;
		
	}
	displayAsTableRow(){
		return `<tr>
					<td>${this.subject}</td>
					<td>${this.group}</td>
					<td>${this.fullName}</td>
					<td>${this.dateOfSession}</td>
					<td>${this.typeOfFinals}</td>
					<td>
						<button data-id="${this.id}" class="edit-session btn btn-warning">Редагувати</button>
						<button data-id="${this.id}" class="delete-session btn btn-danger">Видалити</button>
					</td>
				</tr>`
	}
	edit(dataObj){
		this.subject=dataObj.subject;
		this.group=dataObj.group;
		this.fullName=dataObj.fullName;
		this.dateOfSession=dataObj.dateOfSession;
		this.typeOfFinals=dataObj.typeOfFinals;
	}
}
class BaseList{
	constructor(){
		//this.id=1;
		this.list=[];
	}
	edit(dataObj){
		for(let i=0;i<this.list.length;i++){
			if(dataObj.id==this.list[i].id){
				this.list[i].edit(dataObj);
				break;
			}
		}
	}
	delete(id){
		for(let i=0;i<this.list.length;i++){
			if(id==this.list[i].id){
				this.list.splice(i,1);
				break;
			}
		}
	}
	displayTableRows(){
		let content=``;
		for(let i=0;i<this.list.length;i++){
			content+=this.list[i].displayAsTableRow();
		}
		
		return content;
	}
	displaySelectOptions(){
		let content=``;
		for(let i=0;i<this.list.length;i++){
			content+=this.list[i].displayAsOption();
		}
		return content;
	}
	getById(id){
		for(let i=0;i<this.list.length;i++){
			if(id==this.list[i].id){
				return this.list[i];
			}
		}
	}
}
class GroupList extends BaseList{
	add(dataObj){
		//dataObj.id=this.id++
		let group=new Group(dataObj);
		this.list.push(group);
	}
	
}
class SubjectList extends BaseList{
	add(dataObj){
		//dataObj.id=this.id++
		let subject=new Subject(dataObj);
		this.list.push(subject);
	}
}
class SessionList extends BaseList{
	add(dataObj){
		dataObj.id=this.id++
		let session=new Session(dataObj);
		this.list.push(session);
	}
}
let groups=new GroupList();
 fetch('https://683756de2c55e01d18498f9e.mockapi.io/api/groups/groups')
  .then(response => response.json())
  .then(data => {
	for(let i=0;i<data.length;i++){
		groups.add(data[i]);
	}
	displayGroups();
  });
let subjects=new SubjectList();
fetch('https://683756de2c55e01d18498f9e.mockapi.io/api/groups/subjects')
  .then(response => response.json())
  .then(data => {
	for(let i=0;i<data.length;i++){
		subjects.add(data[i]);
	}
	displaySubjects();
  });  
let sessions=new SessionList();
function displaySessions(){
	const sessionTab=document.getElementById('session');
	let sessionTabContent=`
		<h3>Сесія</h3>
	<button id="addSession" class="btn btn-success" data-toggle="modal" data-target="#sessionModal">Додати</button>
	<table class="table table-striped">
		<thead>
			<tr>
				<th>Дисципліна</th>
				<th>Група</th>
				<th>ПІБ викладача</th>
				<th>Дата</th>
				<th>Вид контролю</th>
				<th>Дії</th>
			</tr>
		</thead>
		<tbody>
	`;
	sessionTabContent+=sessions.displayTableRows();
	sessionTabContent+=`</tbody>
		</table>`;
	sessionTab.innerHTML=sessionTabContent;	
}  
function displayGroups(){
	const groupTab=document.getElementById('group');
	const groupSelect=document.getElementById('sessionGroupInput');
	let groupSelectContent=``;
	let groupTabContent=`
		<h3>Група</h3>
	<button id="addGroup" class="btn btn-success" data-toggle="modal" data-target="#groupModal">Додати</button>
	<table class="table table-striped">
		<thead>
			<tr>
				<th>Кількість студентів</th>
				<th>Курс</th>
				<th>Факультет</th>
				<th>Код групи</th>
				<th>Дії</th>
			</tr>
		</thead>
		<tbody>
	`;
	groupSelectContent+=groups.displaySelectOptions()
	groupTabContent+=groups.displayTableRows();
	groupTabContent+=`</tbody>
		</table>`;
	groupTab.innerHTML=groupTabContent;
	groupSelect.innerHTML=groupSelectContent;
}
function displaySubjects(){
	const subjectTab=document.getElementById('subject');
	const subjectSelect=document.getElementById('sessionSubjectInput');
	let subjectSelectContent=``;
	let subjectTabContent=`
		<h3>Дисципліна</h3>
	<button id="addSubject" class="btn btn-success" data-toggle="modal" data-target="#subjectModal">Додати</button>
	<table class="table table-striped">
		<thead>
			<tr>
				<th>Назва</th>
				<th>Обсяг годин</th>
				<th>Кафедра</th>
				<th>Дії</th>
			</tr>
		</thead>
		<tbody>
	`;
	subjectSelectContent+=subjects.displaySelectOptions()
	subjectTabContent+=subjects.displayTableRows();
	subjectTabContent+=`</tbody>
		</table>`;
	subjectTab.innerHTML=subjectTabContent;
	subjectSelect.innerHTML=subjectSelectContent;
}
displaySessions();
displayGroups();
displaySubjects();
//event processors
document.addEventListener('click', function(e){
  if(e.target.classList.contains('delete-session')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	sessions.delete(elementId);
	displaySessions();
  } else if(e.target.classList.contains('delete-group')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	groups.delete(elementId);
	fetch('https://683756de2c55e01d18498f9e.mockapi.io/api/groups/groups/'+elementId,{
		method:"DELETE",
	})
	.then(response => response.json())
	.then(data => {
		displayGroups();
	});	
  } else if(e.target.classList.contains('delete-subject')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	subjects.delete(elementId);
	fetch('https://683756de2c55e01d18498f9e.mockapi.io/api/groups/subjects/'+elementId,{
		method:"DELETE",
	})
	.then(response => response.json())
	.then(data => {
		displaySubjects();
	});
  } else if(e.target.classList.contains('edit-subject')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	let subject=subjects.getById(elementId);
	document.getElementById('subjectIdInput').value=subject.id;
	document.getElementById('subjectNameInput').value=subject.Name;
	document.getElementById('subjectTimeForSubjectInput').value=subject.TimeForSubject; 
	document.getElementById('subjectDepartmentInput').value=subject.department;
	document.getElementById('addSubject').click();
	
  } else if(e.target.classList.contains('edit-group')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	let group=groups.getById(elementId);
	document.getElementById('groupIdInput').value=group.id;
	document.getElementById('groupMembersCountInput').value=group.membersCount;
	document.getElementById('groupCourseInput').value=group.course; 
	document.getElementById('groupFacultyInput').value=group.faculty;
	document.getElementById('groupGroupCodeInput').value=group.groupCode;
	document.getElementById('addGroup').click();
  } else if(e.target.classList.contains('edit-session')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	let session=sessions.getById(elementId);
	document.getElementById('sessionSubjectInput').value=session.subject;
	document.getElementById('sessionGroupInput').value=session.group; 
	document.getElementById('sessionFullNameInput').value=session.fullName;
	document.getElementById('sessionDateOfSessionInput').value=session.dateOfSession;
	document.getElementById('sessionTypeOfFinalsInput').value=session.typeOfFinals;
	document.getElementById('addSession').click();
  }
});
document.addEventListener('submit', function(e){
	if(e.target.id=="subjectForm"){
		e.preventDefault();
		let id=document.getElementById('subjectIdInput').value;
		let Name=document.getElementById('subjectNameInput').value;
		let timeForSubject=document.getElementById('subjectTimeForSubjectInput').value; 
		let department=document.getElementById('subjectDepartmentInput').value;
		let newSubject={
			id:id,
			Name:Name,
			timeForSubject:timeForSubject,
			department:department
		}
		if(id==""){
			fetch('https://683756de2c55e01d18498f9e.mockapi.io/api/groups/subjects',{
				method:"POST",
				body:JSON.stringify(newSubject)
			})
			.then(response => response.json())
			.then(data => {
				for(let i=0;i<data.length;i++){
					subjects.add(data[i]);
				}
				displaySubjects();
			});		
			subjects.add(newSubject);
		} else{	
		fetch('https://683756de2c55e01d18498f9e.mockapi.io/api/groups/subjects/'+newSubject.id,{
				method:"PUT",
				body:JSON.stringify(newSubject)
			})
			.then(response => response.json())
			.then(data => {
				for(let i=0;i<data.length;i++){
					subjects.add(data[i]);
				}
				displaySubjects();
			});	
			subjects.edit(newSubject);
		}
		displaySubjects();
		document.getElementById('subjectIdInput').value="";
		document.getElementById('subjectForm').reset();
		document.getElementById('closeSubjectModal').click();
		
	} else if(e.target.id=="groupForm"){
		e.preventDefault();
		let id=document.getElementById('groupIdInput').value;
		let membersCount=document.getElementById('groupMembersCountInput').value;
		let course=document.getElementById('groupCourseInput').value; 
		let faculty=document.getElementById('groupFacultyInput').value;
		let groupCode=document.getElementById('groupGroupCodeInput').value;
		
			let newGroup={
				id:id,
				membersCount:membersCount,
				course:course,
				faculty:faculty,
				groupCode:groupCode
				}
		if(id==""){fetch('https://683756de2c55e01d18498f9e.mockapi.io/api/groups/groups',{
				method:"POST",
				body:JSON.stringify(newGroup)
			})
			.then(response => response.json())
			.then(data => {
				for(let i=0;i<data.length;i++){
					groups.add(data[i]);
				}
				displayGroups();
			});				
			groups.add(newGroup)
		} else{	
		fetch('https://683756de2c55e01d18498f9e.mockapi.io/api/groups/groups/'+newGroup.id,{
				method:"PUT",
				body:JSON.stringify(newGroup)
			})
			.then(response => response.json())
			.then(data => {
				for(let i=0;i<data.length;i++){
					groups.add(data[i]);
				}
				displayGroups();
			});	
			groups.edit(newGroup)
		}
		displayGroups();
		document.getElementById('groupIdInput').value="";
		document.getElementById('groupForm').reset();
		document.getElementById('closeGroupModal').click();
		
	} else if(e.target.id=="sessionForm"){
		e.preventDefault();
		let id=document.getElementById('sessionIdInput').value;
		let subject=document.getElementById('sessionSubjectInput').value;
		let group=document.getElementById('sessionGroupInput').value; 
		let fullName=document.getElementById('sessionFullNameInput').value;
		let dateOfSession=document.getElementById('sessionDateOfSessionInput').value;
		let typeOfFinals=document.getElementById('sessionTypeOfFinalsInput').value;
		
			let newSession={
				id:id,
				subject:subject,
				group:group,
				fullName:fullName,
				dateOfSession:dateOfSession,
				typeOfFinals:typeOfFinals
				}
		if(id==""){
			sessions.add(newSession)
		} else{
			sessions.edit(newSession)
		}
		displaySessions();
		document.getElementById('sessionIdInput').value="";
		document.getElementById('sessionForm').reset();
		document.getElementById('closeSessionModal').click();
		
	} 
  });
