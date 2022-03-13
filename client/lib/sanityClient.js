import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'ffxzjaup',
    dataset: 'production',
    apiVersion: 'v1',
    token: 'skHJ0MHSrVEoiqDL2kYVbaOu8QKCNehLlE0hFFegn4d9Dt0hiMXDZYtvcgvMrSQY64gkOtCY2UOmVYqZmKIN55foBRAZX16OZPQbi2h1noyKSp82h1wiocZac8tg2fnlUpRocfrNDbu8iBfkh0aeD3pClqtCN65OdfPyyTxKM9dzwqhtofVN',
    useCdn: false
})