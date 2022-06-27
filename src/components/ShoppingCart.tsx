import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";

type ShoppingCartTypes = {
    isOpen: boolean;
}

export function ShoppingCart({isOpen}: ShoppingCartTypes) {
    const {closeCart} = useShoppingCart();
	return (
		<Offcanvas show = {isOpen} onHide = {closeCart} placement = 'end'>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>Cart</Offcanvas.Title>
			</Offcanvas.Header>
		</Offcanvas>
	);
}
