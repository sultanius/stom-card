// const dateFormat = require('dateformat');
// const now = new Date();

const table = document.getElementById('editTable')
// const table = document.querySelector('')
if(table){
    table.addEventListener('submit', async (event) => {
        event.preventDefault()
        // const {action, method} = event.target
        // console.log(table)
        const id = table.name
        // console.log(id)

        const name1 = table.name1.value;
        const description1 = table.description1.value;
        const numberOfCard1 = table.numberOfCard1.value;

        const time1 = table.time1.value
        const time2 = table.time2.value

        const responce = await fetch(`/timetable/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name1, description1, id, numberOfCard1, time1, time2}),
        })
        if(responce.ok){
            window.location.href = '/timetable'
        }
    })
}
