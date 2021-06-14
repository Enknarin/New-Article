const db = firebase.firestore();
const taskButton = document.getElementById('task-button');
const taskTop = document.getElementById('task-top');
const taskTravel = document.getElementById('task-travel');
const taskTravels = document.getElementById('task-travels');
const taskFood = document.getElementById('task-food');
const taskCosmetics = document.getElementById('task-cosmetics');
const taskElectrical = document.getElementById('task-electrical');
const taskMore = document.getElementById('task-more');
const slider_content = document.getElementById('box');




// Travel

function filterTravel(id){
    var docRef = db.collection('Travel').doc(id);
    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document Data", doc.data());
            const task = doc.data();

            taskTop.innerHTML = `
             
            <div class="blog-content">
           
            <img src= "${task.Link}" width="100%" class="picepostblog" ></img>
               

        </div>`
        } else {
            console.log("No Document");
        }
    }).catch((error) => {
        console.log("Error", error);
    })

    }

    function filterTravelB(id){
        var docRef = db.collection('Travel').doc(id);
        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document Data", doc.data());
                const task = doc.data();
    
                taskButton.innerHTML = `
                 
                <div class="blog-content">
               
                    
                <div class="entry-content">
                <h2 class="Mh2">${task.topic}</h2>
                <div class="entry-content">
                <p>${task.blog}</p>
    
                <p>${task.paragraph}</p>
    
                <p>${task.paragraph1}</p>
    
                <p>${task.paragraph2}</p>
    
                <p>${task.paragraph3}</p>
    
                <p>${task.paragraph4}</p>
    
                <p>${task.paragraph5}</p>
    
                <p>${task.paragraph6}</p>
    
                <p>${task.paragraph7}</p>
    
                <p>${task.paragraph8}</p>
    
                <p>${task.paragraph9}</p>
    
                <p>${task.blog1}</p>
                
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
        db.collection("Travel").get().then((querySnapshot) => {

            querySnapshot.forEach((doc) => {
    
                const task = doc.data();
    
                task.id = doc.id;
    
                console.log(doc.id, " => ", doc.data());
    
                taskTravel.innerHTML += `

        <div>
        <div class="col-md-4 col-sm-6 col-xs-6">
        <div class="type-post">        
            <div class="blog-content">
                
                <div class="entry-content">
                <div>
                <p class="box">${task.topic}</p>  
                <img src="${task.Link}"  width="100%" class="postindex" >
                <p  class="box">${task.des}</p> 

                <a class="btn-link" data-id="${task.id}" href="#top" >Read more</a>
        
               </div>
                </div>
            </div>
        </div>
    </div>
        </div>`
     
                 const btnTopic = document.querySelectorAll('.btn-link');
                 btnTopic.forEach(btn => {
                     btn.addEventListener('click', (e) => {
                         filterTravel(e.target.dataset.id)
     
                     })
                 })
                 btnTopic.forEach(btn => {
                     btn.addEventListener('click', (e) => {
                         filterTravelB(e.target.dataset.id)
     
                     })
                 })
     
             });
            });



// Food


function filterFood(id){
    var docRef = db.collection('Food').doc(id);
    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document Data", doc.data());
            const task = doc.data();

            taskTop.innerHTML = `
             
            <div class="blog-content">
           
            <img src= "${task.Link}" width="100%" class="picepostblog" ></img>
               

        </div>`
        } else {
            console.log("No Document");
        }
    }).catch((error) => {
        console.log("Error", error);
    })

    }

    function filterFoodB(id){
        var docRef = db.collection('Food').doc(id);
        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document Data", doc.data());
                const task = doc.data();
    
                taskButton.innerHTML = `
                 
                <div class="blog-content">
               
                    
                <div class="entry-content">
                <h2 class="Mh2">${task.topic}</h2>
                <div class="entry-content">
                <p>${task.blog}</p>
    
                <p>${task.paragraph}</p>
    
                <p>${task.paragraph1}</p>
    
                <p>${task.paragraph2}</p>
    
                <p>${task.paragraph3}</p>
    
                <p>${task.paragraph4}</p>
    
                <p>${task.paragraph5}</p>
    
                <p>${task.paragraph6}</p>
    
                <p>${task.paragraph7}</p>
    
                <p>${task.paragraph8}</p>
    
                <p>${task.paragraph9}</p>
    
                <p>${task.blog1}</p>
                
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
        db.collection("Food").get().then((querySnapshot) => {

            querySnapshot.forEach((doc) => {
    
                const task = doc.data();
    
                task.id = doc.id;
    
                console.log(doc.id, " => ", doc.data());
    
                taskFood.innerHTML += `

        <div>
        <div class="col-md-4 col-sm-6 col-xs-6">
        <div class="type-post">        
            <div class="blog-content">
                
                <div class="entry-content">
                <div>
                <p class="box">${task.topic}</p>  
                <img src="${task.Link}"  width="100%" class="postindex" >
                <p  class="box">${task.des}</p> 

                <a class="btn-link" data-id="${task.id}" href="#top">Read more</a>
        
               </div>
                </div>
            </div>
        </div>
    </div>
        </div>`
     
                 const btnTopic = document.querySelectorAll('.btn-link');
                 btnTopic.forEach(btn => {
                     btn.addEventListener('click', (e) => {
                         filterFood(e.target.dataset.id)
     
                     })
                 })
                 btnTopic.forEach(btn => {
                     btn.addEventListener('click', (e) => {
                         filterFoodB(e.target.dataset.id)
     
                     })
                 })
     
             });
            });




// Cosmetics
function filterCosmetics(id){
    var docRef = db.collection('Cosmetics').doc(id);
    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document Data", doc.data());
            const task = doc.data();

            taskTop.innerHTML = `
             
            <div class="blog-content">
           
            <img src= "${task.Link}" width="100%" class="picepostblog" ></img>
               

        </div>`
        } else {
            console.log("No Document");
        }
    }).catch((error) => {
        console.log("Error", error);
    })

    }

    function filterCosmeticsB(id){
        var docRef = db.collection('Cosmetics').doc(id);
        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document Data", doc.data());
                const task = doc.data();
    
                taskButton.innerHTML = `
                 
                <div class="blog-content">
               
                    
                <div class="entry-content">
                <h2 class="Mh2">${task.topic}</h2>
                <div class="entry-content">
                <p>${task.blog}</p>
    
                <p>${task.paragraph}</p>
    
                <p>${task.paragraph1}</p>
    
                <p>${task.paragraph2}</p>
    
                <p>${task.paragraph3}</p>
    
                <p>${task.paragraph4}</p>
    
                <p>${task.paragraph5}</p>
    
                <p>${task.paragraph6}</p>
    
                <p>${task.paragraph7}</p>
    
                <p>${task.paragraph8}</p>
    
                <p>${task.paragraph9}</p>
    
                <p>${task.blog1}</p>
                
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
    
                console.log(doc.id, " => ", doc.data());
    
                taskCosmetics.innerHTML += `

        <div>
        <div class="col-md-4 col-sm-6 col-xs-6">
        <div class="type-post">        
            <div class="blog-content">
                
                <div class="entry-content">
                <div>
                <p class="box">${task.topic}</p>  
                <img src="${task.Link}"  width="100%" class="postindex" >
                <p  class="box">${task.des}</p> 

                <a class="btn-link" data-id="${task.id}" href="#top">Read more</a>
        
               </div>
                </div>
            </div>
        </div>
    </div>
        </div>`
     
                 const btnTopic = document.querySelectorAll('.btn-link');
                 btnTopic.forEach(btn => {
                     btn.addEventListener('click', (e) => {
                         filterCosmetics(e.target.dataset.id)
     
                     })
                 })
                 btnTopic.forEach(btn => {
                     btn.addEventListener('click', (e) => {
                         filterCosmeticsB(e.target.dataset.id)
     
                     })
                 })
     
             });
            });
       
// Electrical

function filterElectrical(id){
    var docRef = db.collection('Electrical').doc(id);
    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document Data", doc.data());
            const task = doc.data();

            taskTop.innerHTML = `
             
            <div class="blog-content">
           
            <img src= "${task.Link}" width="100%" class="picepostblog" ></img>
               

        </div>`
        } else {
            console.log("No Document");
        }
    }).catch((error) => {
        console.log("Error", error);
    })

    }

    function filterElectricalB(id){
        var docRef = db.collection('Electrical').doc(id);
        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document Data", doc.data());
                const task = doc.data();
    
                taskButton.innerHTML = `
                 
                <div class="blog-content">
               
                    
                <div class="entry-content">
                <h2 class="Mh2">${task.topic}</h2>
                <div class="entry-content">
                <p>${task.blog}</p>
    
                <p>${task.paragraph}</p>
    
                <p>${task.paragraph1}</p>
    
                <p>${task.paragraph2}</p>
    
                <p>${task.paragraph3}</p>
    
                <p>${task.paragraph4}</p>
    
                <p>${task.paragraph5}</p>
    
                <p>${task.paragraph6}</p>
    
                <p>${task.paragraph7}</p>
    
                <p>${task.paragraph8}</p>
    
                <p>${task.paragraph9}</p>
    
                <p>${task.blog1}</p>
                
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
        db.collection("Electrical").get().then((querySnapshot) => {

            querySnapshot.forEach((doc) => {
    
                const task = doc.data();
    
                task.id = doc.id;
    
                console.log(doc.id, " => ", doc.data());
    
                taskElectrical.innerHTML += `

        <div>
        <div class="col-md-4 col-sm-6 col-xs-6">
        <div class="type-post">        
            <div class="blog-content">
                
                <div class="entry-content">
                <div>
                <p class="box">${task.topic}</p>  
                <img src="${task.Link}"  width="100%" class="postindex" >
                <p  class="box">${task.des}</p> 

                <a class="btn-link" data-id="${task.id}" href="#top">Read more</a>
        
               </div>
                </div>
            </div>
        </div>
    </div>
        </div>`
     
                 const btnTopic = document.querySelectorAll('.btn-link');
                 btnTopic.forEach(btn => {
                     btn.addEventListener('click', (e) => {
                         filterElectrical(e.target.dataset.id)
     
                     })
                 })
                 btnTopic.forEach(btn => {
                     btn.addEventListener('click', (e) => {
                         filterElectricalB(e.target.dataset.id)
     
                     })
                 })
     
             });
            });

// More

function filterMore(id){
    var docRef = db.collection('More').doc(id);
    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document Data", doc.data());
            const task = doc.data();

            taskTop.innerHTML = `
             
            <div class="blog-content">
           
            <img src= "${task.Link}" width="100%" class="picepostblog" ></img>
               

        </div>`
        } else {
            console.log("No Document");
        }
    }).catch((error) => {
        console.log("Error", error);
    })

    }

    function filterMoreB(id){
        var docRef = db.collection('More').doc(id);
        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document Data", doc.data());
                const task = doc.data();
    
                taskButton.innerHTML = `
                 
                <div class="blog-content">
               
                    
                <div class="entry-content">
                <h2 class="Mh2">${task.topic}</h2>
                <div class="entry-content">
                <p>${task.blog}</p>
    
                <p>${task.paragraph}</p>
    
                <p>${task.paragraph1}</p>
    
                <p>${task.paragraph2}</p>
    
                <p>${task.paragraph3}</p>
    
                <p>${task.paragraph4}</p>
    
                <p>${task.paragraph5}</p>
    
                <p>${task.paragraph6}</p>
    
                <p>${task.paragraph7}</p>
    
                <p>${task.paragraph8}</p>
    
                <p>${task.paragraph9}</p>
    
                <p>${task.blog1}</p>
                
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
        db.collection("More").get().then((querySnapshot) => {

            querySnapshot.forEach((doc) => {
    
                const task = doc.data();
    
                task.id = doc.id;
    
                console.log(doc.id, " => ", doc.data());
    
                taskMore.innerHTML += `

        <div>
        <div class="col-md-4 col-sm-6 col-xs-6">
        <div class="type-post">        
            <div class="blog-content">
                
                <div class="entry-content">
                <div>
                <p class="box">${task.topic}</p>  
                <img src="${task.Link}"  width="100%" class="postindex" >
                <p  class="box">${task.des}</p> 

                <a class="btn-link" data-id="${task.id}" href="#top">Read more</a>
        
               </div>
                </div>
            </div>
        </div>
    </div>
        </div>`
     
                 const btnTopic = document.querySelectorAll('.btn-link');
                 btnTopic.forEach(btn => {
                     btn.addEventListener('click', (e) => {
                         filterMore(e.target.dataset.id)
     
                     })
                 })
                 btnTopic.forEach(btn => {
                     btn.addEventListener('click', (e) => {
                         filterMoreB(e.target.dataset.id)
     
                     })
                 })
     
             });
            });