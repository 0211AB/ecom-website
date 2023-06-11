import React from 'react'
import { useProductsContext } from "../context/products_context"
import { CategoryProducts } from "../components"
const ProductCategory = () => {
  const { products } = useProductsContext()

  const all_Chairs_products = products.filter(
    (product) => product.category === "Chairs"
  )
  const all_Lighting_products = products.filter(
    (product) => product.category === "Lighting"
  )

  return (
    <>
      <section className=" mt-20 md:mt-28">
        <div className="container mx-auto px-5 xl:px-28 py-2">
          <CategoryProducts
            products={all_Chairs_products}
            category_name="Chairs"
          />
          <CategoryProducts
            products={all_Lighting_products}
            category_name="Lighting"
          />
        </div>
      </section>
    </>
  )
}

export default ProductCategory