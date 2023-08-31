'use client';
// use client를 박으면 대체 왜 되는 거지!?!?!?!?!??

import { AboutWrap } from './styled';

export const About = () => {
  return (
    <AboutWrap id='about' className='text-gray-600 body-font'>
      <div className='container px-20 py-20 mx-auto'>
        <div className='flex flex-col text-center md:w-4/5 mb-10 mx-auto'>
          <h1 className='text-2xl font-medium title-font mb-10 text-gray-900 tracking-widest'>
            About
          </h1>
          <section className='my-0 mx-auto'>
            <div className='flex items-center mb-10'>
              <div className='mr-3'>
                <img src='/mood.jpg' className='rounded-full w-64' />
              </div>
              <div className='text-left ml-3 text-gray-500'>
                <div className='mb-3  text-gray-900'>
                  <p className='text-3xl mb-2'>
                    <strong>이은지</strong>
                  </p>
                  <p>활자에 마음을 담는 개발자가 되고 싶습니다.</p>
                </div>
                <div className='flex mb-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6 mr-1'
                    fill='none'
                  >
                    <path
                      d='M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z'
                      stroke='#000000'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  <span>mooddddd@naver.com</span>
                </div>
                <div className='flex mb-3'>
                  <svg
                    role='img'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6 mr-1'
                  >
                    <title>GitHub</title>
                    <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
                  </svg>
                  <span>https://github.com/mooddddd</span>
                </div>
                <div className='flex'>
                  <svg
                    role='img'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6 mr-1'
                  >
                    <title>Tistory</title>
                    <path d='M0 3a3 3 0 1 0 6 0 3 3 0 0 0-6 0m9 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0-9a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0-9a3 3 0 1 0 6 0 3 3 0 0 0-6 0m9 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0' />
                  </svg>
                  <span>https://moodd.tistory.com/</span>
                </div>
              </div>
            </div>
          </section>
          <section className='flex flex-col text-left'>
            <div className='mb-14'>
              <h1 className='text-xl font-medium title-font mb-4 text-gray-900 tracking-widest'>
                Introduce.
              </h1>
              <p className='text-lg'>
                신입 웹 프론트엔드 개발자 이은지입니다. 국어국문학을 전공하여 몇
                권의 책을 만들었지만, 책에서 벗어나 또다른 형태의 독자를 만나고
                싶어 개발자라는 길을 선택했습니다. 2023년 7월, 개발자 양성
                과정을 수료하였으며 현재는 프론트엔드 개발자로서 경험을 쌓아
                나가는 중입니다. 어떤 언어로 표현하든지 진심을 담는 개발자가
                되겠습니다.
              </p>
            </div>
            <div>
              <h1 className='text-xl font-medium title-font mb-4 text-gray-900 tracking-widest'>
                Education.
              </h1>
              <div className='mb-8'>
                <div className='text-lg mb-1'>
                  <p>
                    <strong>📍 경일게임아카데미</strong>
                  </p>
                  <p>블록체인 기반 핀테크 및 응용 SW 개발자 양성 과정 수료</p>
                </div>
                <div className='text-base font-light'>
                  <p>2022. 10 ~ 2023. 07</p>
                  <p>
                    - 약 10개월 간의 비전공자를 위한 개발자 양성 과정을
                    이수하였습니다. HTLM, CSS와 같은 기본적인 마크업 언어부터
                    시작하여 Javascript의 기본적인 문법을 학습하였습니다. 이후
                    Node.js 환경에서 Express를 이용한 서버 구축 및 MySQL 기반의
                    관계형 데이터베이스에 대한 교육을 받았습니다. 더 나아가
                    React를 활용한 프론트 구성, AWS EC2 서버 배포 등 다양한
                    학습을 진행하면서 약 7개월 간 웹 프로그래밍에 필요한
                    여러가지 기초 지식을 익혔습니다.
                    <br />
                    그 이후에는 Bitcoin, Ethereum 등을 기반으로 한 BlockChain에
                    대한 교육을 받았습니다. 블록체인 생태계 및 비트코인,
                    이더리움에 대한 전반적인 흐름 및 개념에 대해 배운 뒤
                    Typescript를 활용하여 비트코인 코드를 기반으로 한 토이
                    블록체인을 구현해보았으며, Web3 라이브러리를 사용하여
                    지갑부터 Dapp 제작, Solidity를 통한 Smart Contract 작성 및
                    배포 등을 실습하며 블록체인에 대한 전반적인 학습을
                    진행했습니다.
                    <br />
                    교육 과정 중 배운 내용을 바탕으로 1~2개월 마다 팀 프로젝트를
                    진행하였으며, 이를 통해 협업 방식 및 중요성과 기본적인 git
                    사용법 등에 대해 익힐 수 있었습니다.
                  </p>
                </div>
              </div>
              <div>
                <div className='text-lg mb-1'>
                  <p>
                    <strong>📍 대진대학교</strong>
                  </p>
                  <p>국어국문학과 학사 졸업</p>
                </div>
                <div className='text-base font-light'>
                  <p>2012. 03 ~ 2018. 08</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </AboutWrap>
  );
};
