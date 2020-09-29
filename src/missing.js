// Imports from default node modules
const fs = require('fs');
const http = require("https");

// This is the URL to the deployed wiki
const url = "https://github.com/Slimefun/Slimefun4/wiki/";

// The regular expression to check for links that lead to a wiki page
const regex = /\(https:\/\/github\.com\/Slimefun\/Slimefun4\/wiki\/[A-Za-z-]+\)/g;

/**
 * These are the options for our PATCH request to update Issue #2
 * @type {Object}
 */
const options = {
    method: "PATCH",
    hostname: "api.github.com",
    path: "/repos/Slimefun/Wiki/issues/2",
    headers: {
        "User-Agent": "Slimefun Wiki Action",
        "authorization": `token ${process.env.ACCESS_TOKEN}`,
        "content-type": "application/x-www-form-urlencoded"
    }
}

// The queue of file scan tasks
const queue = [];

// All found pages
const pages = [];

// All missing pages
const missing = [];

// This is our placeholder text for any page that is missing
const missingPageTemplate = fs.readFileSync("pages/missing.md", "UTF-8");

// This will be the body for our issue
var issueBody =  `## :spider_web: The following pages are still missing!
Help us out by contributing to the wiki and create one or more of these pages, it would be awesome! :heart:<br>
We have a detailed guide on how to submit changes to the wiki for you right here:
https://github.com/Slimefun/Slimefun4/wiki/Expanding-the-Wiki

## :books: List of missing pages

`;

// Read the contents of our /pages/ directory as an async promise
fs.promises.readdir("pages").then(files => {

    // Loop through all files in that directory
    for (let i in files) {
        // Queue another task to find linked pages
        queue.push(fs.promises.readFile(`pages/${files[i]}`, "UTF-8").then(scanFile));
    }

    // Finish working off the queue and evaluate afterwards
    Promise.all(queue).then(() => {
        // Create a new request to update our issue
        let request = http.request(options, connection => {
            let response = [];

            // Keep appending any data we receive
            connection.on("data", data => response.push(data));

            // Print out the output at the end
            connection.on("end", () => {
                let message = Buffer.concat(response).toString();
                console.log(message);
            });
        });

        // Sort the array alphabetically
        missing.sort();

        // Go over all missing pages
        for (let i in missing) {
            // Add the missing page to our bullet list
            issueBody += `* ${missing[i]} \n`;

            // Replace the missing file with our "Missing page" placeholder text
            fs.writeFile(`pages/${missing[i]}`, missingPageTemplate, err => {
                if (err) {
                    throw err;
                }
            });
        }

        // A wholesome message at the end <3
        issueBody += "\nHelp is much appreciated :heart:";

        // Update the issue via a web request
        request.write(JSON.stringify({
            title: "Missing Pages: " + missing.length,
            body: issueBody,
            state: "open"
        }));

        request.end();
    });
});

/**
 * This method scans the given input for links to wiki pages.
 *
 * @param  {string} content The file content
 */
function scanFile(content) {
    let match;

    // This scans the document for any linked pages.
    // This continues as long as there are matches for our regular expression
    do {
        // Update our match variable
        match = regex.exec(content);

        // If we found a match, handle it
        if (match) {
            // We will crop  out the url portion of the match
            let page = match[0].substring(1 + url.length, match[0].length - 1);

            // Start an attempt to find the .md file for the linked page
            findFile(`${page}.md`);
        }
    } while(match);
}

/**
 * This method attempts to find the given page.
 * If the page could not be found, it will push it to the missing pages array.
 *
 * @param  {string} page The page to find
 */
function findFile(page) {
    // We don't wanna check a page we already visited.
    if (pages.includes(page)) {
        return;
    }

    // Add it to the pages array
    pages.push(page);

    // Check if a file for this page exists
    if (fs.existsSync("pages/" + page)) {
        console.log(`${page} : OK`);
    }
    else {
        console.log(`${page} : MISSING`);
        missing.push(page);
    };
}
