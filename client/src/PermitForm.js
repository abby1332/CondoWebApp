import { useForm } from "react-hook-form";
import styles from './PermitForm.module.css';

function PermitForm() {
  const { register, handleSubmit, getValues, formState: { errors } } = useForm();
  const today = new Date()
  const minCheckInDate = addDays(today, 7);
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.title}>Parking Permit Application</h2>
      <p className={styles.subtitle}>Minimum 7 day/6 night stay.</p>
      <p className={styles.info}>This page will help if you have already contracted to rent
        at Madeira Beach Yacht Club. The information on this form is required to be filled in and
        submitted 7 days prior to rental date. The Gate/Amenity fee is a one time
        non-refundable fee of $50.00 per unit.
      </p>

      <div className={styles.hook}>
        <div className={styles.field}>
          <label className={styles.text}>First Name</label>
          <input type="text" className={styles.input} {...register("firstName", { required: true })} />
          {errors.firstName && <p className={styles.error}>First name is required</p>}
        </div>

        <div className={styles.field}>
          <label className={styles.text}>Last Name</label>
          <input type="text" className={styles.input} {...register("lastName", { required: true })} />
          {errors.lastName && <p className={styles.error}>Last name is required</p>}
        </div>

        <div className={styles.field}>
          <label className={styles.text}>Contact Number</label>
          <input type="tel" className={styles.input} {...register("contactNumber", { required: true })} />
          {errors.contactNumber && <p className={styles.error}>Contact number is required</p>}
        </div>

        <div className={styles.field}>
          <label className={styles.text}>Email</label>
          <input type="email" className={styles.input} {...register("email", { required: true })} />
          {errors.email && <p className={styles.error}>Valid email is required</p>}
        </div>

        <div className={styles.field}>
          <label className={styles.text}>Check-In Date</label>
          <input type="date" 
           min={minCheckInDate.toISOString().split("T")[0]}
           className={styles.input} {...register("checkIn", { 
            required: "Check-in date is required",
            validate: (value) => {
                const selected = new Date(value);
                return selected >= minCheckInDate || "Check-in must be at least 7 days from today";
            },
          })} />
          {errors.checkIn && <p className={styles.error}>{errors.checkIn.message}</p>}
        </div>

        <div className={styles.field}>
          <label className={styles.text}>Check-Out Date</label>
          <input type="date" className={styles.input} {...register("checkOut", { 
            required: "Check-out date is required",
            validate: (value) => {
                const checkIn = new Date(getValues("checkIn"));
                const checkOut = new Date(value);
                const diff = (checkOut - checkIn) / (1000 * 60 * 60 * 24);
                return diff >= 7 || "Check-out must be at least 7 days after check-in"
            }
          })} />
          {errors.checkOut && <p className={styles.error}>{errors.checkOut.message}</p>}
        </div>

        <div className={styles.field}>
          <label className={styles.text}>Building Number</label>
          <input type="text" className={styles.input} {...register("buildingNo", { required: true })} />
          {errors.buildingNo && <p className={styles.error}>Building number is required</p>}
        </div>

        <div className={styles.field}>
          <label className={styles.text}>Vehicle Make and Model</label>
          <input type="text" className={styles.input} {...register("vehicleMake", { required: true })} />
          {errors.vehicleMake && <p className={styles.error}>Vehicle make/model is required</p>}
        </div>

        <div className={styles.field}>
          <label className={styles.text}>Vehicle Color</label>
          <input type="text" className={styles.input} {...register("vehicleColor", { required: true })} />
          {errors.vehicleColor && <p className={styles.error}>Vehicle color is required</p>}
        </div>

        <div className={styles.field}>
          <label className={styles.text}>License Plate Number</label>
          <input type="text" className={styles.input} {...register("vehiclePlate", { required: true })} />
          {errors.vehiclePlate && <p className={styles.error}>License plate is required</p>}
        </div>

        <div className={styles.field}>
          <label className={styles.text}>Vehicle State</label>
          <input type="text" className={styles.input} {...register("vehicleState", { required: true })} />
          {errors.vehicleState && <p className={styles.error}>Vehicle state is required</p>}
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button className={styles["custom-btn"]} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export default PermitForm;
