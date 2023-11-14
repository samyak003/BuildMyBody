import {CartForm} from '@shopify/hydrogen';
import {useState} from 'react';

export default function ProductForm({variantId, custom = false, button}) {
  const lines = [{merchandiseId: variantId, quantity: 1}];
  const [showAlert, setShowAlert] = useState(false);

  const showAlertAndDismiss = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };
  return (
    <CartForm route="/cart" action={CartForm.ACTIONS.LinesAdd} inputs={{lines}}>
      {custom ? (
        button
      ) : (
        <button className="btn" onClick={showAlertAndDismiss}>
          Add to Cart
        </button>
      )}

      {showAlert && (
        <div className="fixed-bottom">
          <div
            className="alert alert-success alert-dismissible fade show"
            style={{maxWidth: '300px'}}
            role="alert"
          >
            Added To the Cart!
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={() => setShowAlert(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      )}
    </CartForm>
  );
}
