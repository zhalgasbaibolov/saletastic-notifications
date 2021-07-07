const express = require('express')
const app = express()
const getRawBody = require('raw-body')

app.post('/webhooks/fulfillments/create', async (req, res) => {
    console.log('🎉 We got a fulfillment create!')

    const hmac = req.get('X-Shopify-Hmac-Sha256')

    const body = await getRawBody(req)

})

app.post('/webhooks/fulfillments/update', async (req, res) => {
    console.log('🎉 We got a fulfillment update!')

    const hmac = req.get('X-Shopify-Hmac-Sha256')

    const body = await getRawBody(req)

})

app.post('/webhooks/fulfillment_events/create', async (req, res) => {
    console.log('🎉 We got fulfillment event create!')

    const hmac = req.get('X-Shopify-Hmac-Sha256')

    const body = await getRawBody(req)

})

app.post('/webhooks/fulfillment_events/update', async (req, res) => {
    console.log('🎉 We got fulfillment event update!')

    const hmac = req.get('X-Shopify-Hmac-Sha256')

    const body = await getRawBody(req)

})

app.listen(80, () => console.log('Example app listening on port 80!'))