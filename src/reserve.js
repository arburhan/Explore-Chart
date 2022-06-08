const handleWeekly = () => {
    fetch('Weekly.json')
        .then(res => res.json())
        .then(data => console.log(data))

}
const handleMonthly = () => {
    fetch('Monthly.json')
        .then(res => res.json())
        .then(data => console.log(data))

}
const handleYearly = () => {
    fetch('Yearly.json')
        .then(res => res.json())
        .then(data => console.log(data))

}