const nameinp = document.getElementById("nameInp");
const msginp = document.getElementById("msgInp");

class Person{
        constructor(){
            this.reports = [];
        }

        //ADICIONA
        add(names,texts){
            if(names && texts){
                const newReport = {
                    names,
                    texts
                };
                this.reports.push(newReport);//coloca no array de objetos o tal objeto

                console.log(this.reports);

                this.reading()//vai ver
                //limpa
                console.log(this.reports)
                nameinp.value='';
                msginp.value = '';

            }else{
                console.log("tá vazio");//COLOCAR MODAL
            }
            
        }

        // MOSTRA
        reading(){
            const areaResult = document.getElementById('exemple-result');
            areaResult.innerHTML = '';

            this.reports.forEach((reportFor,i)=>{
                //AREAS DE VISÃO
                const div = document.createElement('div')
                div.className=`divContent`;

                const h4 = document.createElement('h4');
                h4.className = "text-h4";
                h4.textContent = reportFor.names;

                const p = document.createElement('p');
                p.className = "text-p";
                p.textContent= reportFor.texts;

                const deleteBTN = document.createElement('button');
                deleteBTN.textContent ="Deletar"
                deleteBTN.className = "btnDel";
                deleteBTN.onclick = ()=>this.delete(i);
            

                areaResult.appendChild(div)
                div.appendChild(h4);
                div.appendChild(p);
                div.appendChild(deleteBTN);

                

            });

        };

        // DELETA 
        delete(i){
            this.reports.splice(i,1);
            this.reading();
        };
        

    }

const related = new Person();//instanciamento


const btn = document.getElementById("send");

//clique
btn.addEventListener("click", (event)=> {
    event.preventDefault();//clicque

    const name = nameinp.value.trim();
    const text = msginp.value.trim();

    related.add(name, text)
    

});   

