import { Card, CardHeader, CardBody, Typography, Button, } from "@material-tailwind/react";
import { motion } from "framer-motion";
export function Banner() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-md bg-[#FFEBEE] py-2 border border-indigo-600">
            <div className="self-center text-start ms-5">
                <h1 className="text-[#2dddfd] text-2xl font-bold">দেশের  যে কোন প্রান্ত থেকে যে কোন সময় শেখা যাবে ইচ্ছেমত</h1>
                <p className="text-black text-xl"> নবম-দশম ও একাদশ - দ্বাদশ  শ্রেণীর</p>
                <p className="text-[#0648d4dd] text-lg"> বিজ্ঞান ও ব্যবসায় শাখায় সকল বিষয়ের সমাধান আছে এক অ্যাপ</p>
            </div>
            <div>
                <motion.div
                    className="box w-full"
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 180, 180, 0],
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: 1,
                        repeatDelay: 1
                    }}
                >
                    <CardHeader
                        shadow={false}
                        floated={false}
                        className="m-0 w-full shrink-0 rounded-r-none"
                    >
                        <img
                            src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/6/2020_6$largeimg_1222328281.jpg"
                            alt="card-image"
                            className="h-80 w-full object-cover"
                        />
                    </CardHeader>
                </motion.div>

            </div>

        </div>
        // <Card className="w-full flex-col lg:flex-row-reverse py-7">
        //     <motion.div
        //         className="box w-full"
        //         animate={{
        //             scale: [1, 2, 2, 1, 1],
        //             rotate: [0, 0, 180, 180, 0],
        //             borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        //         }}
        //         transition={{
        //             duration: 2,
        //             ease: "easeInOut",
        //             times: [0, 0.2, 0.5, 0.8, 1],
        //             repeat: 1,
        //             repeatDelay: 1
        //         }}
        //     >
        //         <CardHeader
        //             shadow={false}
        //             floated={false}
        //             className="m-0 w-1/2 shrink-0 rounded-r-none"
        //         >
        //             <img
        //                 src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/6/2020_6$largeimg_1222328281.jpg"
        //                 alt="card-image"
        //                 className="h-full w-full object-cover"
        //             />
        //         </CardHeader>
        //     </motion.div>

        //     <div className="text-start  self-center ">
        //         <CardBody className="">
        //             <Typography variant="h6" color="gray" className="mb-4 uppercase text-start ">
        //                 দেশের  যে কোন প্রান্ত থেকে যে কোন সময় শেখা যাবে ইচ্ছেমত
        //             </Typography>
        //             <Typography variant="h4" color="blue-gray" className="mb-2 ">
        //                 নবম-দশম ও একাদশ - দ্বাদশ  শ্রেণীর
        //             </Typography>
        //             <Typography color="gray" className="mb-8 font-normal ">
        //                 বিজ্ঞান ও ব্যবসায় শাখায় সকল বিষয়ের সমাধান আছে এক অ্যাপ
        //             </Typography>
        //             <a href="#" className="inline-block">
        //                 <Button variant="text" className="flex items-center gap-2">
        //                     Endroll Our Course
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         fill="none"
        //                         viewBox="0 0 24 24"
        //                         stroke="currentColor"
        //                         strokeWidth={2}
        //                         className="h-4 w-4"
        //                     >
        //                         <path
        //                             strokeLinecap="round"
        //                             strokeLinejoin="round"
        //                             d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        //                         />
        //                     </svg>
        //                 </Button>
        //             </a>
        //         </CardBody>
        //     </div>

        // </Card>
    );
}