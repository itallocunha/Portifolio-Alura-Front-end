//DDeclarando variaveis
var btnContact = document.querySelector('.bj-btncontact');

//Page preloader
window.addEventListener('load', function(){
     var pagePreloader = document.querySelector('.bj-preloader');
     pagePreloader.classList.add('bj-fade-out');

     this.setTimeout(function(){
          pagePreloader.style.display = 'none';
     },2000);
});


//Abrindo e fechando informação de contato
btnContact.addEventListener('click',function(){
     var boxContact = document.querySelector('.bj-contact-info');
     boxContact.classList.toggle('bj-is-open');
     this.classList.toggle('bj-change-icon');
});