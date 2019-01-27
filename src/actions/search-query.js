import getHandler from '../util/get-handler';
import normalise from '../util/normalise';
import setResults from './set-results';

export default function searchQuery(query) {
  return (dispatch, getState) => getHandler('search', query)
    .then(res => dispatch(setResults(res.collection))).then(() => {
      const { results } = getState().results;
      const promiseArray = [
        ...results.items
          .map(item =>
            getHandler(`asset/${normalise(item.data[0]['nasa_id'])}`).catch(err => err)),
      ];

      // Fetch data collection for resources and merge with already fetched results.
      Promise.all(promiseArray).then((values) => {
        values.forEach((value) => {
          if (value.collection) {
            const id = normalise(value.collection.href.split('asset/')[1], true);
            const matchedResult = results.items.find(result => result.data[0]['nasa_id'] === id);
            const matchedResultIdx = results.items.findIndex(result => result.data[0]['nasa_id'] === id);

            if (matchedResult) {
              matchedResult.mediaLinks = value.collection;
              results.items.splice(matchedResultIdx, 1, matchedResult);
            }
          }
        });

        // Remove results which couldn't be matched with a collection.
        results.items = results.items.filter(item => item.mediaLinks);

        // Set results again but containing media links for resources.
        dispatch(setResults(Object.assign({}, results)));
      });
    });
}
