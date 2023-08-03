import { Button, Card } from "react-bootstrap";
import formatCurrency from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemsProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItems = ({ id, name, price, imgUrl }: StoreItemsProps) => {
  const {
    getItemQuantity,
    increaseCardQuantity,
    decreaseCardQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={imgUrl}
          height={"200px"}
          style={{ objectFit: "cover" }}
        />
        <Card.Body className="d-felx flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-2">{name}</span>
            <span className="ms-2 text-muted">{formatCurrency(price)}</span>
          </Card.Title>
          <div className="mt-0 ">
            {quantity === 0 ? (
              <Button
                className="w-100"
                onClick={() => increaseCardQuantity(id)}
              >
                + Add to cart
              </Button>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: ".5rem" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: ".5rem" }}
                >
                  <Button onClick={() => decreaseCardQuantity(id)}>-</Button>
                  <div>
                    <span className="fs-3">{quantity}</span> in cart
                  </div>
                  <Button onClick={() => increaseCardQuantity(id)}>+</Button>
                </div>
                <Button
                  className=""
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(id)}
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default StoreItems;
