const formatDate = (date) => {
    // Format date to "DD/MM/YYYY" format
    return new Intl.DateTimeFormat("en-US", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
    }).format(new Date(date));
};

export default formatDate;