//Search bar
document.addEventListener('DOMContentLoaded', function () {
  const searchForm = document.querySelector('.navbar form');
  const searchInput = document.querySelector('.navbar input[type="search"]');
  const menuSection = document.getElementById('menu'); // Secțiunea cu meniul

  searchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const searchTerm = searchInput.value.toLowerCase();

      if (menuSection) {
          const menuText = menuSection.textContent.toLowerCase();

          if (menuText.includes(searchTerm)) {
              // Dacă se găsește textul în secțiunea meniului, derulați la secțiune
              window.scrollTo({ top: menuSection.offsetTop, behavior: 'smooth' });
          } else {
              alert('Textul nu a fost găsit în meniu.');
          }
      } else {
          alert('Secțiunea meniului nu a fost găsită.');
      }
  });
});
