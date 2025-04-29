import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

export default function PermitForm() {
    const [isLoading, setIsLoading] = useState(false);
    const[responseStatus, setResponseStatus] = useState(null);
    const submitForm = async (e) => {
        setIsLoading(true);
        setResponseStatus(null);
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        
        try {
            const response = await fetch('http://localhost:8080/api', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data),
            });
      
            if (!response.ok) throw new Error('Server error');
      
            setResponseStatus('success');
          } catch (err) {
            setResponseStatus('error');
          } finally {
            setIsLoading(false);
          }
        };
    
    return (
        <>
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
            
            <Button type="submit" disabled={isLoading}>
            {isLoading ? (
                <>
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                {' '}Submitting...
                </>
                ) : (
                'Submit'
             )}
            </Button>
        </Form>

        {responseStatus === 'success' && (
            <Alert variant="success" className="mt-3">
            Parking Permit Successfully Created
            </Alert>
        )}
        {responseStatus === 'error' && (
            <Alert variant="danger" className="mt-3">
            There was an error submitting the form. Please try again.
            </Alert>
        )}
        </>
    );
}