export const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const ageLabel = (age: number | null) => {
    if (!age) return '';
    if (age % 10 === 1 && age % 100 !== 11) return 'год';
    if (age % 10 < 5 && age % 10 > 1 && !(age % 100 > 11 && age % 100 < 15)) return 'года'
    else return 'лет';
};