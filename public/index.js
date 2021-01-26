function handlelogin(event) {
    event.preventDefault()
    let userID=''

    let user = event.target.username.value;
    let password = event.target.password.value;
    let auth = { user, password }



    fetch('/log-in', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(auth)
    }).then(res => res.json())
        .then(data => { 
            console.log(data)
            if(data.ok){
             userID = data.logged._id
             console.log(data)
             console.log(userID)
             window.location.href = "/main.html";
               
               
            }
            else{
                console.log(data.ok)
                document.body.style.backgroundColor = 'red'
                document.getElementById('root').innerHTML =  ` The username or password are inncorrect. please enter try agian `
            }

           
            

        })
}

function handlesignup(event) {
    event.preventDefault()

    let user = event.target.username.value;
    let password = event.target.password.value;
    let auth = { user, password }



    fetch('/sign-up', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(auth)
    }).then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(`welcome ${data.user}`)
            

        })
}
