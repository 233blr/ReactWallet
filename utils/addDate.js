const addDate = () => new Date(data.date).toUTCString().slice(5, 22);

export default addDate;
