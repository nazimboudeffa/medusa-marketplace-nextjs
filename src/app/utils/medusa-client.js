import Medusa from "@medusajs/medusa-js"

const medusaClient = new Medusa({ baseUrl: process.env.BACKEND_URL })

export { medusaClient }