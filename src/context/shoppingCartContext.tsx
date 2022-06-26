import { createContext, ReactNode, useContext, useState } from "react";


type ShoppingCartProviderTypes = {
	children: ReactNode;
};

type ShoppingCartContext = {
	getItemQuantity: (id: number) => number;
	increaseCartQuantity: (id: number) => void;
	decreaseCartQuantity: (id: number) => void;
	removeFromCart: (id: number) => void;
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
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	function getItemQuantity(id: number) {
		return cartItems.find((item) => item.id === id)?.quantity || 0;
	}

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
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
}


