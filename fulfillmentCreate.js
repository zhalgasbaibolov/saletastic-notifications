const express = require('express')
const app = express()
const getRawBody = require('raw-body')

app.post('/webhooks/fulfillments/create', async (req, res) => {
    console.log('🎉 We got an order(fulfillment)!')

    const hmac = req.get('X-Shopify-Hmac-Sha256')

    const body = await getRawBody(req)

})

app.post('/webhooks/fulfillments/update', async (req, res) => {
    console.log('🎉 We got an update(fulfillment)!')

    const hmac = req.get('X-Shopify-Hmac-Sha256')

    const body = await getRawBody(req)

})

app.post('/webhooks/orders/create', async (req, res) => {
    console.log('🎉 We got an order!')

    const hmac = req.get('X-Shopify-Hmac-Sha256')

    const body = await getRawBody(req)

})

app.listen(80, () => console.log('Example app listening on port 80!'))