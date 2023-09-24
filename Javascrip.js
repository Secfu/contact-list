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
function deleteContact(id) {
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

//////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////// Modificacion de la lista de contactos  ////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

// Función para actualizar un contacto por su ID
function updateContact(id, newDetails) {
  const index = contactList.findIndex((contact) => contact.id === id);

  if (index !== -1) {
    // Actualizar los campos del contacto con los nuevos datos
    contactList[index] = { ...contactList[index], ...newDetails };
    console.log("Contact updated successfully:");
    console.log(contactList[index]);
  } else {
    console.log("No contact found with the specified ID.");
  }
}

// Ejemplo de uso de la función para actualizar un contacto
updateContact(1, { firstName: "NewName", phone: "555-555-5555" });

console.log("Contact List after updating a contact:");
console.log(contactList);