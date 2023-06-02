// "use client";
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// import { preview } from '../assets';
// import { getRandomPrompt } from '../utils';
// import { FormField, Loader } from '../components';

// const CreatePost = () => {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     username: '',
//     prompt: '',
//     photo: '',
//   });

//   const [generatingImg, setGeneratingImg] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSurpriseMe = () => {
//     const randomPrompt = getRandomPrompt(form.prompt);
//     setForm({ ...form, prompt: randomPrompt });
//   };

//   const generateImage = async () => {
//     if (form.prompt) {
//       try {
//         setGeneratingImg(true);
//         const response = await fetch('/api/v1/jarvis/dalle', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             prompt: form.prompt,
//           }),
//         });
//         const data = await response.json();
//         setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
//       } catch (err) {
//         alert(err);
//       } finally {
//         setGeneratingImg(false);
//       }
//     } else {
//       alert('Please provide proper prompt');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (form.prompt && form.photo) {
//       setLoading(true);
//       try {
//         const response = await fetch('/api/v1/posts', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ ...form }),
//         });

//         await response.json();
//         alert('Success');
//         navigate('/');
//       } catch (err) {
//         alert(err);
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       alert('Please generate an image with proper details');
//     }
//   };

//   return (
//     useClient(() => ( // Marking the component as a client entry
//       <section className="max-w-7xl mx-auto">
//         {/* Rest of the component code goes here */}
//       </section>
//     ))
//   );
// };

// export default CreatePost;
