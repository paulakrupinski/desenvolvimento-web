interface ITestimonialCardProps {
    image: string;
    testimony: string;
    name: string;
    role: string;
    stars: number;
    starIcon: string;
}

export default function TestimonialCard({
    image,
    testimony,
    name,
    role,
    stars,
    starIcon
}: ITestimonialCardProps) {
    return (
        <div className="carousel-card">

            <img
                src={image}
                alt={name}
            />

            <span className="testimony">
                <p>{testimony}</p>
            </span>

            <span className="rating">
                {Array.from({ length: stars }).map((_, index) => (
                    <img
                        key={index}
                        src={starIcon}
                        alt="estrela"
                    />
                ))}
            </span>

            <span className="names">
                <p>{name}</p>
                <p>{role}</p>
            </span>

        </div>
    );
}