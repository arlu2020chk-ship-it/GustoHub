(function () {
  const AUTH_LOCAL_KEY = 'gustohubAuth';
  const AUTH_SESSION_KEY = 'gustohubAuthSession';

  function getAuth() {
    try {
      return JSON.parse(localStorage.getItem(AUTH_LOCAL_KEY) || 'null') ||
             JSON.parse(sessionStorage.getItem(AUTH_SESSION_KEY) || 'null');
    } catch (e) {
      return null;
    }
  }

  function isLoggedIn() {
    const auth = getAuth();
    return !!(auth && auth.loggedIn === true);
  }

  function requireLogin() {
    if (!isLoggedIn()) {
      const current = location.pathname.split('/').pop() || 'index.html';
      location.replace('login.html?next=' + encodeURIComponent(current));
    }
  }

  window.gustoHubLogout = function () {
    localStorage.removeItem(AUTH_LOCAL_KEY);
    sessionStorage.removeItem(AUTH_SESSION_KEY);
    location.replace('login.html');
  };

  window.gustoHubGetAuth = getAuth;

  requireLogin();
})();
