import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default function PermitForm() {
    const submitForm = (e) => {
        e.preventDefault()
        console.log({})
        const formData = new FormData(e.currentTarget);
        for(let [key, value] of formData.entries()) {
            console.log({key, value});
        }
    }

    return (
        <Form onSubmit={(submitForm)}>
            <input name="firstName" type="text" placeholder="First Name"/>
            <input name="lastName" type="text" placeholder="Last Name"/>
            <input name="contactNum" type="tel" placeholder="Contact Number"/>
            <input name="email" type="email" placeholder="Email"/>
            <input name="checkIn" type="date" placeholder="Check in date"/>
            <input name="checkOut" type="date" placeholder="Check out date"/>
            <input name="buildingNo" type = "text" placeholder="Building Number"/>
            <input name="unitNo" type="text" placeholder="Unit Number"/>
            <input name="vehicleMake" type="text" placeholder="Vehicle Make/Model"/>
            <input name="vehicleColor" type="text" placeholder="Vehicle Color"/>
            <input name="vehiclePlate" type="text" placeholder="Vehicle License Plate Number"/>
            <input name="vehicleState" type="text" placeholder="Vehicle State"/>
            <Button type="submit">Submit</Button>
        </Form>
    )
}