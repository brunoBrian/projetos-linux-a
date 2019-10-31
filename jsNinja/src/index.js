// (function () {
  
//   var $inputButton = document.getElementById('inputButton');
//   var $inputText = document.getElementById('inputText');
//   var $status = document.querySelectorAll('.status');

//   const ajax = new XMLHttpRequest();

//   $inputButton.addEventListener('click', () => {
//     const cpfReplaced = $inputText.value ? formatCep($inputText.value) : '';
//     buscaCep(cpfReplaced);
//   });

//   const formatCep = (cep) => {
//     const cpfReplaced = cep.match(/\d/g).join("");

//     return cpfReplaced;
//   }

//   const buscaCep = (cep) => {
//     const url = `https://viacep.com.br/ws/${cep}/json/`;
//     ajax.open('GET', url);
//     ajax.send();
//     getMessage('loading');

//     ajax.addEventListener('readystatechange', checkIsAjaxOk);
//   }

//   const checkIsAjaxOk = () => {
//     if(ajax.readyState === 4 && ajax.status === 200) {
//       showData();
//       getMessage('success');
//     } else {
//       getMessage('error');
//     }
//   }

//   const parseData = () => {
//     var result;

//     try {
//       result = JSON.parse(ajax.responseText);
//     } catch {
//       result = '';
//     }

//     return result;
//   }

//   const showData = () => {
//     const data = parseData();
//     var $logradouro = document.querySelectorAll('.logradouro');
//     var $bairro = document.querySelectorAll('.bairro');
//     var $estado = document.querySelectorAll('.estado');
//     var $cidade = document.querySelectorAll('.cidade');
//     var $cep = document.querySelectorAll('.cep');

//     console.log(data);

//     if(!data)
//       return;

//     putTextInSpan(data.logradouro, $logradouro[0]);
//     putTextInSpan(data.bairro, $bairro[0]);
//     putTextInSpan(data.uf, $estado[0]);
//     putTextInSpan(data.localidade, $cidade[0]);
//     putTextInSpan(data.cep, $cep[0]);
//   }

//   const putTextInSpan = (text, elementArray) => {
//     elementArray.textContent = text;
//   } 


//   const getMessage = (type) => {
//     const cpfReplaced = $inputText.value ? formatCep($inputText.value) : '';
//     const messages = {
//       loading: `Buscando informações para o CEP ${cpfReplaced}...`,
//       error: `Não encontramos o endereço para o CEP ${cpfReplaced}.`,
//       success: `Endereço referente ao CEP ${cpfReplaced}:`
//     };

//     $status[0].textContent = messages[type];
//   }

// })();

(function (){

  var ajax = new XMLHttpRequest();

  //  MÉTODO GET
  // ajax.open('get', 'http://localhost:3000/user');
  // ajax.send();

  // ajax.addEventListener('readystatechange', e => {
  //  if(ajax.readyState === 4){
  //   // if(ajax.readyState === 4 && ajax.status === 200){
  //    console.log(ajax.responseText);
  //  }
  // }, false);



  // //MÉTODO POST
  // ajax.open('post',  'http://localhost:3000/user');
  // ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  // ajax.send('username=Geraldo&idade=50&profissao=Administrador');

  // console.log('Cadastrando Usuario');
  // ajax.onreadystatechange = () => {
  //   if(ajax.readyState === 4){
  //     console.log('Usuário cadastrado!', ajax.responseText);
  //   }
  // }

  var $name = document.querySelectorAll('[data-js="input-name"]');
  var $idade = document.querySelectorAll('[data-js="input-idade"]');
  var $profissao = document.querySelectorAll('[data-js="input-profissao"]');
  var $submit = document.querySelectorAll('[data-js="input-submit"]');

  $submit[0].addEventListener("click", e => {
    e.preventDefault();
    
    ajax.open('post', 'http://localhost:3000/user');
    ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    ajax.send(`username=${$name[0].value}&idade=${$idade[0].value}&profissao=${$profissao[0].value}`);

    ajax.onreadystatechange = () => {
      if(ajax.readyState === 4 && ajax.status === 200){
        $name[0].value = '';
        $idade[0].value = '';
        $profissao[0].value = '';
      }
    }
  });

  console.log($name, $submit[0].value, $idade[0].value, $profissao);

  var lista = document.createElement('ul');
  var paragraph = document.createElement('p');
  var listaItem = document.createElement('li');
  var $listaUsuarios = document.querySelectorAll('.lista-usuarios');

  console.log($listaUsuarios);

  
  
  
  ajax.open('get', 'http://localhost:3000/user');
  ajax.send();
  
  ajax.addEventListener('readystatechange', e => {
    if(ajax.readyState === 4){
      var response = JSON.parse(ajax.response);
      
      response.map(item => {
        listaItem.insertAdjacentHTML('beforeend', item.username);
        lista.appendChild(listaItem);
      });

      $listaUsuarios[0].appendChild(lista);
      console.log(response);
    }
  }, false);
    


})();