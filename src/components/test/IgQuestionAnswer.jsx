const IgQuestionAnswer = ({ q, a }) => {
  return (
    <div
      className={`m-2 flex w-52 flex-col rounded-2xl text-center font-source-sans font-medium md:w-72`}
    >
      <div className=' rounded-t-2xl bg-[#262626] px-2 py-4 text-sm text-white md:px-3 md:py-5 md:text-base'>
        {q}
      </div>
      <div className='text:base min-h-10 rounded-b-2xl bg-white px-4 py-6 text-[#262626] md:min-h-11 md:px-5 md:py-7 md:text-xl'>
        {a}
      </div>
    </div>
  );
};
export default IgQuestionAnswer;
