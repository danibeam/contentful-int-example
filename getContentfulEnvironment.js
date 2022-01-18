const contentfulClientManagement = require('./src/services/contentful/manager')

module.exports = async function () {
    return contentfulClientManagement
        .getSpace('1z0oyoa7tujn')
        .then((space) => space.getEnvironment('master'))
}
