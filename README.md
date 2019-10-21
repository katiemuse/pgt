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