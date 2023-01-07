import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {

    const URL = "https://api.breakingbadquotes.xyz/v1/quotes"

    const { data, isLoading, hasError } = useFetch(URL)

    console.log({ data, isLoading, hasError })

    //Cosas raras de JavaScript
    const {quote, author} = !!data && data[0];

    return (
        <>
            <h1>Beaking Bad Random Quotes</h1>
            <hr />

            {
                isLoading
                    ? (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    ) : (
                        <blockquote className="blockquote text-end">
                            <p className="mb-1">{quote}</p>
                            <footer className="blockquote-footer pt-3">{author}</footer>
                        </blockquote>
                    )
            }
            <button className="btn btn-primary">
                Random quote
            </button>
        </>
    )
}


