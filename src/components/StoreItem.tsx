import { Card } from "react-bootstrap";

// Defined types for StoreItem-could also be an interface since there is no need for any unions or enums

type StoreItemTypes = {
	id: number;
	name: string;
	price: number;
	imgUrl: string;
};

// Creates a series of cards displaying a product name, image and price when mapped over in the Store component
export function StoreItem({ id, name, price, imgUrl }: StoreItemTypes) {
	return (
		<Card>
			<Card.Img
				variant="top"
				src={imgUrl}
				height="200px"
				style={{ objectFit: "cover" }}
			/>
				<Card.Body className="d-flex flex-column">
					<Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
						<span className='fs-2'>{name}</span>
						<span className='ms-2 text-muted'>{price}</span>
					</Card.Title>
				</Card.Body>
		</Card>
	);
}
