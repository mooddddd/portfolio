export const Projects = () => {
  return (
    <section className='text-gray-600 body-font' id='projects'>
      <div className='container px-5 py-20 mx-auto'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h1 className='text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest'>
            Project History
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            2022 ~ 2023
          </p>
        </div>
        <div className='flex flex-wrap -m-4'>
          {/* 프로젝트1 */}
          <div className='p-4 lg:w-1/2'>
            <div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
              <img
                alt='team'
                className='flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4'
                src='https://dummyimage.com/206x206'
              />
              <div className='flex-grow sm:pl-8'>
                <h2 className='title-font font-medium text-lg text-gray-900'>
                  Solar Swap
                </h2>
                <h3 className='text-gray-500'>23.06.05 ~ 23.07.18</h3>
                <h3 className='text-gray-500 mb-3'>Front-end</h3>
                <p className='mb-4'>프로젝트 소개</p>
                <span className='inline-flex'>
                  <a className='text-gray-500'>깃헙</a>
                  <a className='ml-2 text-gray-500'>배포주소</a>
                </span>
              </div>
            </div>
          </div>
          {/* 프로젝트2 */}
          <div className='p-4 lg:w-1/2'>
            <div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
              <img
                alt='team'
                className='flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4'
                src='https://dummyimage.com/206x206'
              />
              <div className='flex-grow sm:pl-8'>
                <h2 className='title-font font-medium text-lg text-gray-900'>
                  프로젝트 이름
                </h2>
                <h3 className='text-gray-500 mb-3'>Designer</h3>
                <p className='mb-4'>프로젝트 소개</p>
                <span className='inline-flex'>
                  <a className='text-gray-500'>깃헙</a>
                  <a className='ml-2 text-gray-500'>배포주소</a>
                </span>
              </div>
            </div>
          </div>
          {/* 프로젝트 3 */}
          <div className='p-4 lg:w-1/2'>
            <div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
              <img
                alt='team'
                className='flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4'
                src='https://dummyimage.com/206x206'
              />
              <div className='flex-grow sm:pl-8'>
                <h2 className='title-font font-medium text-lg text-gray-900'>
                  프로젝트 이름
                </h2>
                <h3 className='text-gray-500 mb-3'>Designer</h3>
                <p className='mb-4'>프로젝트 소개</p>
                <span className='inline-flex'>
                  <a className='text-gray-500'>깃헙</a>
                  <a className='ml-2 text-gray-500'>배포주소</a>
                </span>
              </div>
            </div>
          </div>
          {/* 여기까지 */}
        </div>
      </div>
    </section>
  );
};
