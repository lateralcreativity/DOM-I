const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM<br> Is<br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street <br>Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

/*
Changed title from 
Great Idea DOM! 
to 
Great Idea! 
*/
const title = document.querySelector('title');
title.textContent = 'Great Idea!';

const imgSelector = (id, source) => {
  // Get Element by ID
  const logo = document.querySelector(`#${id}-img`);
  
  // Assign src of image to given value 
  return logo.setAttribute('src', source);
}


// ---------------------------- Nav Begins ----------------------------

// Selected all links under nav
const navLinks = document.querySelector('nav').querySelectorAll('a');

// New array with values under nav in the siteContent object
const siteNavValues = Object.values(siteContent.nav);

// Looped through each link and set its text content to the stored object values
navLinks.forEach((x, index) => {
  x.textContent = siteNavValues[index];
});

// Nav Logo
imgSelector('logo', siteContent['nav']['img-src']);

// ---------------------------- Nav Ends ----------------------------

// ---------------------------- CTA Begins ----------------------------

const ctaText = document.querySelector('.cta-text');
ctaText.querySelector('h1').innerHTML = siteContent['cta']['h1'];
ctaText.querySelector('button').textContent = siteContent['cta']['button'];

// CTA Logo
imgSelector('cta', siteContent['cta']['img-src']);

// ---------------------------- CTA Ends ----------------------------

// ---------------------------- Top Content Begins ----------------------------

const topContentText = document.querySelector('.top-content').querySelectorAll('.text-content');

// First Div
topContentText[0].querySelector('h4').textContent = siteContent['main-content']['features-h4'];
topContentText[0].querySelector('p').textContent = siteContent['main-content']['features-content'];


// Second Div
topContentText[1].querySelector('h4').textContent = siteContent['main-content']['about-h4'];
topContentText[1].querySelector('p').textContent = siteContent['main-content']['about-content'];

// Logo
imgSelector('middle', siteContent['main-content']['middle-img-src']);

// ---------------------------- Top Content Ends ----------------------------

// ---------------------------- Bottom Content Begins ----------------------------

const bottomContentText = document.querySelector('.bottom-content').querySelectorAll('.text-content');

// First Div
bottomContentText[0].querySelector('h4').textContent = siteContent['main-content']['services-h4'];
bottomContentText[0].querySelector('p').textContent = siteContent['main-content']['services-content'];

// Second Div
bottomContentText[1].querySelector('h4').textContent = siteContent['main-content']['product-h4'];
bottomContentText[1].querySelector('p').textContent = siteContent['main-content']['product-content'];

// Third Div
bottomContentText[2].querySelector('h4').textContent = siteContent['main-content']['vision-h4'];
bottomContentText[2].querySelector('p').textContent = siteContent['main-content']['vision-content'];

// ---------------------------- Bottom Content Ends ----------------------------

// ---------------------------- Contact Begins ----------------------------

const contact = document.querySelector('.contact');
const contactContent = Array.from(contact.querySelectorAll('p'));
const contactValues = Object.values(siteContent.contact);

contact.querySelector('h4').textContent = contactValues[0];

contactContent.forEach((x, index) => {
  x.innerHTML = contactValues[index + 1];
})

// ---------------------------- Contact Ends ----------------------------

// ---------------------------- Footer Begins ----------------------------

const footerText = document.querySelector('footer').querySelector('p');
footerText.textContent = siteContent['footer']['copyright'];

// ---------------------------- Footer Ends ----------------------------

// Task 3

// Create two more nav items

const firstProps = {
  href: '#',
  textContent: 'First Link'
}

const secondProps = {
  href: '#',
  textContent: 'Second Link'
}

const first = document.createElement('a');
const second = document.createElement('a');

first.href = firstProps.href;
first.textContent = firstProps.textContent;

second.href = secondProps.href;
second.textContent = secondProps.textContent;

document.querySelector('nav').prepend(second);
document.querySelector('nav').prepend(first);

// Turn nav links green
document.querySelector('nav').querySelectorAll('a').forEach(x => x.style.color = 'green');

// Stretch

const footer = document.querySelector('footer');
footer.style.padding = '25px';
footer.style.margin = '0';
footer.style.backgroundColor = '#A9A9B0';