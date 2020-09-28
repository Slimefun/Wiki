const fs = require('fs');
const http = require("https");

const url = "https://github.com/Slimefun/Slimefun4/wiki/";
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
        "authorization": "token " + process.env.ACCESS_TOKEN,
        "content-type": "application/x-www-form-urlencoded"
    }
}

const queue = [];
const pages = [];
const missing = [];

// This is our placeholder text for any page that is missing
const missingPageTemplate = fs.readFileSync("pages/missing.md", "UTF-8");

// Read the contents of our /pages/ directory.
fs.promises.readdir("pages").then(files => {
    for (let i in files) {
        // Queue another task to find the file
        queue.push(fs.promises.readFile("pages/" + files[i], "UTF-8").then(content => {
            let match;

            // Continue as long as a match can be found
            do {
                // Update our variable
                match = regex.exec(content);

                // If we found a match, handle it
                if (match) {
                    let page = match[0].substring(1 + url.length, match[0].length - 1);
                    findFile(`${page}.md`);
                }
            } while(match);
        }));
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

        // This will be the body for our issue
        var content =  `## :spider_web: The following pages are still missing!
        Help us out by contributing to the wiki and create one or more of these pages, it would be awesome! :heart:<br>
        We have a detailed guide on how to submit changes to the wiki for you right here:
        https://github.com/Slimefun/Slimefun4/wiki/Expanding-the-Wiki

        ## :books: List of missing pages

        `;

        // Sort the array alphabetically
        missing.sort();

        // Go over all missing pages
        for (let i in missing) {
            // Add the missing page to our bullet list
            content += `* ${missing[i]} \n`;

            // Replace the missing file with our "Missing page" placeholder text
            fs.writeFile(`pages/${missing[i]}`, missingPageTemplate, err => {
                if (err) {
                    throw err;
                }
            });
        }

        // A wholesome message at the end <3
        content += "\nHelp is much appreciated :heart:";

        // Update the issue via a web request
        request.write(JSON.stringify({
            title: "Missing Pages: " + missing.length,
            body: content,
            state: "open"
        }));

        request.end();
    });
});

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
