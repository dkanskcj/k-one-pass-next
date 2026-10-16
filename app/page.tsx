'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Fragment, useEffect, useRef } from 'react';
import { InfiniteLooper } from './components/ui/looper';
import { solutionLists } from './service/main/solution';
import Image from 'next/image';
import Link from 'next/link';

interface looperDTO {
  Idx: number;
  Contents: string;
}

interface serviceTextDTO {
  Idx: number;
  Title: string;
  Content: string;
  ClassName?: string;
}

interface historyDTO {
  Idx: number;
  Time: string;
  Img: string;
  Dot: string;
  Content?: string;
  SubContent?: string;
}

interface qrSystemDTO {
  Idx: number;
  Img: string;
  Content: string;
}

interface operationDTO {
  Idx: number;
  Title: string;
  Content: string;
  Img: string;
}

function Home() {
  const fadeIOImgs = useRef<HTMLDivElement[]>([]);
  const serviceElements = useRef<HTMLDivElement[]>([]);

  const operation: operationDTO[] = ([
    {
      Idx: 1,
      Title: '연중무휴 고객센터',
      Content: '전국 신속지원 운영',
      Img: '/operation/call365.svg'
    },
    {
      Idx: 2,
      Title: '기기 고장이 없어요',
      Content: '인터넷·전기공사 X',
      Img: '/operation/manage.svg'
    },
    {
      Idx: 3,
      Title: '줄 서지 않는 편리함',
      Content: '보다 여유로운 운영 가능',
      Img: '/operation/noWait.svg'
    }
  ]);

  const qrSystem: qrSystemDTO[] = ([
    {
      Idx: 1,
      Img: '/qrSystem/allinone.png',
      Content: '올인원솔루션\n무상지원'
    },
    {
      Idx: 2,
      Img: '/qrSystem/qrWeb.png',
      Content: '앱 설치없이\n간편사용'
    },
    {
      Idx: 3,
      Img: '/qrSystem/payment.png',
      Content: '추가 주문은\n단 5초면 끝'
    },
    {
      Idx: 4,
      Img: '/qrSystem/kakao.png',
      Content: '알림톡으로\n실시간 주문 확인'
    }
  ]);

  const sHistory: historyDTO[] = ([
    {
      Idx: 1,
      Time: '이전',
      Dot: '/history/grayDot.svg',
      Img: '/history/hPrev.png',
      Content: '대면거래의 불편함'
    },
    {
      Idx: 2,
      Time: '2015년',
      Dot: '/history/grayDot.svg',
      Img: '/history/h2015.png',
      Content: '키오스크와 셀프오더 개발'
    },
    {
      Idx: 3,
      Time: '2024년',
      Dot: '/history/redDot.svg',
      Img: '/history/h2024.png',
    }
  ]);

  const looperLists: looperDTO[] = ([
    {
      Idx: 1,
      Contents: '/looper/pos.png'
    },
    {
      Idx: 2,
      Contents: '/looper/kds.png'
    },
    {
      Idx: 3,
      Contents: '/looper/ceo.png'
    },
    {
      Idx: 4,
      Contents: '/looper/kiosk.png'
    },
    {
      Idx: 5,
      Contents: '/looper/tableorder.png'
    },
    {
      Idx: 6,
      Contents: '/looper/waiting.png'
    },
  ]);

  const cardLooper: looperDTO[] = ([
    {
      Idx: 1,
      Contents: '/looper/paybook.png'
    },
    {
      Idx: 2,
      Contents: '/looper/digiloca.png'
    },
    {
      Idx: 3,
      Contents: '/looper/nhpay.png'
    },
    {
      Idx: 4,
      Contents: '/looper/hanapay.png'
    },
    {
      Idx: 5,
      Contents: '/looper/solpay.png'
    },
    {
      Idx: 6,
      Contents: '/looper/kbpay.png'
    },
    {
      Idx: 7,
      Contents: '/looper/hyundai.png'
    },
    {
      Idx: 8,
      Contents: '/looper/samsung.png'
    },
  ]);

  const serviceText: serviceTextDTO[] = [
    {
      Idx: 1,
      Title: '도입비용&위약금 제로 약정',
      Content: '사용 시 불편함으로 인한\n해지 위약금 모두 면제'
    },
    {
      Idx: 2,
      Title: '구매 알림부터 조리 완료까지!',
      Content: '구매 + 조리완료 호출 알림톡\n모두 무상지원'
    }
  ];

  const featureText: serviceTextDTO[] = [
    {
      Idx: 1,
      Title: '주문 가능 거리 설정으로\n오주문 걱정 NO',
      Content: '선불 결제를 통한 안전성 강화',
      ClassName: 'text-[15px] text-[#E83B4C] leading-lg font-medium'
    },
    {
      Idx: 2,
      Title: '스캔(QR)의 편리함,\n태그(NFC)는 선택!',
      Content: '사장님의 선택을 맞춰,\n모든 모바일 오더 방식을 지원합니다.',
      ClassName: 'text-[15px] text-[#2A61CC] leading-lg font-medium'
    },
    {
      Idx: 3,
      Title: '복잡한 설치와 관리\n이제 그만!',
      Content: '매장의 감성을 살리고,\nQR오더로 한층 더 스마트한 진화',
      ClassName: 'text-[15px] text-[#3B37B4] leading-lg font-medium'
    }
  ];


  const videoHTML = () => {
    return <>
      <div className="h-178 px-4.5">
        <div className="max-w-7xl absolute top-0 left-0 right-0 mcenter w-full h-197.5 -z-2">
          <video src='/video/mainVideo.mp4' muted autoPlay loop className="w-full h-197.5 object-cover brightness-65"></video>
        </div>
        <div className="main w-full h-full flex flex-col justify-center items-center space-y-2 text-right text-white tracking-tighter">
          <div className="w-full text-[18px] font-medium leading-lg text-primary">
            스캔하고 주문과 결제를 동시에
          </div>
          <div className="w-full text-4xl leading-2xl font-bold text-white">
            국내 최초 인증없이<br />
            원터치 앱카드 선불결제
          </div>
          <div className="w-full flex justify-end items-center">
            <button className="w-fit px-4 py-[10.5px] rounded-md bg-primary leading-base font-bold">
              도입상담
            </button>
          </div>
        </div>
      </div>
    </>;
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sTimeline = gsap.timeline({ repeat: -1 });

    sTimeline
      .from(fadeIOImgs.current[0], {
        opacity: 0,
        duration: 0.5
      })
      .to(fadeIOImgs.current[0], {
        opacity: 0,
        duration: 0.5,
        delay: 1
      })
      .from(fadeIOImgs.current[1], {
        opacity: 0,
        duration: 0.5
      })
      .to(fadeIOImgs.current[1], {
        opacity: 0,
        duration: 0.5,
        delay: 1
      })
      .from(fadeIOImgs.current[2], {
        opacity: 0,
        duration: 0.5
      })
      .to(fadeIOImgs.current[2], {
        opacity: 0,
        duration: 0.5,
        delay: 1
      })
      .from(fadeIOImgs.current[3], {
        opacity: 0,
        duration: 0.5
      })
      .to(fadeIOImgs.current[3], {
        opacity: 0,
        duration: 0.5,
        delay: 1
      })
      .from(fadeIOImgs.current[4], {
        opacity: 0,
        duration: 0.5
      })
      .to(fadeIOImgs.current[4], {
        opacity: 0,
        duration: 0.5,
        delay: 1
      })
      .from(fadeIOImgs.current[5], {
        opacity: 0,
        duration: 0.5
      })
      .to(fadeIOImgs.current[5], {
        opacity: 0,
        duration: 0.5,
        delay: 1
      })

    const serviceTl = gsap.timeline()
      .from(serviceElements.current[0], {
        yPercent: 50,
        opacity: 0,
        duration: 0.5
      })
      .from(serviceElements.current[1], {
        yPercent: 50,
        opacity: 0,
        duration: 0.5
      })

    serviceTl.pause();

    gsap.to('.scoin', {
      scrollTrigger: {
        trigger: '.service',
        start: 'top 70%',
        end: '75% bottom',
        scrub: 1,
        once: true,
      },
      yPercent: -1750,
      xPercent: -350,
      onStart: () => {
        serviceTl.play(0);

      },
      onComplete: () => {
        serviceTl.progress(1);

        gsap.timeline({
          repeat: -1,
          delay: 1
        })
          .to('.scoin', {
            rotateX: 360 * 2,
            duration: 1,
            delay: 0.1
          })
          .to('.mcoin', {
            rotateX: 360 * 2,
            duration: 1,
            delay: 0.1
          })
          .to('.lcoin', {
            rotateX: 360 * 2,
            duration: 1,
            delay: 0.1
          })
      }
    })
    gsap.to('.mcoin', {
      scrollTrigger: {
        trigger: '.service',
        start: 'top bottom',
        end: '75% bottom',
        scrub: 1,
        once: true
      },
      yPercent: -1150,
      xPercent: 250,
    })
    gsap.to('.lcoin', {
      scrollTrigger: {
        trigger: '.service',
        start: 'top bottom',
        end: '75% bottom',
        scrub: 1,
        once: true
      },
      yPercent: -700,
      xPercent: -200,
    })

    const hOrder = gsap.timeline({ delay: 0.5 });

    hOrder.from('.h2024', {
      duration: 0.7,
      yPercent: 50,
      opacity: 0
    });
    hOrder.from('.h2024TextHeader', {
      duration: 0.7,
      yPercent: 50,
      opacity: 0
    });
    hOrder.from('.h2024TextBody', {
      duration: 0.7,
      yPercent: 50,
      opacity: 0
    });
    hOrder.pause();



    gsap.to('.h2024Trigger', {
      scrollTrigger: {
        trigger: '.h2024Trigger',
        start: '50% 70%',
        end: '90% bottom',
        once: true,
        scrub: 1,
      },
      onStart: () => {
        hOrder.play(0);
      },
      onComplete: () => {
        hOrder.progress(1);
      }
    })

    return () => {
      ScrollTrigger.killAll();
    }
  }, [])

  return (
    <div>
      <div className="w-full h-full">
        {
          videoHTML()
        }
        <div className="w-full h-full bg-main">
          <div className="relative w-full h-full flex flex-col justify-center items-center pt-14 pb-20.75 space-y-5 text-white">
            <div className="w-full text-[28px] leading-xl font-bold text-center">
              비대면 오더솔루션<br />
              <div className="relative">
                <div className="relative z-10 whitespace-nowrap">
                  7천
                  <span className="text-primary">⁺</span>
                  매장이 선택한 이유
                </div>
                <div className="w-full fcenter">
                  <div className="w-full max-w-62.5 h-1.75 absolute top-[70%] z-0 bg-primary"></div>
                </div>
              </div>
            </div>
            <div className="w-full px-3.75 text-[17px] font-medium leading-mid text-center break-keep">
              QR오더 다 같은 걸까요?<br />
              결국 선택은 케이큐알일 수 밖에 없는 이유,<br />
              저희는 <span className="underline font-bold">증명합니다.</span>
            </div>
            <div className="w-full h-9 absolute z-50 bottom-0 bg-white rounded-t-[36px]"></div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center px-14.75 space-y-10">
          <div className="flex flex-col justify-center items-center space-y-1.25 text-center">
            <div className="text-[17px] font-medium leading-mid">
              잦은 주문누락 때문에<br />
              짜증나시죠??
            </div>
            <div>
              <Image width={92} height={125} src="/firehuman.svg" alt="" />
            </div>
          </div>
          <div className="space-y-4 break-keep whitespace-nowrap">
            <div className="w-full text-2xl font-semibold">
              완벽한 포스연동은 없다.<br />
              <span className="text-primary">접수누락 걱정은 이제 그만!</span>
            </div>
            <div className="text-[17px] leading-mid">
              모든 솔루션을 <span className="font-extrabold">무상으로 제공!</span>
            </div>
          </div>
        </div>
        <div className="autoslider max-w-180 mcenter pt-8.5 space-y-8">

          <InfiniteLooper speed={30} direction="left" >
            {
              looperLists.map((res) => {
                return <Fragment key={res.Idx}>
                  <Image width={120} height={170} src={res.Contents} alt="" />
                </Fragment>
              })
            }
          </InfiniteLooper>
          <InfiniteLooper speed={30} direction="right">
            {
              looperLists.map((res) => {
                return <Fragment key={res.Idx}>
                  <Image width={120} height={170} src={res.Contents} alt="" />
                </Fragment>
              })
            }
          </InfiniteLooper>
        </div>
        <div className='pt-12.75 pb-14 text-2xl font-semibold text-center'>
          우리는 하나의 올인원<br />
          솔루션으로 해결 합니다.
        </div>
        <div className='pb-12 space-y-12 text-center'>
          <div className='py-12 space-y-6 bg-whiteBlue'>
            <div className='px-3.75 space-y-5.5 text-[17px] font-medium leading-mid'>
              <div>
                접수 누락 걱정 없이 무료로 제공 되는<br />
                완벽한 시스템을 만나 보세요.
              </div>
              <div className='relative max-w-225 mcenter min-h-46 h-[35vw] max-h-125 fcenter'>
                {
                  solutionLists?.map((res, index) => {
                    let divClass = '';
                    switch (res.img) {
                      case 'karaoke':
                        divClass = `w-full h-full flex flex-col justify-between bg-cover space-y-[4.0625rem] bg-[url('/fdfo/karaoke.svg')] rounded-xl`;
                        break;
                      case 'kids':
                        divClass = `w-full h-full flex flex-col justify-between bg-cover space-y-[4.0625rem] bg-[url('/fdfo/kids.svg')] rounded-xl`;
                        break;
                      case 'pcbang':
                        divClass = `w-full h-full flex flex-col justify-between bg-cover space-y-[4.0625rem] bg-[url('/fdfo/pcbang.svg')] rounded-xl`;
                        break;
                      case 'golf':
                        divClass = `w-full h-full flex flex-col justify-between bg-cover space-y-[4.0625rem] bg-[url('/fdfo/golf.svg')] rounded-xl`;
                        break;
                      case 'pingpong':
                        divClass = `w-full h-full flex flex-col justify-between bg-cover space-y-[4.0625rem] bg-[url('/fdfo/pingpong.svg')] rounded-xl`;
                        break;
                      case 'cartoon':
                        divClass = `w-full h-full flex flex-col justify-between bg-cover space-y-[4.0625rem] bg-[url('/fdfo/cartoon.svg')] rounded-xl`;
                        break;
                    }
                    if (index === 1) {
                      return <Fragment key={res.idx}>
                        <div ref={(e) => { fadeIOImgs.current[index] = e! }} className={divClass}>
                          <div className='p-2 z-20 rounded-t-lg'>
                            <Image width={133} height={54} src={res.logo} alt="" />
                          </div>
                          <div className='text-end px-4 py-3 z-20 text-xl font-semibold leading-mid text-white bg-black bg-opacity-40 rounded-b-xl'>
                            {res.title}
                          </div>
                        </div>
                      </Fragment>
                    }
                    divClass += ' absolute';
                    return <Fragment key={res.idx}>
                      <div ref={(e) => { fadeIOImgs.current[index] = e! }} className={divClass}>
                        <div className='p-2 z-20 rounded-t-lg'>
                          <Image width={133} height={54} src={res.logo} alt="" />
                        </div>
                        <div className='text-end px-4 py-3 z-20 text-xl font-semibold leading-mid text-white drop-shadow-lg bg-black bg-opacity-40 rounded-b-xl'>
                          {res.title}
                        </div>
                      </div>
                    </Fragment>
                  })
                }
              </div>
            </div>
            <div className='text-[13px] font-medium leading-lg'>
              10년차의 운영사 Enjoysoft 개발팀이 만든 완벽한 솔루션.<br />
              모든 서비스는 자체 개발 및 운영하여 안전하게 사용할 수 있어요.
            </div>
          </div>
          <div className='service relative px-3.75 flex flex-col justify-center items-center'>
            <div className='space-y-11'>
              <div className='flex flex-col justify-center items-center space-y-4'>
                <Image width={88} height={26} src="/free.svg" alt="" />
                <div className='text-[28px] leading-xl font-bold'>
                  추가 <span className='font-black text-primary'>ZERO</span><br />
                  서비스 혜택!
                </div>
              </div>
              <div className='relative flex items-end'>
                <div className='border-20 rounded-full p-15 border-primary drop-shadow-lg'></div>
                <div className='absolute pb-1.25 right-0 text-[15px] leading-base font-bold'>원</div>
              </div>
            </div>
            <div className='scoin absolute top-2/3'>
              <Image width={33} height={21} src="/scoin.svg" alt="" />
            </div>
            <div className='mcoin absolute top-2/3'>
              <Image width={43} height={32} src="/mcoin.svg" alt="" />
            </div>
            <div className='lcoin absolute top-2/3'>
              <Image width={56} height={41} src="/lcoin.svg" alt="" />
            </div>
            <div className='w-full pt-7 space-y-4 text-start'>
              {
                serviceText.map((res, index) => {
                  return <Fragment key={res.Idx}>
                    <div ref={(e) => { serviceElements.current[index] = e! }} className='max-w-81 mcenter w-full flex justify-start items-start px-6 py-5 rounded-lg gap-10 break-keep bg-whiteLed'>
                      <div className='text-[22px] leading-mid font-bold text-primary'>{res.Idx.toString().padStart(2, '0')}</div>
                      <div className='space-y-2'>
                        <div className='text-[15px] leading-lg font-bold'>
                          {res.Title}
                        </div>
                        <div className='text-[15px] leading-lg font-medium text-[#575757] whitespace-pre-wrap'>
                          {res.Content}
                        </div>
                      </div>
                    </div>
                  </Fragment>
                })
              }
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center space-y-10'>
          <div className='text-[28px] leading-xl font-bold'>
            국내 유일 <span className='text-primary'>앱카드</span><br />
            결제로 <span className='text-primary'>간편</span>하게!
          </div>
          <div className="w-full cardslider pt-8.5 space-y-8 gap-6">
            <div className='max-w-137.5 mcenter relative'>
              <span className='absolute w-1/4 max-w-24 h-full bg-linear-l-white z-10'></span>
              <span className='absolute w-1/4 max-w-24 right-0 h-full bg-linear-r-white z-10'></span>
              <div className='space-y-8'>
                <InfiniteLooper speed={10} direction="left" gap='24px' >
                  {
                    cardLooper.map((res) => {
                      return <Fragment key={res.Idx}>
                        <Image width={48} height={48} src={res.Contents} alt="" className='min-w-1 max-w-12 max-h-12' />
                      </Fragment>
                    })
                  }
                </InfiniteLooper>
                <InfiniteLooper speed={10} direction="right" gap='24px'>
                  {
                    cardLooper.map((res) => {
                      return <Fragment key={res.Idx}>
                        <Image width={48} height={48} src={res.Contents} alt="" className='min-w-1 max-w-12 max-h-12' />
                      </Fragment>
                    })
                  }
                </InfiniteLooper>
              </div>
            </div>

            <div className='text-[17px] leading-mid font-medium text-center'>
              국내 어디서든, 케이큐알으로 빠른 결제.<br />
              <span className='font-extrabold'>곧, 어디서든 케이큐알을 만나볼 수 있습니다.</span>
            </div>

            {/* linear-gradient(to top, transparent 5%, black 100%) */}
            <div className='opacity-'></div>
          </div>
        </div>
        <div className="w-full h-full bg-main">
          <div className="relative w-full h-full flex flex-col justify-center items-center pt-14 pb-20.75 space-y-5 text-white">
            <div className="w-full text-[28px] leading-xl font-bold text-center">
              QR 오더의 시작<br />
              고객의 손끝에서,
              <div className="relative">
                <div className="relative z-10">
                  사장님의 성공까지
                </div>
                <div className="w-full fcenter">
                  <div className="w-full max-w-50 h-1.75 absolute top-[70%] z-0 bg-primary"></div>
                </div>
              </div>
            </div>
            <div className="w-full h-9 absolute bottom-0 bg-white rounded-t-[36px]"></div>
          </div>
        </div>
        <div className='h2024Trigger max-w-7xl w-fit mcenter px-4.5 pb-14.5 space-y-2'>
          {
            sHistory.map((res) => {
              if (res.Idx === 3) {
                return <Fragment key={res.Idx}>
                  <div className='flex justify-start items-center gap-2 text-primary'>
                    <Image width={16} height={16} src={res.Dot} alt="" />
                    {res.Time}
                  </div>
                  <div className='w-fit flex gap-4 pl-2'>
                    <div className='border border-[##D9D9D9] opacity-70'></div>
                    <div className='space-y-4'>
                      <Image width={276} height={160} src={res.Img} alt="" className='h2024 max-w-69 max-h-40' />
                      <div className='space-y-2 text-[15px] leading-lg'>
                        <div className='h2024TextHeader font-extrabold'>
                          이제는 모바일 QR 오더의 시작
                        </div>
                        <div className='h2024TextBody font-medium'>
                          케이큐알은 <span className='text-primary'>앱카드</span>와 연동된 결제 시스템으로<br />그중에서도 가장 빠르고 간편한 솔루션을 제공합니다.
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
              }
              return <Fragment key={res.Idx}>
                <div className='flex justify-start items-center gap-2 text-[#66666D]'>
                  <Image width={16} height={16} src={res.Dot.toString()} alt="" />
                  {res.Time}
                </div>
                <div className='w-fit flex gap-4 pl-2'>
                  <div className='border border-[##D9D9D9] opacity-70'></div>
                  <div className='space-y-4'>
                    <Image width={276} height={160} src={res.Img} alt="" className='max-w-69 max-h-40' />
                    <div className='pb-4 text-[15px] leading-lg'>
                      {res.Content}
                    </div>
                  </div>
                </div>
              </Fragment>
            })
          }
        </div>
        <div className='bg-whiteBlue'>
          <div className='max-w-fit mcenter pt-14 pb-14 space-y-6'>
            <div className='text-[28px] leading-xl font-bold text-center'>
              원하는 방식 그대로<br />
              케이큐알이 맞춰가는 시스템
            </div>
            <div className='grid grid-cols-2 grid-rows-2 gap-2'>
              {
                qrSystem.map((res) => {
                  return <Fragment key={res.Idx}>
                    <div className='pt-5 rounded-lg space-y-2 bg-white'>
                      <div className='text-[15px] leading-base font-medium  text-center whitespace-pre-wrap'>
                        {res.Content}
                      </div>
                      <div className='p-1'>
                        <Image width={139.97} height={76.6} src={res.Img.toString()} alt="" className='max-w-35 max-h-20' />
                      </div>
                    </div>
                  </Fragment>
                })
              }
            </div>
          </div>
        </div>
        <div className='bg-main'>
          <div className='max-w-81 mcenter py-14 space-y-6'>
            <div className="w-full h-full flex flex-col justify-center items-center space-y-4 text-white">
              <div className="w-full text-[28px] leading-xl font-bold text-center">
                <div className="relative">
                  <div className="relative z-10">
                    QR 디자인 타입
                  </div>
                  <div className="w-full fcenter">
                    <div className="w-full max-w-42.5 h-1.75 absolute top-[70%] z-0 bg-primary"></div>
                  </div>
                </div>
              </div>
              <div className='text-[17px] leading-mid font-medium'>
                내 매장에 맞게 커스텀 제작 가능
              </div>
            </div>
            <div className='space-y-3'>
              <div className='px-4'>
                <div className='w-full flex flex-col justify-center items-center p-4 space-y-4 rounded-2xl bg-white'>
                  <Image width={152.25} height={180} src="/QROrderAttach.png" alt="" className='max-w-38.25 max-h-45' />
                  <div className='text-[17px] leading-mid font-bold'>
                    부착형 설명서 TYPE
                  </div>
                </div>
              </div>
              <div className='px-4'>
                <div className='w-full flex flex-col justify-center items-center p-4 space-y-4 rounded-2xl bg-white'>
                  <Image width={153} height={180} src="/QROrderSimple.png" alt="" className='max-w-38.25 max-h-45' />
                  <div className='text-[17px] leading-mid font-bold'>
                    부착형 심플 TYPE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-whiteBlue'>
          <div className='max-w-fit mcenter px-4.5 py-14 space-y-6'>
            <div className='text-[28px] leading-xl font-bold text-center'>
              매장 운영에만<br />
              집중하실 수 있어요
            </div>
            <div className='space-y-3'>
              {
                operation.map((res) => {
                  return <Fragment key={res.Idx}>
                    <div className='flex justify-between items-center rounded-lg gap-10 px-6 py-5 bg-white'>
                      <div className='w-48 text-[15px] leading-lg space-y-1'>
                        <div className='font-bold'>
                          {res.Title}
                        </div>
                        <div className='text-[#575757] font-medium'>
                          {res.Content}
                        </div>
                      </div>
                      <div>
                        <Image width={46} height={46} src={res.Img.toString()} alt="" />
                      </div>
                    </div>
                  </Fragment>
                })
              }
            </div>
          </div>
        </div>
        <div className='max-w-fit mcenter px-4.5 py-6'>
          {
            featureText.map((res) => {
              return <Fragment key={res.Idx}>
                <div className='px-6 py-8 space-y-2 whitespace-pre-wrap'>
                  <div className='w-fit px-2 py-0.75 text-xs font-extrabold bg-black rounded-full text-white'>{res.Idx.toString().padStart(2, '0')}</div>
                  <div className='text-[22px] leading-7.5 font-semibold'>
                    {res.Title}
                  </div>
                  <div className={res.ClassName}>
                    {res.Content}
                  </div>
                </div>
              </Fragment>
            })
          }
        </div>
        <div className='bg-main text-white'>
          <div className='max-w-fit mcenter px-[18px] py-12 space-y-6'>
            <div className='space-y-4'>
              <Image width={240} height={140} src="/qrSign.png" alt="" className='max-w-60 max-h-35' />
              <div className="relative">
                <div className="relative z-10 text-[28px] leading-xl font-bold text-center">
                  QR 오더의<br />
                  종착역은 케이큐알
                </div>
                <div className="w-full fcenter">
                  <div className="w-full max-w-40 h-1.75 absolute top-[85%] z-0 bg-primary"></div>
                </div>
              </div>
              <div className='text-[17px] leading-mid font-medium'>
                당신의 편리함을 지금 만나 보세요!
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <Link href='/receipt'>
                <button className="w-fit px-4 py-[10.5px] rounded-md bg-primary leading-base font-bold">
                  지금 바로 접수
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Home;
