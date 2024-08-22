// // "use client";
// // import React, { useState, useEffect, useRef, useCallback } from 'react';
// // import Image from "next/image";
// // import Modal from 'react-modal';
// // import Navbar from '@/components/navbar';
// // import Tour from './tour';
// // import { AlertCircle, Mic, Square } from 'lucide-react';

// // const Page = () => {
// //   const [isRotating, setIsRotating] = useState(false);
// //   const [isRotating1, setIsRotating1] = useState(false);
// //   const [isEdited, setIsEdited] = useState(false);
// //   const [editableTranscript, setEditableTranscript] = useState('');
// //   const [trackhistory, setTrackhistory] = useState([]);
// //   const [startanalyze, setStartanalyze] = useState(false);
// //   const [review, setReview] = useState('');
// //   const [listening, setListening] = useState(false);
// //   const [runTour, setRunTour] = useState(false);
// //   const recognitionRef = useRef(null);
// //   const [isMounted, setIsMounted] = useState(false);
// //   const [showSharePopup, setShowSharePopup] = useState(false);
// //   const [hasSubmitted, setHasSubmitted] = useState(false);
// //   const [email, setEmail] = useState('');
// //   const [message, setMessage] = useState('');
// //   const [submitStatus, setSubmitStatus] = useState('');
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //   const [microphonePermission, setMicrophonePermission] = useState('prompt');
// //   const [isMobileView, setIsMobileView] = useState(false);
// //   const [error, setError] = useState('');
// //   const isMobileRef = useRef(false);

// //   useEffect(() => {
// //     setIsMounted(true);
// //     if (navigator.permissions && navigator.permissions.query) {
// //       navigator.permissions.query({ name: 'microphone' }).then((permissionStatus) => {
// //         setMicrophonePermission(permissionStatus.state);
// //         permissionStatus.onchange = () => {
// //           setMicrophonePermission(permissionStatus.state);
// //         };
// //       });
// //     }
// //     // Check if it's the first visit
// //     const isFirstVisit = localStorage.getItem('isFirstVisit') !== 'false';
// //     if (isFirstVisit) {
// //       setRunTour(true);
// //       localStorage.setItem('isFirstVisit', 'false');
// //     }
// //     const hasSubmittedBefore = localStorage.getItem('hasSubmitted') === 'true';
// //     if (!hasSubmittedBefore) {
// //       console.log(showSharePopup);
// //       setShowSharePopup(true);
// //       localStorage.setItem('hasSubmitted', 'true');
// //     }

// //     // Set up interval for showing share popup every 5 minutes
// //     const intervalId = setInterval(() => {
// //       localStorage.setItem('hasSubmitted', 'false');
// //       setShowSharePopup(true);
// //     }, 5 * 60 * 1000); // 5 minutes in milliseconds

// //     isMobileRef.current = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// //     if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
// //       const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
// //       recognitionRef.current = new SpeechRecognition();
// //       recognitionRef.current.lang = 'en-US';

// //       if (isMobileRef.current) {
// //         recognitionRef.current.continuous = false;
// //         recognitionRef.current.interimResults = false;
// //       } else {
// //         recognitionRef.current.continuous = true;
// //         recognitionRef.current.interimResults = true;
// //       }

// //       recognitionRef.current.onresult = (event) => {
// //         const lastResultIndex = event.results.length - 1;
// //         const transcript = event.results[lastResultIndex][0].transcript;

// //         if (isMobileRef.current) {
// //           setEditableTranscript(prevText => prevText + ' ' + transcript);
// //         } else {
// //           setEditableTranscript(transcript);
// //         }
// //       };

// //       recognitionRef.current.onerror = (event) => {
// //         console.error('Speech recognition error', event.error);
// //         setError(`Error: ${event.error}`);
// //         setListening(false);
// //       };

// //       recognitionRef.current.onend = () => {
// //         if (listening && isMobileRef.current) {
// //           recognitionRef.current.start();
// //         } else {
// //           setListening(false);
// //         }
// //       };

// //     } else {
// //       setError('Speech recognition is not supported in this browser.');
// //     }

// //     return () => {
// //       clearInterval(intervalId);
// //       if (recognitionRef.current) {
// //         recognitionRef.current.stop();
// //       }
// //     };
// //   }, [showSharePopup, listening]);

// //   useEffect(() => {
// //     // Check if the screen is mobile
// //     const handleResize = () => {
// //       setIsMobileView(window.innerWidth < 768);
// //     };
// //     window.addEventListener('resize', handleResize);
// //     handleResize();

// //     return () => {
// //       window.removeEventListener('resize', handleResize);
// //     };
// //   }, []);

// //   const handleTranscriptChange = (event) => {
// //     setIsEdited(true);
// //     setEditableTranscript(event.target.value);
// //   };

// //   const toggleListening = () => {
// //     if (listening) {
// //       recognitionRef.current.stop();
// //       setListening(false);
// //     } else {
// //       setError('');
// //       if (isMobileRef.current) {
// //         setEditableTranscript('');
// //       }
// //       recognitionRef.current.start();
// //       setListening(true);
// //     }
// //   };

// //   const analyzeText = () => {
// //     const contentAnalysis = analyzeContent(editableTranscript);
// //     setReview(contentAnalysis);
// //   };

// //   const getReviewColor = (rating) => {
// //     if (rating < 5) return 'text-red-500';
// //     if (rating < 7) return 'text-yellow-500';
// //     return 'text-green-500';
// //   };

// //   const renderReview = (reviewText) => {
// //     const ratingMatch = reviewText.match(/Overall Rating: (\d+)/);
// //     const rating = ratingMatch ? parseInt(ratingMatch[1]) : 0;
// //     const colorClass = getReviewColor(rating);

// //     return (
// //       <div className={`${colorClass} glass-background bg-white rounded-lg p-4 shadow-md`}>
// //         <pre className="whitespace-pre-wrap font-sans">{reviewText}</pre>
// //       </div>
// //     );
// //   };

// //   const analyzeContent = (text) => {
// //     if (startanalyze) {
// //       if (!text || typeof text !== 'string' || text.trim().length === 0) {
// //         return "No valid speech detected. Please provide some input for analysis.";
// //       }

// //       const words = text.trim().toLowerCase().split(/\s+/).filter(word => word.length > 0);
// //       const wordCount = words.length;
// //       const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
// //       const sentenceCount = sentences.length;
// //       const avgWordsPerSentence = sentenceCount > 0 ? wordCount / sentenceCount : 0;

// //       let analysis = `Speech Quality Analysis:\n`;
// //       let rating = 10; // Start with a perfect score
// //       let improvements = [];

// //       // Analyze word count
// //       if (wordCount < 5) {
// //         return "The input is too short for meaningful analysis. Please provide a longer speech.";
// //       } else if (wordCount < 20) {
// //         rating -= 4;
// //         improvements.push("The speech is very short. Consider expanding your ideas for a more comprehensive analysis.");
// //       } else if (wordCount < 50) {
// //         rating -= 2;
// //         improvements.push("Try to speak more to fully express your ideas.");
// //       } else if (wordCount > 1000) {
// //         rating -= 1;
// //         improvements.push("The speech is quite long. Consider being more concise for better impact.");
// //       }

// //       // Analyze average words per sentence
// //       if (avgWordsPerSentence > 30) {
// //         rating -= 2;
// //         improvements.push("Use shorter sentences for better clarity and easier understanding.");
// //       } else if (avgWordsPerSentence < 5 && sentenceCount > 1) {
// //         rating -= 1;
// //         improvements.push("Try to form more complete sentences to better convey your thoughts.");
// //       }

// //       // Check for repeated words or phrases
// //       const wordFrequency = {};
// //       words.forEach(word => {
// //         wordFrequency[word] = (wordFrequency[word] || 0) + 1;
// //       });

// //       const repeatedWords = Object.entries(wordFrequency)
// //         .filter(([word, count]) => count > Math.max(3, wordCount * 0.05) && word.length > 3)
// //         .map(([word, count]) => `${word} (${count} times)`);

// //       if (repeatedWords.length > 0) {
// //         rating -= Math.min(3, repeatedWords.length * 0.5);
// //         improvements.push("Vary your vocabulary more. Frequently used words: " + repeatedWords.join(', '));
// //       }

// //       // Analyze sentence variety
// //       const sentenceLengths = sentences.map(sentence => sentence.trim().split(/\s+/).length);
// //       const uniqueSentenceLengths = new Set(sentenceLengths).size;

// //       if (uniqueSentenceLengths < 3 && sentenceCount > 5) {
// //         rating -= 1;
// //         improvements.push("Vary your sentence lengths for better rhythm and engagement.");
// //       }

// //       // Check for filler words
// //       const fillerWords = ['um', 'uh', 'like', 'you know', 'actually', 'basically', 'literally', 'seriously'];
// //       const fillerCount = words.filter(word => fillerWords.includes(word)).length;
// //       if (fillerCount > wordCount * 0.03) {
// //         rating -= Math.min(3, fillerCount * 0.5);
// //         improvements.push("Reduce the use of filler words to sound more confident and articulate.");
// //       }

// //       // Grammar and punctuation check (enhanced version)
// //       const punctuationErrors = sentences.filter(sentence => {
// //         const trimmedSentence = sentence.trim();
// //         return trimmedSentence.length > 0 &&
// //           (trimmedSentence[0] !== trimmedSentence[0].toUpperCase() ||
// //             !'.!?'.includes(trimmedSentence[trimmedSentence.length - 1]));
// //       }).length;

// //       if (punctuationErrors > 0) {
// //         rating -= Math.min(2, punctuationErrors * 0.5);
// //         improvements.push("Pay attention to proper capitalization and punctuation in your sentences.");
// //       }

// //       // Check for excessively long words (potential typos or unnecessary complexity)
// //       const longWords = words.filter(word => word.length > 15).length;
// //       if (longWords > 0) {
// //         rating -= Math.min(2, longWords * 0.5);
// //         improvements.push("Be cautious of very long words. They might be typos or unnecessarily complex.");
// //       }

// //       // Ensure rating is between 0 and 10
// //       rating = Math.max(0, Math.min(10, Math.round(rating)));

// //       analysis += `Overall Rating: ${rating}/10 stars\n\n`;
// //       analysis += `Word count: ${wordCount}\n`;
// //       analysis += `Sentence count: ${sentenceCount}\n`;
// //       analysis += `Average words per sentence: ${avgWordsPerSentence.toFixed(1)}\n\n`;

// //       if (improvements.length > 0) {
// //         analysis += "Areas for Improvement:\n";
// //         improvements.forEach((improvement, index) => {
// //           analysis += `${index + 1}. ${improvement}\n`;
// //         });
// //       } else {
// //         analysis += "Excellent job! Your speech is well-structured, clear, and engaging.\n";
// //       }

// //       return analysis;
// //     } else {
// //       alert('Please stop the recording');
// //     }
// //   };

// //   const Resetall = () => {
// //     setTrackhistory(prev => [...prev, review]);
// //     setReview('');
// //     setEditableTranscript('');
// //     if (recognitionRef.current) {
// //       recognitionRef.current.stop();
// //     }
// //     setListening(false);
// //   };

// //   const toggleRotation = useCallback(() => {
// //     toggleListening();
// //     setIsRotating(prev => !prev);
// //   }, []);

// //   const toggleRotation1 = useCallback(() => {
// //     setIsRotating1(prev => !prev);
// //   }, []);

// //   const handleMobileMenuToggle = (isOpen) => {
// //     setIsMobileMenuOpen(isOpen);
// //   };

// //   if (!isMounted) {
// //     return null;
// //   }

// //   const SharePopup = () => {
// //     const [localName, setLocalName] = useState('');
// //     const [localEmail, setLocalEmail] = useState('');
// //     const [localMessage, setLocalMessage] = useState('');
// //     const [localSubmitStatus, setLocalSubmitStatus] = useState('');

// //     useEffect(() => {
// //       if (showSharePopup && !hasSubmitted) {
// //         setLocalEmail(email);
// //         setLocalMessage(message);
// //         setLocalSubmitStatus(submitStatus);
// //       }
// //     }, [showSharePopup, hasSubmitted, email, message, submitStatus]);

// //     const handleLocalNameChange = (e) => {
// //       setLocalName(e.target.value);
// //     };
// //     const handleLocalEmailChange = (e) => {
// //       setLocalEmail(e.target.value);
// //     };

// //     const handleLocalMessageChange = (e) => {
// //       setLocalMessage(e.target.value);
// //     };

// //     const handleLocalSubmit = async (e) => {
// //       e.preventDefault();
// //       setLocalSubmitStatus('Submitting...');
// //       try {
// //         const response = await fetch('/pages/api/contact', {
// //           method: 'POST',
// //           headers: {
// //             'Content-Type': 'application/json',
// //           },
// //           body: JSON.stringify({ name: localName, email: localEmail, message: localMessage }),
// //         });

// //         const data = await response.json();

// //         if (response.ok) {
// //           setLocalSubmitStatus('Review submitted successfully!');
// //           setEmail(localEmail);
// //           setMessage(localMessage);
// //           setShowSharePopup(false);
// //           setHasSubmitted(true);
// //           localStorage.setItem('hasSubmitted', 'true');
// //         } else {
// //           setLocalSubmitStatus(`Failed to submit review: ${data.error}`);
// //         }
// //       } catch (error) {
// //         console.error('Error submitting review:', error);
// //         setLocalSubmitStatus(`An error occurred: ${error.message}`);
// //       }
// //     };

// //     return (
// //       <Modal
// //         isOpen={showSharePopup && !hasSubmitted}
// //         onRequestClose={() => setShowSharePopup(false)}
// //         contentLabel="Share Review"
// //         className="Modal bg-white  p-6 rounded-lg shadow-lg max-w-md mx-auto mt-20"
// //         overlayClassName="Overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
// //       >
// //         <h2 className="text-2xl font-bold mb-4">Share Your Review</h2>
// //         <p>Enter the email for saving your previous history</p>
// //         <form onSubmit={handleLocalSubmit}>
// //           <input
// //             type="name"
// //             value={localName}
// //             onChange={handleLocalNameChange}
// //             placeholder="Enter Name"
// //             className="w-full p-2 border border-gray-300 rounded mb-4"
// //             required
// //           />
// //           <input
// //             type="email"
// //             value={localEmail}
// //             onChange={handleLocalEmailChange}
// //             placeholder="Enter email address"
// //             className="w-full p-2 border border-gray-300 rounded mb-4"
// //             required
// //           />
// //           <textarea
// //             value={localMessage}
// //             onChange={handleLocalMessageChange}
// //             placeholder='Message'
// //             className='w-full border-black border-[1px] border-solid bg-[#ffffff00] p-3 font-bold focus:outline-none mb-4'
// //           />
// //           {localSubmitStatus && <p className="mb-4 text-sm font-bold">{localSubmitStatus}</p>}
// //           <div className="flex justify-between">
// //             <button
// //               type="submit"
// //               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// //             >
// //               Share
// //             </button>
// //             <button
// //               type="button"
// //               onClick={() => setShowSharePopup(false)}
// //               className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
// //             >
// //               Close
// //             </button>
// //           </div>
// //         </form>
// //       </Modal>
// //     );
// //   }

// //   return (
// //     <div className='overflow-x-hidden bg-orange-300 h-full'>
// //       <button
// //         onClick={() => setRunTour(true)}
// //         className="absolute top-20 right-4 glass-background font-bold py-2 px-4 rounded"
// //       >
// //         Start Tour
// //       </button>
// //       <div className='w-screen overflow-x-hidden pl-10 pr-16'>
// //         <Navbar onMobileMenuToggle={handleMobileMenuToggle} />
// //       </div>
// //       {!isMobileMenuOpen && (
// //         <div className='bg-orange-300 w-full h-full'>
// //           <Modal
// //             isOpen={true}
// //             contentLabel="Transcript Modal"
// //             className="Modal bg-orange-300 focus:outline-none w-full pt-24 overflow-x-hidden "
// //             overlayClassName="Overlay"
// //           >
// //             <div className={`modal-content max-w-4xl mx-auto ${isMobileView === true ? "hidden" : "block"}`}>
// //               <div className="flex items-center justify-center bg-orange-300 mb-8">
// //                 <div className={`cd-player flex relative`}>
// //                   <div onClick={toggleRotation1} className={`w-full h-full absolute glass-background rounded-lg shadow-md ${isRotating1 ? "rotate-y-180" : ""} `}>
// //                   </div>
// //                   <div className='border-2 border-white rounded-xl bg-[rgb(255 255 255 / 7%)]'>
// //                     <div
// //                       className={`w-40 h-40 rounded-full border-2 border-white p-1 shadow-md flex items-center justify-center cursor-pointer overflow-hidden ${isRotating ? 'animate-spin' : ''}`}
// //                       onClick={toggleRotation}
// //                     >
// //                       <Image layout='responsive' width={1920} height={1080} src='/util/img/cd.svg' alt="Map" />
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //               {microphonePermission === 'prompt' && (
// //                 <p className="text-center mb-4">Click the CD to enable microphone access</p>
// //               )}
// //               {microphonePermission === 'denied' && (
// //                 <div className="fixed w-[100vw] h-[100vh] bg-black/75 top-0 left-0 flex justify-center items-center backdrop-blur-sm cursor-not-allowed">
// //                   <div className="bg-white rounded-lg p-8 max-w-md text-center shadow-lg">
// //                     <AlertCircle className="text-red-500 w-16 h-16 mx-auto mb-4" />
// //                     <p className="text-2xl font-bold mb-4 text-red-500">Microphone Access Denied</p>
// //                     <p className="text-gray-700">Please enable it in your browser settings.</p>
// //                   </div>
// //                 </div>
// //               )}
// //               <div className='flex flex-col items-center mt-8'>
// //                 <textarea
// //                   value={editableTranscript}
// //                   onChange={handleTranscriptChange}
// //                   className={`transcript-output w-full spoken_text glass-background  h-48 p-4 rounded-lg shadow-md mb-4 ${microphonePermission === 'denied' ? "hidden" : "block"} ${isMobileView === true ? "hidden" : "block"}`}
// //                   placeholder="Your speech transcript will appear here..."
// //                 />
// //                 <button
// //                   onClick={toggleListening}
// //                   className={`${listening ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'} text-white px-4 py-2 rounded mb-4`}
// //                 >
// //                   {listening ? <Square className="mr-2" /> : <Mic className="mr-2" />}
// //                   {listening ? 'Stop Listening' : 'Start Listening'}
// //                 </button>
// //                 <button
// //                   onClick={analyzeText}
// //                   className={`analyze-button glass-background font-bold py-5 px-5 rounded ${microphonePermission === 'denied' ? "hidden" : "block"} ${isMobileView === true ? "hidden" : "block"}`}
// //                 >
// //                   Analyze Speech
// //                 </button>
// //               </div>
// //               {review && (
// //                 <div className="review-output mt-8">
// //                   {renderReview(review)}
// //                 </div>
// //               )}
// //               <button
// //                 onClick={Resetall}
// //                 className="clear-button bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
// //               >
// //                 Clear Review
// //               </button>
// //             </div>
// //             <div className="review-history mt-8 max-w-4xl mx-auto h-full">
// //               <h2 className="text-2xl font-bold mb-4 h-32">Review History</h2>
// //               {trackhistory.map((review, index) => (
// //                 <div key={index} className="mb-4">
// //                   <h3 className="font-bold">Review {index + 1}</h3>
// //                   {renderReview(review)}
// //                 </div>
// //               ))}
// //             </div>
// //           </Modal>
// //           <SharePopup className='bg-orange-300' />
// //           <Tour run={runTour} setRun={setRunTour} className='bg-orange-300' />
// //         </div>
// //       )}

// //       {isMobileView && (
// //         <div className="fixed w-[100vw] h-[100vh] bg-black/75 top-0 left-0 flex justify-center items-center backdrop-blur-sm">
// //           <div className="bg-white rounded-lg p-8 max-w-md text-center shadow-lg">
// //             <AlertCircle className="text-red-500 w-16 h-16 mx-auto mb-4" />
// //             <p className="text-2xl font-bold mb-4 text-red-500">Warning</p>
// //             <p className="text-gray-700">
// //               This application is designed for desktop use. Some features may not work as expected on mobile devices.
// //             </p>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };
// // export default Page;


"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from "next/image";
import Modal from 'react-modal';
import Navbar from '@/components/navbar';
import Tour from './tour';
import { AlertCircle } from 'lucide-react';

const Page = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [isRotating1, setIsRotating1] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [editableTranscript, setEditableTranscript] = useState('');
  const [trackhistory, setTrackhistory] = useState([]);
  const [startanalyze, setStartanalyze] = useState(false);
  const [review, setReview] = useState('');
  const [listening, setListening] = useState(false);
  const [runTour, setRunTour] = useState(false);
  const recognitionRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [microphonePermission, setMicrophonePermission] = useState('prompt');
  const [error, setError] = useState('');
  const isMobileRef = useRef(false);

  useEffect(() => {
    setIsMounted(true);
    if (navigator.permissions && navigator.permissions.query) {
      navigator.permissions.query({ name: 'microphone' }).then((permissionStatus) => {
        setMicrophonePermission(permissionStatus.state);
        permissionStatus.onchange = () => {
          setMicrophonePermission(permissionStatus.state);
        };
      });
    }
    // Check if it's the first visit
    const isFirstVisit = localStorage.getItem('isFirstVisit') !== 'false';
    if (isFirstVisit) {
      setRunTour(true);
      localStorage.setItem('isFirstVisit', 'false');
    }
    const hasSubmittedBefore = localStorage.getItem('hasSubmitted') === 'true';
    if (!hasSubmittedBefore) {
      setShowSharePopup(true);
      localStorage.setItem('hasSubmitted', 'true');
    }

    // Set up interval for showing share popup every 5 minutes
    const intervalId = setInterval(() => {
      localStorage.setItem('hasSubmitted', 'false');
      setShowSharePopup(true);
    }, 5 * 60 * 1000); // 5 minutes in milliseconds

    isMobileRef.current = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.lang = 'en-US';

      if (isMobileRef.current) {
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
      } else {
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;
      }

      recognitionRef.current.onresult = (event) => {
        const lastResultIndex = event.results.length - 1;
        const transcript = event.results[lastResultIndex][0].transcript;

        if (isMobileRef.current) {
          setEditableTranscript(prevText => prevText + ' ' + transcript);
        } else {
          setEditableTranscript(transcript);
        }
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        setError(`Error: ${event.error}`);
        setListening(false);
      };

      recognitionRef.current.onend = () => {
        if (listening && isMobileRef.current) {
          recognitionRef.current.start();
        } else {
          setListening(false);
        }
      };

    } else {
      setError('Speech recognition is not supported in this browser.');
    }

    return () => {
      clearInterval(intervalId);
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [listening]);

  const handleTranscriptChange = (event) => {
    setIsEdited(true);
    setEditableTranscript(event.target.value);
  };

  const startListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
      setListening(true);
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setListening(false);
      setStartanalyze(true);
    }
  };

  const toggleListening = () => {
    if (!isRotating) {
      startListening();
    } else {
      stopListening();
    }
    setIsRotating(prev => !prev);
  };

  const analyzeText = () => {
    const contentAnalysis = analyzeContent(editableTranscript);
    setReview(contentAnalysis);
  };

  const getReviewColor = (rating) => {
    if (rating < 5) return 'text-red-500';
    if (rating < 7) return 'text-yellow-500';
    return 'text-green-500';
  };

  const renderReview = (reviewText) => {
    const ratingMatch = reviewText.match(/Overall Rating: (\d+)/);
    const rating = ratingMatch ? parseInt(ratingMatch[1]) : 0;
    const colorClass = getReviewColor(rating);

    return (
      <div className={`${colorClass} glass-background bg-white rounded-lg p-4 shadow-md`}>
        <pre className="whitespace-pre-wrap font-sans">{reviewText}</pre>
      </div>
    );
  };

  const analyzeContent = (text) => {
    if (startanalyze) {
      if (!text || typeof text !== 'string' || text.trim().length === 0) {
        return "No valid speech detected. Please provide some input for analysis.";
      }

      const words = text.trim().toLowerCase().split(/\s+/).filter(word => word.length > 0);
      const wordCount = words.length;
      const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
      const sentenceCount = sentences.length;
      const avgWordsPerSentence = sentenceCount > 0 ? wordCount / sentenceCount : 0;

      let analysis = `Speech Quality Analysis:\n`;
      let rating = 10; // Start with a perfect score
      let improvements = [];

      // Analyze word count
      if (wordCount < 5) {
        return "The input is too short for meaningful analysis. Please provide a longer speech.";
      } else if (wordCount < 20) {
        rating -= 4;
        improvements.push("The speech is very short. Consider expanding your ideas for a more comprehensive analysis.");
      } else if (wordCount < 50) {
        rating -= 2;
        improvements.push("Try to speak more to fully express your ideas.");
      } else if (wordCount > 1000) {
        rating -= 1;
        improvements.push("The speech is quite long. Consider being more concise for better impact.");
      }

      // Analyze average words per sentence
      if (avgWordsPerSentence > 30) {
        rating -= 2;
        improvements.push("Use shorter sentences for better clarity and easier understanding.");
      } else if (avgWordsPerSentence < 5 && sentenceCount > 1) {
        rating -= 1;
        improvements.push("Try to form more complete sentences to better convey your thoughts.");
      }

      // Check for repeated words or phrases
      const wordFrequency = {};
      words.forEach(word => {
        wordFrequency[word] = (wordFrequency[word] || 0) + 1;
      });

      const repeatedWords = Object.entries(wordFrequency)
        .filter(([word, count]) => count > Math.max(3, wordCount * 0.05) && word.length > 3)
        .map(([word, count]) => `${word} (${count} times)`);

      if (repeatedWords.length > 0) {
        rating -= Math.min(3, repeatedWords.length * 0.5);
        improvements.push("Vary your vocabulary more. Frequently used words: " + repeatedWords.join(', '));
      }

      // Analyze sentence variety
      const sentenceLengths = sentences.map(sentence => sentence.trim().split(/\s+/).length);
      const uniqueSentenceLengths = new Set(sentenceLengths).size;

      if (uniqueSentenceLengths < 3 && sentenceCount > 5) {
        rating -= 1;
        improvements.push("Vary your sentence lengths for better rhythm and engagement.");
      }

      // Check for filler words
      const fillerWords = ['um', 'uh', 'like', 'you know', 'actually', 'basically', 'literally', 'seriously'];
      const fillerCount = words.filter(word => fillerWords.includes(word)).length;
      if (fillerCount > wordCount * 0.03) {
        rating -= Math.min(3, fillerCount * 0.5);
        improvements.push("Reduce the use of filler words to sound more confident and articulate.");
      }

      // Grammar and punctuation check (enhanced version)
      const punctuationErrors = sentences.filter(sentence => {
        const trimmedSentence = sentence.trim();
        return trimmedSentence.length > 0 &&
          (trimmedSentence[0] !== trimmedSentence[0].toUpperCase() ||
            !'.!?'.includes(trimmedSentence[trimmedSentence.length - 1]));
      }).length;

      if (punctuationErrors > 0) {
        rating -= Math.min(2, punctuationErrors * 0.5);
        improvements.push("Pay attention to proper capitalization and punctuation in your sentences.");
      }

      // Check for excessively long words (potential typos or unnecessary complexity)
      const longWords = words.filter(word => word.length > 15).length;
      if (longWords > 0) {
        rating -= Math.min(2, longWords * 0.5);
        improvements.push("Be cautious of very long words. They might be typos or unnecessarily complex.");
      }

      // Ensure rating is between 0 and 10
      rating = Math.max(0, Math.min(10, Math.round(rating)));

      analysis += `Overall Rating: ${rating}/10 stars\n\n`;
      analysis += `Word count: ${wordCount}\n`;
      analysis += `Sentence count: ${sentenceCount}\n`;
      analysis += `Average words per sentence: ${avgWordsPerSentence.toFixed(1)}\n\n`;

      if (improvements.length > 0) {
        analysis += "Areas for Improvement:\n";
        improvements.forEach((improvement, index) => {
          analysis += `${index + 1}. ${improvement}\n`;
        });
      } else {
        analysis += "Excellent job! Your speech is well-structured, clear, and engaging.\n";
      }

      return analysis;
    } else {
      alert('Please stop the recording');
    }
  };

  const Resetall = () => {
    setTrackhistory(prev => [...prev, review]);
    setReview('');
    setEditableTranscript('');
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setListening(false);
    setIsRotating(false);
  };

  const toggleRotation1 = () => {
    setIsRotating1(prev => !prev);
    if (isRotating1) {
      setIsRotating(false);
      recognitionRef.current.stop();
      setListening(false);
    } else {
      recognitionRef.current.stop();
      setListening(false);
    }
  };

  const handleMobileMenuToggle = (isOpen) => {
    setIsMobileMenuOpen(isOpen);
  };

  if (!isMounted) {
    return null;
  }

  const SharePopup = () => {
    const [localName, setLocalName] = useState('');
    const [localEmail, setLocalEmail] = useState('');
    const [localMessage, setLocalMessage] = useState('');
    const [localSubmitStatus, setLocalSubmitStatus] = useState('');

    useEffect(() => {
      if (showSharePopup && !hasSubmitted) {
        setLocalEmail(email);
        setLocalMessage(message);
        setLocalSubmitStatus(submitStatus);
      }
    }, [showSharePopup, hasSubmitted, email, message, submitStatus]);

    const handleLocalNameChange = (e) => {
      setLocalName(e.target.value);
    };
    const handleLocalEmailChange = (e) => {
      setLocalEmail(e.target.value);
    };

    const handleLocalMessageChange = (e) => {
      setLocalMessage(e.target.value);
    };

    const handleLocalSubmit = async (e) => {
      e.preventDefault();
      setLocalSubmitStatus('Submitting...');
      try {
        const response = await fetch('/pages/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: localName, email: localEmail, message: localMessage }),
        });

        const data = await response.json();

        if (response.ok) {
          setLocalSubmitStatus('Review submitted successfully!');
          setEmail(localEmail);
          setMessage(localMessage);
          setShowSharePopup(false);
          setHasSubmitted(true);
          localStorage.setItem('hasSubmitted', 'true');
        } else {
          setLocalSubmitStatus(`Failed to submit review: ${data.error}`);
        }
      } catch (error) {
        console.error('Error submitting review:', error);
        setLocalSubmitStatus(`An error occurred: ${error.message}`);
      }
    };

    return (
      <Modal
        isOpen={showSharePopup && !hasSubmitted}
        onRequestClose={() => setShowSharePopup(false)}
        contentLabel="Share Review"
        className="Modal bg-white  p-6 rounded-lg shadow-lg max-w-md mx-auto mt-20"
        overlayClassName="Overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-2xl font-bold mb-4">Share Your Review</h2>
        <p>Enter the email for saving your previous history</p>
        <form onSubmit={handleLocalSubmit}>
          <input
            type="name"
            value={localName}
            onChange={handleLocalNameChange}
            placeholder="Enter Name"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          />
          <input
            type="email"
            value={localEmail}
            onChange={handleLocalEmailChange}
            placeholder="Enter email address"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          />
          <textarea
            value={localMessage}
            onChange={handleLocalMessageChange}
            placeholder='Message'
            className='w-full border-black border-[1px] border-solid bg-[#ffffff00] p-3 font-bold focus:outline-none mb-4'
          />
          {localSubmitStatus && <p className="mb-4 text-sm font-bold">{localSubmitStatus}</p>}
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Share
            </button>
            <button
              type="button"
              onClick={() => setShowSharePopup(false)}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </form>
      </Modal>
    );
  }
  return (
    <div className='overflow-x-hidden bg-orange-300 h-full'>
      <button
        onClick={() => setRunTour(true)}
        className="absolute top-20 right-4 glass-background font-bold py-2 px-4 rounded"
      >
        Start Tour
      </button>
      <div className='w-screen overflow-x-hidden pl-10 pr-16'>
        <Navbar onMobileMenuToggle={handleMobileMenuToggle} />
      </div>
      <div className='bg-orange-300 w-full h-full'>
        <Modal
          isOpen={true}
          contentLabel="Transcript Modal"
          className="Modal bg-orange-300 focus:outline-none w-full pt-24 overflow-x-hidden "
          overlayClassName="Overlay"
        >
          <div className={`modal-content max-w-4xl mx-auto `}>
            <div className="flex items-center justify-center bg-orange-300 mb-8">
              <div className={`cd-player flex relative`}>
                <div onClick={toggleRotation1} className={`w-full h-full absolute glass-background rounded-lg shadow-md ${isRotating1 ? "rotate-y-180" : ""} `}>
                </div>
                <div className='border-2 border-white rounded-xl bg-[rgb(255 255 255 / 7%)]'>
                  <div
                    className={`w-40 h-40 rounded-full border-2 border-white p-1 shadow-md flex items-center justify-center cursor-pointer overflow-hidden ${isRotating ? 'animate-spin' : ''}`}
                    onClick={toggleListening}
                  >
                    <Image layout='responsive' width={1920} height={1080} src='/util/img/cd.svg' alt="Map" />
                  </div>
                </div>
              </div>
            </div>
            {microphonePermission === 'prompt' && (
              <p className="text-center mb-4">Click the CD to enable microphone access and start/stop recording</p>
            )}
            {microphonePermission === 'denied' && (
              <div className="fixed w-[100vw] h-[100vh] bg-black/75 top-0 left-0 flex justify-center items-center backdrop-blur-sm cursor-not-allowed">
                <div className="bg-white rounded-lg p-8 max-w-md text-center shadow-lg">
                  <AlertCircle className="text-red-500 w-16 h-16 mx-auto mb-4" />
                  <p className="text-2xl font-bold mb-4 text-red-500">Microphone Access Denied</p>
                  <p className="text-gray-700">Please enable it in your browser settings.</p>
                </div>
              </div>
            )}
            <div className='flex flex-col items-center mt-8'>
              <textarea
                value={editableTranscript}
                onChange={handleTranscriptChange}
                className={`transcript-output w-full spoken_text glass-background  h-48 p-4 rounded-lg shadow-md mb-4 ${microphonePermission === 'denied' ? "hidden" : "block"}`}
                placeholder="Your speech transcript will appear here..."
              />
              <button
                onClick={analyzeText}
                className={`analyze-button glass-background font-bold py-5 px-5 rounded ${microphonePermission === 'denied' ? "hidden" : "block"}`}
              >
                Analyze Speech
              </button>
            </div>
            {review && (
              <div className="review-output mt-8">
                {renderReview(review)}
              </div>
            )}
            <button
              onClick={Resetall}
              className="clear-button bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Clear Review
            </button>
          </div>
          <div className="review-history mt-8 max-w-4xl mx-auto h-full">
            <h2 className="text-2xl font-bold mb-4 h-32">Review History</h2>
            {trackhistory.map((review, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-bold">Review {index + 1}</h3>
                {renderReview(review)}
              </div>
            ))}
          </div>
        </Modal>
        <SharePopup className='bg-orange-300' />
        <Tour run={runTour} setRun={setRunTour} className='bg-orange-300' />
      </div>
    </div>
  );
};

export default Page;
