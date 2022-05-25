import Eris from "eris";
import { readFileSync } from "fs";
import keepAlive from "./keepAlive";

let Account = [];

(() => keepAlive())();

readFileSync("./accounts.txt")
    .toString()
    .split("\n")
    .forEach((auth) => Account.push(new Eris(auth)));

for (let Crrnt = 0; Crrnt < Account.length; Crrnt++) {

    const User = Account[Crrnt];

    User.on('hello', function () {

        console.log(`[` + `CYBORG`.red + `]` + ` - ` + `Account ${Crrnt + 1} Hosted Successfully!`.cyan);

        setInterval(() => {
            if ($status_1) {
                User.editStatus("idle", { name: "TheIdiotGuy", type: 2 })
                $status_1 = false;
            } else if ($status_2) {
                User.editStatus("idle", { name: "JavaScript", type: 0 })
                $status_2 = false;
            } else if ($status_3) {
                User.editStatus("idle", { name: "Cyborg Developement", type: 5 })
                $status_3 = false;
            } else {
                User.editStatus("idle", { name: "Hosters", type: 3 })
                $status_1 = true;
                $status_2 = true;
                $status_3 = true;
            }
        }, 10000)

    });

    User.on('error', function (e) {
        console.log(e);
    })

    User.connect();
}

