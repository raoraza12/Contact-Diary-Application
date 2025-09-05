const contactList = document.querySelector('.contact-list');
const email = document.querySelector('.email');
const name = document.querySelector('.name');
const number = document.querySelector('.number');
const address = document.querySelector('.address');
const addButton = document.querySelector('.addButton');
const logoutButton = document.querySelector('.logoutButton');

function addContact() {
    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    const contact = {
        name: name.value,
        email: email.value,
        number: number.value,
        address: address.value,
        Uemail: localStorage.getItem("currentUser")
    };
    contacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    RenderContacts();

    name.value = "";
    email.value = "";
    number.value = "";
    address.value = "";
}

function RenderContacts() {

    contactList.innerHTML = ``
    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.href = "./index.html";
        return;
    }   

    contacts
        .filter(contact => contact.Uemail === currentUser)
        .forEach((element, i) => {
            contactList.innerHTML += `
                <ul class="contact-item">
                    <li class="Iname">${element.name}</li>
                    <li class="Iemail">Email: ${element.email}</li>
                    <li class="Inumber">Phone: ${element.number}</li>
                    <li class="Iaddress">Address: ${element.address}</li>
                    <button class="editButton" onclick="editContact(${i})" >Edit</button>
                    <button class="deleteButton" onclick="deleteContact(${i})">Delete</button>
                </ul>`;
        });

    console.log(contacts);
}
function deleteContact(index) {
    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    let currentUser = localStorage.getItem("currentUser");
    let userContacts = contacts.filter(c => c.Uemail === currentUser);
    userContacts.splice(index, 1);
    contacts = contacts.filter(c => c.Uemail !== currentUser).concat(userContacts);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    RenderContacts();
}
function editContact(index) {
    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    let currentUser = localStorage.getItem("currentUser")

    let userContacts = contacts.filter(c => c.Uemail === currentUser);
    const c = userContacts[index];

    name.value = c.name;
    number.value = c.number;
    address.value = c.address;
    email.value = c.email;

    userContacts.splice(index, 1);
    contacts = contacts.filter(c => c.Uemail !== currentUser).concat(userContacts);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    RenderContacts();
}

function logoutUser() {
    localStorage.removeItem("currentUser");
    window.location.href = "../index.html";
}
RenderContacts();