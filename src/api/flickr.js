const fetchJsonp = require('fetch-jsonp');

const flickrUrl = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&&extras=url_o&tags=";

class Flickr {
  static getFeeds(tags = 'nature') {
    return new Promise((resolve, reject) => {
      fetchJsonp(`${flickrUrl}${tags}`, {
        jsonpCallbackFunction: 'jsonFlickrFeed'
      }).then(response => {
        response.json().then(json => {
          resolve(json.items);
        });
      }).catch(function (err) {
        reject(err);
      });
    });
  }

  static getImgSize(img, size = "large") {
    switch(size) {
      case "s": {
        return img.split('_m.jpg')[0] + '_n.jpg';
      }
      case "m": {
        return img.split('_m.jpg')[0] + '_c.jpg';
      }
      case "l": {
        return img.split('_m.jpg')[0] + '_b.jpg';
      }
      default: {
        return img.split('_m.jpg')[0] + '_c.jpg';
      }
    }
  }
}

export default Flickr;
