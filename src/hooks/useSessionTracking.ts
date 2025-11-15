
// import { useEffect, useState } from 'react';
// import { useRouter } from "next/router";

// const SESSION_ID_KEY = 'userSessionId'; // Key for localStorage
// const TRACKING_API_URL = 'https://apis.docgenieglobal.com/apis/userTracking.php'; // Updated to production URL

// function generateSessionId() {
//     // Use crypto.randomUUID() for a standard, strong unique ID
//     if (window.crypto && window.crypto.randomUUID) {
//         return window.crypto.randomUUID();
//     } else {
//         // Fallback for older browsers (less robust)
//         console.warn("crypto.randomUUID not supported, using fallback ID generation.");
//         return Date.now().toString(36) + Math.random().toString(36).substring(2);
//     }
// }

// async function sendTrackingData(sessionId, pageUrl) {
//     try {
//         const response = await fetch(TRACKING_API_URL, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 // Add any other headers your PHP script might need
//             },
//             body: JSON.stringify({
//                 sessionId: sessionId,
//                 pageUrl: pageUrl,
//             }),
//         });

//         if (!response.ok) {
//             // Log error details if possible
//             const errorData = await response.text(); // or response.json() if your API returns JSON errors
//             console.error(`Error sending tracking data: ${response.status} ${response.statusText}`, errorData);
//             // Handle specific statuses if needed (e.g., 4xx, 5xx)
//         } else {
//             // Optional: Log success or handle successful response data
//             // const data = await response.json(); // if your API returns JSON
//             console.log('Tracking data sent successfully for:', pageUrl);
//         }
//     } catch (error) {
//         console.error('Network error or failed to send tracking data:', error);
//     }
// }

// function useSessionTracking() {
//     const { asPath } = useRouter(); // Get current location object from React Router
//     const [sessionId, setSessionId] = useState(null);

//     // Effect to check/create session ID on initial load
//     useEffect(() => {
//         let currentSessionId = localStorage.getItem(SESSION_ID_KEY);

//         if (!currentSessionId) {
//             console.log('No session ID found, creating a new one.');
//             currentSessionId = generateSessionId();
//             localStorage.setItem(SESSION_ID_KEY, currentSessionId);
//         } else {
//             console.log('Existing session ID found:', currentSessionId);
//         }
//         setSessionId(currentSessionId); // Store it in state for the next effect
//     }, []); // Empty dependency array ensures this runs only once on mount

//     // Effect to send tracking data whenever the session ID is set or the page URL changes
//     useEffect(() => {
//         if (sessionId) {
//             const pageUrl = window.location.origin + location.pathname + location.search + location.hash;
//             console.log(`Tracking page load: URL='${pageUrl}', SessionID='${sessionId}'`);
//             sendTrackingData(sessionId, pageUrl);
//         }
//     }, [sessionId, location.pathname, location.search, location.hash]); // Re-run when sessionId or location parts change
// }

// export default useSessionTracking;
