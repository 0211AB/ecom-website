import dotenv from "dotenv"
dotenv.config()

import Airtable from "airtable-node"


exports.handler = async () => {
  try {

    const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
      .base(process.env.AIRTABLE_BASE)
      .table(process.env.AIRTABLE_TABLE)

    const response = await airtable.list({ maxRecords: 100 })

    const products = response.records.map((product) => {
      const { id, fields } = product
      const {
        price,
        most_popular,
        bestseller,
        material,
        stock,
        designer,
        company,
        colors,
        category,
        description,
        reviews,
        stars,
        name,
        notes,
        featured,
        sale,
        trending,
        images,
        exclusive,
        new_in_market,
      } = fields

      const { url } = images[0]
      return {
        id,
        price,
        most_popular,
        bestseller,
        material,
        stock,
        designer,
        company,
        colors,
        category,
        description,
        reviews,
        stars,
        name,
        notes,
        featured,
        sale,
        trending,
        images,
        exclusive,
        new_in_market,
        image: url
      }
    })
    return {
      statusCode: 200,
      headers: {
        "access-control-allow-origin": "*",
      },
      body: JSON.stringify(products),
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      headers: {
        "access-control-allow-origin": "*",
      },
      body: "There was an error",
    }
  }
}
