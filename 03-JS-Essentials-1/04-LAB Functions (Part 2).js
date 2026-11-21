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

// Display a single contact by index
let showContact = function(contacts, index) {
    if (contacts instanceof Array && contacts[index]) {
        console.log(`${contacts[index].name} / ${contacts[index].phone} / ${contacts[index].email}`);
    }
};

// Display all contacts
let showAllContacts = function(contacts) {
    if (contacts instanceof Array) {
        for (let contact of contacts) {
            console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
        }
    }
};

// Add a new contact
let addNewContact = function(contacts, name, phone, email) {
    if (contacts instanceof Array && name && phone && email) {
        contacts.push({
            name: name,
            phone: phone,
            email: email
        });
    }
};

// Sort contacts by name, phone, or email
let sortContacts = function(contacts, sortBy) {
    if (contacts instanceof Array) {
        contacts.sort((a, b) => {
            if (a[sortBy] > b[sortBy]) return 1;
            if (a[sortBy] < b[sortBy]) return -1;
            return 0;
        });
    }
};

// Example usage
sortContacts(contacts, "name");
showAllContacts(contacts);
