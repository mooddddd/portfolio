export const Item = ({ list }) => {
  const listMap = list.map((v: List, idx: number) => {
    return (
      <div className='p-4 lg:w-1/2' key={idx}>
        <div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
          <img
            alt='team'
            className='flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4'
            src={v.cover.external.url}
          />
          <div className='flex-grow sm:pl-8'>
            <h2 className='title-font font-medium text-lg text-gray-900'>
              {v.properties.Title.title[0].plain_text}
            </h2>
            <h3 className='text-gray-500'>
              {' '}
              {v.properties.Period.date.start}~ {v.properties.Period.date.end}
            </h3>
            <h3 className='text-gray-500 mb-3'>Front-end</h3>
            <p className='mb-4'>
              {v.properties.Description.rich_text[0].text.content}
            </p>
            <span className='inline-flex'>
              <a className='text-gray-500'>{v.properties.Github.url}</a>
              {/* <a className='ml-2 text-gray-500'>배포주소</a> */}
            </span>
          </div>
        </div>
      </div>
    );
  });

  return listMap;
};
