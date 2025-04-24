import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default function PermitForm() {
    const submitForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
    
        fetch('http://localhost:8080/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(result => {
            console.log('Success:', result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };
    
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