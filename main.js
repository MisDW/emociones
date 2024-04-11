
// const form = document.getElementById("form_emotions").addEventListener("click", ( e ) =>{
//     e.preventDefault()
//     bottons()
// })


let divUser = document.querySelector(".name_user");
console.log(divUser);

// Variables globales
var usuario = "Admin"

// EMOCIONES 
document.getElementsByName("btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault()
        console.log(btn.id);
        clickNotification(btn.id)
    })
})


// USUARIO
document.getElementsByName("user").forEach(user =>{
    user.addEventListener("click", (e)=>{
        e.preventDefault()
        console.log(user.innerHTML);
        usuario = user.innerHTML

        
        let datos = { "usuario": user.innerHTML};
        localStorage.setItem('UsuarioIngresado', JSON.stringify(datos));
    })
});

// document.getElementById("usuarios").addEventListener("click", ( )=>{
//     console.log("Usuarios Open");
// })

const clickNotification = ( emocion ) =>{
    notification( emocion )
    almacenLocalStorage( emocion )
}

const notification = ( emocion ) =>{
    Push.create("Emocion enviada!", {
        body: `Hijo se siente: ${emocion}`,
        icon: './img/icon.jpeg',
        timeout: 4000,
        onClick: function () {
            window.focus();
            this.close();
        }
    });
}

const almacenEmociones = []

const almacenLocalStorage = ( emocion )  => {
// Guardar un objeto en LocalStorage (conviértelo a JSON primero)
    // let datos = { "usuario": `${usuario}`, 'emocion': `${emocion}` };
    // localStorage.setItem('datosUsuario', JSON.stringify(datos));

    let datos = { "usuario": `${usuario}`, 'emocion': `${emocion}` };
    // divUser.innerHTML = `Usuario: ${usuario}`
    almacenEmociones.push(datos)
    localStorage.setItem('datosUsuario', JSON.stringify(almacenEmociones));
}


const muestreo = () =>{
    const fila = document.getElementById("fila");

    let almacen = localStorage.getItem("datosUsuario")
    almacen = JSON.parse(almacen)
    almacen.forEach(element => {
        fila.innerHTML += `
            <tr>
                  <th scope="row">${element.usuario}</th>
                  <td colspan="2" class="table-active"> ${element.emocion} </td>
                  <td>@Alerta</td>
            </tr>
        `
        console.log(element.usuario);
        console.log(element.usuario);
    });
}

document.addEventListener("DOMContentLoaded", (e)=>{
    e.preventDefault()
    console.log("HTML CARGADO");
    muestreo()
})