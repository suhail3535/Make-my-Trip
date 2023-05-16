import { useState } from "react";
import styles from "./ContactForm.module.css";
import { BookingDetails } from "./BookingDetails";

let initialState = {
    name: "",
    lastname: "",
    gender: "",
};

export const Form = () => {
    const [name, setName] = useState("");
    const [lastname, setlastName] = useState("");
    const [gender, setGender] = useState("");

    const handleSave = (e) => {
        e.preventDefault();
        const data = {
            name,
            lastname,
            gender,
        };

        localStorage.setItem("myData", JSON.stringify(data));
    };

    const handleInputChange1 = (event) => {
        setName(event.target.value);
    };

    const handleInputChange2 = (event) => {
        setlastName(event.target.value);
    };

    const handleInputChange3 = (event) => {
        setGender(event.target.value);
    };

    return (
        <>
            <div className={styles.FormDiv}>
                <div
                    style={{
                        width: "100%",
                        display: "grid",
                        gridTemplateColumns: "auto auto",
                        textAlign: "left",
                    }}>
                    <h2 style={{ marginLeft: "-5%" }}>ADULT</h2>
                    <p style={{ marginLeft: "75%", color: "aquamarine" }}>
                        1/1 Selected
                    </p>
                </div>
                <div>
                    <div className={styles.shading}>
                        <div
                            style={{
                                width: "100%",
                                display: "grid",
                                gridTemplateColumns: "10% 70% 20%",
                                textAlign: "left",
                            }}>
                            <span>
                                <input type="checkbox"></input>
                            </span>
                            <span
                                style={{
                                    fontWeight: "900",
                                    fontSize: "larger",
                                    marginTop: "-1%",
                                    marginLeft: "-5%",
                                }}>
                                ADULT 1
                            </span>
                            <span className={styles.incomplete}>
                                INCOMPLETE
                            </span>
                        </div>
                        <p style={{ fontSize: "smaller", fontWeight: "bold" }}>
                            IMPORTANT: Enter your name as it is mentioned on
                            your passport or any governement approved ID
                        </p>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}>
                            <form
                                style={{ display: "inline-block" }}
                                onSubmit={handleSave}>
                                <input
                                    className={styles.details}
                                    placeholder="First & Middle Name"
                                    name="name"
                                    value={name}
                                    id="name"
                                    onChange={handleInputChange1}
                                />

                                <input
                                    placeholder="Last Name"
                                    className={styles.details}
                                    name="lastName"
                                    value={lastname}
                                    onChange={handleInputChange2}
                                />
                            </form>
                            <div>
                                <input
                                    type="radio"
                                    name="gender"
                                    value={gender}
                                    onChange={handleInputChange3}
                                />
                                <label>MALE</label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                <label>FEMALE</label>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleSave} className={styles.addAdult}>
                        +ADD ADULT
                    </button>
                </div>
            </div>
            <BookingDetails />
        </>
    );
};
