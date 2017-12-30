---
ID_PAGE: 22671
PG_TITLE: Approved Naming Conventions
title: Follow Approved Naming Conventions
abstract: ''
slug: approved-naming-conventions
redirects:
  - /generals/approved_naming_conventions
---

If you want to contribute to babylon.js (What an *excellent* idea!), you should attempt to align your code with the following naming conventions:


- Private variables are named starting with _ : ```_myVariable```
- Camel casing is used for non static properties/functions/variables: ```var myUberUsefulVariable```
- Pascal casing must be used for "static" functions: ```BABYLON.Vector3.Project```
- Braces ({}) must be used for every block, even when there is only one line:
```
if (condition) {
    this.doSomething();
}
```
- Braces start on the same line and end on the next one
- Each new file must contain only one class

You have to use **TypeScript** to submit a pull request.

If you want to add a new file, please do the following as well:

- Update gulp's [config.json](https://github.com/BabylonJS/Babylon.js/blob/master/Tools/Gulp/config.json)
- Update [documentation](https://github.com/BabylonJS/Documentation)

