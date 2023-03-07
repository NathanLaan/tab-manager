var listElement;

function onLoadTabs(tabs) {
  //listElement.textContent = ""; // textContent faster than innerHTML
  //listElement.innerText = "";
  listElement.replaceChildren();
  for (const tab of tabs) {
    listElement.appendChild(createTabElement(tab));
  }
}

function onLoadTabsError(error) {
  console.error(`Error: ${error}`);
}

window.onload = function () {
  listElement = document.getElementById('tablist');

  chrome.tabs.query({})
    .then(onLoadTabs, onLoadTabsError);

  const searchElement = document.getElementById('tabSearch');
  searchElement.addEventListener('input', function(e) {
    // GET FILTERED
    console.log(searchElement.value);
    chrome.tabs.query({title:"*" + searchElement.value + "*"})
      .then(onLoadTabs, onLoadTabsError);
  });
  searchElement.focus();
};

function createTabElement(tab) {
  const tabElement = document.createElement('div');
  tabElement.className = "tab-item";
  const tabIconElement = document.createElement("img");
  tabIconElement.className = "tab-item-icon";
  tabIconElement.src = tab.favIconUrl;
  const tabTitleElement = document.createElement('div');
  tabTitleElement.className = "tab-item-title";
  tabTitleElement.innerText = tab.title;
  tabTitleElement.onclick = function () {
    try {
      chrome.windows.update(tab.windowId, { focused: true });
      chrome.tabs.update(tab.id, { active: true });
      window.close();
    } catch (e) {
      // TODO: User error message?
      console.error(e);
    }
  }
  tabElement.appendChild(tabIconElement);
  tabElement.appendChild(tabTitleElement);
  //
  // TODO: Add close button.
  //
  return tabElement;
}
