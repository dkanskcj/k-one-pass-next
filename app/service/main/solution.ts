
interface fadeInfadeOutDTO {
    idx: number;
    title: string;
    logo: string;
    img: string;
}

const solutionLists: fadeInfadeOutDTO[] = [
    {
        idx: 1,
        title: '만화카페',
        logo: '/fdfo/multi.svg',
        img: 'cartoon'
    },
    {
        idx: 2,
        title: '키즈카페',
        logo: '/fdfo/multi.svg',
        img: 'kids'
    },
    {
        idx: 3,
        title: '노래방',
        logo: '/fdfo/kmachine.svg',
        img: 'karaoke'
    },
    {
        idx: 4,
        title: 'PC방',
        logo: '/fdfo/joymachine.svg',
        img: 'pcbang'
    },
    {
        idx: 5,
        title: '스크린골프장',
        logo: '/fdfo/multi.svg',
        img: 'golf'
    },
    {
        idx: 6,
        title: '탁구장',
        logo: '/fdfo/multi.svg',
        img: 'pingpong'
    }
];

export {
    solutionLists
};

