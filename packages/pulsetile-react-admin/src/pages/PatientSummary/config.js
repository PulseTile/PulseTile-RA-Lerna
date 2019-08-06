import get from "lodash/get";
import {
    faAllergies,
    faPhone,
    faCapsules,
    faNotesMedical,
    faClinicMedical,
    faProcedures,
    faBriefcaseMedical,
    faMicroscope,
    faUserMd,
    faAmbulance,
    faSyringe,
    faHeartbeat,
    faStethoscope
} from '@fortawesome/free-solid-svg-icons';

/**
 * This function returns data for patient summary page
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @return {array}
 */
export const totalSynopsisData = [
    {
        id: "block-problems",
        title: "Problems / Issues",
        list: "problems",
        icon: faNotesMedical,
        isActive: true,
        isSynopsis: true,
        description: "The key problems that affect your health, some with clear diagnoses from your doctor",
    },
    {
        id: "block-medications",
        title: "Medications",
        list: "medications",
        icon: faCapsules,
        isActive: true,
        isSynopsis: true,
        description: "The medical tablets and other medications that you take regularly for your health care",
    },
    {
        id: "block-allergies",
        title: "Allergies",
        list: "allergies",
        icon: faAllergies,
        isActive: true,
        isSynopsis: true,
        description: "Those things that your body reacts against, that you have an allergy to",
    },
    {
        id: "block-contacts",
        title: "Contacts",
        list: "contacts",
        icon: faPhone,
        isActive: true,
        isSynopsis: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "block-clinicalNotes",
        title: "Clinical Notes",
        list: "clinicalnotes",
        icon: faClinicMedical,
        isActive: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "block-MDT",
        title: "MDT",
        list: "mdtreports",
        icon: faNotesMedical,
        isActive: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "block-personalNotes",
        title: "Personal Notes",
        list: "personalnotes",
        icon: faClinicMedical,
        isActive: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "block-procedures",
        title: "Procedures",
        list: "procedures",
        icon: faProcedures,
        isActive: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "block-referrals",
        title: "Referrals",
        list: "referrals",
        icon: faBriefcaseMedical,
        isActive: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "block-labresults",
        title: "Results",
        list: "labresults",
        icon: faMicroscope,
        isActive: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "block-top3Things",
        title: "Top Three Things",
        list: "top3Things",
        icon: faUserMd,
        isActive: true,
        isSynopsis: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "block-toc",
        title: "Transfers Of Care",
        list: "toc",
        icon: faAmbulance,
        isActive: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "block-vaccinations",
        title: "Vaccinations",
        list: "vaccinations",
        icon: faSyringe,
        isActive: true,
        isSynopsis: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "block-vitalsigns",
        title: "Vitals",
        list: "vitalsigns",
        icon: faHeartbeat,
        isActive: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "block-events",
        title: "Events",
        list: "events",
        icon: faStethoscope,
        isActive: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

export const synopsisData = totalSynopsisData.filter(item => item.isActive);

export const SHOW_HEADING = 'heading';
export const SHOW_ALL = 'headingAndList';

export const showModesArray = [
    { type: SHOW_HEADING, label: "Headings" },
    { type: SHOW_ALL, label: "Headings + List" },
];

export function getHeadingsLists() {
    let result = [];
    synopsisData.forEach(item => {
        result.push(item.list);
    });
    return result;
}

export function getSynopsisProps(state) {
    let result = {};
    synopsisData.forEach(item => {
        const reducerName = item.list + 'Synopsis';
        result[item.list] = get(state, ['custom', reducerName, 'data'], []);
    });
    return result;
}