// JavaScript for MentxTV Frontend

// Category switching logic
document.querySelectorAll('.category').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.category').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Simulate loading mentors for selected category (dynamic loading logic)
    const category = button.textContent;
    alert(`Load mentors for: ${category}`);
  });
});

// Handle form submissions (mock behavior)
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted (mock)!');
  });
});

// Google login simulation
document.querySelectorAll('.google-login').forEach(button => {
  button.addEventListener('click', () => {
    alert('Google login (mock)!');
  });
});
