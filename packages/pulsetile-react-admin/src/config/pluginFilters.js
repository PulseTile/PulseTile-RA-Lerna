/**
 * This component returns array of fields for filtering
 * (core plugins)
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @return {shape}
 */
export default {
    allergies: ['cause', 'reaction'],
    contacts: ['name', 'relationship'],
    problems: ['problem'],
    medications: ['name'],
    vaccinations: ['vaccinationName'],
    top3Things: [],
    labresults: ['testName'],
    events: ['name', 'type'],
};
