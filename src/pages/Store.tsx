import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import {StoreItem} from '../components/StoreItem'

export function Store() {
	return (
		<>
			<h1>Store</h1>
			<Row md={2} xs={1} lg={3} className="g-3">
				{storeItems.map((storeItem) => (
					<Col key={storeItem.id}><StoreItem {...storeItem}/></Col>
				))}
			</Row>
		</>
	);
}
