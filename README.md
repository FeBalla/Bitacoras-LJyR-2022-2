# Sobre el proyecto / _About the project_

Se trata de una página para mostrar una descripción de los más de 130 juegos realizados en el curso deportivo "Liderazgo, Juegos y Recreación" de la Pontificia Universidad Católica de Chile, realizado en el segundo semestre del 2022.

_This is a page to show a description of the more than 130 games played in the sports course "Leadership, Games and Recreation" of the Pontificia Universidad Católica de Chile, held in the second semester of 2022._

## Uso de HyGraph CMS / _Use of HyGraph CMS_

Para almacenar y exponer los datos se está ocupando una API GraphQL generada con [HyGraph](https://app.hygraph.com) CMS. Basta con crear un proyecto con un esquema similar y adaptar las _queries_ para personalizar el funcionamiento de la aplicación. Con este servicio se puede actualizar la información sin necesidad de implementar un backend más complejo.

_A GraphQL API generated with [HyGraph](https://app.hygraph.com) CMS is being used to store and display the data. It is enough to create a project with a similar schema and adapt the queries to customize the operation of the application. With this service you can update the information without implementing a more complex backend._

## Run it locally

1. First, you need to create the `.env.local` file with the environment variables shown in `.env.local.example`.
2. Secondly, you need to install the dependencies with `npm install` (or using yarn).
3. Raise a development server with `npm run dev`.

### Code generator

If you want to change the GraphQL queries, you can generate the necessary code to keep using TypeScript and get the custom hooks for data fetching, by running the command `npm run graphql:codegen`
