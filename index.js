import renderListSection from './modules/booklist.js';
import Storage from './modules/localstorage.js';
import Book from './modules/book.js';
import { renderAddSection } from './modules/addbook.js';
import renderContactSection from './modules/contactUI.js';
import { DateTime } from './modules/luxon.js';

const mainContainer = document.getElementById('main');
const navItems = document.getElementsByClassName('navitem');
const date = document.getElementById('date');
const stringDate = {
  month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true, second: 'numeric',
};
const now = DateTime.now();
const newDate = now.setLocale('en-US').toLocaleString(stringDate);
date.innerHTML = newDate;

const booksList = new Storage([]);
booksList.fromLs();

const navigation = (value) => {
  switch (value) {
    case 0:
      navItems[0].classList.add('active');
      navItems[1].classList.remove('active');
      navItems[2].classList.remove('active');
      renderListSection(mainContainer, booksList);
      break;
    case 1:
      navItems[1].classList.add('active');
      navItems[0].classList.remove('active');
      navItems[2].classList.remove('active');
      renderAddSection(mainContainer, Book, booksList);
      break;
    case 2:
      navItems[2].classList.add('active');
      navItems[1].classList.remove('active');
      navItems[0].classList.remove('active');
      renderContactSection(mainContainer);
      break;
    default:
      break;
  }
};

for (let i = 0; i < navItems.length; i += 1) {
  navItems[i].addEventListener('click', () => {
    navigation(i);
  });
}

navigation(0);