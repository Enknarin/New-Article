const db = firebase.firestore();
const taskContainer = document.getElementById('task-container');
const taskButton = document.getElementById('task-button');


function myFunction(id) {
    var docRef = db.collection('Cosmetics').doc(id);
    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document Data", doc.data());
            const task = doc.data();

            taskContainer.innerHTML = `
            <div class="entry-content">
             <h2 class="Mh2">${task.topic}</h2>
            
            
            <div class="blog-content">
           
            <img    src= "${task.Link}" width="100%" class="p" ></img>
                
            <div class="entry-content">
                    <p>${task.blog}</p>
            
             
            
            
           


            </div>
            </div>

            <div class="blog-content">
            <h3 class="entry-title"></h3>

            <div class="entry-content">

                <div class="tags">
                <h10 >© 2021 Cable Article Network.</10>
                    <ul class="social">
                    <li><a href="https://www.facebook.com/" target="_blank" title="Facebook"><i
                    class="fa fa-facebook"></i></a></li>
        <li><a href="https://twitter.com/" target="_blank" title="Twitter"><i
                    class="fa fa-twitter"></i></a></li>
        <li><a href="https://www.linkedin.com/" target="_blank" title="Linkedin"><i
                    class="fa fa-linkedin"></i></a></li>
        <li><a href="https://www.tumblr.com/" target="_blank" title="Tumblr"><i
                    class="fa fa-tumblr"></i></a></li>
        <li><a href="https://vimeo.com/" target="_blank" title="Vimeo"><i
                    class="fa fa-vimeo"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>





            </div>
        </div>`
        } else {
            console.log("No Document");
        }
    }).catch((error) => {
        console.log("Error", error);
    })

}

db.collection("Cosmetics").get().then((querySnapshot) => {
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
    db.collection("Cosmetics").get().then((querySnapshot) => {

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
            <p  class="box">${task.topic}</p>  
            <img src="${task.Link}"  width="100%" class="p" >
            <p  class="box">${task.des}</p> 

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