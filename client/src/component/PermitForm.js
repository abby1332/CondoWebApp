import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import styles from './PermitForm.module.css';

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export default function PermitForm() {
  const { register, handleSubmit, getValues, formState: { errors } } = useForm();
  const today = new Date();
  const minCheckInDate = addDays(today, 7);

  const [isLoading, setIsLoading] = useState(false);
  const [responseStatus, setResponseStatus] = useState(null);

  const onSubmit = async (data) => {
    setIsLoading(true);
    setResponseStatus(null);

    try {
      fetch('http://localhost:8080/api', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      })
      .then(response => {
        if(!response.ok) throw new Error('Server error');
        return response.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        window.open(url, '_blank');
        setResponseStatus('success');
      })

    } catch (err) {
      setResponseStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.title}>Parking Permit Application</h2>
      <p className={styles.subtitle}>Minimum 7 day/6 night stay.</p>
      <p className={styles.info}>
        This page will help if you have already contracted to rent at Madeira Beach Yacht Club.
        The information on this form is required to be filled in and submitted 7 days prior to rental date.
        The Gate/Amenity fee is a one-time non-refundable fee of $50.00 per unit.
      </p>

      <div className={styles.hook}>
        <Input label="First Name" name="firstName" register={register} errors={errors} />
        <Input label="Last Name" name="lastName" register={register} errors={errors} />
        <Input label="Contact Number" name="contactNumber" type="tel" register={register} errors={errors} />
        <Input label="Email" name="email" type="email" register={register} errors={errors} />

        <div className={styles.field}>
          <label className={styles.text}>Check-In Date</label>
          <input
            type="date"
            className={styles.input}
            min={minCheckInDate.toISOString().split("T")[0]}
            {...register("checkIn", {
              required: "Check-in date is required",
              validate: (value) => {
                const selected = new Date(value);
                return selected >= minCheckInDate || "Check-in must be at least 7 days from today";
              },
            })}
          />
          {errors.checkIn && <p className={styles.error}>{errors.checkIn.message}</p>}
        </div>

        <div className={styles.field}>
          <label className={styles.text}>Check-Out Date</label>
          <input
            type="date"
            className={styles.input}
            {...register("checkOut", {
              required: "Check-out date is required",
              validate: (value) => {
                const checkIn = new Date(getValues("checkIn"));
                const checkOut = new Date(value);
                const diff = (checkOut - checkIn) / (1000 * 60 * 60 * 24);
                return diff >= 7 || "Check-out must be at least 7 days after check-in";
              },
            })}
          />
          {errors.checkOut && <p className={styles.error}>{errors.checkOut.message}</p>}
        </div>

        <Input label="Building Number" name="buildingNo" register={register} errors={errors} />
        <Input label="Vehicle Make and Model" name="vehicleMake" register={register} errors={errors} />
        <Input label="Vehicle Color" name="vehicleColor" register={register} errors={errors} />
        <Input label="License Plate Number" name="vehiclePlate" register={register} errors={errors} />
        <Input label="Vehicle State" name="vehicleState" register={register} errors={errors} />
      </div>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Button className={styles["custom-btn"]} type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
              {' '}Submitting...
            </>
          ) : (
            'Submit'
          )}
        </Button>
      </div>

      {responseStatus === 'success' && (
        <Alert variant="success" className="mt-3 text-center">
          Parking Permit Successfully Created
        </Alert>
      )}
      {responseStatus === 'error' && (
        <Alert variant="danger" className="mt-3 text-center">
        <strong>Error:</strong> There was an error submitting the form. Please try again.
      </Alert>
      )}
    </form>
  );
}

// Reusable input field component
function Input({ label, name, type = "text", register, errors }) {
  return (
    <div className={styles.field}>
      <label className={styles.text}>{label}</label>
      <input type={type} className={styles.input} {...register(name, { required: `${label} is required` })} />
      {errors[name] && <p className={styles.error}>{errors[name].message}</p>}
    </div>
  );
}
