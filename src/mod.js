/**
 * Created by Phtoph on 4/13/2016.
 */
"use strict";
var ModFile = (function () {
    function ModFile(id, name, mirror, url) {
        this.id = id;
        this.name = name;
        this.mirror = mirror;
        this.url = url;
    }
    return ModFile;
}());
var Release = (function () {
    function Release(id, version, released_at, game_versions, dependencies, files) {
        this.id = id;
        this.version = version;
        this.released_at = released_at;
        this.game_versions = game_versions;
        this.dependencies = dependencies;
        this.files = files;
    }
    return Release;
}());
var Mod = (function () {
    function Mod(id, name, categories, author, description, releases) {
        this.id = id;
        this.name = name;
        this.categories = categories;
        this.author = author;
        this.description = description;
        this.releases = releases;
    }
    Mod.parseFromJson = function (json) {
        var data = JSON.parse(json);
        var releases = [];
        data.releases.forEach(function (release) {
            var files = [];
            release.files.forEach(function (file) {
                files.push(new ModFile(file.id, file.name, file.mirror, file.url));
            });


            releases.push(new Release(release.id, release.version, release.released_at, release.game_versions, release.dependencies, files));
        });
        return new Mod(data.id, data.name, data.categories, data.author, data.description, releases);
    };
    return Mod;
}());
exports.Mod = Mod;
