
//parent element to store cards
const taskContainer = document.querySelector(".taskContainer");

//global store
const globalStore = [] ;

const newCard = ({id,imageurl,tasktitle,taskdescription,tasktype}) =>
 ` <div class="col-md-6 col-lg-4" id=${id}>
<div class="card ">
 <div class="card-header d-flex justify-content-end gap-2">
  <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
  <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button>
 </div>
<img src=${imageurl} class="card-img-top" alt="...">
<div class="card-body">
 <h5 class="card-title">${tasktitle}</h5>
 <p class="card-text">${taskdescription}</p>
 <span class="badge bg-primary">${tasktype}</span>
</div>
 <div class="card-footer text-muted ">
  <button type="button" class="btn btn-outline-primary float-end">Open Task</button>
 </div>
</div>
</div>`

const loadInitialTaskCards = () => {

  const getInitialData = localStorage.getItem("tasky"); //access localstorage
  if (!getInitialData) return;
 
  const {cards} = JSON.parse(getInitialData); //stringify object to object

  cards.map((cardObject) => {
    const createNewCard = newCard(cardObject);
    taskContainer.insertAdjacentHTML("beforeend",createNewCard);
    globalStore.push(cardObject);
  });

};

const saveChanges = () => {
  const taskData = {
    id: `${Date.now()}` ,   //unique number for card id 
    imageurl: document.getElementById("imageurl").value,
    tasktitle:  document.getElementById("tasktitle").value ,
    tasktype:  document.getElementById("tasktype").value ,
    taskdescription:  document.getElementById("taskdescription").value , 
  };
  
  //HTML Code
  const createNewCard = newCard(taskData);                 
  
  taskContainer.insertAdjacentHTML("beforeend",createNewCard);
  globalStore.push(taskData);
  
  localStorage.setItem("tasky",JSON.stringify({cards: globalStore}));

};

