const db = firebase.firestore();
const taskContainer = document.getElementById('task-container4');
const taskButton = document.getElementById('task-button4'); //toppic


function myFunction(id) {
    var docRef = db.collection('Electrical4').doc(id);
    docRef.get().then((doc) => {
    if(doc.exists){
        console.log("Document Data", doc.data());
        const task = doc.data();

        taskContainer.innerHTML = `
        <div> 
            <h3>${task.topic}</h3>
            <p>${task.blog}</p>
        </div>`
    }else{
        console.log("No Document");
    }
    }).catch((error) => {
        console.log("Error", error);
    })

  }

db.collection("Electrical4").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const task = doc.data();
        task.id = doc.id;
        taskButton.innerHTML += `<div>
        <a class="btn-topic" data-id="${task.id}" href="#">${task.topic}</a>
        </div>`

        const btnTopic = document.querySelectorAll('.btn-topic');
        btnTopic.forEach(btn => {
            btn.addEventListener('click', (e) => {
                myFunction(e.target.dataset.id)
            })

        })
    });
    
});