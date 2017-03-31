function agregarLista(){ //esta función se encarga de crear las listas, de crear nuevos pendientes, de creear botones y de todo
   var nombreLista = document.getElementById("nombreLista"); //
   var div = document.createElement("div");//crea un elemento div
   div.id = Date.now();//crea id único para division
   document.getElementsByTagName("section")[0].appendChild(div);/*agrega a div como nodo hijo de section,
    se especifica el indice de section para que sea ahí donde se agrega especificamente*/
   var ul = document.createElement("ul");//crea una lista desordenada
   ul.id = Date.now();//asigna un id único a ul
   div.appendChild(ul);//asigna a ul como nodo hijo de division
   ul.innerHTML = nombreLista.value + " " + "<span onclick='eliminar(this)'>X </span>";/*se escribe el nombre de la lista, 
   este se toma del input existente en html y le agrega una X que tiene la función de eliminar la lista cuando se hace click en ella*/
   var nombrePendiente = document.createElement("input");//crea input para crear un pendiente
   nombrePendiente.setAttribute("type","text");//añade atributos al input
   nombrePendiente.id = Date.now();//asigna id único para nombrePendiente
   div.appendChild(nombrePendiente);//se asigna a nombrePendiente como nodo hijo div
   var agregarPendiente = document.createElement("input");//crea un elemento input
   agregarPendiente.setAttribute("type","button");//Se le asigna el atributo de botón al input, así como value y class en las líneas de abajo
   agregarPendiente.setAttribute("value","Agregar Pendiente");//
   agregarPendiente.setAttribute("class","boton");//
   agregarPendiente.id = Date.now();//se asigna un id único a agregarPendiente
   div.appendChild(agregarPendiente);//asigna agregarPendiente como nodo hijo de division
   
   agregarPendiente.onclick = function(){
                           var li= document.createElement("li");//crea los elementos de la lista, que serán pendientes
                           li.id = Date.now();//id único a cada elemento de la lista
                           ul.appendChild(li);//asigna a li como nodo hijo de ul
                           li.innerHTML=nombrePendiente.value + " " + "<span onclick='eliminar(this)'>X </span>";
                       //se asigna valor a li
   }
   
   //es necerio asignar un id único a cada elemento ya que estos están ligados a la x que los elimina
}

function eliminar(elemento) {
       /*Esta funcion consigue eliminar los pendientes de manera independiente y tambien elimina la lista*/
       var id=elemento.parentNode.getAttribute("id");//a cada elemento la va a tomar el id del nodo padre
       node=document.getElementById(id); //llama el elemento id
       node.parentNode.removeChild(node);// remueve el nodo hijo del nodo padre que se especifica
}