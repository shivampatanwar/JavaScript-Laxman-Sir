

document.addEventListener('DOMContentLoaded', function () {


    let jsonURL = `http://localhost:3000/index`;
    
    let tbody = document.querySelector('#tbody');


    // Fetch all json data
    fetch(`${jsonURL}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            data.forEach((value, key) => {

                console.log(key);

                tbody.innerHTML = `  
                <tr>
                    <td>${value.id}</td>
                    <td>${value.name}</td>
                    <td>${value.email}</td>
                    <td>${value.mobile}</td>
                    <td>${value.city}</td>
                    <td class="btn1"><button onclick="editRecord(${key})">Edit</button></ td>
                    <td class="btn2"><button onclick="deleteRecord(${key})">Delete</button></td>
                </tr>
            `;

            });
        });




    // Delete Row
    function deleteRecord(key) {

        fetch('index.json')
            .then((res) => res.json())
            .then((data) => {
                let filter = data.filter((f) => {
                    return f.id == key;
                })

                console.log(filter);
            });

    }



    // Edit Button In Table
    function editRecord(key) {

        fetch('index.json')
            .then((res) => res.json())
            .then((data) => {

                let filter = data.filter((f) => {
                    return f.id == key + 1;
                })

                document.getElementById('uname').value = filter[0].name;
                document.getElementById('uemail').value = filter[0].email;
                document.getElementById('umobile').value = filter[0].mobile;
                document.getElementById('ucity').value = filter[0].city;

                document.getElementById('updatediv').style.display = 'block';



                //console.log(filter);
            });
    }



    let update = document.querySelector('#update');

    update.addEventListener('click', (e) => {

        e.preventDefault();
        // console.log("Recorded Added");


        fetch('index.json')
            .then((res) => res.json())
            .then((data) => {
                let filter = data.filter((f) => {
                    return f.id == key + 1;
                })

                document.getElementById('uname').value = filter[0].name;
                document.getElementById('uemail').value = filter[0].email;
                document.getElementById('umobile').value = filter[0].mobile;
                document.getElementById('ucity').value = filter[0].city;

                document.getElementById('updatediv').style.display = 'block';



                //console.log(filter);
            });
    })





    let addbtn = document.querySelector('#add');

    addbtn.addEventListener('click', (e) => {

        e.preventDefault();
        // console.log("Recorded Added");


        fetch('index.json')
            .then((res) => res.json())
            .then((data) => {

                console.log(data);

                let json = {
                    "id": data.length + 1,
                    "name": document.getElementById('name').value,
                    "email": document.getElementById('email').value,
                    "mobile": document.getElementById('mobile').value,
                    "city": document.getElementById('city').value
                }

                console.log(json);

                data.push(json);

                console.log(data);

            });
    })




})








