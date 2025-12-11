import React, { Component } from "react";
import { OrgDiagram } from "basicprimitivesreact";
import Modal from "react-modal";
import {
    PageFitMode,
    Colors,
    ItemType,
    AdviserPlacementType,
    Enabled,
    AnnotationType,
    ChildrenPlacementType,
} from "basicprimitives";
import "./Team.css";

const JOB_DESCRIPTIONS = {
    "Web Developer": "https://organization.lascasasgaming.com/webdev_jd.pdf",
    "Software Developer":
        "https://organization.lascasasgaming.com/softdev_jd.pdf",
    "IT Specialist": "https://organization.lascasasgaming.com/itspec_jd.pdf",
    "IT Infrastructure": "https://organization.lascasasgaming.com/infra_jd.pdf",
    "Junior Developer": "https://organization.lascasasgaming.com/jr_dev_jd.pdf",
    "Senior Developer":
        "https://organization.lascasasgaming.com/sr_web_dev_jd.pdf",
    "Mobile App Developer":
        "https://organization.lascasasgaming.com/mob_app_dev_jd.pdf",
    "Customer Service Representative":
        "https://organization.lascasasgaming.com/csr_jd.pdf",
    "Multimedia Artist": "https://organization.lascasasgaming.com/multi_jd.pdf",
    "IT Head": "https://organization.lascasasgaming.com/it_head_jd.pdf",
    "Marketing Head":
        "https://organization.lascasasgaming.com/marketing_head_jd.pdf",
    "Marketing Supervisor":
        "https://organization.lascasasgaming.com/marketing_super_jd.pdf",
    "Marketing Brand Officer":
        "https://organization.lascasasgaming.com/marketing_brand_jd.pdf",
    "Marketing Digital":
        "https://organization.lascasasgaming.com/marketing_digital_jd.pdf",
    "Marketing Staff":
        "https://organization.lascasasgaming.com/marketing_staff_jd.pdf",
    "Sales Head": "https://organization.lascasasgaming.com/sales_head_jd.pdf",
    "HR Admin Assist":
        "https://organization.lascasasgaming.com/hr_admin_asst_jd.pdf",
    "Vice President":
        "https://organization.lascasasgaming.com/vice_pres_jd.pdf",
    President: "https://organization.lascasasgaming.com/president_jd.pdf",
    "Finance Head":
        "https://organization.lascasasgaming.com/finance_head_jd.pdf",
    "Utility Personnel":
        "https://organization.lascasasgaming.com/utility_person_jd.pdf",
    "CSR Head": "https://organization.lascasasgaming.com/csr_head_jd.pdf",
    "EA Vice President":
        "https://organization.lascasasgaming.com/ea_vice_pres_jd.pdf",
    "EA President":
        "https://organization.lascasasgaming.com/ea_president_jd.pdf",
    "Public Relations":
        "https://organization.lascasasgaming.com/public_relations_jd.pdf",
    Copywriter: "https://organization.lascasasgaming.com/copywriter_jd.pdf",
    "Gaming Finance Analyst":
        "https://organization.lascasasgaming.com/finance_analyst_jd.pdf",
    "Gaming Site Staff":
        "https://organization.lascasasgaming.com/gaming_site_staff_jd.pdf",
    "General Accounts":
        "https://organization.lascasasgaming.com/general_accounts_jd.pdf",
    "HR Head": "https://organization.lascasasgaming.com/hr_head_jd.pdf",
};

const JOB_KPI = {
    "IT Head": "https://organization.lascasasgaming.com/it_head_kpi.pdf",
    "IT Specialist": "https://organization.lascasasgaming.com/itspec_kpi.pdf",
    "IT Infrastructure":
        "https://organization.lascasasgaming.com/infra_kpi.pdf",
    "Junior Developer":
        "https://organization.lascasasgaming.com/jr_dev_kpi.pdf",
    "Senior Developer":
        "https://organization.lascasasgaming.com/sr_web_dev_kpi.pdf",
    "Mobile App Developer":
        "https://organization.lascasasgaming.com/mob_app_kpi.pdf",
    "Customer Service Representative":
        "https://organization.lascasasgaming.com/csr_kpi.pdf",
    "Multimedia Artist":
        "https://organization.lascasasgaming.com/multi_kpi.pdf",
    "Marketing Head":
        "https://organization.lascasasgaming.com/marketing_head_kpi.pdf",
    "Marketing Supervisor":
        "https://organization.lascasasgaming.com/marketing_super_kpi.pdf",
    "Marketing Brand Officer":
        "https://organization.lascasasgaming.com/marketing_brand_kpi.pdf",
    "Marketing Digital":
        "https://organization.lascasasgaming.com/marketing_digital_kpi.pdf",
    "Marketing Staff":
        "https://organization.lascasasgaming.com/marketing_staff_kpi.pdf",
    "Sales Head": "https://organization.lascasasgaming.com/sales_head_kpi.pdf",
    "HR Admin Assist":
        "https://organization.lascasasgaming.com/hr_admin_asst_kpi.pdf",
    "Vice President":
        "https://organization.lascasasgaming.com/vice_pres_kpi.pdf",
    President: "https://organization.lascasasgaming.com/president_kpi.pdf",
    "Finance Head":
        "https://organization.lascasasgaming.com/finance_head_kpi.pdf",
    "Utility Personnel":
        "https://organization.lascasasgaming.com/utility_person_kpi.pdf",
    "CSR Head": "https://organization.lascasasgaming.com/csr_head_kpi.pdf",
    "EA Vice President":
        "https://organization.lascasasgaming.com/ea_vice_pres_kpi.pdf",
    "EA President":
        "https://organization.lascasasgaming.com/ea_president_kpi.pdf",
    "Public Relations":
        "https://organization.lascasasgaming.com/public_relations_kpi.pdf",
    Copywriter: "https://organization.lascasasgaming.com/copywriter_kpi.pdf",
    "Gaming Finance Analyst":
        "https://organization.lascasasgaming.com/finance_analyst_kpi.pdf",
    "Gaming Site Staff":
        "https://organization.lascasasgaming.com/gaming_site_staff_kpi.pdf",
    "General Accounts":
        "https://organization.lascasasgaming.com/general_accounts_kpi.pdf",
    "HR Head": "https://organization.lascasasgaming.com/hr_head_kpi.pdf",
};

const ORGCHART =
    "https://organization.lascasasgaming.com/images/orgchart_lcgi.jpeg";

class Team extends Component {
    constructor(props) {
        super(props);

        this.handleResize = this.handleResize.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.allOrgItems = [
            {
                id: 0,
                parent: null,
                title: "Jose Maria Acuzar",
                description: "Chairman",
                image: "/images/joms.jpeg",
                templateName: "contactTemplate",
            },
            {
                id: 1,
                parent: 0,
                title: "Kenniedy Francisco",
                description: "EA to the Chairman",
                itemType: ItemType.Adviser,
                adviserPlacementType: AdviserPlacementType.Right,
                image: "/images/kenniedy.jpeg",
                itemTitleColor: Colors.Green,
                templateName: "contactTemplate",
            },
            {
                id: 2,
                parent: 0,
                title: "Analiza Mangco",
                description: "Corporate Secretary",
                image: "/images/ana.jpeg",
                itemTitleColor: "#FFA600",
                templateName: "contactTemplate",
            },
            {
                id: 3,
                parent: 2,
                title: "Alphie Tablazon",
                description: "EA to Corporate Secretary",
                itemType: ItemType.Adviser,
                adviserPlacementType: AdviserPlacementType.Left,
                image: "/images/alphie.png",
                itemTitleColor: Colors.Green,
                templateName: "contactTemplate",
            },
            {
                id: 4,
                parent: 0,
                title: "Leo Barrosa",
                jd_pdf: "President",
                description: "President",
                image: "/images/leo.jpeg",
                templateName: "contactTemplate4",
                jobDescription0: "Position Title: President",
                jobDescription1: "Reporting Relationships",
                jobDescription2: "Accountable to :  Las Casas Gaming, Inc.",
                jobDescription3: "Reports to : Jose Maria Acuzar",
            },
            {
                id: 5,
                parent: 4,
                title: "Gianne Fernando",
                jd_pdf: "EA President",
                description: "EA to the President",
                itemType: ItemType.Adviser,
                adviserPlacementType: AdviserPlacementType.Right,
                image: "/images/gian.jpeg",
                itemTitleColor: Colors.Green,
                templateName: "contactTemplate",
                jobDescription0: "Position Title: EA to the President",
                jobDescription1: "Reporting Relationships",
                jobDescription2: "Accountable to :  Las Casas Gaming, Inc.",
                jobDescription3: "Reports to : Leo Barrosa",
            },
            {
                id: 6,
                parent: 4,
                title: "Maria Celerina Gallardo III",
                jd_pdf: "Vice President",
                description: "Vice President - Operations",
                image: "/images/rina.jpeg",
                templateName: "contactTemplate3",
                jobDescription0: "Position Title: Vice President - Operations",
                jobDescription1: "Reporting Relationships",
                jobDescription2: "Accountable to :  Las Casas Gaming, Inc.",
                jobDescription3: "Reports to : Jose Maria Acuzar & Leo Barrosa",
            },
            {
                id: 7,
                parent: 6,
                title: "Gino Rafael Dimaano",
                jd_pdf: "IT Head",
                description: "AVP IT",
                image: "/images/gino.jpeg",
                itemTitleColor: Colors.RoyalBlue,
                templateName: "contactTemplate3",
                jobDescription0: "Position Title: IT Head",
                jobDescription1: "Reporting Relationships",
                jobDescription2: "Accountable to :  Las Casas Gaming, Inc.",
                jobDescription3:
                    "Reports to : Gino Rafael Dimaano - AVP IT HEAD",
            },
            { id: 100, parent: 7, isVisible: false },
            {
                id: 8,
                parent: 6,
                title: "Dayanara Reyes-De Guzman",
                jd_pdf: "EA Vice President",
                description: "EA to the Vice President",
                itemType: ItemType.Adviser,
                adviserPlacementType: AdviserPlacementType.Right,
                image: "/images/dara.jpg",
                templateName: "contactTemplate2",
                jobDescription0: "Position Title: EA to the Vice President",
                jobDescription1: "Reporting Relationships",
                jobDescription2: "Accountable to :  Las Casas Gaming, Inc.",
                jobDescription3:
                    "Reports to : Maria Celerina Gallardo III - Vice President for Operations",
            },
            {
                id: 9,
                parent: 6,
                title: "Vacant",
                jd_pdf: "AVP Marketing",
                description: "AVP Marketing",
                image: "/images/default_user.jpg",
                itemTitleColor: Colors.Red,
                templateName: "contactTemplate",
                jobDescription0: "Position Title: AVP Marketing",
                jobDescription1: "Reporting Relationships",
                jobDescription2: "Accountable to :  Las Casas Gaming, Inc.",
                jobDescription3:
                    "Reports to : Maria Celerina Gallardo III - Vice President for Operations",
            },
            {
                id: 10,
                parent: 9,
                title: "Mary Grace Jane Fernandez",
                jd_pdf: "Marketing Head",
                description: "Marketing Head",
                image: "/images/Jane.jpg",
                templateName: "contactTemplate3",
                itemTitleColor: Colors.RoyalBlue,
                jobDescription0: "Position Title: Marketing Head",
                jobDescription1: "Reporting Relationships",
                jobDescription2: "Accountable to :  Las Casas Gaming, Inc.",
                jobDescription3: "Reports to : AVP Marketing for Operations",
            },
            {
                id: 11,
                parent: 7,
                title: "Vacant",
                jd_pdf: "Senior Web Developer",
                description: "Senior Web Developer",
                image: "/images/default_user.jpg",
                itemTitleColor: Colors.Red,
                childrenPlacementType: ChildrenPlacementType.Vertical,
                templateName: "contactTemplate",
                jobDescription0: "Position Title: Senior Web Developer",
                jobDescription1: "Reporting Relationships",
                jobDescription2: "Accountable to :  Las Casas Gaming, Inc.",
                jobDescription3:
                    "Reports to : Gino Rafael Dimaano - AVP IT HEAD",
            },
            {
                id: 12,
                parent: 6,
                title: "Vacant",
                jd_pdf: "AVP Administrator & CSR",
                description: "AVP Administrator & CSR",
                image: "/images/default_user.jpg",
                templateName: "contactTemplate",
                itemTitleColor: Colors.Red,
                jobDescription0: "Position Title: AVP Administrator & CSR",
                jobDescription1: "Reporting Relationships",
                jobDescription2: "Accountable to :  Las Casas Gaming, Inc.",
                jobDescription3:
                    "Reports to : Maria Celerina Gallardo III - Vice President for Operations",
            },
            {
                id: 116,
                parent: 7,
                childrenPlacementType: ChildrenPlacementType.Vertical,
                isVisible: false,
            },
            {
                id: 13,
                parent: 100,
                title: "Dean Zaballero",
                jd_pdf: "Mid Web Developer",
                description: "Mid Web Developer",
                image: "/images/dean.jpg",
                templateName: "contactTemplate2",
                childrenPlacementType: ChildrenPlacementType.Vertical,
                jobDescription0: "Position Title: Mid Web Developer",
                jobDescription1: "Reporting Relationships",
                jobDescription2: "Accountable to :  Las Casas Gaming, Inc.",
                jobDescription3:
                    "Reports to : Gino Rafael Dimaano - AVP IT HEAD",
            },
            {
                id: 14,
                parent: 100,
                title: "Vacant",
                jd_pdf: "Cloud and Infrastructure Engineer",
                description: "Cloud and Infrastructure Engineer",
                image: "/images/default_user.jpg",
                templateName: "contactTemplate",
                itemTitleColor: Colors.Red,
                jobDescription0:
                    "Position Title: Cloud and Infrastructure Engineer",
                jobDescription1: "Reporting Relationships",
                jobDescription2: "Accountable to :  Las Casas Gaming, Inc.",
                jobDescription3:
                    "Reports to : Gino Rafael Dimaano - AVP IT HEAD",
            },
            {
                id: 15,
                parent: 13,
                title: "Donell Carl Oconer",
                jd_pdf: "Junior Web Developer",
                description: "Junior Web Developer",
                image: "/images/donel.jpg",
                templateName: "contactTemplate2",
                jobDescription0: "Position Title: Junior Web Developer",
                jobDescription1: "Reporting Relationships",
                jobDescription2: "Accountable to :  Las Casas Gaming, Inc.",
                jobDescription3:
                    "Reports to : Gino Rafael Dimaano - AVP IT HEAD",
            },
            {
                id: 16,
                parent: 13,
                title: "Edward Taligatos",
                jd_pdf: "Junior Web Developer",
                description: "Junior Web Developer",
                image: "/images/edward.jpg",
                templateName: "contactTemplate2",
                jobDescription0: "Position Title: Junior Web Developer",
                jobDescription1: "Reporting Relationships",
                jobDescription2: "Accountable to :  Las Casas Gaming, Inc.",
                jobDescription3:
                    "Reports to : Gino Rafael Dimaano - AVP IT HEAD",
            },
            {
                id: 17,
                parent: 116,
                title: "Alvin Mira Castillo",
                jd_pdf: "Web Developer",
                description: "Web Developer",
                image: "/images/alvin.jpg",
                templateName: "contactTemplate2",
                jobDescription0: "Position Title: Web Developer",
                jobDescription1: "Reporting Relationships",
                jobDescription2: "Accountable to :  Las Casas Gaming, Inc.",
                jobDescription3:
                    "Reports to : Gino Rafael Dimaano - AVP IT HEAD",
            },
            {
                id: 18,
                parent: 116,
                title: "Ken Jairul Murillo",
                jd_pdf: "Junior Web Developer",
                description: "Junior Web Developer",
                image: "/images/ken.jpg",
                templateName: "contactTemplate2",
                jobDescription0: "Position Title: Junior Web Developer",
                jobDescription1: "Reporting Relationships",
                jobDescription2: "Accountable to :  Las Casas Gaming, Inc.",
                jobDescription3:
                    "Reports to : Gino Rafael Dimaano - AVP IT HEAD",
            },
            {
                id: 19,
                parent: 116,
                title: "John Aldren Abalos",
                jd_pdf: "Mobile Application Developer",
                description: "Mobile Application Developer",
                image: "/images/aldren.jpg",
                templateName: "contactTemplate2",
                jobDescription0: "Position Title: Mobile Application Developer",
                jobDescription1: "Reporting Relationships",
                jobDescription2: "Accountable to :  Las Casas Gaming, Inc.",
                jobDescription3:
                    "Reports to : Gino Rafael Dimaano - AVP IT HEAD",
            },
            {
                id: 20,
                parent: 116,
                title: "Vacant",
                jd_pdf: "Game Developer",
                description: "Game Developer",
                image: "/images/default_user.jpg",
                templateName: "contactTemplate",
                itemTitleColor: "#ff0000",
                jobDescription0: "Position Title: Game Developer",
                jobDescription1: "Reporting Relationships",
                jobDescription2: "Accountable to :  Las Casas Gaming, Inc.",
                jobDescription3:
                    "Reports to : Gino Rafael Dimaano - AVP IT HEAD",
            },
            {
                id: 21,
                parent: 116,
                title: "Vacant",
                jd_pdf: "Technical Support",
                description: "Technical Support",
                image: "/images/default_user.jpg",
                templateName: "contactTemplate",
                itemTitleColor: "#ff0000",
                jobDescription0: "Position Title: Technical Support",
                jobDescription1: "Reporting Relationships",
                jobDescription2: "Accountable to :  Las Casas Gaming, Inc.",
                jobDescription3:
                    "Reports to : Gino Rafael Dimaano - AVP IT HEAD",
            },
            {
                id: 22,
                parent: 10,
                title: "Vacant",
                jd_pdf: "Activations Brand Officer",
                description: "Activations Brand Officer",
                image: "/images/default_user.jpg",
                itemTitleColor: "#ff0000",
                templateName: "contactTemplate",
                jobDescription0: "Position Title: Activations Brand Officer",
                jobDescription1: "Reporting Relationships",
                jobDescription2: "Accountable to :  Las Casas Gaming, Inc.",
                jobDescription3: "Reports to : Marketing Head",
            },
            {
                id: 23,
                parent: 22,
                title: "Michael Angelo Ramos",
                jd_pdf: "#",
                description: "Brand Officer/Activations",
                image: "/images/angelo.png",
                templateName: "contactTemplate",
                jobDescription0: "Position Title: Activations Support",
                jobDescription1: "Reporting Relationships",
                jobDescription2: "Accountable to :  Las Casas Gaming, Inc.",
                jobDescription3: "Reports to : Marketing Head",
            },
            {
                id: 24,
                parent: 9,
                title: "Vacant",
                jd_pdf: "Digital Marketing Head",
                description: "Digital Marketing Head",
                image: "/images/default_user.jpg",
                itemTitleColor: Colors.Red,
                templateName: "contactTemplate",
                jobDescription0: "Position Title: Marketing/CSR Head",
                jobDescription1: "Reporting Relationships",
                jobDescription2: "Accountable to :  Las Casas Gaming, Inc.",
                jobDescription3:
                    "Reports to : Maria Celerina Gallardo III - Vice President for Operations",
            },
            {
                id: 25,
                parent: 24,
                title: "Vacant",
                jd_pdf: "Digital Marketing Staff",
                description: "Digital Marketing Staff",
                image: "/images/default_user.jpg",
                itemTitleColor: "#ff0000",
                templateName: "contactTemplate",
                jobDescription0: "Position Title: Digital Marketing Staff",
                jobDescription1: "Reporting Relationships",
                jobDescription2: "Accountable to :  Las Casas Gaming, Inc.",
                jobDescription3: "Reports to : AVP Marketing",
            },
            {
                id: 104,
                parent: 9,
                childrenPlacementType: ChildrenPlacementType.Vertical,
                isVisible: false,
            },
            {
                id: 26,
                parent: 104,
                title: "Jayce Aron Go",
                jd_pdf: "Multimedia Artist",
                description: "Multimedia Artist",
                image: "/images/jayce.png",
                templateName: "contactTemplate2",
                jobDescription0: "Position Title: Multimedia Artist",
                jobDescription1: "Reporting Relationships",
                jobDescription2: "Accountable to :  Las Casas Gaming, Inc.",
                jobDescription3: "Reports to : AVP Marketing",
            },
            {
                id: 27,
                parent: 104,
                title: "Vern Ian Montaño Mulano",
                jd_pdf: "Multimedia Artist",
                description: "Multimedia Artist",
                image: "/images/vern.jpg",
                templateName: "contactTemplate2",
                jobDescription0: "Position Title: Multimedia Artist",
                jobDescription1: "Reporting Relationships",
                jobDescription2: "Accountable to :  Las Casas Gaming, Inc.",
                jobDescription3: "Reports to : AVP Marketing",
            },
            {
                id: 28,
                parent: 104,
                title: "Vacant",
                jd_pdf: "Multimedia Artist",
                description: "Multimedia Artist",
                image: "/images/default_user.jpg",
                itemTitleColor: "#ff0000",
                templateName: "contactTemplate",
                jobDescription0: "Position Title: Multimedia Artist",
                jobDescription1: "Reporting Relationships",
                jobDescription2: "Accountable to :  Las Casas Gaming, Inc.",
                jobDescription3: "Reports to : AVP Marketing",
            },
            { id: 108, parent: 12, isVisible: false },
            {
                id: 37,
                parent: 12,
                childrenPlacementType: ChildrenPlacementType.Vertical,
                isVisible: false,
            },
            {
                id: 29,
                parent: 37,
                title: "Mark Kevin Pedregosa",
                jd_pdf: "Customer Service Representative",
                description: "Customer Service Representative",
                image: "/images/kevin.png",
                templateName: "contactTemplate",
                jobDescription0:
                    "Position Title: Customer Service Representative",
                jobDescription1: "Reporting Relationships",
                jobDescription2: "Accountable to :  Las Casas Gaming, Inc.",
                jobDescription3: "Reports to : Maria Celerina Gallardo III",
            },
            {
                id: 30,
                parent: 37,
                title: "Mary Grace Sygaco",
                jd_pdf: "Customer Service Representative",
                description: "Customer Service Representative",
                image: "/images/grace.jpeg",
                templateName: "contactTemplate",
                jobDescription0:
                    "Position Title: Customer Service Representative",
                jobDescription1: "Reporting Relationships",
                jobDescription2: "Accountable to :  Las Casas Gaming, Inc.",
                jobDescription3: "Reports to : Maria Celerina Gallardo III",
            },
            {
                id: 31,
                parent: 37,
                title: "John Fernandez",
                jd_pdf: "Customer Service Representative",
                description: "Customer Service Representative",
                image: "/images/john_csr.jpg",
                templateName: "contactTemplate",
                jobDescription0: "Position Title: Technical Support",
                jobDescription1: "Reporting Relationships",
                jobDescription2: "Accountable to :  Las Casas Gaming, Inc.",
                jobDescription3: "Reports to : Maria Celerina Gallardo III",
            },
            {
                id: 32,
                parent: 108,
                title: "Stephanie Jane Guias",
                jd_pdf: "HR Admin Assist",
                description: "Admin/HR Assistant",
                image: "/images/step.jpg",
                templateName: "contactTemplate2",
                itemTitleColor: Colors.Green,
                jobDescription0: "Position Title: Admin/HR Assistant",
                jobDescription1: "Reporting Relationships",
                jobDescription2: "Accountable to :  Las Casas Gaming, Inc.",
                jobDescription3:
                    "Reports to : Maria Celerina Gallardo III / Admin/HR Head",
            },
            {
                id: 33,
                parent: 32,
                title: "Pamela Balona",
                jd_pdf: "Housekeeping",
                description: "Housekeeping",
                image: "/images/Pam.png",
                templateName: "contactTemplate2",
                itemTitleColor: Colors.Green,
                jobDescription0: "Position Title: Housekeeping",
                jobDescription1: "Reporting Relationships",
                jobDescription2: "Accountable to :  Las Casas Gaming, Inc.",
                jobDescription3:
                    "Reports to : Maria Celerina Gallardo III / Admin/HR Head",
            },
        ];

        // Define department structures (can be expanded with more details if needed)
        this.departments = {
            executives: [0, 1, 2, 3, 4, 5, 6, 8], // IDs of executives and their immediate EAs
            it: [7, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 100, 116], // IDs for IT department
            marketing: [9, 10, 22, 23, 24, 25, 104, 26, 27, 28], // IDs for Marketing department
            admin: [12, 108, 37, 28, 29, 30, 31, 32], // IDs for Admin/CSR related
        };

        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            modalIsOpen: false,
            selectedItem: null,
            displayedItems: this.allOrgItems, // Initially show all items
        };
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    handleResize() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }

    openModal = (item) => {
        this.setState({ modalIsOpen: true, selectedItem: item });
    };

    closeModal() {
        this.setState({ modalIsOpen: false, selectedItem: null });
    }

    downloadFileAtURL = (url) => {
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    };

    // New function to filter items based on department
    filterByDepartment = (departmentKey) => {
        let filteredItems = [];
        if (departmentKey === "all") {
            filteredItems = this.allOrgItems;
        } else if (
            departmentKey === "it" ||
            departmentKey === "marketing" ||
            departmentKey === "admin"
        ) {
            let headId;
            if (departmentKey === "it") {
                headId = 7; // Gino Rafael Dimaano - AVP IT
            } else if (departmentKey === "marketing") {
                headId = 9; // Vacant - AVP Marketing
            } else if (departmentKey === "admin") {
                headId = 12; // Vacant - AVP Administrator & CSR
            }

            const departmentIds = new Set(this.departments[departmentKey]);

            // Start with the department Head
            const departmentHead = this.allOrgItems.find(
                (item) => item.id === headId
            );
            if (departmentHead) {
                filteredItems.push(departmentHead);

                // Recursively add all children of the department Head
                const addChildren = (parentId) => {
                    this.allOrgItems.forEach((item) => {
                        if (
                            item.parent === parentId &&
                            departmentIds.has(item.id)
                        ) {
                            filteredItems.push(item);
                            addChildren(item.id); // Recurse for children's children
                        }
                    });
                };
                addChildren(headId);
            }
        } else {
            // Existing logic for 'executives' and any other potential future filters
            const departmentIds = this.departments[departmentKey];

            const allRelevantIds = new Set(departmentIds);

            let currentFiltered = this.allOrgItems.filter((item) =>
                allRelevantIds.has(item.id)
            );
            let addedParents = new Set();

            let itemsToProcess = [...currentFiltered];
            while (itemsToProcess.length > 0) {
                const item = itemsToProcess.shift();
                if (
                    item.parent !== null &&
                    !allRelevantIds.has(item.parent) &&
                    !addedParents.has(item.parent)
                ) {
                    const parentItem = this.allOrgItems.find(
                        (orgItem) => orgItem.id === item.parent
                    );
                    if (parentItem) {
                        currentFiltered.push(parentItem);
                        allRelevantIds.add(parentItem.id);
                        addedParents.add(parentItem.id);
                        itemsToProcess.push(parentItem);
                    }
                }
            }
            filteredItems = currentFiltered;
        }

        this.setState({ displayedItems: filteredItems });
    };

    render() {
        const { width, height, modalIsOpen, selectedItem, displayedItems } =
            this.state;
        const config = {
            annotations: [
                {
                    annotationType: AnnotationType.HighlightPath,
                    items: [6, 20],
                    color: Colors.Red,
                    lineWidth: 2,
                    opacity: 1,
                    showArrows: true,
                },
            ],
            pageFitMode: PageFitMode.AutoSize,
            highlightItem: 0,
            cursorItem: 2,
            linesWidth: 2,
            linesColor: "black",
            hasSelectorCheckbox: Enabled.False,
            autoSizeMinimum: { width: 0, height: 0 },
            autoSizeMaximum: { width: width, height: height },
            templates: [
                {
                    name: "DepartmentTitleTemplate",
                    isActive: false,
                    itemSize: { width: 100, height: 30 },
                    minimizedItemSize: { width: 3, height: 3 },
                    highlightPadding: { left: 2, top: 2, right: 2, bottom: 2 },
                    onItemRender: ({ context: itemConfig }) => {
                        const itemTitleColor =
                            itemConfig.itemTitleColor != null
                                ? itemConfig.itemTitleColor
                                : Colors.Green;
                        return (
                            <div className="DepartmentTemplate">
                                <div
                                    className="DepartmentTitleBackground"
                                    style={{ backgroundColor: itemTitleColor }}
                                >
                                    <div className="DepartmentTitle">
                                        {itemConfig.title}
                                    </div>
                                </div>
                            </div>
                        );
                    },
                },
                //ITEMS
                {
                    name: "contactTemplate",
                    itemSize: { width: 200, height: 100 },
                    onItemRender: ({ context: item }) => {
                        const itemTitleColor =
                            item.itemTitleColor != null
                                ? item.itemTitleColor
                                : Colors.RoyalBlue;
                        return (
                            <div
                                className="ContactTemplate"
                                onClick={() => this.openModal(item)}
                            >
                                <div
                                    className="ContactTitleBackground"
                                    style={{ backgroundColor: itemTitleColor }}
                                >
                                    <div className="ContactTitle">
                                        {item.title}
                                    </div>
                                </div>
                                <div>
                                    <img
                                        className="ContactPhoto"
                                        src={item.image}
                                        alt={item.title}
                                    />
                                    <div className="ContactDescription">
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        );
                    },
                },
                {
                    name: "contactTemplate2",
                    itemSize: { width: 200, height: 100 },
                    onItemRender: ({ context: item }) => {
                        return (
                            <div
                                className="ContactTemplate2"
                                onClick={() => this.openModal(item)}
                            >
                                <div
                                    className="ContactTitleBackground"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, royalblue 50%, green 50%)",
                                    }}
                                >
                                    <div className="ContactTitle">
                                        {item.title}
                                    </div>
                                </div>
                                <div>
                                    <img
                                        className="ContactPhoto"
                                        src={item.image}
                                        alt={item.title}
                                    />
                                    <div className="ContactDescription">
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        );
                    },
                },
                //HEADS
                {
                    name: "contactTemplate3",
                    itemSize: { width: 200, height: 100 },
                    onItemRender: ({ context: item }) => {
                        return (
                            <div
                                className="ContactTemplate2"
                                onClick={() => this.openModal(item)}
                            >
                                <div
                                    className="ContactTitleBackground"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, orange 50%, green 50%)",
                                    }}
                                >
                                    <div className="ContactTitle">
                                        {item.title}
                                    </div>
                                </div>
                                <div>
                                    <img
                                        className="ContactPhoto"
                                        src={item.image}
                                        alt={item.title}
                                    />
                                    <div className="ContactDescription">
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        );
                    },
                },
                //HEADS-LEO
                {
                    name: "contactTemplate4",
                    itemSize: { width: 200, height: 100 },
                    onItemRender: ({ context: item }) => {
                        return (
                            <div
                                className="ContactTemplate2"
                                onClick={() => this.openModal(item)}
                            >
                                <div
                                    className="ContactTitleBackground"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, yellow 50%, green 50%)",
                                    }}
                                >
                                    <div className="ContactTitle">
                                        {item.title}
                                    </div>
                                </div>
                                <div>
                                    <img
                                        className="ContactPhoto"
                                        src={item.image}
                                        alt={item.title}
                                    />
                                    <div className="ContactDescription">
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        );
                    },
                },
            ],
            items: displayedItems, // Use the filtered items here
        };

        return (
            <>
                <div className="teams">
                    <h1>Las Casas Gaming, Inc.</h1>
                    <h2>Organization Chart</h2>
                    <button
                        className="modal-download-button"
                        onClick={() => this.downloadFileAtURL(ORGCHART)}
                    >
                        Download Organization Chart
                    </button>
                    <div className="department-buttons">
                        <button
                            onClick={() =>
                                this.filterByDepartment("executives")
                            }
                        >
                            Executives
                        </button>
                        <button onClick={() => this.filterByDepartment("it")}>
                            IT
                        </button>
                        <button
                            onClick={() => this.filterByDepartment("marketing")}
                        >
                            Marketing
                        </button>
                        <button
                            onClick={() => this.filterByDepartment("admin")}
                        >
                            Admin & CSR
                        </button>
                        <button onClick={() => this.filterByDepartment("all")}>
                            Show All
                        </button>
                    </div>
                </div>
                <div className="org-container">
                    <div className="team">
                        <div>
                            <OrgDiagram centerOnCursor={true} config={config} />
                        </div>
                    </div>
                </div>
                <Modal isOpen={modalIsOpen} onRequestClose={this.closeModal}>
                    {selectedItem && (
                        <div
                            style={{
                                backgroundImage: "url(/images/modal-bg1.jpeg)",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                borderRadius: "8px",
                            }}
                        >
                            <button
                                className="modal-close-button-x"
                                onClick={this.closeModal}
                            >
                                ×
                            </button>
                            <h3>{selectedItem.title}</h3>
                            <div className="job-description">
                                <p>{selectedItem.jobDescription0}</p>
                                <p>{selectedItem.jobDescription1}</p>
                                <p>{selectedItem.jobDescription2}</p>
                                <p>{selectedItem.jobDescription3}</p>
                            </div>
                            <div className="modal-buttons">
                                {JOB_DESCRIPTIONS[selectedItem.jd_pdf] && (
                                    <button
                                        className="modal-download-button"
                                        onClick={() =>
                                            this.downloadFileAtURL(
                                                JOB_DESCRIPTIONS[
                                                    selectedItem.jd_pdf
                                                ]
                                            )
                                        }
                                    >
                                        Download Job Description PDF
                                    </button>
                                )}
                                {ORGCHART[selectedItem.jd_pdf] && ( // This condition seems incorrect if ORGCHART is a single URL, not an object.
                                    <button
                                        className="modal-download-button"
                                        onClick={() =>
                                            this.downloadFileAtURL(
                                                ORGCHART[selectedItem.jd_pdf]
                                            )
                                        }
                                    >
                                        Download Organization Chart PDF
                                    </button>
                                )}
                                {JOB_KPI[selectedItem.jd_pdf] && (
                                    <button
                                        className="modal-download-button"
                                        onClick={() =>
                                            this.downloadFileAtURL(
                                                JOB_KPI[selectedItem.jd_pdf]
                                            )
                                        }
                                    >
                                        Download KPI PDF
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                </Modal>
            </>
        );
    }
}

export default Team;
