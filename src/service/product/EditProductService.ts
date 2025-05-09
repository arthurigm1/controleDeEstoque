import prismaClient from "../../prisma";
import { EditProductRequest } from "../../model/interface/product/EditProductRequest";
export class EditProductService {   
    async execute({ name, price, description, banner, product_id, amount }: EditProductRequest) {
        if (!product_id) {
        throw new Error("ID incorrect");
        }
    
        const product = await prismaClient.product.update({
        where: {
            id: product_id,
        },
        data: {
            name: name,
            price: price,
            description: description,
            banner: banner,
            amount: +amount,
        },
        });
    
        return product;
    }
}