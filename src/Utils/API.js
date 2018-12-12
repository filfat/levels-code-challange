import Logger from './logger';

import Podcasts from './mock-data/podcasts.json';
import EpisodesForPodcast0 from './mock-data/episodes/podcast0.json';
import EpisodesForPodcast1 from './mock-data/episodes/podcast1.json';

class API {
    // Mock API
    // KISS
    Get (options, callback) {
        Logger.Info('API', 'Calling "' + options.path + '"');
        let data = {};

        if (options.id === undefined) data = Podcasts;
        else {
            switch(options.id) {
                case 0:
                    data = EpisodesForPodcast0;
                    break;
                case 1:
                    data = EpisodesForPodcast1;
                    break;
                default:
                    data = [];
                    break;
            }
        }

        callback({ http: 200, data });
    }
}

export default (new API());