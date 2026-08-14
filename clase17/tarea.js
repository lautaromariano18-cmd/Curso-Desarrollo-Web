let div = document.createElement("div")
fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((usuario) => {
            let tarjeta = document.createElement("article")
            tarjeta.style.border = "2px solid blue"
            tarjeta.style.borderRadius = "5px"
            tarjeta.style.display = "flex"
            tarjeta.style.flexDirection = "column"
            tarjeta.style.padding = "30px"
            tarjeta.style.fontSize = "x-small"
            tarjeta.style.margin = "10px"
            tarjeta.style.background = "gray"

            let id = document.createElement("h2")
            id.textContent = "ID: " + usuario.id
            id.style.textAlign = "end"

            let name = document.createElement("h1")
            name.textContent = usuario.name
            name.style.textAlign = "center"

            let username = document.createElement("h2")
            username.textContent = "usuario: " + usuario.username

            let email = document.createElement("h2")
            email.textContent = "Correo: " + usuario.email

            let direccion = document.createElement("h2")
            direccion.textContent = "DIRECCION " 

            let street = document.createElement("h2")
            street.textContent = "Calle: " + usuario.address.street

            let city = document.createElement("h2")
            city.textContent = " Ciudad: " + usuario.address.city
            
            let phone = document.createElement("h2")
            phone.textContent = "Telefono: " + usuario.phone

            let website = document.createElement("h2")
            website.textContent = " Sitio web: " + usuario.website


            tarjeta.appendChild(id)
            tarjeta.appendChild(name)
            tarjeta.appendChild(username)
            tarjeta.appendChild(email)
            tarjeta.appendChild(direccion)
            tarjeta.appendChild(street)
            tarjeta.appendChild(city)
            tarjeta.appendChild(phone)
            tarjeta.appendChild(website)
            div.appendChild(tarjeta)

        })

    })

document.body.appendChild(div)





