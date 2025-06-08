import {create} from 'zustand'

const MIN_QUANTITY_LIMIT = 1
export const useCart = create((set) => ({
    // bears: 0,
    // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    // removeAllBears: () => set({ bears: 0 }),
    // updateBears: (newBears) => set({ bears: newBears }),

    products: [],
    addProduct: (product) => set((state) => ({
        products: [...state.products, product]
    })),
    removeProduct: (productId) => set((state) => ({
        products: state.products.filter((product) => product.id !== productId)
    })),
    increaseProductQuantity: (productId) => set((state) => ({
        products: state.products.map((p) => {
            if (p.id === productId) {
                return {...p, quantity: p.quantity + 1}
            } else {
                return p
            }

        })
    })),
    decreaseProductQuantity: (productId) => set((state) => ({
        products: state.products = state.products.map((p) => {
            if (p.id === productId) {
                if (p.quantity <= MIN_QUANTITY_LIMIT) {
                    console.log("Нельзя удалить продукт меньше одного")
                }else {return {
                    ...p,
                    quantity:p.quantity-1,
                }}

            } else {
                return p
            }
        })
    })),

}))
