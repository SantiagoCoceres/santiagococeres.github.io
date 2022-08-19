var email = document.getElementById("email");
var password = document.getElementById("password");
var form = document.getElementById("form")
function login(){
    if (email.value && password.value){
        form.action = "index.html"
    }
    else{
        document.getElementById("alerta").innerHTML =`
    Por favor <strong> Ingrese los datos. </strong>
    <a href="" type="button" class="btn-close" data-dismiss="alert" aria-label="close"></a>
  `;
  document.getElementById("alerta").classList.add("show") 
    }

}