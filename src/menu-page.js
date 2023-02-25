function loadMenuContent() {
    const contentDiv = document.querySelector('#content');
    
    let header = document.createElement('h1');
    header.classList.add('menu-content-header');
    header.textContent = 'Restaurant Menu Page';
    
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
}

export {
    loadMenuContent
}