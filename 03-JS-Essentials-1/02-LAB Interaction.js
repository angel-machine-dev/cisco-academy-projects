let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

// Get new contact details from the user
let newName = prompt("Enter contact name:");
let newPhone = prompt("Enter contact phone:");
let newEmail = prompt("Enter contact email:");

// Add the new contact to the array
contacts.push({
    name: newName,
    phone: newPhone,
    email: newEmail
});

// Display first and last contact
let last = contacts.length - 1;
console.log(`${contacts.name} / ${contacts.phone} / ${contacts.email}`);
console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
