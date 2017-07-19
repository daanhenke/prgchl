namespace ResourceLoader {
    let resources = {};
    let url = "img/";

    export function getImage(name: string) {
        if (!resources.hasOwnProperty("image_" + name)) {
            resources["image_" + name] = new Image();
            resources["image_" + name].src = url + resourceTable["image_" + name];
        }

        return resources["image_" + name];
    }

    let resourceTable = {
        "image_font": "fontTiles.png"
    }
}