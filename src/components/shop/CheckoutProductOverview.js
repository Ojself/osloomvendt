import CheckoutProductPreview from './CheckoutProductPreview';
import VippsIcon from './VippsIcon';
import PayPalIcon from './PayPalIcon';

const CheckoutProductOverview = ({
  cart,
  getProductById,
  shippingFee,
  totalPrice,
}) => {
  const totalItems = cart?.items?.reduce((acc, item) => acc + item.quantity, 0);

  const TotalPriceWithoutMVA = (totalPrice / 1.25).toFixed(2);
  const TotalMVA = Math.round(totalPrice - TotalPriceWithoutMVA);

  return (
    <div>
      {cart.items.map((cartItem) => {
        const { productId, size, quantity } = cartItem;
        const product = getProductById(productId);
        return (
          <CheckoutProductPreview
            key={product._id}
            product={product}
            size={size}
            quantity={quantity}
          />
        );
      })}
      <hr className='mb-10 border-whitish opacity-50' />
      <div className='mb-4'>
        <div className='mb-1 flex justify-between'>
          <p>Subtotal ({totalItems}) items</p>
          <p>{TotalPriceWithoutMVA}kr</p>
        </div>
        <div className='mb-1 flex justify-between'>
          <p>Shipping</p>
          <p>{shippingFee ? shippingFee + 'kr' : '-'}</p>
        </div>
        <div className='mb-2 flex justify-between'>
          <p>MVA</p>
          <p>{TotalMVA}kr</p>
        </div>
        <div className='mb-1 flex justify-between'>
          <p className='font-bold'>Total</p>
          <p>{totalPrice}kr</p>
        </div>
      </div>
      <hr className='mb-10 border-whitish opacity-50' />
      <div className='flex justify-center'>
        <div className='mr-2'>
          <VippsIcon height={28} width={58} />
        </div>
        <div>
          <PayPalIcon height={28} width={58} />
        </div>
      </div>
    </div>
  );
};
export default CheckoutProductOverview;
