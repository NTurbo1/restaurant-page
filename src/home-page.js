import { loadContactsContent } from "./contact-page";
import { loadMenuContent } from "./menu-page";

function loadHomeContent() {
    const contentDiv = document.querySelector('#content');

    let header = document.createElement('h1');
    header.classList.add('home-content-header');
    header.textContent = 'Restaurant Home Page';

    let menuContentHeader = document.querySelector('.menu-content-header');
    let contactsContentHeader = document.querySelector('.contacts-content-header');

    if (contentDiv.contains(menuContentHeader)) {
        contentDiv.removeChild(menuContentHeader);
    } else if (contentDiv.contains(contactsContentHeader)) {
        contentDiv.removeChild(contactsContentHeader);
    }
    
    const homeContentHeader = document.querySelector('.home-content-header');
    if (!contentDiv.contains(homeContentHeader)) {
        contentDiv.appendChild(header);
    }
}

function loadHomePage() {
    const contentDiv = document.querySelector('#content');

    let homeContentBtn = document.createElement('button');
    homeContentBtn.textContent = 'HOME';
    homeContentBtn.classList.add('home-content-btn');
    homeContentBtn.addEventListener('click', loadHomeContent);

    let contactsContentBtn = document.createElement('button');
    contactsContentBtn.textContent = 'CONTACTS';
    contactsContentBtn.classList.add('contacts-content-btn');
    contactsContentBtn.addEventListener('click', loadContactsContent);

    let menuContentBtn = document.createElement('button');
    menuContentBtn.textContent = 'MENU';
    menuContentBtn.classList.add('menu-content-btn');
    menuContentBtn.addEventListener('click', loadMenuContent);

    let tabsDiv = document.createElement('div');
    tabsDiv.classList.add('tabs-container');
    tabsDiv.append(homeContentBtn, menuContentBtn, contactsContentBtn);

    if (!contentDiv.contains(tabsDiv)) {
        contentDiv.appendChild(tabsDiv);
    }

    loadHomeContent();
}

export {
    loadHomePage
};