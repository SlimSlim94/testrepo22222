function search() {
  // Request for the signup
  const XHR = new XMLHttpRequest();
  // Form data to send
  const FD = new FormData(document.getElementById('searchForm'));

  const searchResults = document.getElementById('searchResults');
  while (searchResults.firstChild) {
    searchResults.removeChild(searchResults.firstChild);
  }

  // Listener when request is completed
  XHR.addEventListener('load', (event) => {
    // If not HTTP Created, then displaying status in the message
    if (event.target.status !== 200) {
      console.log(event.target);
      searchResults.innerHTML = getErrorMessage(event.target);
    } else {
      //
    }
  });

  // Listener when request has failed
  XHR.addEventListener('error', () => {
    searchResults.innerHTML = 'Network error';
  });

  XHR
    .open('GET',
      `${apiPath}/admin/search?${new URLSearchParams(FD).toString()}`,
    );
  XHR.send(FD);

  return false;
}
