window.addEventListener("DOMContentLoaded", () => {

    const difDiferenciais = document.getElementById('div-Diferenciais');
    const divEspiral = document.getElementById('div-section33');

    const dadosCards = [
        { id:"temas",
          iconeUrl:"https://image.conteudo.sistemaetapa.com.br/lib/fe3111737164047b741c73/m/1/cb299e9a-a612-44f8-924a-88f36596db41.png",
          iconWhite:"https://image.conteudo.sistemaetapa.com.br/lib/fe3111737164047b741c73/m/1/b43eaf10-bf92-4865-a86d-0183f971176e.png",
          titulo:"Temas desenvolvidos de forma integrada",
          descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae gravida eros, ac venenatis augue. In quis consectetur mi. Duis et quam venenatis. ",
          iconeSeta:"https://image.conteudo.sistemaetapa.com.br/lib/fe3111737164047b741c73/m/1/28b3e48a-29c8-418e-9009-d549b36df068.png",
          url:"https://www.sistemaetapa.com.br/material-didatico/ensino-fundamental/fundamental-2"
        },
        { id:"ludico",
        iconeUrl:"https://image.conteudo.sistemaetapa.com.br/lib/fe3111737164047b741c73/m/1/48da5911-da9b-4e6d-9212-24db0577743a.png",
        iconWhite:"https://image.conteudo.sistemaetapa.com.br/lib/fe3111737164047b741c73/m/1/b43eaf10-bf92-4865-a86d-0183f971176e.png",
        titulo:"Atividades lúdicas",
        descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae gravida eros, ac venenatis augue. In quis consectetur mi. Duis et quam venenatis. ",
        iconeSeta:"https://image.conteudo.sistemaetapa.com.br/lib/fe3111737164047b741c73/m/1/28b3e48a-29c8-418e-9009-d549b36df068.png",
        url:"https://www.sistemaetapa.com.br/material-didatico/educacao-infantil"
        },
        { id:"conteudos",
        iconeUrl:"https://image.conteudo.sistemaetapa.com.br/lib/fe3111737164047b741c73/m/1/9006eb30-37e7-413b-b313-f9093ed3f035.png",
        iconWhite:"https://image.conteudo.sistemaetapa.com.br/lib/fe3111737164047b741c73/m/1/d2c907f4-9b52-4663-bac7-f6574e128a18.png",
        titulo:"Conteúdos de diversos campos de experiência",
        descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae gravida eros, ac venenatis augue. In quis consectetur mi. Duis et quam venenatis. ",
        iconeSeta:"https://image.conteudo.sistemaetapa.com.br/lib/fe3111737164047b741c73/m/1/28b3e48a-29c8-418e-9009-d549b36df068.png",
        url:"https://www.sistemaetapa.com.br/material-didatico/materiais-opcionais"
        },
    ];

    dadosCards.forEach((card) => {
        criarCardDiferenciais(card);
    });

    function criarCardDiferenciais(dados) {
        const divcard = document.createElement('div');
        divcard.classList.add('div-diferenciais')
        const img1 = document.createElement('img');
        img1.classList.add('iconeDiferenciais');
        const h2 = document.createElement('h2');
        h2.classList.add('title');
        h2.style.color = "var(--Azul)";
        h2.style.margin = "0px";  

        const seta = document.createElement('img');
        seta.classList.add('seta');
        seta.src = dados.iconeSeta;

        img1.src = dados.iconeUrl;
        h2.innerText = dados.titulo;
        divcard.append(img1,h2,seta);



        divcard.addEventListener('mouseover',()=>{
            divcard.innerHTML=""
            const descricao = document.createElement('p');
            const divDescricao = document.createElement('div');
            divDescricao.classList.add('div-diferenciais-hover');
            divcard.style.cursor="pointer";
            divcard.style.backgroundColor="var(--Azul)";
            h2.style.color="var(--Amarelo)";
            descricao.innerText = dados.descricao;
            
            img1.src = dados.iconWhite;
            descricao.classList.add('descriptionDiferenciais');
            divDescricao.append(h2,descricao)
            divcard.append(img1,divDescricao,seta);
            

        } )

        divcard.style.cursor = "pointer";
        divcard.addEventListener('click', () => {
            window.open(dados.url, '_blank');
        });


        divcard.addEventListener('mouseleave', () => {
            const divHover = document.querySelectorAll('.div-diferenciais-hover');
            divHover.forEach(div => {
                div.style.display = 'none';
            });
            divglobal = document.getElementById('div-Diferenciais');
            divglobal.style.backgroundColor="var(--Branco)";
            divcard.style.backgroundColor="var(--Branco)";
            img1.src = dados.iconeUrl;
            h2.style.color="var(--Azul)"
            
            divcard.append(img1, h2,seta);
        });


        difDiferenciais.appendChild(divcard);

      

        
    
    }
    

    function criarCardPropostaEspiral() {
        window.onclick(()=> window.open())
        const div = document.createElement('div');
        const div2 = document.createElement('div');
        div.classList.add('div-section3-button-modal');
        div.id = "divModal";
    
        const titulo = document.createElement('h4');
        titulo.innerText = "Proposta de Espiral Crescente";
    
        const iconeSeta = document.createElement('img');
        iconeSeta.src = "https://image.conteudo.sistemaetapa.com.br/lib/fe3111737164047b741c73/m/1/6d59982d-990c-490c-b228-04c29cc1b2a3.png";
    
        // Cria a descrição mas não a adiciona ainda
        const descricao = document.createElement('p');
        descricao.innerText = "A metodologia que permeia todo material didático e cuja eficiência é comprovada por neurocientistas. Não existe o momento em que um assunto torna-se passado, que o conhecimento torna-se completamente conhecido e pode ser esquecido.";
        
        const link = document.createElement('a')
        link.href="https://www.sistemaetapa.com.br/material-didatico/espiral-crescente"
        link.target="_blank";

        descricao.style.color = "var(--Branco)";
        descricao.style.display = "none"; // Inicialmente escondido
        div2.append(titulo, descricao)
        div.append(div2,iconeSeta, );
        link.appendChild(div)
        divEspiral.appendChild(link);
    
        div.addEventListener('mouseover', () => {
            div.classList.add('div-section3-button-modal-hover');
            titulo.style.color = "var(--Amarelo)";
            descricao.style.display = "block"; // Mostra a descrição
            iconeSeta.src = "https://image.conteudo.sistemaetapa.com.br/lib/fe3111737164047b741c73/m/1/11e76e29-3414-41c2-bc87-0d97985db8c2.png";
        });
    
        div.addEventListener('mouseleave', () => {
            div.classList.remove('div-section3-button-modal-hover');
            titulo.style.color = "var(--Azul)";
            descricao.style.display = "none"; // Esconde a descrição novamente
            iconeSeta.src = "https://image.conteudo.sistemaetapa.com.br/lib/fe3111737164047b741c73/m/1/6d59982d-990c-490c-b228-04c29cc1b2a3.png";
        });
    }
    
    criarCardPropostaEspiral();
    
    

    });

const descricaoSlidesAluno = [
    "Apostilas adequadas a cada faixa etária",
    "Imagens grandes, de traçados grossos.",
    "Recursos que estimulam a curiosidade"
]

const descricaoSlidesProfessor = [
    "Cartazes Direitos e Deveres",
    "Alfabeto ilustrado",
    "Pirâmide alimentar",
    "Material de apoio",
    "Lousa metálica e encartes imantados",
    "Livro-cenário temático e personagens",
    "Encartes descartáveis"
]




let slideIndex = 0; // Inicia no primeiro slide


function moveSlide(step) {
    const slides = document.querySelectorAll('#slide img');
    const totalSlides = slides.length;

    slideIndex += step;

    // Loop para permitir o carrossel infinito
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    // Obtém a largura da tela
    const screenWidth = window.innerWidth;

    // Adapta o cálculo da nova margem esquerda com base na largura da tela
    let newMarginLeft;
    if (screenWidth >= 768) {
        newMarginLeft = slideIndex * -100; // Cada slide tem 100% da largura do contêiner
    } else if (screenWidth >= 600) {
        newMarginLeft = slideIndex * -150; // Ajuste para telas entre 768px e 600px
    } else if (screenWidth >= 425) {
        newMarginLeft = slideIndex * -200; // Ajuste para telas entre 600px e 425px
    } else if (screenWidth >= 375) {
        newMarginLeft = slideIndex * -250; // Ajuste para telas entre 425px e 375px
    } else {
        newMarginLeft = slideIndex * -300; // Ajuste para telas menores que 375px
    }
    
    document.getElementById('slide').style.marginLeft = `${newMarginLeft}%`;
    document.getElementById('slideDescription').innerText=descricaoSlidesProfessor[slideIndex];

}


function moveSlide2(step) {
    const slides = document.querySelectorAll('#slideProfessor img');
    const totalSlides = slides.length;
    
    slideIndex += step;
    
    // Loop para permitir o carrossel infinito
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    const screenWidth = window.innerWidth;

    let novaMargemLeft;

    if(screenWidth >=768){
        novaMargemLeft = slideIndex * -100;
    }else if (screenWidth >=600){
        novaMargemLeft = slideIndex * -150;
    }else if(screenWidth >= 425){
        novaMargemLeft = slideIndex * -200;
    }else if(screenWidth >= 375){
        novaMargemLeft = slideIndex * -250;
    }else{
        novaMargemLeft = slideIndex * -300;
    }

    document.getElementById('slideProfessor').style.marginLeft =`${novaMargemLeft}%`;
    document.getElementById('slideDescription2').innerText=descricaoSlidesProfessor[slideIndex];
    
}

// Obtem o modal
var modal = document.getElementById('videoModal');

// Obtem o botão que abre o modal
var btn = document.querySelector('.btnExemplos');


// Obtem o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abre o modal
btn.onclick = function() {
    modal.style.display = "block";
    // Atualize o 'src' para o URL do seu vídeo
    document.getElementById('videoIframe').src = "https://player.vimeo.com/video/252332793?autoplay=1";
}
span.onclick = function() {
    modal.style.display = "none";
    // Pausa o vídeo ao fechar o modal
    document.getElementById('videoIframe').src = "";
}

var modal2 = document.getElementById('videoModal2');

var btn2 = document.querySelector('.btnExemplos2');

var span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function() {
    modal2.style.display = "block";
    // Atualize o 'src' para o URL do seu vídeo
    document.getElementById('videoIframe2').src = "https://www.youtube.com/embed/PaAYEFciw0w";
}

// Quando o usuário clicar em <span> (x), fecha o modal

span2.onclick = function() {
    modal2.style.display = "none";
    // Pausa o vídeo ao fechar o modal
    document.getElementById('videoIframe2').src = "";
}

// Quando o usuário clicar fora do modal, ele será fechado
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        // Pausa o vídeo ao fechar o modal
        document.getElementById('videoIframe').src = "";
    }
}

window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
        // Pausa o vídeo ao fechar o modal
        document.getElementById('videoIframe2').src = "";
    }
}

// Função para preencher o select de municípios baseado no estado selecionado
function preencherMunicipios(siglaEstado) {
    // Limpa as opções existentes
    const selectMunicipio = document.getElementById('municipio');
    selectMunicipio.innerHTML = '<option value="">Selecione seu município</option>';

    // Se nenhum estado estiver selecionado, não faça nada
    if (!siglaEstado) return;

    // URL da API do IBGE para municípios
    const urlMunicipios = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${siglaEstado}/municipios`;

    fetch(urlMunicipios)
        .then(response => response.json())
        .then(municipios => {
            // Ordena os municípios pelo nome
            municipios.sort((a, b) => a.nome.localeCompare(b.nome));

            // Adiciona cada município como opção no select
            municipios.forEach(municipio => {
                let option = document.createElement('option');
                option.value = municipio.id; // Aqui você pode preferir usar municipio.nome
                option.textContent = municipio.nome;
                selectMunicipio.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Falha ao carregar municípios da API do IBGE', error);
        });
}

// Adiciona um ouvinte de eventos ao select de estados para carregar os municípios
document.getElementById('estado').addEventListener('change', function() {
    // Chama a função para preencher os municípios passando a sigla do estado selecionado
    preencherMunicipios(this.value);
});



// Função para preencher o select de estados
function preencherEstados() {
    // URL da API do IBGE para estados
    const urlEstados = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

    // Fetch para a API do IBGE
    fetch(urlEstados)
        .then(response => response.json()) // Converte a resposta para JSON
        .then(estados => {
            // Recebe a lista de estados e ordena por nome
            estados.sort((a, b) => a.nome.localeCompare(b.nome));

            // Seleciona o elemento do DOM
            const selectEstado = document.getElementById('estado');
            
            // Cria um novo option no select para cada estado
            estados.forEach(estado => {
                let option = document.createElement('option');
                option.value = estado.sigla;
                option.textContent = estado.nome;
                selectEstado.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Falha ao carregar estados da API do IBGE', error);
        });
}

// Adiciona um ouvinte de eventos para quando a janela terminar de carregar
window.addEventListener('load', preencherEstados);

// Seu código para o formulário aqui
document.getElementById('contactForm').addEventListener('submit', function(event){
    // ... (código de manipulação do formulário)
});

function trocarMenu(){
    const navMobile = document.getElementById('nav-mobile')
    navMobile.classList.toggle('nav-mobile-open')

}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(re.test(email))

    if (!re.test(email)) {
        console.log('email inválido');
        return false;
    }
    console.log('email válido');
    return true;
}

function validateTelefone(telefone) {
    const re = /^(\d{2})?(\d{9})$/; // Aceita números de telefone com 10 ou 11 dígitos
    console.log(re.test(telefone), 'telefone válido');
    return re.test(telefone);
}

function validateForm() {
    var nome = document.getElementById('nome').value.trim();
    var sobrenome = document.getElementById('sobrenome').value.trim();
    var email = document.getElementById('email').value.trim();
    var telefone = document.getElementById('telefone').value.trim();
    var escola = document.getElementById('escola').value.trim();

    if (!validateEmail(email)) {
        mostrarMensagemErro(document.getElementById('email'), 'Por favor, insira um e-mail válido.');
    } else {
        esconderMensagemErro(document.getElementById('email'));
    }

    if (!validateTelefone(telefone)) {
        mostrarMensagemErro(document.getElementById('telefone'), 'Por favor, insira um telefone válido.');
    } else {
        esconderMensagemErro(document.getElementById('telefone'));
    }

    if (nome !== '' && sobrenome !== '' && escola !== '') {
        // Se todos os campos estiverem preenchidos, ativa o botão de envio
        document.getElementById('btnFormulario').disabled = false;
        return true;
    } else {
       
        document.getElementById('btnFormulario').disabled = true;
        return false;
    }
}

document.getElementById('email').addEventListener('blur', validateForm);
document.getElementById('telefone').addEventListener('blur', validateForm);

function mostrarMensagemErro(inputElement, mensagem) {
    // Verifica se já existe uma mensagem de erro para este campo
    const mensagemErro = inputElement.parentNode.querySelector('.mensagem-erro');
    if (!mensagemErro) {
        // Se não existir, cria e insere uma nova mensagem de erro
        const novaMensagemErro = document.createElement('div');
        novaMensagemErro.className = 'mensagem-erro';
        novaMensagemErro.innerText = mensagem;
        inputElement.parentNode.insertBefore(novaMensagemErro, inputElement.nextSibling);
    }
}

function esconderMensagemErro(inputElement) {
    // Verifica se existe uma mensagem de erro para este campo e a remove, se existir
    const mensagemErro = inputElement.parentNode.querySelector('.mensagem-erro');
    if (mensagemErro) {
        mensagemErro.parentNode.removeChild(mensagemErro);
    }
}



console.log("version 1");