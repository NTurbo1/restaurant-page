function loadMenuContent() {
    const contentDiv = document.querySelector('#content');
    
    let header = document.createElement('h1');
    header.classList.add('menu-content-header');
    header.textContent = 'Menu';
    
    let contactsContentHeader = document.querySelector('.contacts-content-header');
    let homeContentHeader = document.querySelector('.home-content-header');
    if (contentDiv.contains(contactsContentHeader)) {
        contentDiv.removeChild(contactsContentHeader);
    } else if (contentDiv.contains(homeContentHeader)) {
        contentDiv.removeChild(homeContentHeader);
    }
    
    const menuContentHeader = document.querySelector('.menu-content-header');
    if (!contentDiv.contains(menuContentHeader)) {
        contentDiv.appendChild(header);
    }

    let menuBtnBackgroundColor = window.getComputedStyle(this).backgroundColor;
    let contentDivBackgroundColor = window.getComputedStyle(contentDiv).backgroundColor;
    this.style.backgroundColor = contentDivBackgroundColor;

    let homeBtn = document.querySelector('.home-content-btn');
    let contactsBtn = document.querySelector('.contacts-content-btn');

    homeBtn.style.backgroundColor = menuBtnBackgroundColor;
    contactsBtn.style.backgroundColor = menuBtnBackgroundColor;
}

export {
    loadMenuContent
}