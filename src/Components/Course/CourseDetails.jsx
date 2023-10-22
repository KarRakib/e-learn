import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Typography, } from "@material-tailwind/react";
import Button from '../Hooks/Button';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
  const videos = [
    'https://www.youtube.com/watch?v=PUgHSPkJuV4&ab_channel=NEWS24',
    'https://www.youtube.com/watch?v=bV0yN_oIu7I&ab_channel=SOMOYTV',
    'https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4'
  ];
const CourseDetails = () => {
      const [open, setOpen] = React.useState(1);
      const handleOpen = (value) => setOpen(open === value ? 0 : value);
      const { id } = useParams()
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleNextVideo = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  const handlePreviousVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };
   
  const handleNext = () => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
 
 
    console.log(id);
    return (
        <div className='py-6 flex flex-col lg:flex-row-reverse '>

            <Card className="mt-6 w-80">
                <div color="blue-gray" className=" h-32">
                    <iframe
                        title="Unique Title"

                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL
                        frameBorder="0"
                        allowFullScreen
                    />

                </div>
                <CardBody>
                    <div variant="h5" color="blue-gray" className="mb-2">
                        Price 500 tk                    </div>
                    <Button > Buy now </Button>
                    <div>
                    episode
                        15 episode
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        70 + class
                    </div>
                    <div>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                        </svg>


                        15 + Live session
                    </div>
                    <div className='flex justify-evenly'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                        </svg>
                        <p className='mr-5'>60 + Sheet</p>
                    </div>
                </CardBody>
                <CardFooter className="pt-0">
                </CardFooter>
            </Card>


            <div>
                content
                
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>What is Material Tailwind?   {!open?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /> 
</svg>:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
</svg>

}
</AccordionHeader>
        <AccordionBody>
        <div className="max-w-4xl mx-auto my-8 p-4 border border-gray-300 rounded-md">
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Course Videos</h2>
        <div className="relative" style={{ paddingBottom: '56.25%' }}>
          {/* Add your video player here with the video URL from the videos array */}
          <iframe
            title="Course Video"
            src={videos[currentVideoIndex]}
            frameBorder="0"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>
      <div className="flex justify-between">
        <button
          onClick={handlePreviousVideo}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          disabled={currentVideoIndex === 0}
        >
          Previous
        </button>
        <button
          onClick={handleNextVideo}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          disabled={currentVideoIndex === videos.length - 1}
        >
          Next
        </button>
      </div>
    </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
        <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="relative" style={{ paddingBottom: '56.25%', width: '100%' }}>
        <video controls className="absolute top-0 left-0 w-full h-full">
          <source src={videos[currentIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="mt-4 flex space-x-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === videos.length - 1}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
 
            </div>
        </div>
    );
}

export default CourseDetails;
