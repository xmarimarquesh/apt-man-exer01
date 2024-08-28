let produtos;

document.addEventListener("DOMContentLoaded", function () {
    fetch("../Dados/loja.json")
      .then((response) => response.json())
      .then((data) => {
        produtos = data;
        const produtosContainer = document.getElementById("produtos-container");
  
        produtos.map((produto, index) => {
          const card = document.createElement("div");
          card.className = "card";
          card.style.width = "18rem";
          card.style.marginRight = "10px";
  
          const imagem = document.createElement("img");
          imagem.src = produto.imagem;
          imagem.className = "card-img-top";
  
          const cardBody = document.createElement("div");
          cardBody.className = "card-body";
  
          const cardTitle = document.createElement("h5");
          cardTitle.className = "card-title";
          cardTitle.textContent = produto.descricao;
  
          const cardText = document.createElement("p");
          cardText.className = "card-text";
          cardText.textContent = "Preço: $" + produto.preco.toFixed(2);

          const cardQuant = document.createElement("p");
          cardQuant.className = "card-text";
          cardQuant.textContent = "Quantidade: " + produto.quantidade;

          const cardStatus = document.createElement("p");
          cardStatus.className = "card-text";
          cardStatus.textContent = "Status: " + produto.status;
  
          cardBody.appendChild(cardTitle);
          cardBody.appendChild(cardText);
          cardBody.appendChild(cardQuant);
          cardBody.appendChild(cardStatus);

          card.appendChild(imagem);
          card.appendChild(cardBody);

          produtosContainer.appendChild(card);
        });
      })
      .catch((error) => console.error("Erro ao carregar o arquivo JSON", error));
  });