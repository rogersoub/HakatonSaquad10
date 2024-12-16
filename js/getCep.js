const view = document.getElementById("formCep")

view.addEventListener("submit",(event) =>{//não vai recarregar

    event.preventDefault();//não vai recarregar

    //cep
    const cep = document.getElementById("cep");//volta
    const numCep = cep.value.trim().length;

    //articles
    const learn = document.getElementById("viewLearn");
    const society = document.getElementById("viewSociety");
    const societyCity = document.getElementById("h1Society");
    const societyLocal = document.getElementById("pSociety");
    const societyNumber = document.getElementById("h4Society");




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
                societyCity.innerText = "BH - CAPS III Planalto";
                societyLocal.innerText = "Endereço: Rua Nossa Senhora do Loreto, 281, Planalto";
                societyNumber.innerText = "(31) 3277-5516";
                break;
            case "SP":
                societyCity.innerText = "SP - CAPS AD II Vila Madalena";
                societyLocal.innerText = "Endereço: R. Benedito Coelho Neto, 163 - Itaquera";
                societyNumber.innerText = "(11) 3756-3011​";
                break;
            case "AC":
                societyCity.innerText = "Rio Branco - CAPS Esperança";
                societyLocal.innerText = "Endereço: Rua Valdomiro Lopes, nº 523, Bairro Vila Ivonete.";
                societyNumber.innerText = "(68) 3224-7896";
                break;
            case "BA":
                societyCity.innerText = "Salvador";
                societyLocal.innerText = "Endereço: Rua Visconde de Itaborahy, 102 - Baixa de Quintas";
                societyNumber.innerText = "(71) 3202-2134";
                break;
            case "AL":
                societyCity.innerText = "Maceió - CAPS III";
                societyLocal.innerText = "Endereço: Rua Santa Luzia, nº 150, Bairro Farol.";
                societyNumber.innerText = "(82) 3315-2114";
                break;

            case "AP":
                societyCity.innerText = "Macapá - CAPS Vida";
                societyLocal.innerText = "Endereço: Rua Cândido Mendes, nº 2375, Bairro Central.";
                societyNumber.innerText = "(96) 3223-4523";
                break;

            case "AM":
                societyCity.innerText = "Manaus";
                societyLocal.innerText = "Endereço: Rua São Domingos, 250 - Compensa.";
                societyNumber.innerText = "(92) 3233-9993";
                break;

            case "CE":
                societyCity.innerText = "Fortaleza - CAPS AD III";
                societyLocal.innerText = "Endereço: Rua Nogueira Acioly, nº 358, Bairro Aldeota.";
                societyNumber.innerText = "(85) 3101-4343";
                break;

            case "ES":
                societyCity.innerText = "Vitória - CAPS AD III";
                societyLocal.innerText = "Endereço: Avenida Beira Mar, nº 250, Bairro Centro.";
                societyNumber.innerText = "(27) 3224-4142";
                break;

            case "GO":
                societyCity.innerText = "Goiânia";
                societyLocal.innerText = "Endereço: Rua 26, Qd. 25 Lt. 01 - Vila Nova.";
                societyNumber.innerText = "(62) 3259-3406";
                break;

            case "MA":
                societyCity.innerText = "São Luís - CAPS AD";
                societyLocal.innerText = "Endereço: Rua da Figueira, nº 100, Bairro Centro.";
                societyNumber.innerText = "(98) 3214-8945";
                break;

            case "MT":
                societyCity.innerText = "Cuiabá - CAPS CPA IV";
                societyLocal.innerText = "Endereço: Rua 82, S/N, Bairro CPA IV, Cuiabá, MT.";
                societyNumber.innerText = "(65) 3649-661";
                break;

            case "MS":
                societyCity.innerText = "Campo Grande - CAPS III";
                societyLocal.innerText = "Endereço: RTravessa Pires de Matos, 51, Bairro Amambaí.";
                societyNumber.innerText = "(67) 3314-3013";
                break;

            case "PA":
                societyCity.innerText = "Belém";
                societyLocal.innerText = "Endereço: Av. Pedro Miranda, 1304";
                societyNumber.innerText = "(91) 3246-2306";
                break;

            case "PB":
                societyCity.innerText = "João Pessoa";
                societyLocal.innerText = "Endereço: Rua Floriano Peixoto, 78, Centro, João Pessoa – PB";
                societyNumber.innerText = "(83) 3218-7181";
                break;
            case "PR":
                societyCity.innerText = "Curitiba";
                societyLocal.innerText = "Endereço: Rua Dr. Faivre, 145 - Centro.";
                societyNumber.innerText = "(41) 3221-2401";
                break;
            case "PE":
                societyCity.innerText = "Recife";
                societyLocal.innerText = "Endereço: Av. Norte Miguel Arraes de Alencar, 5600";
                societyNumber.innerText = "(81) 3355-2058";
                break;

            case "PI":
                societyCity.innerText = "Teresina";
                societyLocal.innerText = "Endereço: Praça Marechal Deodoro, 860, Palácio da Cidade, Teresina - PI.";
                societyNumber.innerText = "(86) 3215-7610";
                break;
            case "RJ":
                societyCity.innerText = "Rio de Janeiro";
                societyLocal.innerText = "Endereço: Av. Afrânio de Melo Franco, 333 - Leblon.";
                societyNumber.innerText = "(21) 2512-3456";
                break;
            case "RN":
                societyCity.innerText = "Natal";
                societyLocal.innerText = "Endereço: Rua Ulisses Caldas, 81, Natal - RN.";
                societyNumber.innerText = "(84) 3232-8845";
                break;
            case "RS":
                societyCity.innerText = "Porto Alegre";
                societyLocal.innerText = "Endereço: RAv. Azenha, 165 - Azenha.";
                societyNumber.innerText = "(51) 3289-9011";
                break;

            case "RO":
                societyCity.innerText = "Porto Velho";
                societyLocal.innerText = "Endereço: Rua João Goulart, nº 2357, Bairro São Cristóvão, Porto Velho - RO";
                societyNumber.innerText = "(69) 3229-1234";
                break;

            case "RR":
                societyCity.innerText = "Boa Vista";
                societyLocal.innerText = "Endereço: Rua da Mangueira, nº 273, Mecejana, Boa Vista - RR";
                societyNumber.innerText = "(95) 3625-2196 ";
                break;
            case "SC":
                societyCity.innerText = "Florianópolis";
                societyLocal.innerText = "Endereço: Rua Rui Barbosa, 152, Estreito, Florianópolis – SC.";
                societyNumber.innerText = "(48) 3332-4113 ";
                break;
            case "SE":
                societyCity.innerText = "Aracaju";
                societyLocal.innerText = "Endereço: Avenida Tancredo Neves, nº 805, Bairro América, Aracaju - SE.";
                societyNumber.innerText = "(79) 3218-5416";
                break;
            case "TO":
                societyCity.innerText = "Palmas";
                societyLocal.innerText = "Endereço: RRua LO-12, Quadra 406 Sul, Lote 18, Plano Diretor Sul, Palmas – TO.";
                societyNumber.innerText = "(63) 3218-5644";
                break;
            case "DF":
                societyCity.innerText = "Maceió - CAPS III";
                societyLocal.innerText = "Endereço: EQNM 18/20 - Ceilândia Sul CEP: 72220-180.";
                societyNumber.innerText = "(61) 3488-9600";
                break;
            };
    }

    
    // console.log(cep.value)

    function pullModal(messagem) {
        // divModal.innerText = messagem;
        // divModal.style.display = "flex";
        alert(messagem)
    
        // setTimeout(offModal, 4000); CHAMA UMA FUNÇÃO QUE IRÁ FECHAR ESSE MODAL depois de 2 segundos
    }

    // // Função para fechar o modal
    // function offModal() {
    // divModal.style.display = "none";
    // }

    function viewVisible(){
        visible.forEach((element) => {
            element.style.display = "flex"; // Define a exibição para flex
        });
    }

});



