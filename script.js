
$('#sort-options').on('change', function() {
  var sortValue = $(this).val();
  var items = $('.table'); // Replace with your item selector

  if (sortValue === 'az') {
    items.sort(function(a, b) {
      return $(a).text().localeCompare($(b).text());
    });
  } else if (sortValue === 'za') {
    items.sort(function(a, b) {
      return $(b).text().localeCompare($(a).text());
    });
  } else if (sortValue === 'newest') {
    items.sort(function(a, b) {
      return new Date($(b).data('date')) - new Date($(a).data('date'));
    });
  } else if (sortValue === 'oldest') {
    items.sort(function(a, b) {
      return new Date($(a).data('date')) - new Date($(b).data('date'));
    });
  }

  $('#table').html(items); // Replace with your item container selector
});


const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (e) => {
  let errors = [];

  if (nameInput.value.trim() === '') {
    errors.push('Please enter your name');
  }

  if (emailInput.value.trim() === '') {
    errors.push('Please enter your email');
  } else if (!validateEmail(emailInput.value)) {
    errors.push('Invalid email address');
  }

  if (messageInput.value.trim() === '') {
    errors.push('Please enter a message');
  }

  if (errors.length > 0) {
    e.preventDefault();
    alert(errors.join('\n'));
  }
});

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

form.addEventListener('submit', (e) => {
  // ... validation code ...

  if (errors.length === 0) {
    // Submit the form and redirect to thank you page
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
    })
      .then(() => {
        window.location.href = 'thankyou.html';
      })
      .catch((error) => {
        console.error(error);
      });
  }
});
