
const db = firebase.firestore();
const taskContainer = document.getElementById('task-container');

var ImgName, ImgUrl, Topic, Blog, Description,ImgLink,paragraph;
var files =[];
var reader ;
let editStatus = false;
let id='';

// ---------select picture------------------------------------------------------
document.getElementById("select").onclick = function(e){
    var input = document.createElement('input');
    input.type = 'file';
            
    input.onchange = e => {
        files= e.target.files;
        reader = new FileReader();
        reader.onload = function(){
            document.getElementById("myimg").src = reader.result;
        }
        reader.readAsDataURL(files[0]);
    }
            input.click();
}

// ----------------------------------------------------------------------------------------
const deleteTask = id => db.collection('Travel').doc(id).delete()
.then(()=>{
    Swal.fire(
        'Finish!',
        'Delete!',
        'success'
    ).then(()=>{
        location.reload();
    })
    
});
const getTask = (id) => db.collection('Travel').doc(id).get();
// ------------------- show on website ---------------------------------------------------
db.collection("Travel").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const task = doc.data();
        task.id = doc.id;
        // console.log(doc.id, " => ", doc.data());
        taskContainer.innerHTML += `
        <div class="card mt-5 border-info ">
        <div class="card-header bg-info mb-3">   <center><h3 class="hS">${task.topic}</h3>  </center></div> 
        <div class="card-body">
        <center>   
          <img src="${task.Link}" width="400 px"></center><br>
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

            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn btn-outline-primary btn-edit" data-id="${task.id}">EDIT</button>
                <button class="btn btn-outline-danger btn-delete" data-id="${task.id}">DELETE</button>
            </div>
            <div>
        </div>`
// ------------------- Delecte button---------------------------------------------------
        const btnDel = document.querySelectorAll('.btn-delete');
        btnDel.forEach(btn => {
            btn.addEventListener('click', async (e) =>{
                deleteTask(e.target.dataset.id);
            })
        })
// ------------------- Edit button---------------------------------------------------
        const btnEdit = document.querySelectorAll('.btn-edit');
        btnEdit.forEach(btn => {
            btn.addEventListener('click', async (e) =>{
                const doc = await getTask(e.target.dataset.id);
                const task = doc.data();

                id = doc.id;
                editStatus = true;

                document.getElementById('topic').value = task.topic;
                document.getElementById('blog').value = task.blog;
                document.getElementById('paragraph').value = task.paragraph;
                document.getElementById('paragraph1').value = task.paragraph1;
                document.getElementById('paragraph2').value = task.paragraph2;
                document.getElementById('paragraph3').value = task.paragraph3;
                document.getElementById('paragraph4').value = task.paragraph4;
                document.getElementById('paragraph5').value = task.paragraph5;
                document.getElementById('paragraph6').value = task.paragraph6;
                document.getElementById('paragraph7').value = task.paragraph7;
                document.getElementById('paragraph8').value = task.paragraph8;
                document.getElementById('paragraph9').value = task.paragraph9;
                document.getElementById('blog1').value = task.blog1;
                document.getElementById('description').value = task.des;
                // document.getElementById('namebox').value = task.NamePic;
                document.getElementById("myimg").src = task.Link;
                document.getElementById("upload").innerHTML= 'UPDATE';

            })
        })
        
    })
        
});

// --------upload picture-----------------------------------------------

document.getElementById("upload").onclick = function(){
    ImgName = document.getElementById('namebox').value;
    Topic = document.getElementById('topic').value;
    Blog = document.getElementById('blog').value;
    paragraph = document.getElementById('paragraph').value;
    paragraph1 = document.getElementById('paragraph1').value;
    paragraph2 = document.getElementById('paragraph2').value;
    paragraph3 = document.getElementById('paragraph3').value;
    paragraph4 = document.getElementById('paragraph4').value;
    paragraph5 = document.getElementById('paragraph5').value;
    paragraph6 = document.getElementById('paragraph6').value;
    paragraph7 = document.getElementById('paragraph7').value;
    paragraph8 = document.getElementById('paragraph8').value;
    paragraph9 = document.getElementById('paragraph9').value;
    Blog1 = document.getElementById('blog1').value;
    Description = document.getElementById('description').value;

    var uploadTask = firebase.storage().ref('Images/'+ImgName+".png").put(files[0]);
    uploadTask.on('state_change', function(snapshot){
        var progress = (snapshot.byTravelransferred / snapshot.totalBytes)*100;
            // document.getElementById('UpProgress').innerHTML = 'Upload'+progress+'%';
    },
    function(error){
        alert('error in saving the image');
    },
    function(){
        uploadTask.snapshot.ref.getDownloadURL().then(function(url){
            ImgUrl = url;
        
                    // const db = firebase.firestore();
            if(!editStatus){
        // -------------------- add data ------------------------------------------
                db.collection("Travel").add({
                    NamePic: ImgName,
                    Link: ImgUrl,
                    topic: Topic,
                    blog: Blog,
                    paragraph: paragraph,
                    paragraph1: paragraph1,
                    paragraph2: paragraph2,
                    paragraph3: paragraph3,
                    paragraph4: paragraph4,
                    paragraph5: paragraph5,
                    paragraph6: paragraph6,
                    paragraph7: paragraph7,
                    paragraph8: paragraph8,
                    paragraph9: paragraph9,
                    blog1: Blog1,
                    des:Description
                })
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                    Swal.fire(
                        'Finish!',
                        'Task Added!',
                        'success'
                    ).then(()=>{
                        location.reload();
                    })
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });  
            }else{
        // ------------------Update data-------------------------------------------
                db.collection("Travel").doc(id).update({
                    "topic": Topic,
                    "blog": Blog,
                    "paragraph": paragraph,
                    "paragraph1": paragraph1,
                    "paragraph2": paragraph2,
                    "paragraph3": paragraph3,
                    "paragraph4": paragraph4,
                    "paragraph5": paragraph5,
                    "paragraph6": paragraph6,
                    "paragraph7": paragraph7,
                    "paragraph8": paragraph8,
                    "paragraph9": paragraph9,
                    "blog1": Blog1,
                    "des":Description
                }).then(() => {
                    console.log("Document successfully updated!");
                    Swal.fire(
                        'Finish!',
                        'Task Updated!',
                        'success'
                    ).then(()=>{
                        location.reload();
                    })
                });

            }
        });
                
    });
}