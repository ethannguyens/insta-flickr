import Ajax from './ajax'

const flickrUrl = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&amp;tags=";

class Flickr {
  static getFeeds(tags) {
    return new Promise((resolve, reject) => {
      Ajax(`${flickrUrl}${tags}`, json => {
        resolve(json.items)
      });
    });
  }
}

export default Flickr;