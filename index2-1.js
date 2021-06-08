const db = firebase.firestore();
const taskContainer = document.getElementById('task-container');
const taskButton = document.getElementById('task-button');


function myFunction(id) {
    var docRef = db.collection('test').doc(id);
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
  db.collection("test").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const task = doc.data();
        task.id= doc.id;
        // console.log(doc.id, " => ", doc.data().topic);
        taskButton.innerHTML += `<div>
        <a class="btn-topic" data-id="${task.id}" href="#">${task.topic}</a>
        </div>`

        const btnTopic = document.querySelectorAll('.btn-topic');
        btnTopic.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // console.log(e.target.dataset.id);
                myFunction(e.target.dataset.id)
            })

        })
    });

  db.collection("test").get().then((querySnapshot) => {

    querySnapshot.forEach((doc) => {
    
    const task = doc.data();
    
    task.id = doc.id;
    
    console.log(doc.id, " => ", doc.data());
    
    taskContainer.innerHTML += `
    
    <div>
    <div class="col-md-4 col-sm-6 col-xs-6">
    <div class="type-post">        
        <div class="blog-content">
            
            <div class="entry-content">
                 <p>${task.pic}</p>
                 <p>${task.topic}</p>
                 <p>${task.des}</p>
                 
            </div>
        </div>
    </div>
</div>
    </div>`
    
    })
    
}); 
});