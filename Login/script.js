

function login() {
  var nome = $("#nome").val();
  var senha = $("#senha").val();

  const card = document.createElement("div");
  card.className = "card";
  card.style.display = "block";
  card.style.width = "30%";
  card.style.color = "white";
  card.style.padding = "20px";
  card.style.textAlign = "center";

  const btnFechar = document.createElement("a");
  btnFechar.href = "index.html";
  btnFechar.textContent = "Fechar";

  input1 = document.getElementById("nome");
  input2 = document.getElementById("senha");

  document.body.appendChild(card);
  
  if (nome && senha && nome === "admin" && senha === "admin") {
    const user = {
      name: nome,
      dataEntrada: new Date(),
      id: Math.floor(Math.random() * 100000),
    };
    
    localStorage.setItem("usuario", JSON.stringify(user));
    
    // Redireciona para a página da loja
    window.location.href = "../Loja/loja.html";
    
  } else {
    card.style.background = "red";
    card.textContent = "Nome ou senha incorretos. ";
    card.appendChild(btnFechar);

    input1.style.border = "2px solid red";
    input2.style.border = "2px solid red";
    
  }
}

function senha() {
  let senha = document.getElementById("senha");
  let img = document.getElementById("img");

  if(senha.type === "text"){
    senha.type = "password";
    img.src = "../img/hide.png"
  }else{
    senha.type = "text";
    img.src = "../img/view.png"
  }
}
