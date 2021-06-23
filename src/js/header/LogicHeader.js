//  export default


const refs = {
  header: document.querySelector('[data-index="header"]'),
  homeBtn: document.querySelector('[data-index="home"]'),
  mylibraryBtn: document.querySelector('[data-index="libraryBtn"]'),
  headerContent: document.querySelector('[data-index="headerContent"]'
  ),
};

refs.mylibraryBtn.addEventListener('click', myLibraryPageMarkupUpdate);
refs.homeBtn.addEventListener('click', homePageMarkupUpdate);

 function myLibraryPageMarkupUpdate() {
  refs.header.classList.remove('header__background-home');
  refs.header.classList.add('header__background-myLibrary');
  refs.homeBtn.classList.remove('current');
  refs.mylibraryBtn.classList.add('current');
}

function homePageMarkupUpdate() {
  refs.header.classList.remove('header__background-myLibrary');
  refs.header.classList.add('header__background-home');
  refs.mylibraryBtn.classList.remove('current');
  refs.homeBtn.classList.add('current');
}

export  {myLibraryPageMarkupUpdate, homePageMarkupUpdate}
