import React from 'react';
import './review.css';
import profile1 from '../../img/profile1.jpg';
import profile2 from '../../img/profile2.jpg';
import profile3 from '../../img/profile3.jpg';
import 'swiper/css/pagination';
import 'swiper/css';

const review = () => {
    const clients = [
        {
            img: profile1,
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci tenetur soluta, aliquid deserunt blanditiis voluptatem sint. Amet nam iusto assumenda quaerat ea, minus, rerum veniam eos qui ab aliquam atque!",
        },
        {
            img: profile2,
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci tenetur soluta, aliquid deserunt blanditiis voluptatem sint. Amet nam iusto assumenda quaerat ea, minus, rerum veniam eos qui ab aliquam atque!",
        },
        {
            img: profile3,
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci tenetur soluta, aliquid deserunt blanditiis voluptatem sint. Amet nam iusto assumenda quaerat ea, minus, rerum veniam eos qui ab aliquam atque!",
        }
    ]

  return (
    <div className="r-wrapper" id="review">
        <div className="r-heading">
            <span>Review from people</span>
            <span> for me...</span>
        </div>

        <div className="all">
            {clients.map((client, index) => {
                return(
                    <div key={index}>
                        <div className="review">
                            <div className="content">
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default review