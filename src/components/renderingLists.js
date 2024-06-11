const products = [
    {
        id: 1,
        title: 'Monitor'
    },
    {
        id: 2,
        title: 'Keyboard'
    },
    {
        id: 3,
        title: 'Mouse'
    },
]

export default function RenderingLists() {
    return (
        <div className="box">
            <h2>My List</h2>
            <ul>
                {
                    products.map((products) => {
                        return (
                            <li key={products.id}>{products.title}</li>
                        )
                    })
                }

            </ul>
        </div>
    )
}