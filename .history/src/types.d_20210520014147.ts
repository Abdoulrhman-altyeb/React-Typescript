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
    id: number,
    title:string
}