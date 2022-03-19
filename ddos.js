var cloudscraper = require('cloudscraper');

cloudscraper.get('https://mineviet.com/').then(console.log, console.error);
