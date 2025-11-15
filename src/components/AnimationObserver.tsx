
// import { useEffect } from 'react';
// import { useRouter } from "next/router";

// const AnimationObserver = () => {
//   const { asPath } = useRouter(); // Get current location from React Router
  
//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.1
//     };
    
//     const handleIntersect = (entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("reveal-visible");
//         }
//       });
//     };
    
//     // Create a new observer
//     const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
//     // Function to observe all reveal elements
//     const observeAllRevealElements = () => {
//       // Small delay to ensure elements are in the DOM
//       setTimeout(() => {
//         document.querySelectorAll(".reveal").forEach(el => {
//           // Only observe elements that don't already have the reveal-visible class
//           if (!el.classList.contains("reveal-visible")) {
//             observer.observe(el);
//           }
//         });
//         console.log("AnimationObserver: Scanning for reveal elements");
//       }, 100);
//     };
    
//     // Initial observation
//     observeAllRevealElements();
    
//     // Return cleanup function
//     return () => {
//       document.querySelectorAll(".reveal").forEach(el => {
//         observer.unobserve(el);
//       });
//       observer.disconnect();
//     };
//   }, [asPath]); // Re-run effect when route changes
  
//   return null;
// };

// export default AnimationObserver;
