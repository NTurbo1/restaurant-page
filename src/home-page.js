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

    let contentDivBackgroundColor = window.getComputedStyle(contentDiv).backgroundColor;
    if (this) {
        let homeBtnBackgroundColor = window.getComputedStyle(this).backgroundColor;
        this.style.backgroundColor = contentDivBackgroundColor;

        let menuBtn = document.querySelector('.menu-content-btn');
        let contactsBtn = document.querySelector('.contacts-content-btn');

        menuBtn.style.backgroundColor = homeBtnBackgroundColor;
        contactsBtn.style.backgroundColor = homeBtnBackgroundColor;
    } else {
        let homeBtn = document.querySelector('.home-content-btn');
        homeBtn.style.backgroundColor = contentDivBackgroundColor;
    }
}

function loadHomePage() {

    let homeContentBtn = document.createElement('button');
    homeContentBtn.textContent = 'HOME';
    homeContentBtn.classList.add('home-content-btn');
    homeContentBtn.classList.add('content-changing-btn');
    homeContentBtn.addEventListener('click', loadHomeContent);

    let contactsContentBtn = document.createElement('button');
    contactsContentBtn.textContent = 'CONTACTS';
    contactsContentBtn.classList.add('contacts-content-btn');
    contactsContentBtn.classList.add('content-changing-btn');
    contactsContentBtn.addEventListener('click', loadContactsContent);

    let menuContentBtn = document.createElement('button');
    menuContentBtn.textContent = 'MENU';
    menuContentBtn.classList.add('menu-content-btn');
    menuContentBtn.classList.add('content-changing-btn');
    menuContentBtn.addEventListener('click', loadMenuContent);

    let tabsDiv = document.querySelector('.tabs-container');
    tabsDiv.append(homeContentBtn, menuContentBtn, contactsContentBtn);

    loadHomeContent();
}

export {
    loadHomePage
};