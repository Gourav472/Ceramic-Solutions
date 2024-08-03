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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.05 14.95L9.2 16.8C8.81 17.19 8.19 17.19 7.79 16.81C7.68 16.7 7.57 16.6 7.46 16.49C6.43 15.45 5.5 14.36 4.67 13.22C3.85 12.08 3.19 10.94 2.71 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C10.83 13.32 10.94 13.42 11.04 13.52C11.44 13.91 11.45 14.55 11.05 14.95Z" fill="white" />
                <path d="M21.9701 18.33C21.9701 18.61 21.9201 18.9 21.8201 19.18C21.7901 19.26 21.7601 19.34 21.7201 19.42C21.5501 19.78 21.3301 20.12 21.0401 20.44C20.5501 20.98 20.0101 21.37 19.4001 21.62C19.3901 21.62 19.3801 21.63 19.3701 21.63C18.7801 21.87 18.1401 22 17.4501 22C16.4301 22 15.3401 21.76 14.1901 21.27C13.0401 20.78 11.8901 20.12 10.7501 19.29C10.3601 19 9.9701 18.71 9.6001 18.4L12.8701 15.13C13.1501 15.34 13.4001 15.5 13.6101 15.61C13.6601 15.63 13.7201 15.66 13.7901 15.69C13.8701 15.72 13.9501 15.73 14.0401 15.73C14.2101 15.73 14.3401 15.67 14.4501 15.56L15.2101 14.81C15.4601 14.56 15.7001 14.37 15.9301 14.25C16.1601 14.11 16.3901 14.04 16.6401 14.04C16.8301 14.04 17.0301 14.08 17.2501 14.17C17.4701 14.26 17.7001 14.39 17.9501 14.56L21.2601 16.91C21.5201 17.09 21.7001 17.3 21.8101 17.55C21.9101 17.8 21.9701 18.05 21.9701 18.33Z" fill="white" />
            </svg>

        ),
        StarIcon: (
            <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="62" height="62" rx="10" fill="#B40001" fill-opacity="0.1" />
                <path opacity="0.15" d="M31 37.6667L23 41.6667L25 33.6667L19 27L27.6667 26.3333L31 19L34.3333 26.3333L43 27L37 33.6667L39 41.6667L31 37.6667Z" fill="#FF0000" />
                <path d="M31 37.6667L23 41.6667L25 33.6667L19 27L27.6667 26.3333L31 19L34.3333 26.3333L43 27L37 33.6667L39 41.6667L31 37.6667Z" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        LikeIcon: (
            <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="62" height="62" rx="10" fill="#B40001" fill-opacity="0.1" />
                <path opacity="0.15" fill-rule="evenodd" clip-rule="evenodd" d="M25.6665 28.3334V41.6667H38.147C39.4182 41.6667 40.5126 40.7695 40.7619 39.523L42.3619 31.523C42.6919 29.8729 41.4298 28.3334 39.747 28.3334H33.6665L36.9008 23.4819C37.9238 21.9475 37.1178 19.8629 35.3288 19.4156L35.2654 19.3998C34.2855 19.1548 33.2513 19.4845 32.5939 20.2514L25.6665 28.3334Z" fill="#FF0000" />
                <path d="M25.6668 28.3334V41.6667M25.6668 28.3334L20.3335 28.3334V41.6667L25.6668 41.6667M25.6668 28.3334L32.5943 20.2514C33.2516 19.4845 34.2858 19.1548 35.2657 19.3998L35.3291 19.4156C37.1182 19.8629 37.9241 21.9475 36.9012 23.4819L33.6668 28.3334H39.7474C41.4301 28.3334 42.6923 29.8729 42.3622 31.523L40.7622 39.523C40.5129 40.7695 39.4185 41.6667 38.1474 41.6667L25.6668 41.6667" stroke="#FF0000" stroke-width="2.0625" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        PhoneIcon: (
            <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="62" height="62" rx="10" fill="#B40001" fill-opacity="0.1" />
                <path opacity="0.15" d="M42.9992 36.9689V40.5819C43.0048 41.9631 41.7629 43.1164 40.3685 42.9906C28.3333 43 19 33.58 19.0094 21.6256C18.8838 20.2386 20.0314 19.0014 21.4108 19.0001H25.031C25.6166 18.9944 26.1844 19.2013 26.6284 19.5825C27.8908 20.666 28.7028 24.3437 28.3904 25.8057C28.1465 26.9472 26.9959 27.7457 26.2136 28.5265C27.9314 31.5416 30.4329 34.0381 33.454 35.7525C34.2362 34.9718 35.0364 33.8234 36.1801 33.58C37.6473 33.2677 41.3486 34.0809 42.4278 35.3521C42.8105 35.8028 43.0139 36.3783 42.9992 36.9689Z" fill="#FF0000" />
                <path d="M34.3333 23.6667C35.3162 23.8584 36.2919 24.2919 37 25C37.7081 25.7081 38.1416 26.6838 38.3333 27.6667M35 19C37.042 19.2269 38.8796 20.2148 40.3333 21.6667C41.7871 23.1186 42.7706 24.9582 43 27M42.9992 36.9689V40.5819C43.0048 41.963 41.7629 43.1164 40.3685 42.9906C28.3333 43 19 33.58 19.0094 21.6256C18.8838 20.2386 20.0314 19.0014 21.4108 19.0001H25.031C25.6166 18.9944 26.1844 19.2013 26.6284 19.5825C27.8908 20.666 28.7028 24.3437 28.3904 25.8057C28.1465 26.9472 26.9959 27.7457 26.2136 28.5265C27.9314 31.5416 30.4329 34.0381 33.454 35.7525C34.2362 34.9718 35.0364 33.8234 36.1801 33.58C37.6473 33.2677 41.3486 34.0809 42.4278 35.3521C42.8105 35.8028 43.0139 36.3783 42.9992 36.9689Z" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        AccordionIcon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.19 0H5.81C2.17 0 0 2.17 0 5.81V14.18C0 17.83 2.17 20 5.81 20H14.18C17.82 20 19.99 17.83 19.99 14.19V5.81C20 2.17 17.83 0 14.19 0ZM14.06 9.17L10.53 12.7C10.38 12.85 10.19 12.92 10 12.92C9.81 12.92 9.62 12.85 9.47 12.7L5.94 9.17C5.65 8.88 5.65 8.4 5.94 8.11C6.23 7.82 6.71 7.82 7 8.11L10 11.11L13 8.11C13.29 7.82 13.77 7.82 14.06 8.11C14.35 8.4 14.35 8.87 14.06 9.17Z" fill="#FF0000" />
            </svg>
        ),
        LocationMark: (
            <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.7749 8.5625C21.4624 2.7875 16.4249 0.1875 11.9999 0.1875C11.9999 0.1875 11.9999 0.1875 11.9874 0.1875C7.57487 0.1875 2.52488 2.775 1.21238 8.55C-0.250125 15 3.69988 20.4625 7.27488 23.9C8.59988 25.175 10.2999 25.8125 11.9999 25.8125C13.6999 25.8125 15.3999 25.175 16.7124 23.9C20.2874 20.4625 24.2374 15.0125 22.7749 8.5625ZM11.9999 14.825C9.82487 14.825 8.06238 13.0625 8.06238 10.8875C8.06238 8.7125 9.82487 6.95 11.9999 6.95C14.1749 6.95 15.9374 8.7125 15.9374 10.8875C15.9374 13.0625 14.1749 14.825 11.9999 14.825Z" fill="white" />
            </svg>
        )
    };
    return (
        <span className={`${className} flex`}>
            {iconName && ICON_LIST[iconName]}
        </span>
    );
};

export default Icon