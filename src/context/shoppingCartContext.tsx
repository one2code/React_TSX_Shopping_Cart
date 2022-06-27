import { createContext, ReactNode, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";


type ShoppingCartProviderTypes = {
	children: ReactNode;
};

type ShoppingCartContext = {
    openCart: () => void;
    closeCart: () => void;
	getItemQuantity: (id: number) => number;
	increaseCartQuantity: (id: number) => void;
	decreaseCartQuantity: (id: number) => void;
	removeFromCart: (id: number) => void;
    cartQuantity: number;
    cartItems: CartItem[];
};

type CartItem = {
	id: number;
	quantity: number;
};
const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
	return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderTypes) {
	const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    // Logic for the shopping cart quantity
    const cartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    // Opens and closes the cart when clicked
    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    // Logic for the item quantity in the shopping cart
	function getItemQuantity(id: number) {
		return cartItems.find((item) => item.id === id)?.quantity || 0;
	}

    // Logic for increasing the quantity of an item in the shopping cart. Starts at a default of 1 when instantiated, and then incrementally adds to the quantity with each successive click.
	function increaseCartQuantity(id: number) {
		setCartItems((currentItems) => {
			if (currentItems.find((item) => item.id === id) == null) {
				return [...currentItems, { id, quantity: 1 }];
			} else {
				return currentItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity + 1 };
					}
					return item;
				});
			}
		});
	}

    // Logic for decreasing the quantity of an item in the shopping cart. Starts at a default of 1 when instantiated, and then decrements the quantity with each successive click.
	function decreaseCartQuantity(id: number) {
		const item = cartItems.find((item) => item.id === id);
		setCartItems((currentItems) => {
			if (currentItems.find((item) => item.id === id)?.quantity === 1) {
				return currentItems.filter((item) => item.id !== id);
			} else {
				return currentItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity - 1 };
					}
					return item;
				});
			}
		});
	}

    // Logic for removing an item from the shopping cart.
    function removeFromCart(id: number) {
        setCartItems((currentItems) => currentItems.filter((item) => item.id !== id));
    }

	return (
		<ShoppingCartContext.Provider
			value={{
				getItemQuantity,
				increaseCartQuantity,
				decreaseCartQuantity,
				removeFromCart,
                cartItems,
                cartQuantity,
                openCart,
                closeCart
			}}
		>
			{children}
            <ShoppingCart isOpen = {isOpen}/>
		</ShoppingCartContext.Provider>
	);
}


