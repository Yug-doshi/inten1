import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import * as Yup from "yup";
import { useFormik } from "formik";
import emailjs from "emailjs-com";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.string().required("Phone number is required"),
  sender: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const Contact_Jainam = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      sender: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const contactCollectionRef = collection(db, "contactForms");
        await addDoc(contactCollectionRef, values);

        // Reset the form after submission
        formik.resetForm();
      } catch (error) {
        console.error("Error adding contact form data:", error);
      }
    },
  });

  return (
    <>
      <section className="w3l-contact-main py-4" id="contact">
        <div className="container py-lg-4 py-md-3">
          <div className="w3header-section text-center mb-md-5 mb-4">
            <h6 className="title-subhny">Contact Info</h6>
            <h3 className="title-w3l mb-5">
              If you encounter any issues or have questions in website,
              <br /> please feel free to contact me.
            </h3>
          </div>

          <div className="w3l-contact-info">
            <div className="row contact-infos">
              {/* Address */}
              <div className="col-lg-4 col-md-6">
                <div className="single-contact-infos">
                  <div className="icon-box">
                    <span className="fas fa-map-marked-alt"></span>
                  </div>
                  <div className="text-box">
                    <h3 className="mb-2">Address</h3>
                    <p>
                      Arihant, Juna Junction Arihant
                      Park,Surendranagar,Gujarat,India{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/* Phone */}
              <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                <div className="single-contact-infos">
                  <div className="icon-box">
                    <span className="fas fa-phone-alt"></span>
                  </div>
                  <div className="text-box">
                    <h3 className="mb-2">Phone</h3>
                    <p>
                      <a href="tel:+91 7990480799">+91 7990480799</a>
                    </p>
                    <p>
                      <a href="tel:+91 9428291159">+91 9428291159</a>
                    </p>
                  </div>
                </div>
              </div>
              {/* Email */}
              <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                <div className="single-contact-infos">
                  <div className="icon-box">
                    <span className="fas fa-envelope-open-text"></span>
                  </div>
                  <div className="text-box">
                    <h3 className="mb-2">Email</h3>
                    <p>
                      <a href="mailto:jvora7990@gmail.com">
                        jvora7990@gmail.com
                      </a>
                    </p>
                    <p>
                      <a href="mailto:moxit84@gmail.com">moxit84@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-contact-main" id="contact">
        <div className="contact-infhny py-1">
          <div className="container py-lg-1">
            <div className="top-map">
              <div className="map-content-9">
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-top1">
                    <div className="w3header-section text-center">
                      <h6 className="title-subhny">Get In Touch</h6>
                      <h3 className="title-w3l mb-0">
                        Fill the form and send your query
                      </h3>
                      <p className="mb-lg-5 mb-4 text-center">
                        "Trouble navigating the website? Let us know, we're here
                        to assist!"
                        <br />
                        "Encountering issues on the website? Reach out for quick
                        solutions!"
                      </p>
                    </div>
                    <div className="form-top">
                      <div className="form-top-left">
                        <input
                          type="text"
                          name="name"
                          id="w3lName"
                          placeholder="Name"
                          required
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && formik.errors.name && (
                          <p className="error-message">{formik.errors.name}</p>
                        )}

                        <input
                          type="number"
                          name="phone"
                          placeholder="Phone number"
                          required
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.phone && formik.errors.phone && (
                          <p className="error-message">{formik.errors.phone}</p>
                        )}

                        <input
                          type="email"
                          name="sender"
                          id="w3lSender"
                          placeholder="Email*"
                          required
                          value={formik.values.sender}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.sender && formik.errors.sender && (
                          <p className="error-message">
                            {formik.errors.sender}
                          </p>
                        )}

                        <input
                          type="text"
                          name="subject"
                          id="w3lSubject"
                          placeholder="Subject"
                          required
                          value={formik.values.subject}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.subject && formik.errors.subject && (
                          <p className="error-message">
                            {formik.errors.subject}
                          </p>
                        )}
                      </div>
                      <div className="form-top-righ">
                        <textarea
                          name="message"
                          id="w3lMessage"
                          placeholder="Message*"
                          required
                          value={formik.values.message}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        ></textarea>
                        {formik.touched.message && formik.errors.message && (
                          <p className="error-message">
                            {formik.errors.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="text-lg-right text-center">
                      <button
                        type="submit"
                        className="btn btn-style btn-primary"
                      >
                        Submit Now <i className="fas fa-paper-plane ms-2"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact_Jainam;