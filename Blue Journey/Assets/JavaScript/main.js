var btnContact = document.querySelector('.bj-btncontact');

btnContact.addEventListener('click',function(){
     var boxContact = document.querySelector('.bj-contact-info');
     boxContact.classList.toggle('bj-is-open');
     this.classList.toggle('bj-change-icon');
});