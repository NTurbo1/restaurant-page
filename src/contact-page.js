function loadContactsContent() {
    const contentDiv = document.querySelector('#content');
    
    let header = document.createElement('h1');
    header.classList.add('contacts-content-header');
    header.textContent = 'Restaurant Contacts Page';
    
    let menuContentHeader = document.querySelector('.menu-content-header');
    let homeContentHeader = document.querySelector('.home-content-header');
    if (contentDiv.contains(menuContentHeader)) {
        contentDiv.removeChild(menuContentHeader);
    } else if (contentDiv.contains(homeContentHeader)) {
        contentDiv.removeChild(homeContentHeader);
    }
        
    const contactsContentHeader = document.querySelector('.contacts-content-header');
    if (!contentDiv.contains(contactsContentHeader)) {
        contentDiv.appendChild(header);
    }

    let contactsBtnBackgroundColor = window.getComputedStyle(this).backgroundColor;
    let contentDivBackgroundColor = window.getComputedStyle(contentDiv).backgroundColor;
    this.style.backgroundColor = contentDivBackgroundColor;

    let homeBtn = document.querySelector('.home-content-btn');
    let menuBtn = document.querySelector('.menu-content-btn');

    homeBtn.style.backgroundColor = contactsBtnBackgroundColor;
    menuBtn.style.backgroundColor = contactsBtnBackgroundColor;
}

export {
    loadContactsContent
}