```mermaid
sequenceDiagram
    participant browser
    participant server

    browser ->> server : POST https://studies.cs.helsinki.fi/exampleapp/new_note {note:hello}
    activate server
    server -->> browser : 302 URL redriect
    deactivate server
    Note right of server: Server creates a new note and a timestamp and add it to the array of notes
    Note right of server: Server ask the browse to do a redirect to GET https://studies.cs.helsinki.fi/exampleapp/notes

    browser ->> server : GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server -->> browser : HTML document 
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server. This aso includes the new note object.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
```
