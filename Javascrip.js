
// 1. Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres
let listContact = ['Jairo Menjevar', 'Carlos Darias', 'jonh smith', 'Poncho Matias'];

// Crea una función para añadir un nuevo contacto a una lista
function addContact(contact){
    contactList.push(contact);
}

addContact("Saul Cruz");


//Crea una función para borrar un contacto existente de la lista
function contactDelete(nombreCompleto) {
  const indice = contactList.indexOf(nombreCompleto);
  if (indice !== -1) {
    contactList.splice(indice, 1);
    console.log(`Se ha borrado el contacto "${nombreCompleto}" de la lista.`);
  } else {
    console.log(`No se encontró el contacto "${nombreCompleto}" en la lista.`);
  }
}
9

contactDelete("Carlos Darias");


//Crea una función para imprimir en consola los contactos presentes en la lista
function contactPrint() {
  console.log("Lista de Contactos:");
  for (let i = 0; i < contactList.length; i++) {
    console.log(contactList[i]);
  }
}


contactPrint();