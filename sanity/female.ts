import { defineField } from "sanity";

export const product = {
    name: 'product',
    type: 'document',
    title: 'Female ',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Product Title'
        },
        {
            name: 'description',
            type: 'string',
            title: 'product description'
        },
        {
            name: "price",
            type: "number",
            title: "Product Price"

        },
        {
            name: 'image',
            type: 'image',
            title: 'Product Image'
        },
        defineField({
            name: "category",
            title: "product category",
            type: "reference",
            to:[
                {
                    type:"category"
                }
            ]
        })
    ]
}