const db = firebase.firestore();
const taskButtontop = document.getElementById('task-top4');

    db.collection("Electrical").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const task = doc.data();
            task.id = doc.id;
            taskButtontop.innerHTML += `<div>
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