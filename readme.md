Behavior
- go to app folder and launch server with `npm start`
- navigate to localhost:3000
- that's it a simple app

Hack
- go live and open victim.html
- this is how an hacker can redress the original page using iframes and let the victim do some action being confident because original page is showing
- actually this example doesn't implement any hack
- go to hacker_server folder and launch `php -S localhost:8000`
- open victim_foto.html in browser
- accept camera permission
- click on the button
- go to hacker_server/uploads and see the photo 

Mitigation
- go to app/app.js and switch to the SECURE version of the code setting the headers in order to prevent original page to be displayed in iframe
- try the hack again, you won't see the original page in background.