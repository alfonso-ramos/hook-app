import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {

    const {data, isLoading,hasError } = useFetch("https://www.breakingbadapi.com/api/quotes/1")

    console.log()

    return (
        <>
            <h1>BeakingBad Quotes</h1>
            <hr />
        </>
    )
}


