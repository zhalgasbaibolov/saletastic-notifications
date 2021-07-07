const express = require('express')
const app = express()
const getRawBody = require('raw-body')
// const crypto = require('crypto')
// const secretKey = '9d0aef03acd5f37abe35fcd9653af92f697ba8a6961290b9aa5c0b3ecb7ee9fa'

app.post('/webhooks/fulfillments/create', async (req, res) => {
    console.log('🎉 We got an order!')

    // We'll compare the hmac to our own hash
    const hmac = req.get('X-Shopify-Hmac-Sha256')

    // Use raw-body to get the body (buffer)
    const body = await getRawBody(req)

    // Create a hash using the body and our key
    // const hash = crypto
    //     .createHmac('sha256', secretKey)
    //     .update(body, 'utf8', 'hex')
    //     .digest('base64')

    // Compare our hash to Shopify's hash
    // if (hash === hmac) {
    //     // It's a match! All good
    //     console.log('Phew, it came from Shopify!')
    //     res.sendStatus(200)
    // } else {
    //     // No match! This request didn't originate from Shopify
    //     console.log('Danger! Not from Shopify!')
    //     res.sendStatus(403)
    // }
})

app.listen(80, () => console.log('Example app listening on port 80!'))