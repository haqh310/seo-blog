"use strict";
exports.id = 132;
exports.ids = [132];
exports.modules = {

/***/ 5132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ form_ContactForm)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "isomorphic-fetch"
var external_isomorphic_fetch_ = __webpack_require__(6583);
var external_isomorphic_fetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_fetch_);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(3346);
;// CONCATENATED MODULE: ./actions/form.js


const emailContactForm = (data)=>{
    let emailEndpoint;
    if (data.authorEmail) {
        emailEndpoint = `${config/* API */.bl}/contact-blog-author`;
    } else {
        emailEndpoint = `${config/* API */.bl}/contact`;
    }
    return external_isomorphic_fetch_default()(`${emailEndpoint}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err));
};

;// CONCATENATED MODULE: ./components/form/ContactForm.js



const ContactForm = ({ authorEmail  })=>{
    const [values, setValues] = (0,external_react_.useState)({
        message: "",
        name: "",
        email: "",
        sent: false,
        buttonText: "Send Message",
        success: false,
        error: false
    });
    const { message , name , email , sent , buttonText , success , error  } = values;
    const handleSubmit = (e)=>{
        e.preventDefault();
        setValues({
            ...values,
            buttonText: "Sending..."
        });
        emailContactForm({
            authorEmail,
            name,
            email,
            message
        }).then((data)=>{
            if (data.error) {
                setValues({
                    ...values,
                    error: data.error
                });
            } else {
                setValues({
                    ...values,
                    sent: true,
                    name: "",
                    email: "",
                    message: "",
                    buttonText: "Sent",
                    success: data.success
                });
            }
        });
    };
    const handleChange = (name)=>(e)=>{
            setValues({
                ...values,
                [name]: e.target.value,
                error: false,
                success: false,
                buttonText: "Send Message"
            });
        };
    const showSuccessMessage = ()=>success && /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "alert alert-info",
            children: "Thank you for contacting us."
        });
    const showErrorMessage = ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "alert alert-danger",
            style: {
                display: error ? "" : "none"
            },
            children: error
        });
    const contactForm = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
            onSubmit: handleSubmit,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "lead",
                            children: "Message"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                            onChange: handleChange("message"),
                            className: "form-control",
                            value: message,
                            required: true,
                            rows: 10
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "lead",
                            children: "Name"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            onChange: handleChange("name"),
                            className: "form-control",
                            value: name,
                            required: true
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "lead",
                            children: "Email"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "email",
                            onChange: handleChange("email"),
                            className: "form-control",
                            value: email,
                            required: true
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "btn btn-primary",
                        children: buttonText
                    })
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            showSuccessMessage(),
            showErrorMessage(),
            contactForm()
        ]
    });
};
/* harmony default export */ const form_ContactForm = (ContactForm);


/***/ })

};
;