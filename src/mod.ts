/**
 * Created by Phtoph on 4/13/2016.
 */

export class File {
    constructor(public id: number, public name: string, public mirror: string, public url: string) {}
}
export class Release {
    constructor(public id: number, public version: string, public released_at: string,
                public game_versions: string[], public dependencies: string[], public files: File[]) {}
}
export class Mod {
    constructor(public id: number, public name: string, public categories: string[],
                public author: string, public description: string, public releases: Release[]) {}
    public static parseFromJson(json: string) {
        let data = JSON.parse(json);
        let releases = [];
        data.releases.forEach((release) => {
            let files = [];
            release.files.forEach((file) => {
                files.push(new File(file.id, file.name, file.mirror, file.url));
            });
            releases.push(new Release(release.id, release.version, release.released_at, release.game_versions, release.dependencies, files));
        });
        return new Mod(data.id, data.name, data.categories, data.author, data.description, releases);
    }
};
