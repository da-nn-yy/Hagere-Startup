import type { NextConfig } from "next";


const nextConfig: NextConfig = {
   images:{
    // dangerouslyAllowSVG: true, // it is recommended to use this option only if you trust the source of the SVG files
        remotePatterns:[
            {
                protocol:'https',
                hostname: '*',
            }
        ]
   },
   experimental: {
    ppr :'incremental'
},
    devIndicators:{
        appIsrStatus: true,
        buildActivity: true,
        buildActivityPosition:"bottom-right",
    },
};

export default nextConfig;
