import React from 'react'
import ContactForm from '../Components/Contactform'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const contact: React.FC = () => {
    return (
        <div>
            <Navbar/>
            <div className='py-10'>
            <ContactSect />
            <Footer/>
            </div>
        </div>
    );
};

const ContactSect: React.FC = () => {

    return (
        <section
            className=" grid grid-cols-1 text-sm
        lg:grid-cols-2"
        >
            <div className="bg-[#1C2C5E] px-10 lg:px-20 py-10 lg:py-20">
                <h2 className="text-white font-medium text-lg lg:text-xl ">
                    Address
                </h2>
                <h3 className="mt-6 lg:mt-12 lg:text-lg tracking-wider text-white">
                    RHR Consol India Pvt Ltd , 701/A Mahavir Icon Sector 15 CBD Belapur Navi Mumbai 400614
                </h3>
                <div className='rounded-xl'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.210001413049!2d73.03605996469643!3d19.01046578712559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3aa58401201%3A0xf0f9308bd73291f3!2sMahavir%20Icon%2C%20Sector%2015%2C%20CBD%20Belapur%2C%20Navi%20Mumbai%2C%20Maharashtra%20400614!5e0!3m2!1sen!2sin!4v1675342686952!5m2!1sen!2sin"
                        width="auto" height="auto" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-[24rem] py-6 rounded-xl'></iframe>
                </div>
                <span className="flex gap-x-4 mt-6 lg:mt-12">
                    {/* <a href="https://www.facebook.com/AnnamayaRestaurant/" target="_blank" rel="noopener noreferrer" >
                    <svg
                        width="21"
                        height="26"
                        viewBox="0 0 21 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M13.4513 14.4384L18.213 14.3928L20.0764 9.37469L13.41 9.43858L13.3894 6.93867C13.3788 5.65121 13.3688 4.43875 17.1782 4.40225L20.0352 4.37486L20.0005 0.175007C19.3792 0.12721 17.0335 0.0284344 14.5574 0.0521647C9.38624 0.101725 5.73111 2.2081 5.76248 6.01172L5.79135 9.5116L0.0773275 9.56636L0.118569 14.5662L5.83259 14.5114L5.92023 25.1361L13.5389 25.0631L13.4513 14.4384Z"
                            fill="#E5E5E5"
                        />
                    </svg>
                    </a> */}
                    {/* <a href="https://www.instagram.com/annamayarestaurant/" target="_blank" rel="noopener noreferrer" >
                    <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.5 0C15.8962 0 16.32 0.0124999 17.6525 0.0749999C18.9837 0.1375 19.89 0.34625 20.6875 0.65625C21.5125 0.97375 22.2075 1.40375 22.9025 2.0975C23.5381 2.72237 24.0299 3.47824 24.3438 4.3125C24.6525 5.10875 24.8625 6.01625 24.925 7.3475C24.9838 8.68 25 9.10375 25 12.5C25 15.8962 24.9875 16.32 24.925 17.6525C24.8625 18.9837 24.6525 19.89 24.3438 20.6875C24.0308 21.5222 23.5389 22.2783 22.9025 22.9025C22.2775 23.5379 21.5216 24.0297 20.6875 24.3438C19.8912 24.6525 18.9837 24.8625 17.6525 24.925C16.32 24.9838 15.8962 25 12.5 25C9.10375 25 8.68 24.9875 7.3475 24.925C6.01625 24.8625 5.11 24.6525 4.3125 24.3438C3.47791 24.0306 2.72191 23.5387 2.0975 22.9025C1.46176 22.2777 0.969914 21.5218 0.65625 20.6875C0.34625 19.8912 0.1375 18.9837 0.0749999 17.6525C0.0162499 16.32 0 15.8962 0 12.5C0 9.10375 0.0124999 8.68 0.0749999 7.3475C0.1375 6.015 0.34625 5.11 0.65625 4.3125C0.969045 3.47772 1.461 2.72165 2.0975 2.0975C2.72209 1.46154 3.47804 0.969662 4.3125 0.65625C5.11 0.34625 6.015 0.1375 7.3475 0.0749999C8.68 0.0162499 9.10375 0 12.5 0ZM12.5 6.25C10.8424 6.25 9.25268 6.90848 8.08058 8.08058C6.90848 9.25268 6.25 10.8424 6.25 12.5C6.25 14.1576 6.90848 15.7473 8.08058 16.9194C9.25268 18.0915 10.8424 18.75 12.5 18.75C14.1576 18.75 15.7473 18.0915 16.9194 16.9194C18.0915 15.7473 18.75 14.1576 18.75 12.5C18.75 10.8424 18.0915 9.25268 16.9194 8.08058C15.7473 6.90848 14.1576 6.25 12.5 6.25ZM20.625 5.9375C20.625 5.5231 20.4604 5.12567 20.1674 4.83265C19.8743 4.53962 19.4769 4.375 19.0625 4.375C18.6481 4.375 18.2507 4.53962 17.9576 4.83265C17.6646 5.12567 17.5 5.5231 17.5 5.9375C17.5 6.3519 17.6646 6.74933 17.9576 7.04235C18.2507 7.33538 18.6481 7.5 19.0625 7.5C19.4769 7.5 19.8743 7.33538 20.1674 7.04235C20.4604 6.74933 20.625 6.3519 20.625 5.9375ZM12.5 8.75C13.4946 8.75 14.4484 9.14509 15.1517 9.84835C15.8549 10.5516 16.25 11.5054 16.25 12.5C16.25 13.4946 15.8549 14.4484 15.1517 15.1517C14.4484 15.8549 13.4946 16.25 12.5 16.25C11.5054 16.25 10.5516 15.8549 9.84835 15.1517C9.14509 14.4484 8.75 13.4946 8.75 12.5C8.75 11.5054 9.14509 10.5516 9.84835 9.84835C10.5516 9.14509 11.5054 8.75 12.5 8.75Z"
                            fill="#E5E5E5"
                        />
                    </svg>
                    </a> */}
                </span>
            </div>
            <ContactForm />
        </section>
    );
};
export default contact