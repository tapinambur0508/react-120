import { useId } from "react";

import css from "./OrderForm.module.css";

export default function OrderForm() {
  const id = useId();

  const handleSubmit = (formData: FormData) => {
    // Solution 1
    const username = formData.get("username");
    const email = formData.get("email");
    const delivery = formData.get("delivery");

    console.log({ username, email, delivery });

    // Solution 2
    console.log(Object.fromEntries(formData));
  };

  return (
    <form action={handleSubmit} className={css.form}>
      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Client info:</legend>
        <label className={css.label} htmlFor={`${id}-username`}>
          Name
        </label>
        <input
          className={css.input}
          type="text"
          name="username"
          id={`${id}-username`}
        />

        <label className={css.label} htmlFor={`${id}-email`}>
          Email
        </label>
        <input
          className={css.input}
          type="email"
          name="email"
          id={`${id}-email`}
        />
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Delivery method:</legend>
        <label className={css.option}>
          <input type="radio" name="delivery" value="pickup" defaultChecked />{" "}
          Pickup
        </label>
        <label className={css.option}>
          <input type="radio" name="delivery" value="courier" /> Courier
        </label>
        <label className={css.option}>
          <input type="radio" name="delivery" value="drone" /> Drone delivery
        </label>
      </fieldset>

      <button type="submit" className={css.button}>
        Place order
      </button>
    </form>
  );
}
