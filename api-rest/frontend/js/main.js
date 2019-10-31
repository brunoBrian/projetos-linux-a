(function (){

  var ajax = new XMLHttpRequest();

  ajax.open('get', 'http://localhost:3000/user');
  ajax.send();

  ajax.addEventListener('readystatechange', e => {
   if(ajax.readyState === 4 && ajax.status === 200){
     console.log(ajax.responseText);
   }
  }, false);

})();