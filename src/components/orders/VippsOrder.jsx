import React from 'react';
import Link from 'next/link';
import { MdCelebration } from 'react-icons/md';
import { BiSolidError } from 'react-icons/bi';

const successStates = ['CAPTURED', 'RESERVED', 'CREATED', 'AUTHORIZED'];
const errorStates = [
  'FAILED',
  'CANCELLED',
  'EXPIRED',
  'REJECTED',
  'ABORTED',
  'TERMINATED',
];

const VippsOrder = ({ vippsOrder, sanityOrder }) => {
  const { reference, state } = vippsOrder;
  const customerEmail = sanityOrder?.email;
  const confirmationEmailText = `A confirmation mail should be sent to ${
    customerEmail ? customerEmail : 'you'
  } with the order details!`;

  const isSuccess = successStates.includes(state);
  const isError = errorStates.includes(state);

  return (
    <section className='mt-36 flex items-center justify-center rounded-lg bg-whitish p-6 shadow-2xl'>
      {!!isSuccess && (
        <SuccessBox
          reference={reference}
          confirmationEmailText={confirmationEmailText}
        />
      )}
      {!!isError && <ErrorBox reference={reference} state={state} />}
    </section>
  );
};

export default VippsOrder;

const SuccessBox = ({ reference, confirmationEmailText }) => {
  return (
    <div className='flex flex-col text-center'>
      <div className='flex justify-center'>
        <MdCelebration className='text-8xl' />
      </div>
      <div className='mb-2'>
        <h1 className='text-4xl font-bold text-green-500'>
          Your order is complete!
        </h1>
      </div>
      <div className='flex flex-col'>
        <p className='mb-4 w-fit self-center border-b-2 text-sm'>
          Reference: {reference}
        </p>
        <p>Thank you for supporting club culture and Oslo Omvendt!</p>
        <p>{confirmationEmailText}</p>
      </div>
      <div className='mt-4 w-fit self-center rounded-lg border border-primary hover:border-primaryLight hover:bg-gray-200'>
        <Link href='/week'>
          <p className='px-4 py-2'>Take me back to the events!</p>
        </Link>
      </div>
    </div>
  );
};

const ErrorBox = ({ reference, state }) => {
  return (
    <div className='flex flex-col text-center'>
      <div className='flex justify-center'>
        <BiSolidError className='text-8xl' />
      </div>
      <div className='mb-2'>
        <h1 className='text-4xl font-bold text-error'>
          Something happend to your order
        </h1>
      </div>
      <div className='flex flex-col'>
        <p className='mb-4 w-fit self-center border-b-2 text-sm'>
          Reference: {reference}
        </p>
        <p>
          Your Vipps-payment has the state of &apos;<span>{state}</span>&apos;.
        </p>
        <p>Please reach out to us at hei@osloomvendt.no</p>
      </div>
      <div className='mt-4 w-fit self-center rounded-lg border border-primary hover:border-primaryLight hover:bg-gray-200'>
        <Link href='/week'>
          <p className='px-4 py-2'>Take me back to the events!</p>
        </Link>
      </div>
    </div>
  );
};
