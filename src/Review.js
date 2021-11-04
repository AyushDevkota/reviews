import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
	const [index, setIndex] = useState(0);
	const { image, name: fullName, id, job, text } = people[index];

	const randomIntFromInterval = () => Math.floor(Math.random() * 4);
	const prevPage = () => {
		if (index === 0) {
			setIndex(people.length - 1);
		} else {
			setIndex(index - 1);
		}
	};
	const nextPage = () => {
		if (index === people.length - 1) {
			setIndex(0);
		} else {
			setIndex(index + 1);
		}
	};
	const randomPage = () => {
		const randomNumber = randomIntFromInterval();
		setIndex(randomNumber);
	};
	return (
		<article className="review" key={id}>
			<div className="img-container">
				<img className="person-img" src={image} alt={fullName} />
				<div className="quote-icon">
					<FaQuoteRight />
				</div>
			</div>
			<h4 className="author">{fullName}</h4>
			<div className="job">{job}</div>
			<p className="info">{text}</p>
			<div>
				<button className="prev-btn" onClick={prevPage}>
					<FaChevronLeft />
				</button>
				<button className="next-btn" onClick={nextPage}>
					<FaChevronRight />
				</button>
			</div>
			<button className="random-btn" onClick={randomPage}>
				Surprise Me
			</button>
		</article>
	);
};

export default Review;
