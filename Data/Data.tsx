import { countUpItemsProps, NavLink, ProjectProps } from "@/Types"

const navLinks: NavLink[] = [
    {
        path: "/",
        label: "Início"
    },
    {
        path: "/about",
        label: "Sobre"
    },
    {
        path: "/cars",
        label: "Carros"
    },
    {
        path: "/services",
        label: "Serviços"
    },
    {
        path: "/skilllevel",
        label: "Experiência"
    },
    {
        path: "/gallery",
        label: "Galeria"
    },
    {
        path: "/contact",
        label: "Contato"
    }
]

const countUpItems:countUpItemsProps[] = [
    {
        id: 1,
        number: 21,
        text: "anos de experiência"
    },
    {
        id: 2,
        number: 157,
        text: "clientes satisfeitos"
    },
    {
        id: 3,
        number: 743,
        text: "design Feito"
    },
    {
        id: 4,
        number: 12,
        text: "Clientes ativos"
    }
] 

const projects:ProjectProps[] = [
    {
        id: 1,
        img: "/project1.jpg",
        name: "Porche Tycan",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis commodi, ipsam non architecto blanditiis similique a corrupti veritatis reprehenderit vero esse natus deleniti dolorem in, illum laborum, repellat tenetur? Recusandae?",
        detail: ["+ Mais Detalhes"]
    },
    {
        id: 2,
        img: "/project2.jpg",
        name: "Rolls Royce Ghost 3",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis commodi, ipsam non architecto blanditiis similique a corrupti veritatis reprehenderit vero esse natus deleniti dolorem in, illum laborum, repellat tenetur? Recusandae?",
        detail: ["+ Mais Detalhes"]
    },
    {
        id: 3,
        img: "/project3.jpg",
        name: "Range Rover Evoque",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis commodi, ipsam non architecto blanditiis similique a corrupti veritatis reprehenderit vero esse natus deleniti dolorem in, illum laborum, repellat tenetur? Recusandae?",
        detail: ["+ Mais Detalhes"]
    },
    {
        id: 4,
        img: "/project4.jpg",
        name: "Ferrari 365 Daytona",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis commodi, ipsam non architecto blanditiis similique a corrupti veritatis reprehenderit vero esse natus deleniti dolorem in, illum laborum, repellat tenetur? Recusandae?",
        detail: ["+ Mais Detalhes"]
    },
    {
        id: 5,
        img: "/project1.jpg",
        name: "Porche Panamera 2022",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis commodi, ipsam non architecto blanditiis similique a corrupti veritatis reprehenderit vero esse natus deleniti dolorem in, illum laborum, repellat tenetur? Recusandae?",
        detail: ["+ Mais Detalhes"]
    },
    {
        id: 6,
        img: "/project2.jpg",
        name: "Camaro",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis commodi, ipsam non architecto blanditiis similique a corrupti veritatis reprehenderit vero esse natus deleniti dolorem in, illum laborum, repellat tenetur? Recusandae?",
        detail: ["+ Mais Detalhes"]
    },
]

export { navLinks, countUpItems,projects }