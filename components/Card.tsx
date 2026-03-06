export default function Card({ title, description, image, author, category }) {

    return (

        <div className="card bg-base-100 w-96 shadow-md" >

            <figure>
                <img src={image} alt={title} />
            </figure>

            <div className="card-body">

                <div className="flex justify-between items-center mb-2">

                    <span className="badge badge-outline">{category}</span>

                    <span className="text-sm opacity-70">
                        By {author}
                    </span>

                </div>

                <h2 className="card-title">
                    {title}
                </h2>

                <p className="text-sm opacity-80">
                    {description}
                </p>

                <div className="card-actions justify-end mt-4">
                    <button className="btn btn-sm btn-outline">
                        Read article
                    </button>
                </div>

            </div>

        </div>

    )

}