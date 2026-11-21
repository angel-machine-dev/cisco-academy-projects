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

let action;

while (true) {
    action = prompt("Choose an action: first, last, all, new, or quit:");

    if (action === "quit") {
        break;
    } else if (action === "first") {
        console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
    } else if (action === "last") {
        let last = contacts.length - 1;
        console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
    } else if (action === "all") {
        for (let contact of contacts) {
            console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
        }
    } else if (action === "new") {
        let newName = prompt("Enter contact name:");
        let newPhone = prompt("Enter contact phone:");
        let newEmail = prompt("Enter contact email:");

        if (newName && newPhone && newEmail) {
            contacts.push({
                name: newName,
                phone: newPhone,
                email: newEmail
            });
        } else {
            console.log("Error: All fields are required.");
        }
    } else {
        console.log("Unknown action.");
    }
}
