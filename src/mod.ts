/**
 * Created by Phtoph on 4/13/2016.
 */
let console = (function(){
    let util = require("util");
    return {
        log: function(x) {
            process.stdout.write(util.format.apply(util, arguments));
        },
    };
})();

export class Mod {
    // id: number;
    // name: string;
    // description: string;
    // author: {}[];
    constructor(json: string) {
        let data = JSON.parse(json);
        console.log(data.releases);
    }
};
