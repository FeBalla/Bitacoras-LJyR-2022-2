import { PageInfo, Aggregate } from "./graphql/generated"

// Page state with data based on the page to make a query
export type PageState = {
    page: number
    itemsPerPage: number
    itemsToSkip: number
}

// Generic type for connection with a HyGraph item
type ItemConnection = {
    pageInfo: PageInfo
    aggregate: Aggregate
}
