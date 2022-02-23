const LoadingSkeleton = () => {
  return (
    <div className='LoadingSkeleton w-full vp12:w-5/6 vp12:h-5/6 animate-pulse'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col justify-center w-4/6 h-full mb-4'>
          <div className='w-full h-8 vp12:h-7 mb-3 rounded bg-skeletonGray' />
          <div className='w-5/6 h-7 vp12:h-6 rounded bg-skeletonGray' />
        </div>
        <div className='w-10 h-10 rounded bg-skeletonGray'></div>
      </div>
      <div className='aspect-[20/13] rounded bg-skeletonGray'></div>
    </div>
  );
};

export default LoadingSkeleton;
