import { Button, Card } from "react-bootstrap";
import formatCurrency from "../utilities/formatCurrency";
import { useShoppingCart} from '../context/shoppingCartContext';

// Defined types for StoreItem-could also be an interface since there is no need for any unions or enums

type StoreItemTypes = {
	id: number;
	name: string;
	price: number;
	imgUrl: string;
};

// Creates a series of cards displaying a product name, image and price when mapped over in the Store component
export function StoreItem({ id, name, price, imgUrl }: StoreItemTypes) {
	const {
		getItemQuantity,
		increaseCartQuantity,
		decreaseCartQuantity,
		removeFromCart,
	} = useShoppingCart();
	const quantity = getItemQuantity(id);
	return (
		// Display the product image within the card
		<Card className="h-100">
			<Card.Img
				variant="top"
				src={imgUrl}
				height="200px"
				style={{ objectFit: "cover" }}
			/>
			{/* Displays the card body with the product name and price */}
			<Card.Body className="d-flex flex-column">
				<Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
					<span className="fs-2">{name}</span>
					<span className="ms-2 text-muted">{formatCurrency(price)}</span>
				</Card.Title>
				{/* Add to cart button */}
				<div className="mt-auto">
					{quantity === 0 ? (
						<Button className="w-100" onClick={()=>increaseCartQuantity(id)}>+ Add to Cart</Button>
					) : (
						<div
							className="d-flex align-items-center flex-column"
							style={{ gap: ".5rem" }}
						>
							<div
								className="d-flex align-items-center justify-content-center"
								style={{ gap: ".5rem" }}
							>
								{/* Plus button */}
								<Button onClick={()=>increaseCartQuantity(id)}>+</Button>
								<div>
									{/* Quantity display in cart */}
									<span className="fs-3">{quantity}</span> in cart
								</div>
								{/* Subtract button */}
								<Button onClick={()=>decreaseCartQuantity(id)}>-</Button>
							</div>
							{/* Remove button */}
							<Button size="sm" variant="danger" onClick={()=>removeFromCart(id)}>
								Remove
							</Button>
						</div>
					)}
				</div>
			</Card.Body>
		</Card>
	);
}
