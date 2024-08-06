const Icon = ({ iconName, className }) => {
    const ICON_LIST = {
        Instagram: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0281 2C14.1531 2.003 14.7241 2.009 15.2171 2.023L15.4111 2.03C15.6351 2.038 15.8561 2.048 16.1231 2.06C17.1871 2.11 17.9131 2.278 18.5501 2.525C19.2101 2.779 19.7661 3.123 20.3221 3.678C20.8306 4.1779 21.224 4.78259 21.4751 5.45C21.7221 6.087 21.8901 6.813 21.9401 7.878C21.9521 8.144 21.9621 8.365 21.9701 8.59L21.9761 8.784C21.9911 9.276 21.9971 9.847 21.9991 10.972L22.0001 11.718V13.028C22.0025 13.7574 21.9949 14.4868 21.9771 15.216L21.9711 15.41C21.9631 15.635 21.9531 15.856 21.9411 16.122C21.8911 17.187 21.7211 17.912 21.4751 18.55C21.2248 19.2178 20.8312 19.8226 20.3221 20.322C19.8221 20.8303 19.2174 21.2238 18.5501 21.475C17.9131 21.722 17.1871 21.89 16.1231 21.94C15.8858 21.9512 15.6485 21.9612 15.4111 21.97L15.2171 21.976C14.7241 21.99 14.1531 21.997 13.0281 21.999L12.2821 22H10.9731C10.2434 22.0025 9.51361 21.9949 8.78409 21.977L8.59009 21.971C8.3527 21.962 8.11536 21.9517 7.87809 21.94C6.81409 21.89 6.08809 21.722 5.45009 21.475C4.78276 21.2244 4.17831 20.8308 3.67909 20.322C3.17013 19.8223 2.77631 19.2176 2.52509 18.55C2.27809 17.913 2.11009 17.187 2.06009 16.122C2.04895 15.8847 2.03895 15.6474 2.03009 15.41L2.02509 15.216C2.00666 14.4868 1.99833 13.7574 2.00009 13.028V10.972C1.9973 10.2426 2.00463 9.5132 2.02209 8.784L2.02909 8.59C2.03709 8.365 2.04709 8.144 2.05909 7.878C2.10909 6.813 2.27709 6.088 2.52409 5.45C2.7752 4.7819 3.16981 4.17702 3.68009 3.678C4.17918 3.16947 4.78323 2.77599 5.45009 2.525C6.08809 2.278 6.81309 2.11 7.87809 2.06C8.14409 2.048 8.36609 2.038 8.59009 2.03L8.78409 2.024C9.51328 2.00623 10.2427 1.99857 10.9721 2.001L13.0281 2ZM12.0001 7C10.674 7 9.40224 7.52678 8.46455 8.46447C7.52687 9.40215 7.00009 10.6739 7.00009 12C7.00009 13.3261 7.52687 14.5979 8.46455 15.5355C9.40224 16.4732 10.674 17 12.0001 17C13.3262 17 14.5979 16.4732 15.5356 15.5355C16.4733 14.5979 17.0001 13.3261 17.0001 12C17.0001 10.6739 16.4733 9.40215 15.5356 8.46447C14.5979 7.52678 13.3262 7 12.0001 7ZM12.0001 9C12.3941 8.99993 12.7842 9.07747 13.1482 9.22817C13.5122 9.37887 13.8429 9.5998 14.1216 9.87833C14.4002 10.1569 14.6212 10.4875 14.772 10.8515C14.9229 11.2154 15.0005 11.6055 15.0006 11.9995C15.0007 12.3935 14.9231 12.7836 14.7724 13.1476C14.6217 13.5116 14.4008 13.8423 14.1223 14.121C13.8437 14.3996 13.5131 14.6206 13.1491 14.7714C12.7851 14.9223 12.3951 14.9999 12.0011 15C11.2054 15 10.4424 14.6839 9.87977 14.1213C9.31716 13.5587 9.00109 12.7956 9.00109 12C9.00109 11.2044 9.31716 10.4413 9.87977 9.87868C10.4424 9.31607 11.2054 9 12.0011 9M17.2511 5.5C16.9196 5.5 16.6016 5.6317 16.3672 5.86612C16.1328 6.10054 16.0011 6.41848 16.0011 6.75C16.0011 7.08152 16.1328 7.39946 16.3672 7.63388C16.6016 7.8683 16.9196 8 17.2511 8C17.5826 8 17.9006 7.8683 18.135 7.63388C18.3694 7.39946 18.5011 7.08152 18.5011 6.75C18.5011 6.41848 18.3694 6.10054 18.135 5.86612C17.9006 5.6317 17.5826 5.5 17.2511 5.5Z" fill="white" />
            </svg>
        ),
        RightArrow: (
            <svg width="26" height="12" viewBox="0 0 26 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM25.5303 6.53033C25.8232 6.23744 25.8232 5.76256 25.5303 5.46967L20.7574 0.696699C20.4645 0.403806 19.9896 0.403806 19.6967 0.696699C19.4038 0.989593 19.4038 1.46447 19.6967 1.75736L23.9393 6L19.6967 10.2426C19.4038 10.5355 19.4038 11.0104 19.6967 11.3033C19.9896 11.5962 20.4645 11.5962 20.7574 11.3033L25.5303 6.53033ZM1 6.75H25V5.25H1V6.75Z" fill="#FF0000" />
            </svg>
        ),
        Phone: (
            <svg className="group-hover:fill-red duration-300 ease-linear" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="group-hover:fill-red duration-300 ease-linear" d="M11.05 14.95L9.2 16.8C8.81 17.19 8.19 17.19 7.79 16.81C7.68 16.7 7.57 16.6 7.46 16.49C6.43 15.45 5.5 14.36 4.67 13.22C3.85 12.08 3.19 10.94 2.71 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C10.83 13.32 10.94 13.42 11.04 13.52C11.44 13.91 11.45 14.55 11.05 14.95Z" fill="white" />
                <path className="group-hover:fill-red duration-300 ease-linear" d="M21.9701 18.33C21.9701 18.61 21.9201 18.9 21.8201 19.18C21.7901 19.26 21.7601 19.34 21.7201 19.42C21.5501 19.78 21.3301 20.12 21.0401 20.44C20.5501 20.98 20.0101 21.37 19.4001 21.62C19.3901 21.62 19.3801 21.63 19.3701 21.63C18.7801 21.87 18.1401 22 17.4501 22C16.4301 22 15.3401 21.76 14.1901 21.27C13.0401 20.78 11.8901 20.12 10.7501 19.29C10.3601 19 9.9701 18.71 9.6001 18.4L12.8701 15.13C13.1501 15.34 13.4001 15.5 13.6101 15.61C13.6601 15.63 13.7201 15.66 13.7901 15.69C13.8701 15.72 13.9501 15.73 14.0401 15.73C14.2101 15.73 14.3401 15.67 14.4501 15.56L15.2101 14.81C15.4601 14.56 15.7001 14.37 15.9301 14.25C16.1601 14.11 16.3901 14.04 16.6401 14.04C16.8301 14.04 17.0301 14.08 17.2501 14.17C17.4701 14.26 17.7001 14.39 17.9501 14.56L21.2601 16.91C21.5201 17.09 21.7001 17.3 21.8101 17.55C21.9101 17.8 21.9701 18.05 21.9701 18.33Z" fill="white" />
            </svg>

        ),
        StarIcon: (
            <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="62" height="62" rx="10" fill="#B40001" fillOpacity="0.1" />
                <path opacity="0.15" d="M31 37.6667L23 41.6667L25 33.6667L19 27L27.6667 26.3333L31 19L34.3333 26.3333L43 27L37 33.6667L39 41.6667L31 37.6667Z" fill="#FF0000" />
                <path d="M31 37.6667L23 41.6667L25 33.6667L19 27L27.6667 26.3333L31 19L34.3333 26.3333L43 27L37 33.6667L39 41.6667L31 37.6667Z" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        LikeIcon: (
            <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="62" height="62" rx="10" fill="#B40001" fillOpacity="0.1" />
                <path opacity="0.15" fillRule="evenodd" clipRule="evenodd" d="M25.6665 28.3334V41.6667H38.147C39.4182 41.6667 40.5126 40.7695 40.7619 39.523L42.3619 31.523C42.6919 29.8729 41.4298 28.3334 39.747 28.3334H33.6665L36.9008 23.4819C37.9238 21.9475 37.1178 19.8629 35.3288 19.4156L35.2654 19.3998C34.2855 19.1548 33.2513 19.4845 32.5939 20.2514L25.6665 28.3334Z" fill="#FF0000" />
                <path d="M25.6668 28.3334V41.6667M25.6668 28.3334L20.3335 28.3334V41.6667L25.6668 41.6667M25.6668 28.3334L32.5943 20.2514C33.2516 19.4845 34.2858 19.1548 35.2657 19.3998L35.3291 19.4156C37.1182 19.8629 37.9241 21.9475 36.9012 23.4819L33.6668 28.3334H39.7474C41.4301 28.3334 42.6923 29.8729 42.3622 31.523L40.7622 39.523C40.5129 40.7695 39.4185 41.6667 38.1474 41.6667L25.6668 41.6667" stroke="#FF0000" strokeWidth="2.0625" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        PhoneIcon: (
            <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="62" height="62" rx="10" fill="#B40001" fillOpacity="0.1" />
                <path opacity="0.15" d="M42.9992 36.9689V40.5819C43.0048 41.9631 41.7629 43.1164 40.3685 42.9906C28.3333 43 19 33.58 19.0094 21.6256C18.8838 20.2386 20.0314 19.0014 21.4108 19.0001H25.031C25.6166 18.9944 26.1844 19.2013 26.6284 19.5825C27.8908 20.666 28.7028 24.3437 28.3904 25.8057C28.1465 26.9472 26.9959 27.7457 26.2136 28.5265C27.9314 31.5416 30.4329 34.0381 33.454 35.7525C34.2362 34.9718 35.0364 33.8234 36.1801 33.58C37.6473 33.2677 41.3486 34.0809 42.4278 35.3521C42.8105 35.8028 43.0139 36.3783 42.9992 36.9689Z" fill="#FF0000" />
                <path d="M34.3333 23.6667C35.3162 23.8584 36.2919 24.2919 37 25C37.7081 25.7081 38.1416 26.6838 38.3333 27.6667M35 19C37.042 19.2269 38.8796 20.2148 40.3333 21.6667C41.7871 23.1186 42.7706 24.9582 43 27M42.9992 36.9689V40.5819C43.0048 41.963 41.7629 43.1164 40.3685 42.9906C28.3333 43 19 33.58 19.0094 21.6256C18.8838 20.2386 20.0314 19.0014 21.4108 19.0001H25.031C25.6166 18.9944 26.1844 19.2013 26.6284 19.5825C27.8908 20.666 28.7028 24.3437 28.3904 25.8057C28.1465 26.9472 26.9959 27.7457 26.2136 28.5265C27.9314 31.5416 30.4329 34.0381 33.454 35.7525C34.2362 34.9718 35.0364 33.8234 36.1801 33.58C37.6473 33.2677 41.3486 34.0809 42.4278 35.3521C42.8105 35.8028 43.0139 36.3783 42.9992 36.9689Z" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        ReviewGoogle: (
            <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1_315)">
                    <path d="M38.7397 16.5226L22.4241 16.5218C21.7036 16.5218 21.1196 17.1057 21.1196 17.8262V23.0383C21.1196 23.7586 21.7036 24.3426 22.424 24.3426H31.612C30.6059 26.9537 28.7281 29.1403 26.3323 30.5297L30.25 37.3116C36.5345 33.677 40.25 27.2998 40.25 20.1609C40.25 19.1444 40.1751 18.4177 40.0252 17.5995C39.9113 16.9779 39.3717 16.5226 38.7397 16.5226Z" fill="#167EE6" />
                    <path d="M20.2501 32.1739C15.7537 32.1739 11.8284 29.7172 9.72019 26.0818L2.93848 29.9907C6.38965 35.9721 12.8548 40 20.2501 40C23.878 40 27.3012 39.0232 30.2501 37.3209V37.3116L26.3324 30.5296C24.5403 31.569 22.4666 32.1739 20.2501 32.1739Z" fill="#12B347" />
                    <path d="M30.25 37.3209V37.3116L26.3323 30.5296C24.5402 31.5689 22.4666 32.1739 20.25 32.1739V40C23.8779 40 27.3012 39.0232 30.25 37.3209Z" fill="#0F993E" />
                    <path d="M8.07609 20C8.07609 17.7837 8.68093 15.7101 9.72008 13.9182L2.93836 10.0093C1.22672 12.9489 0.25 16.3628 0.25 20C0.25 23.6372 1.22672 27.0511 2.93836 29.9907L9.72008 26.0818C8.68093 24.2898 8.07609 22.2163 8.07609 20Z" fill="#FFD500" />
                    <path d="M20.2501 7.82609C23.1822 7.82609 25.8755 8.86797 27.9792 10.601C28.4982 11.0285 29.2525 10.9977 29.7278 10.5223L33.4208 6.8293C33.9602 6.28992 33.9217 5.40703 33.3456 4.90719C29.821 1.84945 25.235 0 20.2501 0C12.8548 0 6.38965 4.02789 2.93848 10.0093L9.72019 13.9182C11.8284 10.2828 15.7537 7.82609 20.2501 7.82609Z" fill="#FF4B26" />
                    <path d="M27.9791 10.601C28.498 11.0285 29.2524 10.9977 29.7277 10.5223L33.4207 6.8293C33.96 6.28992 33.9216 5.40703 33.3455 4.90719C29.8209 1.84938 25.2349 0 20.25 0V7.82609C23.182 7.82609 25.8754 8.86797 27.9791 10.601Z" fill="#D93F21" />
                </g>
                <defs>
                    <clipPath id="clip0_1_315">
                        <rect width="40" height="40" fill="white" transform="translate(0.25)" />
                    </clipPath>
                </defs>
            </svg>
        ),
        Stars: (
            <svg width="84" height="18" viewBox="0 0 84 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.54078 2.93921C7.79024 2.17145 8.87642 2.17145 9.12588 2.93921L10.0172 5.68237C10.1287 6.02572 10.4487 6.25819 10.8097 6.25819H13.6941C14.5013 6.25819 14.837 7.2912 14.1839 7.76571L11.8504 9.46107C11.5583 9.67328 11.4361 10.0494 11.5477 10.3928L12.439 13.1359C12.6885 13.9037 11.8097 14.5421 11.1566 14.0676L8.82315 12.3723C8.53108 12.1601 8.13558 12.1601 7.84351 12.3723L5.51004 14.0676C4.85694 14.5421 3.97821 13.9037 4.22767 13.1359L5.11898 10.3928C5.23054 10.0494 5.10832 9.67328 4.81625 9.46107L2.48278 7.76571C1.82968 7.2912 2.16533 6.25819 2.9726 6.25819H5.85693C6.21795 6.25819 6.53791 6.02573 6.64948 5.68237L7.54078 2.93921Z" fill="#FCB547" />
                <path d="M24.2078 2.93921C24.4572 2.17145 25.5434 2.17145 25.7929 2.93921L26.6842 5.68237C26.7957 6.02572 27.1157 6.25819 27.4767 6.25819H30.3611C31.1683 6.25819 31.504 7.2912 30.8509 7.76571L28.5174 9.46107C28.2253 9.67328 28.1031 10.0494 28.2147 10.3928L29.106 13.1359C29.3554 13.9037 28.4767 14.5421 27.8236 14.0676L25.4901 12.3723C25.1981 12.1601 24.8026 12.1601 24.5105 12.3723L22.177 14.0676C21.5239 14.5421 20.6452 13.9037 20.8947 13.1359L21.786 10.3928C21.8975 10.0494 21.7753 9.67328 21.4832 9.46107L19.1498 7.76571C18.4967 7.2912 18.8323 6.25819 19.6396 6.25819H22.5239C22.8849 6.25819 23.2049 6.02573 23.3165 5.68237L24.2078 2.93921Z" fill="#FCB547" />
                <path d="M40.8743 2.93921C41.1237 2.17145 42.2099 2.17145 42.4594 2.93921L43.3507 5.68237C43.4622 6.02572 43.7822 6.25819 44.1432 6.25819H47.0276C47.8348 6.25819 48.1705 7.2912 47.5174 7.76571L45.1839 9.46107C44.8918 9.67328 44.7696 10.0494 44.8812 10.3928L45.7725 13.1359C46.0219 13.9037 45.1432 14.5421 44.4901 14.0676L42.1566 12.3723C41.8646 12.1601 41.4691 12.1601 41.177 12.3723L38.8435 14.0676C38.1904 14.5421 37.3117 13.9037 37.5612 13.1359L38.4525 10.3928C38.564 10.0494 38.4418 9.67328 38.1497 9.46107L35.8163 7.76571C35.1632 7.2912 35.4988 6.25819 36.3061 6.25819H39.1904C39.5514 6.25819 39.8714 6.02573 39.983 5.68237L40.8743 2.93921Z" fill="#FCB547" />
                <path d="M57.5408 2.93921C57.7902 2.17145 58.8764 2.17145 59.1259 2.93921L60.0172 5.68237C60.1287 6.02572 60.4487 6.25819 60.8097 6.25819H63.6941C64.5013 6.25819 64.837 7.2912 64.1839 7.76571L61.8504 9.46107C61.5583 9.67328 61.4361 10.0494 61.5477 10.3928L62.439 13.1359C62.6885 13.9037 61.8097 14.5421 61.1566 14.0676L58.8232 12.3723C58.5311 12.1601 58.1356 12.1601 57.8435 12.3723L55.51 14.0676C54.8569 14.5421 53.9782 13.9037 54.2277 13.1359L55.119 10.3928C55.2305 10.0494 55.1083 9.67328 54.8163 9.46107L52.4828 7.76571C51.8297 7.2912 52.1653 6.25819 52.9726 6.25819H55.8569C56.218 6.25819 56.5379 6.02573 56.6495 5.68237L57.5408 2.93921Z" fill="#FCB547" />
                <path d="M74.2073 2.93921C74.4567 2.17145 75.5429 2.17145 75.7924 2.93921L76.6837 5.68237C76.7953 6.02572 77.1152 6.25819 77.4762 6.25819H80.3606C81.1678 6.25819 81.5035 7.2912 80.8504 7.76571L78.5169 9.46107C78.2248 9.67328 78.1026 10.0494 78.2142 10.3928L79.1055 13.1359C79.355 13.9037 78.4762 14.5421 77.8231 14.0676L75.4897 12.3723C75.1976 12.1601 74.8021 12.1601 74.51 12.3723L72.1765 14.0676C71.5234 14.5421 70.6447 13.9037 70.8942 13.1359L71.7855 10.3928C71.897 10.0494 71.7748 9.67328 71.4828 9.46107L69.1493 7.76571C68.4962 7.2912 68.8318 6.25819 69.6391 6.25819H72.5234C72.8845 6.25819 73.2044 6.02573 73.316 5.68237L74.2073 2.93921Z" fill="#FCB547" />
            </svg>
        ),
        MenuIcon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5865 0.666504H8.41317C3.55984 0.666504 0.666504 3.55984 0.666504 8.41317V19.5732C0.666504 24.4398 3.55984 27.3332 8.41317 27.3332H19.5732C24.4265 27.3332 27.3198 24.4398 27.3198 19.5865V8.41317C27.3332 3.55984 24.4398 0.666504 19.5865 0.666504ZM20.6665 20.9998H7.33317C6.7865 20.9998 6.33317 20.5465 6.33317 19.9998C6.33317 19.4532 6.7865 18.9998 7.33317 18.9998H20.6665C21.2132 18.9998 21.6665 19.4532 21.6665 19.9998C21.6665 20.5465 21.2132 20.9998 20.6665 20.9998ZM20.6665 14.9998H7.33317C6.7865 14.9998 6.33317 14.5465 6.33317 13.9998C6.33317 13.4532 6.7865 12.9998 7.33317 12.9998H20.6665C21.2132 12.9998 21.6665 13.4532 21.6665 13.9998C21.6665 14.5465 21.2132 14.9998 20.6665 14.9998ZM20.6665 8.99984H7.33317C6.7865 8.99984 6.33317 8.5465 6.33317 7.99984C6.33317 7.45317 6.7865 6.99984 7.33317 6.99984H20.6665C21.2132 6.99984 21.6665 7.45317 21.6665 7.99984C21.6665 8.5465 21.2132 8.99984 20.6665 8.99984Z" fill="#FF0000" />
            </svg>
        ),
        RightIcon: (
            <svg width="26" height="12" viewBox="0 0 26 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM25.5303 6.53033C25.8232 6.23744 25.8232 5.76256 25.5303 5.46967L20.7574 0.696699C20.4645 0.403806 19.9896 0.403806 19.6967 0.696699C19.4038 0.989593 19.4038 1.46447 19.6967 1.75736L23.9393 6L19.6967 10.2426C19.4038 10.5355 19.4038 11.0104 19.6967 11.3033C19.9896 11.5962 20.4645 11.5962 20.7574 11.3033L25.5303 6.53033ZM1 6.75H25V5.25H1V6.75Z" fill="#FF0000" />
            </svg>
        ),
        AccordionIcon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.19 0H5.81C2.17 0 0 2.17 0 5.81V14.18C0 17.83 2.17 20 5.81 20H14.18C17.82 20 19.99 17.83 19.99 14.19V5.81C20 2.17 17.83 0 14.19 0ZM14.06 9.17L10.53 12.7C10.38 12.85 10.19 12.92 10 12.92C9.81 12.92 9.62 12.85 9.47 12.7L5.94 9.17C5.65 8.88 5.65 8.4 5.94 8.11C6.23 7.82 6.71 7.82 7 8.11L10 11.11L13 8.11C13.29 7.82 13.77 7.82 14.06 8.11C14.35 8.4 14.35 8.87 14.06 9.17Z" fill="#FF0000" />
            </svg>
        ),
        LocationMark: (
            <svg className="md:w-6 mdh-[26px] w-4 h-5" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.7749 8.5625C21.4624 2.7875 16.4249 0.1875 11.9999 0.1875C11.9999 0.1875 11.9999 0.1875 11.9874 0.1875C7.57487 0.1875 2.52488 2.775 1.21238 8.55C-0.250125 15 3.69988 20.4625 7.27488 23.9C8.59988 25.175 10.2999 25.8125 11.9999 25.8125C13.6999 25.8125 15.3999 25.175 16.7124 23.9C20.2874 20.4625 24.2374 15.0125 22.7749 8.5625ZM11.9999 14.825C9.82487 14.825 8.06238 13.0625 8.06238 10.8875C8.06238 8.7125 9.82487 6.95 11.9999 6.95C14.1749 6.95 15.9374 8.7125 15.9374 10.8875C15.9374 13.0625 14.1749 14.825 11.9999 14.825Z" fill="white" />
            </svg>
        ),
        YellowStar: (
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.79078 0.939148C6.04024 0.17139 7.12642 0.171389 7.37588 0.939148L8.26719 3.68231C8.37875 4.02566 8.69871 4.25813 9.05973 4.25813H11.9441C12.7513 4.25813 13.087 5.29114 12.4339 5.76565L10.1004 7.46101C9.80834 7.67322 9.68612 8.04936 9.79769 8.39271L10.689 11.1359C10.9385 11.9036 10.0597 12.5421 9.40663 12.0676L7.07315 10.3722C6.78108 10.16 6.38558 10.16 6.09351 10.3722L3.76004 12.0676C3.10694 12.5421 2.22821 11.9036 2.47767 11.1359L3.36898 8.39271C3.48054 8.04936 3.35832 7.67322 3.06625 7.46101L0.732776 5.76564C0.0796814 5.29114 0.415328 4.25813 1.2226 4.25813H4.10693C4.46795 4.25813 4.78791 4.02566 4.89948 3.68231L5.79078 0.939148Z" fill="#FCB547" />
            </svg>
        ),
        SliderIcon: (
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="#FCB547" />
            </svg>
        ),
        CheckIcon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.7467 14.32L26.9333 12.2133C26.5867 11.8133 26.3067 11.0667 26.3067 10.5333V8.26666C26.3067 6.85333 25.1467 5.69333 23.7333 5.69333H21.4667C20.9467 5.69333 20.1867 5.41333 19.7867 5.06666L17.68 3.25333C16.76 2.46666 15.2533 2.46666 14.32 3.25333L12.2267 5.08C11.8267 5.41333 11.0667 5.69333 10.5467 5.69333H8.24001C6.82667 5.69333 5.66667 6.85333 5.66667 8.26666V10.5467C5.66667 11.0667 5.38667 11.8133 5.05334 12.2133L3.25334 14.3333C2.48001 15.2533 2.48001 16.7467 3.25334 17.6667L5.05334 19.7867C5.38667 20.1867 5.66667 20.9333 5.66667 21.4533V23.7333C5.66667 25.1467 6.82667 26.3067 8.24001 26.3067H10.5467C11.0667 26.3067 11.8267 26.5867 12.2267 26.9333L14.3333 28.7467C15.2533 29.5333 16.76 29.5333 17.6933 28.7467L19.8 26.9333C20.2 26.5867 20.9467 26.3067 21.48 26.3067H23.7467C25.16 26.3067 26.32 25.1467 26.32 23.7333V21.4667C26.32 20.9467 26.6 20.1867 26.9467 19.7867L28.76 17.68C29.5333 16.76 29.5333 15.24 28.7467 14.32ZM21.5467 13.48L15.1067 19.92C14.92 20.1067 14.6667 20.2133 14.4 20.2133C14.1333 20.2133 13.88 20.1067 13.6933 19.92L10.4667 16.6933C10.08 16.3067 10.08 15.6667 10.4667 15.28C10.8533 14.8933 11.4933 14.8933 11.88 15.28L14.4 17.8L20.1333 12.0667C20.52 11.68 21.16 11.68 21.5467 12.0667C21.9333 12.4533 21.9333 13.0933 21.5467 13.48Z" fill="#FF0000" />
            </svg>
        ),
        Email: (
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.9395 0C16.2805 0 17.5705 0.53 18.5195 1.481C19.4695 2.43 20.0005 3.71 20.0005 5.05V12.95C20.0005 15.74 17.7305 18 14.9395 18H5.06049C2.26949 18 0.000488281 15.74 0.000488281 12.95V5.05C0.000488281 2.26 2.25949 0 5.06049 0H14.9395ZM16.0705 5.2C15.8605 5.189 15.6605 5.26 15.5095 5.4L11.0005 9C10.4205 9.481 9.58949 9.481 9.00049 9L4.50049 5.4C4.18949 5.17 3.75949 5.2 3.50049 5.47C3.23049 5.74 3.20049 6.17 3.42949 6.47L3.56049 6.6L8.11049 10.15C8.67049 10.59 9.34949 10.83 10.0605 10.83C10.7695 10.83 11.4605 10.59 12.0195 10.15L16.5305 6.54L16.6105 6.46C16.8495 6.17 16.8495 5.75 16.5995 5.46C16.4605 5.311 16.2695 5.22 16.0705 5.2Z" fill="#FF0000" />
            </svg>
        ),
        Phone_Red: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.53174 10.4724C13.5208 14.4604 14.4258 9.84672 16.9656 12.3848C19.4143 14.8328 20.8216 15.3232 17.7192 18.4247C17.3306 18.737 14.8616 22.4943 6.1846 13.8197C-2.49348 5.144 1.26158 2.67244 1.57397 2.28395C4.68387 -0.826154 5.16586 0.589383 7.61449 3.03733C10.1544 5.5765 5.54266 6.48441 9.53174 10.4724Z" fill="#FF0000" />
            </svg>
        ),
        FaceBook: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0C7.16342 0 0 7.16342 0 16C0 24.8366 7.16342 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16342 24.8366 0 16 0ZM22.1041 8.14813L19.8911 8.14911C18.1557 8.14911 17.8202 8.97375 17.8202 10.1837V12.8517H21.9584L21.9564 17.0305H17.8205V27.7544H13.5042V17.0305H9.89594V12.8517H13.5042V9.7699C13.5042 6.19343 15.6893 4.24561 18.8795 4.24561L22.1044 4.25052L22.1041 8.14813Z" fill="#FF0000" />
            </svg>
        ),
        Instagram_Red: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_705)">
                    <path d="M16 0C7.16375 0 0 7.16375 0 16C0 24.8363 7.16375 32 16 32C24.8363 32 32 24.8363 32 16C32 7.16375 24.8363 0 16 0Z" fill="#FF0000" />
                    <path d="M17.0281 6C18.1531 6.003 18.7241 6.009 19.2171 6.023L19.4111 6.03C19.6351 6.038 19.8561 6.048 20.1231 6.06C21.1871 6.11 21.9131 6.278 22.5501 6.525C23.2101 6.779 23.7661 7.123 24.3221 7.678C24.8306 8.1779 25.224 8.78259 25.4751 9.45C25.7221 10.087 25.8901 10.813 25.9401 11.878C25.9521 12.144 25.9621 12.365 25.9701 12.59L25.9761 12.784C25.9911 13.276 25.9971 13.847 25.9991 14.972L26.0001 15.718V17.028C26.0025 17.7574 25.9949 18.4868 25.9771 19.216L25.9711 19.41C25.9631 19.635 25.9531 19.856 25.9411 20.122C25.8911 21.187 25.7211 21.912 25.4751 22.55C25.2248 23.2178 24.8312 23.8226 24.3221 24.322C23.8221 24.8303 23.2174 25.2238 22.5501 25.475C21.9131 25.722 21.1871 25.89 20.1231 25.94C19.8858 25.9512 19.6485 25.9612 19.4111 25.97L19.2171 25.976C18.7241 25.99 18.1531 25.997 17.0281 25.999L16.2821 26H14.9731C14.2434 26.0025 13.5136 25.9949 12.7841 25.977L12.5901 25.971C12.3527 25.962 12.1154 25.9517 11.8781 25.94C10.8141 25.89 10.0881 25.722 9.45009 25.475C8.78276 25.2244 8.17831 24.8308 7.67909 24.322C7.17013 23.8223 6.77631 23.2176 6.52509 22.55C6.27809 21.913 6.11009 21.187 6.06009 20.122C6.04895 19.8847 6.03895 19.6474 6.03009 19.41L6.02509 19.216C6.00666 18.4868 5.99833 17.7574 6.00009 17.028V14.972C5.9973 14.2426 6.00463 13.5132 6.02209 12.784L6.02909 12.59C6.03709 12.365 6.04709 12.144 6.05909 11.878C6.10909 10.813 6.27709 10.088 6.52409 9.45C6.7752 8.7819 7.16981 8.17702 7.68009 7.678C8.17918 7.16947 8.78323 6.77599 9.45009 6.525C10.0881 6.278 10.8131 6.11 11.8781 6.06C12.1441 6.048 12.3661 6.038 12.5901 6.03L12.7841 6.024C13.5133 6.00623 14.2427 5.99857 14.9721 6.001L17.0281 6ZM16.0001 11C14.674 11 13.4022 11.5268 12.4646 12.4645C11.5269 13.4021 11.0001 14.6739 11.0001 16C11.0001 17.3261 11.5269 18.5979 12.4646 19.5355C13.4022 20.4732 14.674 21 16.0001 21C17.3262 21 18.5979 20.4732 19.5356 19.5355C20.4733 18.5979 21.0001 17.3261 21.0001 16C21.0001 14.6739 20.4733 13.4021 19.5356 12.4645C18.5979 11.5268 17.3262 11 16.0001 11ZM16.0001 13C16.3941 12.9999 16.7842 13.0775 17.1482 13.2282C17.5122 13.3789 17.8429 13.5998 18.1216 13.8783C18.4002 14.1569 18.6212 14.4875 18.772 14.8515C18.9229 15.2154 19.0005 15.6055 19.0006 15.9995C19.0007 16.3935 18.9231 16.7836 18.7724 17.1476C18.6217 17.5116 18.4008 17.8423 18.1223 18.121C17.8437 18.3996 17.5131 18.6206 17.1491 18.7714C16.7851 18.9223 16.3951 18.9999 16.0011 19C15.2054 19 14.4424 18.6839 13.8798 18.1213C13.3172 17.5587 13.0011 16.7956 13.0011 16C13.0011 15.2044 13.3172 14.4413 13.8798 13.8787C14.4424 13.3161 15.2054 13 16.0011 13M21.2511 9.5C20.9196 9.5 20.6016 9.6317 20.3672 9.86612C20.1328 10.1005 20.0011 10.4185 20.0011 10.75C20.0011 11.0815 20.1328 11.3995 20.3672 11.6339C20.6016 11.8683 20.9196 12 21.2511 12C21.5826 12 21.9006 11.8683 22.135 11.6339C22.3694 11.3995 22.5011 11.0815 22.5011 10.75C22.5011 10.4185 22.3694 10.1005 22.135 9.86612C21.9006 9.6317 21.5826 9.5 21.2511 9.5Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_1_705">
                        <rect width="32" height="32" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),
        Twitter: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_698)">
                    <path d="M16 0C7.16375 0 0 7.16375 0 16C0 24.8363 7.16375 32 16 32C24.8363 32 32 24.8363 32 16C32 7.16375 24.8363 0 16 0Z" fill="#FF0000" />
                    <path d="M17.7506 14.5517L24.6 6.58984H22.9769L17.0296 13.503L12.2795 6.58984H6.80078L13.9839 17.0438L6.80078 25.3931H8.42397L14.7045 18.0925L19.721 25.3931H25.1997L17.7502 14.5517H17.7506ZM9.00881 7.81176H11.5019L22.9777 24.2267H20.4846L9.00881 7.81176Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_1_698">
                        <rect width="32" height="32" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),
        Linkedin: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_696)">
                    <path d="M16 0C7.16479 0 0 7.16479 0 16C0 24.8352 7.16479 32 16 32C24.8352 32 32 24.8352 32 16C32 7.16479 24.8352 0 16 0ZM11.3506 24.1875H7.45386V12.4641H11.3506V24.1875ZM9.40234 10.8633H9.37695C8.06934 10.8633 7.22363 9.96313 7.22363 8.83813C7.22363 7.68774 8.09521 6.8125 9.42822 6.8125C10.7612 6.8125 11.5815 7.68774 11.6069 8.83813C11.6069 9.96313 10.7612 10.8633 9.40234 10.8633ZM25.4014 24.1875H21.5051V17.9158C21.5051 16.3396 20.9409 15.2646 19.531 15.2646C18.4546 15.2646 17.8135 15.9897 17.5317 16.6897C17.4287 16.9402 17.4036 17.2903 17.4036 17.6406V24.1875H13.5071C13.5071 24.1875 13.5581 13.564 13.5071 12.4641H17.4036V14.124C17.9214 13.3252 18.8479 12.189 20.9153 12.189C23.479 12.189 25.4014 13.8645 25.4014 17.4653V24.1875Z" fill="#FF0000" />
                </g>
                <defs>
                    <clipPath id="clip0_1_696">
                        <rect width="32" height="32" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        )
    }
    return (
        <span className={`${className}`}>
            {iconName && ICON_LIST[iconName]}
        </span>
    );
};

export default Icon