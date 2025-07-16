import { Aggregate, PageInfo } from "./graphql/generated"

// Generic type for connection with a HyGraph item
export type ItemConnection = {
  pageInfo: PageInfo
  aggregate: Aggregate
}
