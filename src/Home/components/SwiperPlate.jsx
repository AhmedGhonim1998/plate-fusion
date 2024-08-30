import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

const carSwiper = [
    {
        imageUrl: './carsImages/car1.png'
    },
    {
        imageUrl: './carsImages/car2.png'
    },
    {
        imageUrl: './carsImages/car3.png'
    }
];

const SwiperPlate = () => {
    return (
        <Container>
            <div className="SwiperBackGround">
                <div className="swiperContent d-flex flex-column align-items-center justify-content-center py-3">
                    <h3 className='text-capitalize'>Create Your Own License Plate Design</h3>
                    <p className='text-black'>Create your own custom license plate</p>
                    <Button className="text-capitalize btnContact seeVideosBtn ms-3" variant="primary">
                        <Link className='nav-link text-white d-flex justify-content-between'>
                            See Videos
                            <div className='arrowBg ms-2'>
                                <i className="icofont-arrow-right arrowRight"></i>
                            </div>
                        </Link>
                    </Button>
                    <div className="carSwiperContainer px-5 py-3 w-75">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false
                            }}
                            breakpoints={{
                                360:{
                                    slidesPerView:1,
                                    spaceBetween:20
                                },
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 1,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 1,
                                    spaceBetween: 40,
                                },
                            }}
                            modules={[Autoplay]}
                            loop={true}
                            className="mySwiper"
                        >
                            {carSwiper.map((car, index) => (
                                <SwiperSlide key={index}>
                                    <img src={car.imageUrl} alt={`Car ${index + 1}`} className="swiperImage mx-auto" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default SwiperPlate;
