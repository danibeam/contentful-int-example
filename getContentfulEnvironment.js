const contentfulManagement = require('contentful-management')

module.exports = async function () {
    const contentfulClient = contentfulManagement.createClient({
        accessToken: 'CFPAT-ufUdhGQvmQZ3FvI3CGwLb01s2CB0Vbx5KswJfbuvi4w',
        // host: 'preview.contentful.com',
    })

    return contentfulClient
        .getSpace('1z0oyoa7tujn')
        .then((space) => space.getEnvironment('master'))
}
