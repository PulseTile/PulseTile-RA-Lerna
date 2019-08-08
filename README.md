# General information
This project presents a [PulseTile-RA](http://docs.pulsetile.com/react-admin-background.html) - mono-repository open-source software for hospitals.

Functionality of PulseTile-RA consists of:
- plugins (Allergies, Medications, Problems, Vaccinations etc.);
- pages (Business Intelligence, Charts etc.);
- tools (Advanced patients search, Patients search by Clinical Query, Contrast Mode, UserTour etc.). 

This project include five different versions of PulseTile-RA project:
- [Helm](./projects/helm/README.md);
- [One London](./projects/london/README.md);
- [NodeRed-Showcase](./projects/nodered/README.md);
- [Scotland](./projects/scotland/README.md);
- [Showcase](./projects/helm/README.md).

Each project has unique set of plugins, pages and available tools. The main idea of this project is using common package [pulsetile-react-admin](./packages/pulsetile-react-admin) to create a lot of different versions of application.

# Technologies 

This project is based on two main technologies: **React-Admin** and **Lerna**. 

[**React-Admin**](http://marmelab.com/react-admin/) is a framework based on ReactJS-library. It adapted especially for CMS development. More information about React-Admin you can find in [ReadMe-files](./projects/showcase/README.md) of the projects.

[**Lerna**](https://github.com/lerna/lerna) is a tool for multi-package projects managing. Besides this, it gives possibility to create a lot of versions of the project in one repository. 

# Installation

If you want to install this project locally, you should check, that following modules have installed at your local machine has yet:
``` 
$ npm -v           //  3.5.2 and more
$ node -v          //  8.10.0 and more
$ yarn -v          //  1.16.0 and more
$ git --version    //  2.17.1 and more
``` 
If any of these modules are absent at your local machine, you should install them.

Clone the project from GitHub:
``` 
$ git clone https://github.com/PulseTile/PulseTile-RA-Lerna
```

Install all required modules:
``` 
$ cd PulseTile-RA-Lerna   // Project directory
$ yarn install
```

Bootstrap all your Lerna-packages:
``` 
$ lerna bootstrap
```

Create a build of `pulsetile-react-admin` package:
``` 
$ cd packages/pulsetile-react-admin
$ npm run build
```

After this actoins your project will be ready to work. Let's look at the project structure.

# Project structure

Structural scheme of this project is described below:
```
|
|--- packages
|------- pulsetile-react-admin
|--- projects
|------- helm
|------- london
|------- nodered
|------- scotland
|----------- build
|----------- public
|----------- src 
|---------------- custom
|---------------- images
|---------------- App.js
|---------------- index.js
|----------- package.json
|----------- README.md
|------- showcase
|
```

There are two main directories: `packages/` and `projects/`.

The `packages/` directory include `pulsetile-react-admin` package. It includes all possible plugins, pages and tools of PulseTile-RA project.

All versions in the `projects/` directory are based on `pulsetile-react-admin` package. 
Each version has `index.js` - it is a root file of project version. 

`custom/` and `images/` directories include [custom Layout](./projects/showcase/src/custom/Layout.js) with [Topbar](./projects/showcase/src/custom/Topbar/index.js), [Sidebar](./projects/showcase/src/custom/Sidebar/index.js) and [Footer](./projects/showcase/src/custom/Footer.js).

`App.js` is used to import `pulsetile-react-admin` package and set all required settings for the current version.  These settings are described below.

# Version parameters
 
Let's look inside `App.js` file of `nodered` project: 
``` 
// projects/nodered/src/App.js

import React, { Component } from 'react';
 
import { App, PatientSummaryPage } from "pulsetile-react-admin";
 
import * as themeConfiguration from "./custom/themeConfig";
import CustomLayout from "./custom/Layout";
 
class Core extends Component {
   render() {
     return (
         <App
             themeConfiguration={themeConfiguration}
             CustomLayout={CustomLayout}
             CustomHomepage={PatientSummaryPage}
             isAuthAbsent={true}
             isNodeRedVersion={true}
         />
     )
 
   }
}
 
 export default Core;
```

`App` is a root component of application. It is imported from `pulsetile-react-admin` package. This component has following properties:

**themeConfiguration** is an object, which includes following sub-objects:

- **themeShortMenu** is an array of short menu (for the pages Charts, Patients List and Business Intelligence);
- **themeFullMenu** is an array of full menu (for all other pages);
- **themeCommonElements** is a list of settings, which can anable or disable part of functionality (look at the list below);
- **themeImages** is a list of images, which can be set in project (look at the list below);
- **pagesList** is a list of visible pages. All possible pages list is presented [here](./packages/pulsetile-react-admin/src/routes.js);
- **pluginsList** is a list of visible plugins. All possible plugins list is presented [here](./packages/pulsetile-react-admin/src/config/plugins.js);
- **pluginsOnlyForReview** is a list of plugins, where user can only review the list of items, but can't edit them or create new item.

**CustomLayout** parameter should define component of custom layout, which is located in `custom/` directory.

**CustomHomepage** parameter should define component of Homepage. It has URL `http://{yourDomain}/#/`. User comes to login page after authorization. By Default home page is [Charts](./packages/pulsetile-react-admin/src/pages/Charts/index.js) page.

**isAuthAbsent** is boolean (`false` by default). If check `true` user will come to the homepage without authorization.

**isNodeRedVersion** is boolean (`false` by default). If check `true` package will use [NodeRed data provider](./packages/pulsetile-react-admin/src/dataProviders/nodeRed/dataProvider.js) instead of [default](./packages/pulsetile-react-admin/src/dataProviders/dataProvider.js).

# List of `themeImages`

Let's look at `themeImages` object:

``` 
import BackgroundImage from "../images/background.jpg";
import logo from "../images/pulsetile-logo.png";
...
...
export const themeImages = {
    backgroundImage: BackgroundImage,
    logo: logo,
};
```

It can have two parameters: **backgroundImage** and **logo**. The first one set background image, and the second one - the logo on it. For example, let's look at OneLondon version:

![Background image and Logo](./readMeImages/home/home-OneLondon.png)

Images should be located inside `/projects/{projectName}/images` directory. 

# List of `themeCommonElements`

This object includes following properties:

- **isQwedVersion/isNodeRedVersion** - boolean, which define type of data provider ([NodeRed](./packages/pulsetile-react-admin/src/dataProviders/nodeRed/dataProvider.js) or [QWED](./packages/pulsetile-react-admin/src/dataProviders/dataProvider.js));
- **menuHasChevrons** - boolean (`false` by default), which set right chevrons near menu items:

![menuHasChevrons](./readMeImages/themeCommonElements/menuHasChevrons.png)

- **isFooterAbsent** - boolean (`false` by default), which set visibility of Footer;

- **isTableHeaderIcon** - boolean (`false` by default), which set that icon is presented in Patient Summary panels:

![isTableHeaderIcon](./readMeImages/themeCommonElements/isTableHeaderIcon-1.png)

... and at Table Headers:

![isTableHeaderIcon](./readMeImages/themeCommonElements/isTableHeaderIcon-2.png)

- **patientSummaryPermission** - boolean (`false` by default), which set that user should agree with Patient Access Disclaimer before program redirect him to Patient Summary page:

![patientSummaryPermission](./readMeImages/themeCommonElements/patientSummaryPermission.png)         

- **patientListColumnToggling** - boolean (`false` by default), which set possibility to hide or show columns at the patients list:
      
![patientListColumnToggling](./readMeImages/themeCommonElements/patientListColumnToggling.png)               

- **isPatientListCount** - boolean (`false` by default), which set displaying of additional columns at Patients list:

![isPatientListCount](./readMeImages/themeCommonElements/isPatientListCount.png)               

- **redirectToPlugin** - boolean (`false` by default), which set possibility to redirect user at the checked plugin page;

![redirectToPlugin](./readMeImages/themeCommonElements/redirectToPlugin.png)       

- **feedsSelectors** and **feedsPanels** set the component, which should be used for Feeds Selectors

![feedsSelectors](./readMeImages/themeCommonElements/feedsSelectors.png)            

... and Feeds panels at Patient Summary page:

![feedsPanels](./readMeImages/themeCommonElements/feedsPanels.png)      

These two settings are used only if current project version has Feeds.

- **homePage** set which component should be used as Home page (Charts page by default);

- **respectPanel** set the component, which should be used for ReSPECT-plugin panel at the Patient Summary page.

![respectPanel](./readMeImages/themeCommonElements/respectPanel.png)  

These setting are used only if current project version has ReSPECT-plugin.

- **hasPatientSummaryRoll** set the component, gives possibility to show roll view at the Patient Summary page:

![hasPatientSummaryRoll](./readMeImages/themeCommonElements/hasPatientSummaryRoll.png)  

# How can I create new project version?

If you want to create new project version, you should do following:

- Create new directory inside `projects/`

``` 
$ cd projects
$ mkdir {myProjectName}
$ cd {myProjectName}
```

- Copy `public/` directory from any other project version. It includes all required fonts, icons, favicon and `index.html` file.

- Create `package.json` file inside `{myProjectName}` directory. You can copy `package.json` file from any other project version, but after this you should set `name` of new one:

``` 
// projects/{myProjectName}/package.json

{
  "name": {myProjectName},
  "version": "1.0.0",
  ...
}
``` 

- Create `index.js` file similar to any other version:

``` 
// projects/{myProjectName}/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

- Create `App.js` file without settings:

```
// projects/{myProjectName}/App.js

import React, { Component } from 'react';

import { App } from "pulsetile-react-admin";

class Core extends Component {
  render() {
    return (
        <App />
    )
  }
}

export default Core;
```

- Bootstrap new project as Lerna-package:

``` 
$ cd ../.. 
$ lerna bootstrap
```

- After new project will be bootstrap, you should re-install all required dependencies:

``` 
$ yarn install
```

- After you install all dependencies, you can see that `node_modules/` was added to your new projects directory. So, you can try to run your application locally:

``` 
$ npm start
```

- You can see, that your application was started successfully, but you can't see plugins pages of application. To set this, you should add theme configuration settings. 

Let's create `projects/{myProjectName}/custom/themeConfig.js` file and add some settings here:
``` 
import { Charts } from "pulsetile-react-admin";

export const themeShortMenu = [
    { id: 'menu-charts',   url: '/',         label: 'Charts' },
    { id: 'menu-patients', url: '/patients', label: 'Patients' },
];

export const themeFullMenu = [
    { id: 'menu-summary',       url: '/summary',       label: 'Patient Summary' },
    { id: 'menu-problems',      url: '/problems',      label: 'Problems / Issues' },
    { id: 'menu-medications',   url: '/medications',   label: 'Medications' },
    { id: 'menu-allergies',     url: '/allergies',     label: 'Allergies' },
    { id: 'menu-contacts',      url: '/contacts',      label: 'Contacts' },
];

export const themeCommonElements = {
    isQwedVersion: true,
    homePage: Charts,
};

export const themeImages = {};

export const pagesList = [
    'charts',
];

export const pluginsList = [
    'allergies',
    'contacts',
    'medications',
    'problems',
];

export const pluginsOnlyForReview = [];
```

... and import this file in `App.js`:

``` 
import React, { Component } from 'react';

import { App } from "pulsetile-react-admin";
import * as themeConfiguration from "./custom/themeConfig";

class Core extends Component {
  render() {
    return (
        <App
            themeConfiguration={themeConfiguration}
        />
    )
  }
}

export default Core;
```

If you update `npm start`, you can see, that pages Charts and Patients are visible. Plugins Allergies, Contacts, Problems and Medications are visible too.

- Customize your project according to examples in other versions. Default Topbar, Sidebar and Footer are similar to Showcase-version. 

# How to set theme colors

Color palette is set in `projects/{myProjectName}/public/index.html`. Let's look at settings:
``` 
<script type="text/javascript">
  window.config = {
    domainName: "http://192.168.88.38:8080",
    isOldDesign: false,
    isRectangleButtons: false,
    lightPalette: {
      mainColor: "#ff5d00",
      secondaryMainColor: "#ff5d00",
      tableHeadColor: "#e9e4e4",
      dangerColor: "#da534f",
      disabledColor: "#e9e4e4",
      borderColor: "#e5e5e5",
      paperColor: "#fff",
      toolbarColor: "#e5e5e5",
      fontColor: "#3E3E3E",
      viewButton: "#ff5d00",
      topbarButton: "#757575",
      menuItemsColor: "#3E3E3E",
    },
    darkPalette: {
      mainColor: "#000",
      secondaryMainColor: "#000",
      tableHeadColor: "#e8e8e8",
      dangerColor: "#da534f",
      disabledColor: "#e9e4e4",
      borderColor: "#000",
      paperColor: "#fff",
      toolbarColor: "#fff",
      fontColor: "#000",
      viewButton: "#000",
      topbarButton: "#000",
      menuItemsColor: "#000",
    },
  }
</script>
```

First of all, you should set your **domain name** here. This domain name will be used for all requests to the server side.

Parameters **isOldDesign** and **isRectangleButtons** should be `false`.

You can see, that project has two palette of colors - **light** and **dark**. Light palette is used by default. Dark palette can be used if user switch on contrast mode by the clicking on the icon in the Topbar.

Which colors can we set here:

- **mainColor** and **secondaryMainColor** should be equal (if **isOldDesign** is `false`) and set main color of your project version;
- **tableHeadColor** set the color of table headers:

![tableHeadColor](./readMeImages/colors/tableHeadColor.png)

- **dangerColor** set the color of Cancel and Decline buttons:

![dangerColor](./readMeImages/colors/dangerColor-1.png)

![dangerColor](./readMeImages/colors/dangerColor-2.png)

![dangerColor](./readMeImages/colors/dangerColor-3.png)

- **disabledColor** set a color of disabled fields;

![disabledColor](./readMeImages/colors/disabledColor.png)

- **borderColor** set a color of block borders;

- **paperColor** is used fow light background;

- **fontColor** set a color of the text at light background;

- **toolbarColor** set a color of tables or forms toolbars;

- **viewButton** set a color of View button which redirects user from Patients list to Patient Summary page:

![viewButton](./readMeImages/colors/viewButton-1.png)

![viewButton](./readMeImages/colors/viewButton-2.png)

- **topbarButton** set a color of right-corner buttons in topbar:

![topbarButton](./readMeImages/colors/topbarButton-1.png)

![topbarButton](./readMeImages/colors/topbarButton-2.png)

![topbarButton](./readMeImages/colors/topbarButton-3.png)

- **menuItemsColor** set a color of menu items:

![menuItemsColor](./readMeImages/colors/menuItemsColor-1.png)

![menuItemsColor](./readMeImages/colors/menuItemsColor-2.png)

![menuItemsColor](./readMeImages/colors/menuItemsColor-3.png)

If you want, you can add your custom settings to the palette. 

