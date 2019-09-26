const fs = require('fs');
const http = require("https");

const url = "https://github.com/TheBusyBiscuit/Slimefun4/wiki/";
const regex = /\(https:\/\/github\.com\/TheBusyBiscuit\/Slimefun4\/wiki\/[A-Za-z-]+\)/g;

const options = {
    method: "PATCH",
    hostname: "api.github.com",
    path: "/repos/TheBusyBiscuit/Slimefun4-wiki/issues/2",
    headers: {
        "User-Agent": "Slimefun4-wiki Action",
        "authorization": "token " + process.env.ACCESS_TOKEN,
        "content-type": "application/x-www-form-urlencoded"
    }
}

var promises = [];
var pages = [];
var missing = [];

fs.promises.readdir("pages").then((files) => {
    for (var i in files) {
        promises.push(fs.promises.readFile("pages/" + files[i], "UTF-8").then((content) => {
            var match;
            do {
                match = regex.exec(content);

                if (match) {
                    var page = match[0].substring(1 + url.length, match[0].length - 1) + ".md";
                    findFile(page);
                }
            } while(match);
        }));
    }

    Promise.all(promises).then(() => {
        var request = http.request(options, (response) => {
            var body = [];

            response.on("data", (data) => {
                body.push(data);
            });

            response.on("end", function () {
                console.log(Buffer.concat(body).toString());
            });
        });

        var content = "The following pages are still missing!\n\n";

        for (var i in missing) {
            content += "* " + missing[i] + " \n";
        }

        content += "\nIt would be really nice if someone added them and made a Pull Request.\n";
        content += "https://github.com/TheBusyBiscuit/Slimefun4-Wiki/pulls";

        request.write(JSON.stringify({
            title: "Missing Pages: " + missing.length,
            body: content,
            state: "open"
        }));

        request.end();
    });
});

function findFile(page) {
    if (pages.includes(page)) return;

    pages.push(page);

    if (fs.existsSync("pages/" + page)) {
        console.log(page + " : OK");
    }
    else {
        console.log(page + " : MISSING");
        missing.push(page);
    };
}
