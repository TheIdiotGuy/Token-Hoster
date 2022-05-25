import server from "express";
const _ = new server();
const port = 3000;
import "colors";

const keepAlive = async () => {
    _.get("/", async (req, res) => {
        res.send("Now keeping it alive!")
    })

    _.listen(3000, async () => {
        console.log(`[` + `CYBORG`.red + `]` + ` - ` + `Server is Online!`.cyan);
    })
}

export default keepAlive;