import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Components/Home/Home';
import CourseDetails from '../Components/Course/CourseDetails';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path:'/course-details/:id',
                    element:<CourseDetails/>
                }
            ]
        }
    ])
    return (
        <RouterProvider router={router}>

        </RouterProvider>
    );
}

export default Router;
