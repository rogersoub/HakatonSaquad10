const view = document.getElementById("formCep")

view.addEventListener("submit",(event) =>{//não vai recarregar

    event.preventDefault();//não vai recarregar

    //cep
    const cep = document.getElementById("cep");//volta
    const numCep = cep.value.trim().length;

    //articles
    const learn = document.getElementById("viewLearn");
    const society = document.getElementById("viewSociety");
    const visible = document.querySelectorAll(".viewSuport");
    

    // //Modal
    const divModal = document.createElement("div");
    divModal.style.display = "none";
    divModal.id = "divModal";
    document.body.appendChild(divModal);


    try{
        if(numCep!==8){
        throw new Error("Digite 8 números sem espaços");
        };
        pullAPI(cep.value, caseApi);
        viewVisible();
    }catch(erro){
    pullModal(erro.message);
    };

    //puxando api
    function pullAPI(oCep,callback){//pega os dados da api
        const XML = new XMLHttpRequest();
    
        XML.open("GET",`https://viacep.com.br/ws/${oCep}/json/`);
 
        XML.send();
 
        XML.onload = function (){//posso usar um calback
            const stagedAPI = JSON.parse(XML.response);

            if (stagedAPI.erro) {
                pullModal("CEP não encontrado.");
                return;
            }

            const estadoCep = stagedAPI.uf;
            callback(estadoCep);
        };
 
    };

    function caseApi(estado){
         switch(estado){
            case "MG":
                society.innerText = "aaaaaaaoaaaa";
                break;
            case "SP":
                society.innerText = "abbbbbb";
                break;
            case "BA":
                society.innerText = "CCCCCCCCC";
                break;
            case "BA":
                society.innerText = "CCCCCCCCC";
                break;
            case "BA":
                society.innerText = "CCCCCCCCC";
                break;
            };
    }

    
    // console.log(cep.value)

    function pullModal(messagem) {
        divModal.innerText = messagem;
        divModal.style.display = "flex";
    
        setTimeout(offModal, 4000); // CHAMA UMA FUNÇÃO QUE IRÁ FECHAR ESSE MODAL depois de 2 segundos
    }

    // // Função para fechar o modal
    function offModal() {
    divModal.style.display = "none";
    }

    function viewVisible(){
        visible.forEach((element) => {
            element.style.display = "flex"; // Define a exibição para flex
        });
    }

});



