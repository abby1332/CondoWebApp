import { useForm } from "react-hook-form";
import styles from './PermitForm.module.css';

function PermitForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.hook__title}>Parking Permit Application</h2>
      <p className={styles.hook__subtitle}>Please fill out all fields before submitting.</p>

      <div className={styles.hook}>
        <div className={styles.hook__field}>
          <label className={styles.hook__text}>First Name</label>
          <input type="text" className={styles.hook__input} {...register("firstName", { required: true })} />
          {errors.firstName && <p className={styles.hook__error}>First name is required</p>}
        </div>

        <div className={styles.hook__field}>
          <label className={styles.hook__text}>Last Name</label>
          <input type="text" className={styles.hook__input} {...register("lastName", { required: true })} />
          {errors.lastName && <p className={styles.hook__error}>Last name is required</p>}
        </div>

        <div className={styles.hook__field}>
          <label className={styles.hook__text}>Contact Number</label>
          <input type="tel" className={styles.hook__input} {...register("contactNumber", { required: true })} />
          {errors.contactNumber && <p className={styles.hook__error}>Contact number is required</p>}
        </div>

        <div className={styles.hook__field}>
          <label className={styles.hook__text}>Email</label>
          <input type="email" className={styles.hook__input} {...register("email", { required: true })} />
          {errors.email && <p className={styles.hook__error}>Valid email is required</p>}
        </div>

        <div className={styles.hook__field}>
          <label className={styles.hook__text}>Check-In Date</label>
          <input type="date" className={styles.hook__input} {...register("checkIn", { required: true })} />
          {errors.checkIn && <p className={styles.hook__error}>Check-in date is required</p>}
        </div>

        <div className={styles.hook__field}>
          <label className={styles.hook__text}>Check-Out Date</label>
          <input type="date" className={styles.hook__input} {...register("checkOut", { required: true })} />
          {errors.checkOut && <p className={styles.hook__error}>Check-out date is required</p>}
        </div>

        <div className={styles.hook__field}>
          <label className={styles.hook__text}>Building Number</label>
          <input type="text" className={styles.hook__input} {...register("buildingNo", { required: true })} />
          {errors.buildingNo && <p className={styles.hook__error}>Building number is required</p>}
        </div>

        <div className={styles.hook__field}>
          <label className={styles.hook__text}>Vehicle Make and Model</label>
          <input type="text" className={styles.hook__input} {...register("vehicleMake", { required: true })} />
          {errors.vehicleMake && <p className={styles.hook__error}>Vehicle make/model is required</p>}
        </div>

        <div className={styles.hook__field}>
          <label className={styles.hook__text}>Vehicle Color</label>
          <input type="text" className={styles.hook__input} {...register("vehicleColor", { required: true })} />
          {errors.vehicleColor && <p className={styles.hook__error}>Vehicle color is required</p>}
        </div>

        <div className={styles.hook__field}>
          <label className={styles.hook__text}>License Plate Number</label>
          <input type="text" className={styles.hook__input} {...register("vehiclePlate", { required: true })} />
          {errors.vehiclePlate && <p className={styles.hook__error}>License plate is required</p>}
        </div>

        <div className={styles.hook__field}>
          <label className={styles.hook__text}>Vehicle State</label>
          <input type="text" className={styles.hook__input} {...register("vehicleState", { required: true })} />
          {errors.vehicleState && <p className={styles.hook__error}>Vehicle state is required</p>}
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

export default PermitForm;
