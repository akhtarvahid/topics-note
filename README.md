### Topics-note 

Create topics note for future needs/reads

[Live](https://akhtarvahid.github.io/topics-note/)


## How to run the application
Run command to clone the application
```bash
git clone https://github.com/akhtarvahid/topics-note.git
cd topics-note

topics-note > npm i
topics-note > npm start
```


## Github pages issue:
- GitHub Pages Limitation: GitHub Pages serves static files and doesn't support SPA routing by default

- Direct Access/Refresh: When you refresh or directly access a route, GitHub looks for a corresponding HTML file (which doesn't exist)

Solutions

1. Use HashRouter (Recommended Quick Fix)
```js
Replace BrowserRouter with HashRouter in your app:
// Replace this:
import { BrowserRouter } from 'react-router-dom';

// With this:
import { HashRouter } from 'react-router-dom';

// Then use HashRouter:
<HashRouter>
  {/* Your app routes */}
</HashRouter>```   