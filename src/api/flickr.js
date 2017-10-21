const fetchJsonp = require('fetch-jsonp');

const flickrUrl = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=";

class Flickr {
  static getFeeds(tags = 'nature') {
    return new Promise((resolve, reject) => {
      fetchJsonp(`${flickrUrl}${tags}`, {
        jsonpCallbackFunction: 'jsonFlickrFeed'
      }).then(response => {
        response.json().then(json => resolve(json.items))
      }).catch(function (err) {
        console.log(err);
        reject(err);
      });
    });
  }
}

export default Flickr;
