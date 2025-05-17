const API_URL = 'http://localhost:5000/users';
let page = 1;
const limit = 10;
let lastFilters = {};

// DOM Elements
const form = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const tableBody = document.querySelector('#userTable tbody');
const pageNum = document.getElementById('pageNum');

const searchForm = document.getElementById('searchForm');
const searchNameInput = document.getElementById('searchName');
const searchAgeInput = document.getElementById('searchAge');


// Fetching Users with Filters
function fetchUsers(filters = lastFilters) {
  lastFilters = filters;
  const queryParams = new URLSearchParams({
    page,
    limit,
    ...filters
  });

  fetch(`${API_URL}?${queryParams.toString()}`)
    .then(res => res.json())
    .then(data => {
      tableBody.innerHTML = '';
      data.users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td><p style="text-align: center; margin: 0">${user.name}</p></td>
          <td><p style="text-align: center; margin: 0">${user.email}</p></td>
          <td><p style="text-align: center; margin: 0">${user.age || '-'}</p></td>
          <td style="text-align: center">
            <button onclick="deleteUser('${user._id}')">Delete</button>
          </td>`;
        tableBody.appendChild(row);
      });
      pageNum.textContent = `Page ${page}`;
    });
}

// Form Submit - Adding User
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = {
    name: nameInput.value,
    email: emailInput.value,
    age: ageInput.value || undefined,
  };

  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  })
    .then(res => res.json().then(data => ({ status: res.status, body: data })))
    .then(({ status, body }) => {
      if (status !== 201) {
        if (body.error === 'Email must be unique') {
          alert('Error: This email is already registered.');
        } else {
          alert(`Error: ${body.error || 'Something went wrong'}`);
        }
        return;
      }
      form.reset();
      fetchUsers();
    })
    .catch(err => {
      console.error('Submission error:', err);
      alert('Unexpected error occurred.');
    });
});

// Deleting User
function deleteUser(id) {
  fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  }).then(() => fetchUsers());
}

// Pagination Controls
document.getElementById('prevBtn').addEventListener('click', () => {
  if (page > 1) {
    page--;
    fetchUsers();
  }
});

document.getElementById('nextBtn').addEventListener('click', () => {
  page++;
  fetchUsers();
});

// Search Form Submit
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const filters = {};
  const name = searchNameInput.value.trim();
  const age = searchAgeInput.value.trim();

  if (name) filters.name = name;
  if (age) filters.age = age;

  page = 1; // Reset to first page
  fetchUsers(filters);
});

// Initial fetch
fetchUsers();
