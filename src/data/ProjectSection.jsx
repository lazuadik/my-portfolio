import imageClassification from '../assets/image_classification.jpg';
import dashboardkalbeImg from '../assets/dashboard_kalbe.png';
import infographicQatarImg from '../assets/Infografis_UPH 1.png';
import hoaxDetectionImg from '../assets/hoaxornot.png';

export const projects = [
    {
        id: 1,
        heading: 'B2B Kalbe Nutritionals Dashboard',
        desc: 'Making six B2B dashboards for Kalbe Nutritionals to help the marketing team monitor sales performance',
        img: dashboardkalbeImg,
        view_more: 'View →',
        link: 'https://drive.google.com/file/d/1XWf_hEyeqxXSMRXbyxOmHzMF7OWXFPJG/view' 
    },
    {
        id: 2,
        heading: 'Fashion Multi Classification with ResNet50',
        desc: 'Making classification with ResNet50 to classify the items and the colors of the fashion items',
        img: imageClassification,
        view_more: 'View →',
        link: 'https://drive.google.com/file/d/1XWf_hEyeqxXSMRXbyxOmHzMF7OWXFPJG/view' 
    },
    {
        id: 3,
        heading: 'Qatar Airways Loyalty Customer Analysis',
        desc: 'Infogrpahic dashboard to analyze loyalty customers data for Qatar Airways',
        img: infographicQatarImg,
        view_more: 'View →',
        link: 'https://drive.google.com/file/d/1XWf_hEyeqxXSMRXbyxOmHzMF7OWXFPJG/view' 
    },
    {
        id: 4,
        heading: 'Hoax Detection with Transformers',
        desc: 'Making hoax detection model using transformer architecture to classify whether a news is hoax or not',
        img: hoaxDetectionImg,
        view_more: 'View →',
        link: 'https://drive.google.com/file/d/1XWf_hEyeqxXSMRXbyxOmHzMF7OWXFPJG/view' 
    },
];