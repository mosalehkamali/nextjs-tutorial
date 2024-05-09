/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source:"/ProNextConcept",//روتی که باید ریدایرکت شود
        destination:"/",//روتی که به آن ریدایرکت میشود 
        permanent:false //نشان میدهد که آیا این تغییر دائمی است یا موقت
      }
    ];
  },
};

export default nextConfig;
