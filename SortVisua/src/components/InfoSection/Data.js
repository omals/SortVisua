import Image1 from '../../images/svg-4.svg';
import Image2 from '../../images/svg-4.svg';
import Image3 from '../../images/svg-6.svg';


export const homeObjOne = {
    id:'introduction',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Introduction',
    headline: 'Scematic Arrangement of Numbers in Ascenting Order',
    description: 'Get the numbers to be sorted using various algorithm in the visualised manner using bar graphs.',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: Image1,
    alt: 'Data',
    dark: true,
    primary: true,
    darkText: false
} ;

export const homeObjTwo = {
    id:'benefits',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Benefits',
    headline: 'Sorting Algorithms Understandability Provided',
    description: 'Algorithms are some whay difficult to understand. Here visualizing sorting using colors helps better to understand the working of Algorithms. ',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: Image2,
    alt: 'file',
    dark: false,
    primary: false,
    darkText: true
} ;

export const homeObjThree = {
    id:'timecomplexity',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Time complexity',
    headline: 'Each Algorithms have varing Time complexity',
    description: 'Depending upon the number of Iterations and function calls each algorithms varie in there time complexity',
    buttonLabel: 'Start Now',
    imgStart: false,
    img: Image3,
    alt: 'locating',
    dark: false,
    primary: false,
    darkText: true
} ;