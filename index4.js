const db = firebase.firestore();
const taskContainer = document.getElementById('task-container');
const taskButton = document.getElementById('task-button'); //toppic


function myFunction(id) {
    var docRef = db.collection('Electrical').doc(id);
    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document Data", doc.data());
            const task = doc.data();

            taskContainer.innerHTML = `
        <div> 
            <h3 class="Mh2" >${task.topic}</h3>
            <img  class="picepost"  src= "${task.Link}" ></img>
            <p>${task.blog}</p>
        </div>`
        } else {
            console.log("No Document");
        }
    }).catch((error) => {
        console.log("Error", error);
    })

}

db.collection("Electrical").get().then((querySnapshot) => {
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
    db.collection("Electrical").get().then((querySnapshot) => {

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
                <div>
                <p>${task.topic}</p>  
                <img src="${task.Link}" width="400 px">
                <p>${task.des}</p>
                <a class="btn-link" data-id="${task.id}" href="#">Read more</a>
        
                </div>
                 </div>
             </div>
         </div>
     </div>
         </div>`

            const btnTopic = document.querySelectorAll('.btn-link');
            btnTopic.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    myFunction(e.target.dataset.id)

                })
            })

        });
    });

});