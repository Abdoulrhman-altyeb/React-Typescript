interface ButtonProps {
    btnLink: string;
    btnText: string;
    outline: boolean;
}

interface SectionTitle {
    title: string;
    semiTitle: string;
    className?: string;
}

interface ServicesProps {
    icon: function,
    description: string,
    id?: number,
    title:string
}

interface SingleProject {
    desc: string,
    id?: number,
    name:string,
    img:string,
    url?:string
}