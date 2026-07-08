document.addEventListener('DOMContentLoaded', function(){
  var btn = document.getElementById('donateBtn');
  if(btn){
    btn.addEventListener('click', function(e){
      e.preventDefault();
      alert('Thanks — you\'re one step away from making an impact!');
    });
  }
});
