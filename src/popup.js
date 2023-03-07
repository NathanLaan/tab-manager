var listElement;
var queryString;

function onLoadTabs(tabs) {
  //listElement.replaceChildren();
  let tabList = [];
  const r = new RegExp(queryString, "i");
  for (const tab of tabs) {
    if(queryString && tab.title.match(r)) {
      //listElement.appendChild(createTabElement(tab));
      tabList.push(createTabElement(tab));
    } else if(!queryString) {
      //listElement.appendChild(createTabElement(tab));
      tabList.push(createTabElement(tab));
    }
  }
  listElement.replaceChildren(...tabList);
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
    queryString = searchElement.value;
    //chrome.tabs.query({title:"*" + searchElement.value + "*"})
    chrome.tabs.query({})
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
