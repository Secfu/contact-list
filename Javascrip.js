
// 1. Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres
// let listContact = ['Jairo Menjevar', 'Carlos Darias', 'jonh smith', 'Poncho Matias'];

// Crea una función para añadir un nuevo contacto a una lista
// function addContact(contact){
//     contactList.push(contact);
// }

// addContact("Saul Cruz");


//Crea una función para borrar un contacto existente de la lista
// function contactDelete(nombreCompleto) {
//   const indice = contactList.indexOf(nombreCompleto);
//   if (indice !== -1) {
//     contactList.splice(indice, 1);
//     console.log(`Se ha borrado el contacto "${nombreCompleto}" de la lista.`);
//   } else {
//     console.log(`No se encontró el contacto "${nombreCompleto}" en la lista.`);
//   }
// }


// contactDelete("Carlos Darias");


//Crea una función para imprimir en consola los contactos presentes en la lista
// function contactPrint() {
//   console.log("Lista de Contactos:");
//   for (let i = 0; i < contactList.length; i++) {
//     console.log(contactList[i]);
//   }
// }


// contactPrint();


//////////////////////////////////////////////////////////////////////////////////////////////////
////////// Modificacion de codigo para la lista de contactos  ////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

// Inicializacion de una lista vacia de contactos 
const contactList =[];

// Funcion para verificar si el contacto ya existe con su ID
function contactExists(id){
  return contactList.some((contact) => contact.id === id);
}

// Funcion para crear un contacto y agregar si no existe en la lista 

function createContact(id, firstName, lastName, phone, location) {
  if (!id || !firstName || !lastName || !phone || !location) {
    console.log("Por favor complete la informacion");
    return;
  }

  if (contactExists(id)) {
    console.log("El contacto con el ID"+id+" ya exixte por favor intente con un nuevo ID");
    return;
  }

  const newContact = {
    id: id,
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    location: location
  };

  contactList.push(newContact);
  console.log("Contacto creado sactifactoriamente :", newContact); 
}


// funcion para eliminar contacto por su ID
fuction deleteContact(id) {
  const index = contactList.findIndex(contact => contact.id === id);

  if (index !== -1) {
    const deleteContact = contactList.splice(index, 1);
    console.log("Contacto eliminado Correctamente:", deleteContact[0]);
  }else {
    console.log("El" + id + "no se encuentra ");
  }
}


//ejemplos de como usar la función
createContact(1, "John", "Doe", "123-456-7890", {
  city: "City A",
  address: "123 Street",
});

createContact(2, "Jane", "Smith", "987-654-3210", {
  city: "City B",
  address: "XYZ Avenue",
});

console.log("Contact List:");
console.log(contactList);

// Intentando crear contacto con un ID duplicado
createContact(1, "Carlos", "Lopez", "555-555-5555", {
  city: "City C",
  address: "456 Avenue",
});

// intentanco crear un contacto con espacios en blanco
createContact(3, "", "Gonzalez", "", {
  city: "City D",
  address: "789 Street",
});

console.log("Contact List after trying to add duplicate contacts and blank fields:");
console.log(contactList);

deleteContact(1);

console.log("Contact List after deleting a contact:");
console.log(contactList);



