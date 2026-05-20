import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import styles from "../style/Forms.module.css"

export default function Forms() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const [loading, setLoading] = useState(false);

  const password = watch("password");

  const onSubmit = async (data) => {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    reset()
}

  return (
<div>
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formsContainer}>
     <h1>Forms</h1>
     <div className={styles.inputDivs}>
      <label>Enter Name:</label>
      <input
      className=""
        type="text"
        placeholder="Full Name"
        {...register("name", {
          required: "Name is required",
          minLength: {
            value: 3,
            message: "Minimum 3 characters",
          },
        })}
      />

      {errors.name && <p className={styles.errorMessage}>{errors.name.message}</p>}
     </div>
    <div className={styles.inputDivs}>
     <label>Enter Email:</label>
      <input
        type="email"
        placeholder="Email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email",
          },
        })}
      />

      {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
     </div>
    <div className={styles.inputDivs}>  
     <label>Enter Password:</label>
      <input
        type="password"
        placeholder="Password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Minimum 6 characters",
          },
        })}
      />
      {errors.password && <p className={styles.errorMessage}>{errors.password.message}</p>}
    </div>
     <div className={styles.dropDownDiv}>
      <label className="genderLabel">
        <input
          type="radio"
          value="Male"
          {...register("gender", {
            required: "Select gender",
          })}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          value="Female"
          {...register("gender")}
        />
        Female
      </label>
     </div>
      {errors.gender && <p className={styles.errorMessage}>{errors.gender.message}</p>}

      {/* Country */}
     <div className={styles.countryDropDown}>
       <select 
        {...register("country", {
          required: "Select country",
        })}
      >
        <option value="">Select State</option>
        <option value="India">Andhra Pradesh</option>
        <option value="USA">Arunachal Pradesh</option>
        <option value="USA">Assam</option>
        <option value="USA">Bihar</option>
        <option value="USA">Chhattisgarh</option>
        <option value="USA">Goa</option>
        <option value="USA">Gujarat</option>
        <option value="USA">Haryana</option>
        <option value="USA">Himachal Pradesh</option>
        <option value="USA">Jharkhand</option>
        <option value="USA">Karnataka</option>
        <option value="USA">Kerala</option>
        <option value="USA">Madhya Pradesh </option>
        <option value="USA">Maharashtra</option>
        <option value="USA">Manipur</option>
        <option value="USA">Meghalaya</option>
        <option value="USA">Mizoram</option>
        <option value="USA">Nagaland</option>
        <option value="USA">Odisha</option>
        <option value="USA">Punjab</option>
        <option value="USA">Rajasthan</option>
        <option value="USA">Sikkim</option>
        <option value="USA">Tamil Nadu</option>
        <option value="USA">Telangana</option>
        <option value="USA">Tripura</option>
        <option value="USA">Uttar Pradesh</option>
        <option value="USA">Uttarakhand</option>
        <option value="USA">West Bengal</option>

      </select>
     </div> 
      {errors.country && <p className={styles.errorMessage}>{errors.country.message}</p>}

      {/* Message */}
     <div className={styles.inputDivs}>
       <textarea className={styles.textArea}
        placeholder="Message"
        {...register("message", {
          required: "Message is required",
        })}
      />

      {errors.message && <p className={styles.errorMessage}>{errors.message.message}</p>}
     </div>
      <button type="submit" className={styles.submitButton}>
        {loading ? "Submitting..." : "Submit"}
      </button>

    </form>
</div>
  );
}