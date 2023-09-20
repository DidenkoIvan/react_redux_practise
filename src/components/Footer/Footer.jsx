import "./Footer.scss";

function Footer() {

    const monthsInWords = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];

    const year = new Date().getFullYear()
    const month = monthsInWords[new Date().getMonth()]
    const day = new Date().getDay()

    return (
            <div className="footer">Made by Didenko Ivan <br/> {day} - {month} - {year}   
            </div>
    )
}

export default Footer;