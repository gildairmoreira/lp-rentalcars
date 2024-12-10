import { ContactsProps, countUpItemsProps, GalleryProps, NavLink, ProjectProps, ServiceProps, Skill, SkillProps } from "@/Types";
import { BsAirplaneFill, BsBriefcaseFill, BsFillCarFrontFill, BsFillPinMapFill, BsFillSendCheckFill, BsFillTaxiFrontFill, BsStarFill, BsTelephoneInboundFill } from "react-icons/bs";

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

const services:ServiceProps[] = [
    {
        id: 1,
        title: "Aluguel de Carro com Motorista",
        description: "Aprimore sua experiência de aluguel com os nossos adicionais",
        icon: <BsFillTaxiFrontFill />
    },
    {
        id: 2,
        title: "Aluguel de Carro para Negócios",
        description: "Aprimore sua experiência de aluguel com os nossos adicionais",
        icon: <BsBriefcaseFill />
    },
    {
        id: 3,
        title: "Transporte do Aeroporto",
        description: "Aprimore sua experiência de aluguel com os nossos adicionais",
        icon: <BsAirplaneFill />
    },
    {
        id: 4,
        title: "Serviço de Motorista",
        description: "Aprimore sua experiência de aluguel com os nossos adicionais",
        icon: <BsFillSendCheckFill />
    },
    {
        id: 5,
        title: "Transporte de Luxo VIP",
        description: "Aprimore sua experiência de aluguel com os nossos adicionais",
        icon: <BsStarFill />
    },
    {
        id: 6,
        title: "Transporte Particular",
        description: "Aprimore sua experiência de aluguel com os nossos adicionais",
        icon: <BsFillCarFrontFill />
    },
    {
        id: 7,
        title: "Serviço de Assistência Rodoviária",
        description: "Aprimore sua experiência de aluguel com os nossos adicionais",
        icon: <BsFillPinMapFill />
    },
    {
        id: 8,
        title: "Transporte para Eventos",
        description: "Aprimore sua experiência de aluguel com os nossos adicionais",
        icon: <BsTelephoneInboundFill />
    },
]

const skills:Skill[] = [
    { name:"Esportivo",level:90 },
    { name:"Economico",level:50 },
    { name:"Comforto",level:95 },
    { name:"Velocidade",level:99 },
]

const gallery:GalleryProps[] = [
    {
        id: 1,
        name: "Lambhorghini Urus",
        image: "/7.jpg",
        link: "https://www.lamborghini.com/en-us",
        desc: "Foto do carro Lambhorghini Urus"
    },
    {
        id: 2,
        name: "Audi Rs7",
        image: "/14.jpg",
        link: "https://www.lamborghini.com/en-us",
        desc: "Foto do carro Audi Rs7"
    },
    {
        id: 3,
        name: "Rolls Royce Cullinan",
        image: "/12.jpg",
        link: "https://www.lamborghini.com/en-us",
        desc: "Foto do carro Rolls Royce Cullinan"
    },
    {
        id: 4,
        name: "Bugatti Mistral W16",
        image: "/9-1.jpg",
        link: "https://www.lamborghini.com/en-us",
        desc: "Foto do carro Bugatti Mistral W16"
    },
    {
        id: 5,
        name: "Aston Martin DBX",
        image: "/8-1.jpg",
        link: "https://www.lamborghini.com/en-us",
        desc: "Foto do carro Aston Martin DBX"
    },
    {
        id: 6,
        name: "Lambhorghini Aventador",
        image: "/7.jpg",
        link: "https://www.lamborghini.com/en-us",
        desc: "Foto do carro Lambhorghini Aventador"
    },
]
const contact:ContactsProps[] = [
 {id:1,title:"Endereço", text:"Rua Barão de Ouro Preto, 155, Belo Horizonte - MG, Brasil"},
 {id:2,title:"Telefone", text:"Escritório:+55 31 9 9999-8888"},
 {id:3,title:"Horário de Atendimento", text:"Segunda a Sábado: 9:00 - 23:00: Domingo fechado"},   
]

export { navLinks, countUpItems,projects,services,skills,gallery,contact }