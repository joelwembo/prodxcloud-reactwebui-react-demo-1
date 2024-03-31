import React from 'react';
import PropTypes from 'prop-types';

RoadMap2.propTypes = {
    data : PropTypes.array,
};

function RoadMap2(props) {
    const {data} = props;
    return (
        <section className="tf-section section-roadmap2 section-bg-1">
              
            <div className="tf-heading  mb87 wow fadeInUp">
                <h2 className="heading">ROAD MAP</h2>
            </div>
            
            <div className="shape1">
                <svg xmlns="http://www.w3.org/2000/svg" width="367" height="383" viewBox="0 0 367 383" fill="none">
                    <g opacity="0.2" filter="url(#filter0_f_2706_4929)">
                    <path d="M323.437 313.468L237.275 257.43L258.579 357.999L198.674 370.69L177.369 270.12L121.33 356.283L69.9995 322.898L126.038 236.736L25.4685 258.041L12.7778 198.135L113.347 176.83L27.1845 120.792L60.569 69.4609L146.732 125.499L125.427 24.9298L185.332 12.2392L206.637 112.808L262.676 26.6459L314.007 60.0304L257.968 146.193L358.538 124.888L371.228 184.794L270.659 206.099L356.822 262.137L323.437 313.468Z" fill="url(#paint0_linear_2706_4929)"/>
                    </g>
                    <defs>
                    <filter id="filter0_f_2706_4929" x="0.777344" y="0.238281" width="382.451" height="382.451" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_2706_4929"/>
                    </filter>
                    <linearGradient id="paint0_linear_2706_4929" x1="288.341" y1="43.3381" x2="95.6649" y2="339.591" gradientUnits="userSpaceOnUse">
                    <stop offset="1"  stopColor="#1D2328"/>
                    <stop offset="1" stopColor="#1D2328" stopOpacity="0"/>
                    </linearGradient>
                    </defs>
                    </svg>
            </div>
            <div className="shape2">
                <svg xmlns="http://www.w3.org/2000/svg" width="321" height="322" viewBox="0 0 321 322" fill="none">
                    <g opacity="0.2" filter="url(#filter0_f_2706_4928)">
                    <path d="M269.213 262.019L197.968 215.683L215.584 298.84L166.05 309.333L148.434 226.176L102.098 297.421L59.6544 269.817L105.99 198.572L22.8334 216.188L12.3399 166.654L95.4969 149.038L24.2523 102.702L51.8567 60.2583L123.101 106.594L105.485 23.4373L155.019 12.9439L172.635 96.1009L218.971 24.8562L261.415 52.4606L215.079 123.705L298.236 106.089L308.729 155.623L225.572 173.239L296.817 219.575L269.213 262.019Z" fill="url(#paint0_linear_2706_4928)"/>
                    </g>
                    <defs>
                    <filter id="filter0_f_2706_4928" x="0.339844" y="0.943359" width="320.389" height="320.391" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_2706_4928"/>
                    </filter>
                    <linearGradient id="paint0_linear_2706_4928" x1="240.193" y1="38.6584" x2="80.8762" y2="283.619" gradientUnits="userSpaceOnUse">
                    <stop offset="1"  stopColor="#1D2328"/>
                    <stop offset="1" stopColor="#1D2328" stopOpacity="0"/>
                    </linearGradient>
                    </defs>
                    </svg>
            </div>
            <div className="container w-100">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tf-roadmap style2">
                            {
                                data.map(idx => (
                                    <div key={idx.id} className={`roadmap-box-2 ${idx.class}`} data-wow-duration="1.5s">
                                        <div className="content">
                                            <h4 className="title">{idx.title}</h4>
                                            <ul className="list-infor">
                                                {
                                                    idx.list.map(idx => (
                                                        <li key={idx.id}>
                                                            <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                                                <g clipPath="url(#clip0_2346_6035)">
                                                                <path d="M15.8397 9.80787V12.4477C15.8397 12.4781 15.8391 12.5085 15.8373 12.539C15.8367 12.5449 15.8367 12.5515 15.8361 12.5575C15.835 12.5754 15.8338 12.5933 15.832 12.6117C15.8302 12.6296 15.8284 12.6475 15.826 12.6654C15.8242 12.6827 15.8212 12.7 15.8188 12.7167C15.8147 12.7424 15.8105 12.7675 15.8051 12.7931C15.8021 12.8092 15.7986 12.8247 15.795 12.8408C15.7914 12.8546 15.7878 12.8689 15.7842 12.8832C15.7813 12.8963 15.7777 12.9088 15.7735 12.922C15.7574 12.9798 15.7377 13.0371 15.715 13.0932C15.7103 13.1051 15.7055 13.1176 15.7001 13.1296C15.6864 13.1624 15.6715 13.1946 15.6554 13.2262C15.6476 13.2423 15.6393 13.2578 15.6309 13.2733L15.6303 13.2727L12.6439 11.6107L7.9668 9.00727L11.4842 7.38818L15.7765 9.77327L15.8397 9.80787Z" fill="url(#paint0_linear_2346_6033)"/>
                                                                <path d="M15.7855 4.88138L14.8752 5.58295L14.0692 6.85006L6.40625 2.58459L9.31811 0.539551L11.078 1.55611H11.0786L14.3036 3.418L14.9712 3.80338C15.3822 4.04082 15.6722 4.43217 15.7855 4.88138Z" fill="url(#paint1_linear_2346_6034)"/>
                                                                <path d="M11.0789 1.556L0 7.90291V5.30544C0 4.68561 0.3305 4.1129 0.866816 3.80328L7.05265 0.232215C7.58896 -0.0774049 8.24996 -0.0774049 8.78687 0.232215L11.0789 1.556Z" fill="#21E786"/>
                                                                <path d="M15.8389 5.30552V6.20693L1.52781 14.3316L0.866816 13.9498C0.3305 13.6396 0 13.0675 0 12.4476V11.548L14.3045 3.41797L14.9721 3.80335C15.5084 4.11297 15.8389 4.68568 15.8389 5.30552Z" fill="#21E786"/>
                                                                <path d="M15.8395 9.73633V12.4477C15.8395 12.4782 15.8389 12.5086 15.8371 12.539C15.8365 12.545 15.8365 12.5515 15.8359 12.5575C15.8347 12.5754 15.8335 12.5933 15.8317 12.6118C15.8299 12.6297 15.8282 12.6476 15.8258 12.6655C15.824 12.6828 15.821 12.7001 15.8186 12.7168C15.8144 12.7424 15.8103 12.7675 15.8049 12.7932C15.8019 12.8093 15.7983 12.8248 15.7947 12.8409C15.7912 12.8546 15.7876 12.8689 15.784 12.8832C15.781 12.8964 15.7774 12.9089 15.7733 12.922C15.7572 12.9799 15.7375 13.0371 15.7148 13.0932C15.71 13.1052 15.7053 13.1177 15.6999 13.1296C15.6862 13.1624 15.6713 13.1946 15.6551 13.2263C15.6474 13.2424 15.639 13.2579 15.6307 13.2734C15.6211 13.2907 15.6116 13.308 15.6015 13.3247C15.5919 13.342 15.5812 13.3587 15.571 13.3754C15.5496 13.4082 15.5275 13.441 15.5042 13.4726C15.4804 13.5049 15.4559 13.5359 15.4308 13.5657C15.4177 13.5812 15.4046 13.5961 15.3915 13.6105C15.3783 13.6254 15.3646 13.6397 15.3509 13.654C15.3235 13.6826 15.2948 13.7107 15.265 13.7369C15.2537 13.7477 15.2417 13.7578 15.2298 13.7679C15.2226 13.7739 15.2155 13.7799 15.2083 13.7858C15.194 13.7984 15.1791 13.8103 15.1636 13.8216C15.1487 13.8336 15.1337 13.8449 15.1176 13.8556C15.0878 13.8777 15.0568 13.8986 15.0252 13.9183C15.0079 13.929 14.9906 13.9398 14.9727 13.9499L8.78744 17.521C8.25052 17.8306 7.58952 17.8306 7.05321 17.521L4.79102 16.2151L12.6437 11.6107L15.7762 9.77332L15.8395 9.73633Z" fill="#21E786"/>
                                                                <path d="M3.11051 2.5083V15.2451L1.52781 14.3317L0.866816 13.9499C0.3305 13.6397 0 13.0676 0 12.4477V5.30562C0 4.68578 0.3305 4.11307 0.866816 3.80345L3.11051 2.5083Z" fill="#21E786"/>
                                                                </g>
                                                                <defs>
                                                                <linearGradient id="paint0_linear_2346_6033" x1="15.3625" y1="11.7527" x2="9.009" y2="7.39772" gradientUnits="userSpaceOnUse">
                                                                <stop offset="1" stopColor="#00FFA3"/>
                                                                <stop offset="1" stopColor="#00FFA3" stopOpacity="0"/>
                                                                </linearGradient>
                                                                <linearGradient id="paint1_linear_2346_6034" x1="14.3168" y1="5.72732" x2="8.55987" y2="1.99876" gradientUnits="userSpaceOnUse">
                                                                <stop offset="1" stopColor="#00FFA3"/>
                                                                <stop offset="1" stopColor="#00FFA3" stopOpacity="0"/>
                                                                </linearGradient>
                                                                <clipPath id="clip0_2346_6036">
                                                                <rect width="16" height="17.7778" fill="white"/>
                                                                </clipPath>
                                                                </defs>
                                                                </svg></div>
                                                            {idx.text}
                                                        </li>
                                                    ))
                                                }
                                                
                                            </ul>
                                        </div>
                                        <span ></span>
                                        <div className="shape-circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="176" height="60" viewBox="0 0 176 60" fill="none">
                                                <path opacity="0.7" d="M0 30L136 30" stroke="var(--primary-color13)" strokeWidth="2" strokeDasharray="6 6"/>
                                                <circle cx="146" cy="30" r="30" transform="rotate(90 146 30)" fill="#21E786" fillOpacity="0.2"/>
                                                <circle cx="146" cy="30" r="15" transform="rotate(90 146 30)" fill="#21E786"/>
                                                </svg>
                                        </div>
                                    </div>
                         
                                ))
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RoadMap2;