const reviews = [
    {
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        name: "John Doe",
        designation: "CEO at TechWave",
        review: "The team was fantastic to work with! They captured our vision perfectly and delivered a user-friendly website on time."
    },
    {
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        name: "Anna Smith",
        designation: "Marketing Director",
        review: "Excellent service and support throughout. They really understood our needs and created a site that resonates with our audience."
    },
    {
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        name: "David Johnson",
        designation: "Small Business Owner",
        review: "Working with this team was a pleasure. They provided creative solutions and helped make our website stand out."
    },
    {
        image: "https://randomuser.me/api/portraits/women/4.jpg",
        name: "Laura Williams",
        designation: "Project Manager",
        review: "Their expertise and professionalism were evident from start to finish. Highly recommend for any web development needs."
    },
    {
        image: "https://randomuser.me/api/portraits/men/5.jpg",
        name: "Chris Brown",
        designation: "Freelance Consultant",
        review: "The final product exceeded my expectations! The team was responsive and handled everything with great attention to detail."
    }
];

let count = 0;

document.querySelector('img').src = reviews[count].image;
document.querySelector('.name').innerHTML = reviews[count].name;
document.querySelector('.designation').innerHTML = reviews[count].designation;
document.querySelector('.review').innerHTML = reviews[count].review;

function prev() {
    count--;
    if (count < 0) {
        count = reviews.length - 1;
    }
    document.querySelector('img').src = reviews[count].image;
    document.querySelector('.name').innerHTML = reviews[count].name;
    document.querySelector('.designation').innerHTML = reviews[count].designation;
    document.querySelector('.review').innerHTML = reviews[count].review;
}

function next() {
    count++;
    if (count == reviews.length) {
        count = 0;
    }
    document.querySelector('img').src = reviews[count].image;
    document.querySelector('.name').innerHTML = reviews[count].name;
    document.querySelector('.designation').innerHTML = reviews[count].designation;
    document.querySelector('.review').innerHTML = reviews[count].review;
}