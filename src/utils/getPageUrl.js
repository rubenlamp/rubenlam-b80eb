import _ from 'lodash';
import withPrefix from './withPrefix';

export default function getPostUrl(post, { withPrefix: addPrefix = false } = {}) {
    const urlPath = _.get(post, '__metadata.urlPath');
    return addPrefix ? withPrefix(urlPath) : urlPath;
}
export default function getPageUrl(project, { withPrefix: addPrefix = false } = {}) {
    const urlPath = _.get(project, '__metadata.urlPath');
    return addPrefix ? withPrefix(urlPath) : urlPath;
}
