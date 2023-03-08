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
  listElement = document.getElementById("tablist");

  chrome.tabs.query({})
    .then(onLoadTabs, onLoadTabsError);

  const settingsElement = document.getElementById("settingsDiv");
  settingsElement.onclick = function () {
    try {
      chrome.tabs.create({ url:"chrome://extensions/shortcuts" });
      //chrome.tabs.create({ "edge://extensions/shortcuts" });
    } catch (e) {
      // TODO: User error message?
      console.error(e);
    }
  }

  const searchElement = document.getElementById("tabSearch");
  searchElement.addEventListener("input", function(e) {
    queryString = searchElement.value;
    //chrome.tabs.query({title:"*" + searchElement.value + "*"})
    chrome.tabs.query({})
      .then(onLoadTabs, onLoadTabsError);
  });
  searchElement.focus();
};

function setPinnedIcon(element, pinned) {
  if(pinned) {
    element.className = "fas fa-thumbtack";
    element.title = "Unpin the Tab";
  } else {
    element.className = "fas fa-plus";
    element.title = "Pin the Tab";
  }
}

function createElement(elementType, cssClass) {
  element = document.createElement(elementType);
  element.className = cssClass;
  return element;
}

function createTabElement(tab) {
  const tabElement = createElement("div", "tab-item");
  const tabIconElement = createElement("img", "tab-item-icon");
  tabIconElement.src = tab.favIconUrl;
  const tabTitleElement = createElement("div", "tab-item-title");
  tabTitleElement.innerText = tab.title;
  const tabCloseElement = createElement("div", "tab-item-close");
  tabCloseElement.className = "tab-item-close";
  tabCloseElement.title = "Close the Tab";
  const tabCloseIconElement = createElement("i", "fa-solid fa-xmark");
  tabCloseElement.appendChild(tabCloseIconElement);
  tabElement.appendChild(tabIconElement);
  tabElement.appendChild(tabTitleElement);

  const tabPinElement = document.createElement("div");
  tabPinElement.className = "tab-item-pin";
  tabPinElement.title = "Pin the Tab";
  const tabPinIconElement = document.createElement("i");

  setPinnedIcon(tabPinIconElement, tab.pinned);
  tabPinElement.appendChild(tabPinIconElement);
  tabElement.appendChild(tabPinElement);
  tabElement.appendChild(tabCloseElement);

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
  tabPinElement.onclick = function () {
    try {
      // Nested Promises! Need to get current tab state for each step
      chrome.tabs.get(tab.id)
        .then(t=> chrome.tabs.update(t.id, {pinned: !t.pinned})
          .then(t=> setPinnedIcon(tabPinIconElement, t.pinned)));
    } catch (e) {
      // TODO: User error message?
      console.error(e);
    }
  }
  tabCloseElement.onclick = function () {
    try {
      chrome.tabs.remove(tab.id)
        .then(tabElement.parentElement.removeChild(tabElement));
    } catch (e) {
      // TODO: User error message?
      console.error(e);
    }
  }
  return tabElement;
}
