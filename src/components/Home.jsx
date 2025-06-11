import React, { useState, useEffect } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
// import FeaturedProperties from './FeaturedProperties';
import Feature from './Feature';
import Achievements from './Achievements';
import Properties from './Properties';
// import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';
import SatisfiedCustomers from './SatisfiedCustomers';

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://localhost:5500/api/properties');
        const data = await response.json();
        setProperties(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching properties:', error);
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  return (
    <div>
      <Header isMobile={isMobile}/>
      <HeroSection isMobile={isMobile} />
      {/* <FeaturedProperties properties={properties} loading={loading} /> */}
      <Feature />
      <Achievements isMobile={isMobile}/>
      <Properties isMobile={isMobile}/>
      <About isMobile={isMobile} />
      {/* <Testimonials isMobile={isMobile} /> */}
      <SatisfiedCustomers></SatisfiedCustomers>
      <Footer isMobile={isMobile} />
    </div>
  );
};

export default Home;


// import React, { useState, useEffect } from 'react';
// import Header from './Header';
// import HeroSection from './HeroSection';
// import Feature from './Feature';
// import Achievements from './Achievements';
// import Properties from './Properties';
// import Testimonials from './Testimonials';
// import About from './About';
// import Footer from './Footer';

// const Home = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [heroContent, setHeroContent] = useState('');
//   const [achievementsContent, setAchievementsContent] = useState('');
//   const [aboutContent, setAboutContent] = useState('');
//   const [testimonialsContent, setTestimonialsContent] = useState('');

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const response = await fetch('http://localhost:5500/api/properties');
//         const data = await response.json();
//         setProperties(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching properties:', error);
//         setLoading(false);
//       }
//     };
//     fetchProperties();
//   }, []);

//   useEffect(() => {
//     const fetchPageContent = async () => {
//       try {
//         const res = await fetch('http://localhost:5500/api/pages');
//         const pages = await res.json();

//         for (const page of pages) {
//           const detailRes = await fetch(`http://localhost:5500/api/pages/${page._id}`);
//           const detail = await detailRes.json();

//           switch (detail.title) {
//             case 'Hero Section':
//               setHeroContent(detail.content);
//               break;
//             case 'Achievements':
//               setAchievementsContent(detail.content);
//               break;
//             case 'About':
//               setAboutContent(detail.content);
//               break;
//             case 'Testimonials':
//               setTestimonialsContent(detail.content);
//               break;
//             default:
//               break;
//           }
//         }
//       } catch (err) {
//         console.error('Error fetching page content:', err);
//       }
//     };

//     fetchPageContent();
//   }, []);

//   return (
//     <div>
//       <Header isMobile={isMobile} />
//       <HeroSection isMobile={isMobile} content={heroContent} />
//       <Feature />
//       <Achievements isMobile={isMobile} content={achievementsContent} />
//       <Properties isMobile={isMobile} properties={properties} loading={loading} />
//       <About isMobile={isMobile} content={aboutContent} />
//       <Testimonials isMobile={isMobile} content={testimonialsContent} />
//       <Footer isMobile={isMobile} />
//     </div>
//   );
// };

// export default Home;