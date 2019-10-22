# salesforce-platform-guided-tour

Some of the older dependencies have been updated that threw errors to get the project to run. ALl of those are reflected in the `package.json` and should not throw any errors when installing dependencies.

## Setup and run project
* Install Dependencies: `npm install`
* Start Dev Environment: `gulp serve`

For a final build you can simply run: `gulp`

## Dev Handoff Sheet: https://docs.google.com/document/d/1dieZpmvMIOuyFLUbHmmS4__Sn7FdUjO0nmNdbVaPlyA/edit?ts=5da48c96

Some notes:
* Browser sync is slow when saving changes before reloading the page
    * tried to update but introduced new issues so rolled back
    * some child SCSS files do not trigger a reload upon save for some odd reason
* Most of the `Welcome` section is completed outside of some remaining CSS items
* I had setup a test chapter to work through to figure out some of the more complicated interactions used but deleted all of that out to prevent confusion
=======
```bash
nvm use v8.15.1
npm install gulp-cli -g
npm install gulp -D
npm install
gulp serve
```

http://localhost:3000/#!/

## How Chapters Are Configured
* `progress-navbar.html` defines a list of bullets shown in the menu on the left rail
* `ui-sref` tags such as `ui-sref="custom-objects"` (as found in `progress-navbar.html` and elsewhere) are how these chapters are linked to (ex: from a continue button)
* these names and tags (ex: `custom-objects`) correspond to folder names within `src/partials`

### V2 Chapter Refactor
All of the chapters for the experience were changed as part of V2. These largely consisted of mass renames, and then reworking of chapters, except that there were 7 chapters in V1, and there are 8 chapters in V2. The approach taken was to make the following mass-renames, and then duplicate the last chapter for the extra 8th chapter.

Mass-renames done for V2 were as follows:
* `ui-sref="custom-objects"` => `ui-sref="data-chapter"`
* `ui-sref="salesforce-connect"` => `ui-sref="flow-chapter"`
* `ui-sref="heroku-connect"` => `ui-sref="builder-chapter"`
* `ui-sref="iot-explorer"` => `ui-sref="mobile-chapter"`
* `ui-sref="einstein-prediction-builder"` => `ui-sref="ai-chapter"`
* `ui-sref="new-lightning-page"` => `ui-sref="voice-chapter"`
* `ui-sref="process-builder"` => `ui-sref="customer-app-chapter"`
* `ui-sref="process-builder"` => `ui-sref="blockchain-chapter"` (copied, not renamed)




[![Build Status](http://jenkins.pendinglaunch.com:8080/buildStatus/icon?job=salesforce-platform-guided-tour)](http://jenkins.pendinglaunch.com:8080/job/salesforce-platform-guided-tour/) 
