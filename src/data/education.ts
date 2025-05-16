interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
    {
        title: "CFGS Administración de Sistemas Informáticos en Red",
        startDate: "2024-09-01",
        endDate: "",
        school: "IES Julián Marías",
        location: "Valladolid, Spain",
        description: "Sysadmin, Networking, Automation, Web Development and SQL Databases.",
        currentUni: true,
    },
    {
        title: "CFGM Sistemas Microinformáticos y Redes",
        startDate: "2018-09-01",
        endDate: "2020-06-30",
        school: "Ilerna Online",
        location: "Spain",
        description: "Device assembly, maintenance, and repair. Networking and system administration.",
        currentUni: false,
    },
    {
        title: "Graduate in ESO",
        startDate: "2005-09-01",
        endDate: "2018-06-30",
        school: "Colegio Bilingüe San Juan de la Cruz",
        location: "Medina del Campo, Spain",
        description: "Basic education in various subjects, including mathematics, science, and languages.",
        currentUni: false,
    },
];

export default education;