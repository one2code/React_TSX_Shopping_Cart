import { Button, Card } from "react-bootstrap";
import formatCurrency from "../utilities/formatCurrency";

// Defined types for StoreItem-could also be an interface since there is no need for any unions or enums

type StoreItemTypes = {
	id: number;
	name: string;
	price: number;
	imgUrl: string;
};

// Creates a series of cards displaying a product name, image and price when mapped over in the Store component
export function StoreItem({ id, name, price, imgUrl }: StoreItemTypes) {
	// Temporarily hardcoded to test UI
	const quantity = 0;
	return (
		<Card className="h-100">
			<Card.Img
				variant="top"
				src={imgUrl}
				height="200px"
				style={{ objectFit: "cover" }}
			/>
			<Card.Body className="d-flex flex-column">
				<Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
					<span className="fs-2">{name}</span>
					<span className="ms-2 text-muted">{formatCurrency(price)}</span>
				</Card.Title>
				<div className="mt-auto">
					{quantity === 0 ? (
						<Button className="w-100">+ Add to Cart</Button>
					) : (
						<div
							className="d-flex align-items-center flex-column"
							style={{ gap: ".5rem" }}
						>
							<div
								className="d-flex align-items-center justify-content-center"
								style={{ gap: ".5rem" }}
							>
								<Button>+</Button>
								<div>
								<span className="fs-3">{quantity}</span> in cart
								</div>
								<Button>-</Button>
							</div>
							<Button size = 'sm' variant = 'danger'>Remove</Button>
						</div>
					)}
				</div>
			</Card.Body>
		</Card>
	);
}
