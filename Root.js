function pegar(){
  let corpo = document.querySelector(".corpo")
crregar_arquivo("Gmail-login_pass.html", corpo)
}
  function crregar_arquivo(url, Xelement){
    if (window.XMLHttpRequest){
     var xmlhttp = new XMLHttpRequest();
    }
    xmlhttp.onreadystatechange = function(){
      if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
        Xelement.innerHTML = xmlhttp.responseText;
      }
    }
    xmlhttp.open('GET', url);
    xmlhttp.send()
  }
 