function agregarPendiente(){
    var texto=document.getElementById("linombre").value;
    var li=document.createElement("LI");
    li.innerHTML=texto==''?'(nada)':texto;
    document.getElementById("lista").appendChild(li);
}


function crearLista(){
    var div = document.createElement("div");
    document.getElementsByTagName("section")[1].appendChild(div);
    div.appendChild(ul);
    ul.appendChild(li);
}

//definitivamente tengo que practicar más con DOM :(

/*la lista se clona, pero al presionar sobre sus elementos estos no se borran
Creo que podría usar un objeto, pero no estoy segura, así que lo dejo así*/


function borrarElemento(){
    lis=document.getElementById("lista").getElementsByTagName("li");
    for(var i=0; i<lis.length;i++){
        lis[i].onclick=function(){
            if(confirm("¿Eliminar este pendiente?"))
            this.parentNode.removeChild(this);
        };
    }
};
//Ya no sé qué estoy haciendo...
