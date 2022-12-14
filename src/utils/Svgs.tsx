type RightArrowProps = {
  isHover: boolean,
  isValidChain: boolean
}

export const RightArrow = (props: RightArrowProps) => {
  const { isHover, isValidChain } = props;
  const animate = isHover ? 'animate-arrow' : '';
  return (
    <svg
      x='0px'
      y='0px'
      viewBox='0 0 330 330'
      className={`img-right-arrow ${animate}`}
    >
      <path
        fill={isValidChain ? (isHover ? '#0e0c1d' : '#fff') : '#ebebe466'}
        d='M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
                s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
                c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z'/>
    </svg>
  )
}

export const MetaMask = () => {
  return (
    <svg
      x='0px'
      y='0px'
      viewBox='0 0 318.6 318.6'
      className='img-metamask'
    >
      <path fill='#e2761b' stroke='#e2761b' strokeLinecap='round' strokeLinejoin='round' d='m274.1 35.5-99.5 73.9L193 65.8z' />
      <path fill='#e4761b' stroke='#e4761b' strokeLinecap='round' strokeLinejoin='round' d='m44.4 35.5 98.7 74.6-17.5-44.3zm193.9 171.3-26.5 40.6 56.7 15.6 16.3-55.3zm-204.4.9L50.1 263l56.7-15.6-26.5-40.6z' />
      <path fill='#e4761b' stroke='#e4761b' strokeLinecap='round' strokeLinejoin='round' d='m103.6 138.2-15.8 23.9 56.3 2.5-2-60.5zm111.3 0-39-34.8-1.3 61.2 56.2-2.5zM106.8 247.4l33.8-16.5-29.2-22.8zm71.1-16.5 33.9 16.5-4.7-39.3z' />
      <path fill='#d7c1b3' stroke='#d7c1b3' strokeLinecap='round' strokeLinejoin='round' d='m211.8 247.4-33.9-16.5 2.7 22.1-.3 9.3zm-105 0 31.5 14.9-.2-9.3 2.5-22.1z' />
      <path fill='#233447' stroke='#233447' strokeLinecap='round' strokeLinejoin='round' d='m138.8 193.5-28.2-8.3 19.9-9.1zm40.9 0 8.3-17.4 20 9.1z' />
      <path fill='#cd6116' stroke='#cd6116' strokeLinecap='round' strokeLinejoin='round' d='m106.8 247.4 4.8-40.6-31.3.9zM207 206.8l4.8 40.6 26.5-39.7zm23.8-44.7-56.2 2.5 5.2 28.9 8.3-17.4 20 9.1zm-120.2 23.1 20-9.1 8.2 17.4 5.3-28.9-56.3-2.5z' />
      <path fill='#e4751f' stroke='#e4751f' strokeLinecap='round' strokeLinejoin='round' d='m87.8 162.1 23.6 46-.8-22.9zm120.3 23.1-1 22.9 23.7-46zm-64-20.6-5.3 28.9 6.6 34.1 1.5-44.9zm30.5 0-2.7 18 1.2 45 6.7-34.1z' />
      <path fill='#f6851b' stroke='#f6851b' d='m179.8 193.5-6.7 34.1 4.8 3.3 29.2-22.8 1-22.9zm-69.2-8.3.8 22.9 29.2 22.8 4.8-3.3-6.6-34.1z' />
      <path fill='#c0ad9e' stroke='#c0ad9e' strokeLinecap='round' strokeLinejoin='round' d='m180.3 262.3.3-9.3-2.5-2.2h-37.7l-2.3 2.2.2 9.3-31.5-14.9 11 9 22.3 15.5h38.3l22.4-15.5 11-9z' />
      <path fill='#161616' stroke='#161616' strokeLinecap='round' strokeLinejoin='round' d='m177.9 230.9-4.8-3.3h-27.7l-4.8 3.3-2.5 22.1 2.3-2.2h37.7l2.5 2.2z' />
      <path fill='#763d16' stroke='#763d16' strokeLinecap='round' strokeLinejoin='round' d='m278.3 114.2 8.5-40.8-12.7-37.9-96.2 71.4 37 31.3 52.3 15.3 11.6-13.5-5-3.6 8-7.3-6.2-4.8 8-6.1zM31.8 73.4l8.5 40.8-5.4 4 8 6.1-6.1 4.8 8 7.3-5 3.6 11.5 13.5 52.3-15.3 37-31.3-96.2-71.4z' />
      <path fill='#f6851b' stroke='#f6851b' d='m267.2 153.5-52.3-15.3 15.9 23.9-23.7 46 31.2-.4h46.5zm-163.6-15.3-52.3 15.3-17.4 54.2h46.4l31.1.4-23.6-46zm71 26.4 3.3-57.7 15.2-41.1h-67.5l15 41.1 3.5 57.7 1.2 18.2.1 44.8h27.7l.2-44.8z' />
    </svg>
  )
}

export const Matic = () => {
  return (
    <svg
      x='0px'
      y='0px'
      viewBox='0 0 38.4 33.5'
      className='img-matic'
    >
      <path
        fill='#8247e5'
        d='M29,10.2c-0.7-0.4-1.6-0.4-2.4,0L21,13.5l-3.8,2.1l-5.5,3.3c-0.7,0.4-1.6,0.4-2.4,0L5,16.3
        c-0.7-0.4-1.2-1.2-1.2-2.1v-5c0-0.8,0.4-1.6,1.2-2.1l4.3-2.5c0.7-0.4,1.6-0.4,2.4,0L16,7.2c0.7,0.4,1.2,1.2,1.2,2.1v3.3l3.8-2.2V7
        c0-0.8-0.4-1.6-1.2-2.1l-8-4.7c-0.7-0.4-1.6-0.4-2.4,0L1.2,5C0.4,5.4,0,6.2,0,7v9.4c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7
        c0.7,0.4,1.6,0.4,2.4,0l5.5-3.2l3.8-2.2l5.5-3.2c0.7-0.4,1.6-0.4,2.4,0l4.3,2.5c0.7,0.4,1.2,1.2,1.2,2.1v5c0,0.8-0.4,1.6-1.2,2.1
        L29,28.8c-0.7,0.4-1.6,0.4-2.4,0l-4.3-2.5c-0.7-0.4-1.2-1.2-1.2-2.1V21l-3.8,2.2v3.3c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7
        c0.7,0.4,1.6,0.4,2.4,0l8.1-4.7c0.7-0.4,1.2-1.2,1.2-2.1V17c0-0.8-0.4-1.6-1.2-2.1L29,10.2z'/>
    </svg>
  )
}

export const Lock = () => {
  return (
    <svg
      x='0px'
      y='0px'
      viewBox='0 0 485 485'
      className='img-lock'
    >
      <path
        fill='#0e0c1d'
        d='M345,175v-72.5C345,45.981,299.019,0,242.5,0S140,45.981,140,102.5V175H70v310h345V175H345z M170,102.5
        c0-39.977,32.523-72.5,72.5-72.5S315,62.523,315,102.5V175H170V102.5z M385,455H100V205h285V455z'
      />
      <path
        fill='#0e0c1d'
        d='M227.5,338.047v53.568h30v-53.569c11.814-5.628,20-17.682,20-31.616c0-19.299-15.701-35-35-35c-19.299,0-35,15.701-35,35
        C207.5,320.365,215.686,332.42,227.5,338.047z'
      />
    </svg>
  )
}

export const Warning = () => {
  return (
    <svg
      x='0px'
      y='0px'
      viewBox='0 0 478.125 478.125'
      className='img-warning'
    >
      <circle cx='239.904' cy='314.721' r='35.878' />
      <path
        fill='#0e0c1d'
        d='M256.657,127.525h-31.9c-10.557,0-19.125,8.645-19.125,19.125v101.975c0,10.48,8.645,19.125,19.125,19.125h31.9
				c10.48,0,19.125-8.645,19.125-19.125V146.65C275.782,136.17,267.138,127.525,256.657,127.525z'
      />
      <path
        fill='#0e0c1d'
        d='M239.062,0C106.947,0,0,106.947,0,239.062s106.947,239.062,239.062,239.062c132.115,0,239.062-106.947,239.062-239.062
				S371.178,0,239.062,0z M239.292,409.734c-94.171,0-170.595-76.348-170.595-170.596c0-94.248,76.347-170.595,170.595-170.595
				s170.595,76.347,170.595,170.595C409.887,333.387,333.464,409.734,239.292,409.734z'
      />
    </svg>
  )
}

export const Refresh = () => {
  return (
    <svg
      x='0px'
      y='0px'
      viewBox='0 0 329.028 329.028'
      className='img-refresh'
    >
      <path
        fill='#fff'
        d='M241.852,72.459l10.847-54.533c1.184-5.95-1.334-12.028-6.378-15.398c-5.045-3.37-11.623-3.37-16.667,0
        L156.182,51.62c-0.004,0.003-0.008,0.006-0.012,0.009c-0.415,0.278-0.817,0.576-1.201,0.893c-0.219,0.181-0.418,0.377-0.625,0.568
        c-0.148,0.137-0.304,0.265-0.447,0.408c-0.249,0.25-0.478,0.514-0.707,0.778c-0.088,0.101-0.183,0.196-0.268,0.299
        c-0.208,0.253-0.396,0.519-0.586,0.783c-0.095,0.132-0.197,0.259-0.288,0.394c-0.155,0.232-0.292,0.473-0.433,0.712
        c-0.109,0.185-0.225,0.365-0.327,0.554c-0.104,0.195-0.192,0.397-0.288,0.597c-0.118,0.245-0.24,0.487-0.344,0.739
        c-0.064,0.156-0.115,0.317-0.174,0.475c-0.112,0.299-0.227,0.598-0.32,0.906c-0.042,0.137-0.069,0.276-0.106,0.414
        c-0.09,0.329-0.181,0.658-0.248,0.996c-0.045,0.223-0.068,0.45-0.103,0.675c-0.038,0.252-0.088,0.501-0.113,0.758
        c-0.051,0.498-0.075,0.998-0.076,1.5c0,0.004-0.001,0.009-0.001,0.013c0,0.058,0.008,0.113,0.009,0.17
        c0.004,0.437,0.023,0.874,0.066,1.311c0.016,0.156,0.045,0.307,0.065,0.461c0.043,0.332,0.086,0.664,0.151,0.994
        c0.042,0.212,0.102,0.418,0.152,0.627c0.064,0.264,0.124,0.529,0.204,0.791c0.077,0.256,0.173,0.503,0.264,0.753
        c0.076,0.208,0.143,0.418,0.229,0.624c0.126,0.305,0.272,0.598,0.418,0.892c0.072,0.146,0.134,0.295,0.211,0.438
        c0.203,0.379,0.426,0.745,0.66,1.104c0.036,0.055,0.064,0.113,0.1,0.167l0.019,0.028c0.01,0.015,0.02,0.03,0.03,0.045l49.044,73.401
        c2.817,4.217,7.525,6.667,12.47,6.667c0.971,0,1.952-0.094,2.928-0.288c5.951-1.184,10.602-5.835,11.786-11.786l7.052-35.455
        c23.901,20.188,39.11,50.36,39.11,84.023c0,60.636-49.331,109.968-109.967,109.968c-60.637,0-109.969-49.332-109.969-109.968
        c0-40.179,21.91-77.153,57.179-96.494c7.264-3.983,9.923-13.101,5.94-20.365c-3.983-7.264-13.101-9.924-20.365-5.94
        C52.424,90.871,24.546,137.924,24.546,189.06c0,77.178,62.79,139.968,139.969,139.968c77.178,0,139.967-62.79,139.967-139.968
        C304.482,140.453,279.571,97.56,241.852,72.459z'/>
    </svg>
  )
}
