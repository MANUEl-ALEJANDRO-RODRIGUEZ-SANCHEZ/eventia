"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const EventCards = ({title, srcImage, url, description, date, time, location, category, likes,isLiked}) => {
  useEffect(() => {
    // Select all cards with class 'card'
    const cards = document.querySelectorAll(".card");

    // Create an observer to detect when cards are visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show"); // Add 'show' clas when element is visible
        }
      });
    }, {
      threshold: 0.1, // 0% of the card must be visible to activate the animation
    });

    // Look at each card
    cards.forEach((card) => {
      observer.observe(card);
    });

    // Clear the observer when the component is unmounted
    return () => observer.disconnect();
  }, []);

  return (
    
      <Link href={url} className="card mb-3" style={{maxWidth: '540px'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <Image src={srcImage} className="img-fluid rounded-start" alt="Imagen del evento" width={1024} height={1024}/>
            <div className="likes-event">
              {
                isLiked 
                  ? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/>
                  </svg>
                : <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/>
                  </svg>
              }
              <p>{likes}</p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-body-secondary">{date} - {time}</small></p>
              <p className="card-text"><small className="text-body-secondary">{location}</small></p>
              <p className="card-text"><small className="text-body-secondary">Categoría: {category}</small></p>
            </div>
          </div>
        </div>
      </Link>
  );
};

export default EventCards;
