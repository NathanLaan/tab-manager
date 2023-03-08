# Tab-Manager

Tab-Manager is a Google Chrome extension for managing and searching through the list of open tabs.

[![Chrome Web Store Version](https://img.shields.io/chrome-web-store/v/ojnfapijbeobcdnmngijlngbiaknejjo.svg?style=flat-square)](https://chrome.google.com/webstore/detail/tab-manager/ojnfapijbeobcdnmngijlngbiaknejjo)
[![Chrome Web Store Downloads](https://img.shields.io/chrome-web-store/d/ojnfapijbeobcdnmngijlngbiaknejjo.svg?style=flat-square)](https://chrome.google.com/webstore/detail/tab-manager/ojnfapijbeobcdnmngijlngbiaknejjo)
[![Chrome Web Store Rating](https://img.shields.io/chrome-web-store/rating/ojnfapijbeobcdnmngijlngbiaknejjo.svg?style=flat-square)](https://chrome.google.com/webstore/detail/tab-manager/ojnfapijbeobcdnmngijlngbiaknejjo)
[![Chrome Web Store Rating Count](https://img.shields.io/chrome-web-store/rating-count/ojnfapijbeobcdnmngijlngbiaknejjo.svg?style=flat-square)](https://chrome.google.com/webstore/detail/tab-manager/ojnfapijbeobcdnmngijlngbiaknejjo/reviews)

## Usage

1. Install the [Tab-Manager extension from the Google Chrome web store](https://chrome.google.com/webstore/detail/tab-manager/ojnfapijbeobcdnmngijlngbiaknejjo).
2. Pin the Tab-Manager extension to the Google Chrome toolbar.
3. Click the Tab-Manager icon in the Google Chrome toolbar to manage your tabs.

![Tab-Manager Extension in Google Chrome](/screenshot-v0.3.2.png)

## Roadmap

- [x] v0.1.x
  - [x] v0.1.0: Display list of all tabs with favicon and title.
  - [x] v0.1.0: Clicking item in tab list sends focus to that tab, and closes the extension window.
  - [x] v0.1.1: The search input allows the user to filter the list of tabs. Case-sensitive.
  - [x] v0.1.2: The search input allows the user to filter the list of tabs. Case-insensitive.
- [x] v0.2.x *Close the Tab with the Icon Release*
  - [x] v0.2.0: Allow user to close tabs with an "x" button beside the tab title or favicon.
- [x] v0.3.x *Pin the Tab in the Browser Release*
  - [x] v0.3.0: Show icon for each tab's pinned state.
  - [x] v0.3.1: Allow user to pin and unpin tabs by clicking on the pin icon.
  - [x] v0.3.2: Add "tooltip" text (div.title) to the tab close and tab pin buttons.
  - [x] v0.3.3: Fix the shortcut key.
  - [x] v0.3.3: Show the shortcut key in the UI (tooltip?).
- [ ] v0.4.x *Show the Window in the Tab-List Release*
  - [ ] v0.4.0: Show browser windows in the tab list UI.
  - [ ] v0.4.1: Clicking on a window element sends focus to that window.
  - [ ] v0.4.2: Feature to close entire window?
- [ ] Future Release?
  - [ ] Show recently closed tabs? Possible?
  - [ ] Move tabs between windows?
  - [ ] Move tab to new window?
  - [ ] Copy/clone/re-open tabs?
  - [ ] Settings panel?
    - [ ] Edit shortcut key?
    - [ ] Show/enable "dangerous" window/tab close functionality.
  - [ ] Add shortcut to browser settings/keyboard shortcuts.
  - [ ] Issue: Visual bug: If you scroll down, and then up, the top tab item is cut off.
  - [ ] Issue: Sometimes clicking on tabs doesn't navigate the user to the tab. Need to reproduce.

## References

- Extension icons by [Flaticon](https://www.flaticon.com/free-icon/letter-t_3097109).
- UI icons by [Font Awesome](https://fontawesome.com/).

## Dev References

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
