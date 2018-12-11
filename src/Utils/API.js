import Logger from './logger';

import Podcasts from './mock-data/podcasts.json';
import Episodes from './mock-data/episodes.json';

class API {
    // Mock API
    Get (path, callback) {
        Logger.Info('API', 'Calling "' + path + '"');
        let data = {};

        if (path === 'podcasts') {
            data = Podcasts;
        } else {
            data = {
                
            };
        }

        callback({ http: 200, data });
    }
}

export default (new API());