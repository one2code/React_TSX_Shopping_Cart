import { useShoppingCart } from "../context/shoppingCartContext";
import storeItems from "../data/items.json";
import { Stack, Button } from "react-bootstrap";
import formatCurrency from "../utilities/formatCurrency";

type CartItemTypes = {
	id: number;
	quantity: number;
};

export default function CartItem({ id, quantity }: CartItemTypes) {
	const { removeFromCart } = useShoppingCart();
	const item = storeItems.find((item) => item.id === id);
	if (item == null) {
		return null;
	}
	return (
		<Stack direction="horizontal" gap={2} className="d-flex align-items-center">
			<img
				src={item.imgUrl}
				alt="product"
				style={{ width: "125px", height: "75px", objectFit: "cover" }}
			/>
			<div className="me-auto">
				<div>
					{item.name}{" "}
					{quantity > 1 && (
						<span className="text-muted" style={{ fontSize: ".65rem" }}>
							x{quantity}
						</span>
					)}
				</div>
				<div className="text-muted" style={{ fontSize: ".75rem" }}>
					{formatCurrency(item.price)}
				</div>
				<div>{formatCurrency(item.price * quantity)}</div>
                <Button variant='outline-danger' size='sm' onClick={() => removeFromCart(item.id)}>&times;</Button>
			</div>
		</Stack>
	);
}
