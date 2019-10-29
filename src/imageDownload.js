import fetch from 'node-fetch';
global.fetch = fetch;
import Unsplash, { toJson } from "unsplash-js";
const https = require('https');
const fs = require('fs');

const unsplash = new Unsplash({
    accessKey: process.env.UNSPLASH_ACCESS_KEY,
    secret: process.env.UNSPLASH_SECRET_KEY
});

export function downloadRandomPhoto (file_location, callback) {
    unsplash.photos.getRandomPhoto()
        .then(toJson)
        .then(json => {
            return(json.urls.regular);
        })
        .then(url => {
            const file = fs.createWriteStream(file_location);
            const request = https.get(url, (res) => {
                console.log('statusCode:', res.statusCode);
                res.pipe(file);
                callback();
            })
                  .on('error', (err) => {
                      console.log("File error: ", err);
                  });
        })
        .catch((err) => {
            console.log("API error: ", err);
        });
};

export function downloadRandomFromCollection (collection_id, file_location, callback) {
    unsplash.collections.getCollection(collection_id)
        .then(toJson)
        .then(json => {
            const total_photos = json.total_photos;
            console.log("total photos in collection: ", total_photos);
            return(total_photos);
        })
        .then(total_photos => {
            const total_pages = total_photos / 5;
            const selected_page = Math.floor(Math.random() * total_pages);
            const selected_image = Math.floor(Math.random() * 5);
            return {
                selected_page: selected_page,
                selected_image: selected_image,
            };
        })
        .then(({selected_page, selected_image}) => {
            console.log("selected page index: ", selected_page);
            console.log("selected image index: ", selected_image);
            unsplash.collections.getCollectionPhotos(collection_id, selected_page, 5)
                .then(toJson)
                .then(json => {
                    // console.log(json[selected_image].urls.regular);
                    return(json[selected_image].urls.regular);
                })
                .then(url => {
                    const file = fs.createWriteStream(file_location);
                    const request = https.get(url, (res) => {
                        console.log('statusCode:', res.statusCode);
                        res.pipe(file);
                        callback();
                    })
                          .on('error', (err) => {
                              console.log("File error: ", err);
                          });
        })
        .catch((err) => {
            console.log("API error: ", err);
        });
        });
};
