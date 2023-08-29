import getlist from '../../utils/getList';

export const Projects = async () => {
  const list = await getlist();
  console.log(list[0].properties);

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
        <div className='flex flex-wrap -m-4'>{listMap}</div>
      </div>
    </section>
  );
};
