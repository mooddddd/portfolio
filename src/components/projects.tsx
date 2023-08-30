import getlist from '../../utils/getList';
import { Item } from './projects-item';

export const Projects = async () => {
  const list = await getlist();

  return (
    <section className='text-gray-600 body-font' id='projects'>
      <div className='container px-5 py-20 mx-auto mb-10'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h1 className='text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest'>
            Project History
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            2022 ~ 2023
          </p>
        </div>
        <div className='flex flex-wrap -m-4'>
          <Item list={list} />
        </div>
      </div>
    </section>
  );
};
