const DEMO_USERS = [
  {
    studentId: 'GK001',
    email: 'student@gustohub.edu',
    password: 'student123',
    name: 'Jordan Doe',
    initials: 'JD'
  }
];

const AUTH_LOCAL_KEY = 'gustohubAuth';
const AUTH_SESSION_KEY = 'gustohubAuthSession';

function getNextPage() {
  const params = new URLSearchParams(location.search);
  const next = params.get('next');
  const allowed = ['index.html', 'academic.html', 'ai.html', 'campus.html', 'support.html', 'profile.html'];
  return allowed.includes(next) ? next : 'index.html';
}

function currentAuth() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_LOCAL_KEY) || 'null') ||
           JSON.parse(sessionStorage.getItem(AUTH_SESSION_KEY) || 'null');
  } catch (e) {
    return null;
  }
}

if (currentAuth()?.loggedIn) {
  location.replace(getNextPage());
}

const form = document.getElementById('login-form');
const studentInput = document.getElementById('student-id');
const passwordInput = document.getElementById('password');
const rememberInput = document.getElementById('remember-me');
const errorBox = document.getElementById('login-error');

function showError(message) {
  errorBox.textContent = message;
  errorBox.classList.remove('hidden');
}

function clearError() {
  errorBox.textContent = '';
  errorBox.classList.add('hidden');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  clearError();

  const identity = studentInput.value.trim().toLowerCase();
  const password = passwordInput.value;

  if (!identity || !password) {
    showError('Please enter your Student ID / Email and password.');
    return;
  }

  const user = DEMO_USERS.find(u =>
    (u.studentId.toLowerCase() === identity || u.email.toLowerCase() === identity) &&
    u.password === password
  );

  if (!user) {
    showError('Student ID / Email or password is incorrect.');
    return;
  }

  const authData = {
    loggedIn: true,
    studentId: user.studentId,
    email: user.email,
    name: user.name,
    initials: user.initials,
    loginTime: Date.now()
  };

  if (rememberInput.checked) {
    localStorage.setItem(AUTH_LOCAL_KEY, JSON.stringify(authData));
    sessionStorage.removeItem(AUTH_SESSION_KEY);
  } else {
    sessionStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(authData));
    localStorage.removeItem(AUTH_LOCAL_KEY);
  }

  location.replace(getNextPage());
});

document.getElementById('toggle-password').addEventListener('click', () => {
  const showing = passwordInput.type === 'text';
  passwordInput.type = showing ? 'password' : 'text';
  const icon = document.querySelector('#toggle-password i');
  icon.className = showing ? 'fas fa-eye' : 'fas fa-eye-slash';
});

document.getElementById('fill-demo').addEventListener('click', () => {
  studentInput.value = 'GK001';
  passwordInput.value = 'student123';
  studentInput.focus();
  clearError();
});

document.getElementById('forgot-password').addEventListener('click', () => {
  showError('Password recovery is not connected in this prototype. Please use the demo account below.');
});
