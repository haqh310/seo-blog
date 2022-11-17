"use strict";
exports.id = 979;
exports.ids = [979];
exports.modules = {

/***/ 1644:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1791);
/* harmony import */ var _node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_quill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5784);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9110);
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2763);
/* harmony import */ var _actions_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9540);
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(448);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_auth__WEBPACK_IMPORTED_MODULE_6__, _actions_category__WEBPACK_IMPORTED_MODULE_7__, _actions_tag__WEBPACK_IMPORTED_MODULE_8__, _actions_blog__WEBPACK_IMPORTED_MODULE_9__]);
([_actions_auth__WEBPACK_IMPORTED_MODULE_6__, _actions_category__WEBPACK_IMPORTED_MODULE_7__, _actions_tag__WEBPACK_IMPORTED_MODULE_8__, _actions_blog__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 2586, 23)), {
    loadableGenerated: {
        modules: [
            "..\\components\\crud\\BlogCreate.js -> " + "react-quill"
        ]
    },
    ssr: false
});






const BlogCreate = ({ router  })=>{
    const blogFormLS = ()=>{
        if (true) {
            return false;
        }
        if (localStorage.getItem("blog")) {
            return JSON.parse(localStorage.getItem("blog"));
        } else {
            return false;
        }
    };
    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [tags, setTags] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]); //categories
    const [checkedTag, setCheckedTag] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]); //tags
    const [imageName, setImageName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("No image");
    const [body, setBody] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(blogFormLS());
    const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        error: "",
        success: "",
        formData: "",
        title: ""
    });
    const { error , success , formData , title  } = values;
    const token = (0,_actions_auth__WEBPACK_IMPORTED_MODULE_6__/* .getCookie */ .ej)("token");
    const initCategories = ()=>{
        (0,_actions_category__WEBPACK_IMPORTED_MODULE_7__/* .getCategories */ .CP)().then((data)=>{
            if (data.error) {
                setValues({
                    ...values,
                    error: data.error
                });
            } else {
                setCategories(data);
            }
        });
    };
    const initTags = ()=>{
        (0,_actions_tag__WEBPACK_IMPORTED_MODULE_8__/* .getTags */ .NJ)().then((data)=>{
            if (data.error) {
                setValues({
                    ...values,
                    error: data.error
                });
            } else {
                setTags(data);
            }
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setValues({
            ...values,
            formData: new FormData()
        });
        initCategories();
        initTags();
    }, [
        router
    ]);
    const createBlogForm = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            onSubmit: publishBlog,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "form-group",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "text-muted",
                            children: "Title"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            className: "form-control",
                            value: title,
                            onChange: handleChange("title")
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "form-group",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ReactQuill, {
                        modules: _helpers_quill__WEBPACK_IMPORTED_MODULE_5__/* .QuillModules */ .J,
                        formats: _helpers_quill__WEBPACK_IMPORTED_MODULE_5__/* .QuillFormats */ .$,
                        value: body,
                        placeholder: "Write something amazing...",
                        onChange: handleBody
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: "btn btn-primary",
                        children: "Publish"
                    })
                })
            ]
        });
    };
    const publishBlog = (e)=>{
        e.preventDefault();
        (0,_actions_blog__WEBPACK_IMPORTED_MODULE_9__/* .createBlog */ .Vh)(formData, token).then((data)=>{
            if (data.error) {
                setValues({
                    ...values,
                    error: data.error
                });
            } else {
                setValues({
                    ...values,
                    title: "",
                    error: "",
                    success: `A new blog titled ${data.title} is created`
                });
                setBody("");
                setCategories([]);
                setTags([]);
            }
        });
    };
    const handleBody = (e)=>{
        setBody(e);
        formData.set("body", e);
        if (false) {}
    };
    const handleChange = (name)=>(e)=>{
            const value = name === "photo" ? e.target.files[0] : e.target.value;
            name === "photo" && setImageName(value.name);
            formData.set(name, value);
            setValues({
                ...values,
                [name]: value,
                formData,
                error: ""
            });
        };
    const showCategories = ()=>{
        return categories && categories.map((c, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                className: "list-unstyled",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        onChange: handleToggle(c._id),
                        type: "checkbox",
                        className: "mr-2"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "form-check-label",
                        children: c.name
                    })
                ]
            }, i));
    };
    const showTags = ()=>{
        return tags && tags.map((t, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                className: "list-unstyled",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        onChange: handleTagToggle(t._id),
                        type: "checkbox",
                        className: "mr-2"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "form-check-label",
                        children: t.name
                    })
                ]
            }, i));
    };
    const handleToggle = (c)=>()=>{
            setValues({
                ...values,
                error: ""
            });
            const clickedCategory = checked.indexOf(c);
            const all = [
                ...checked
            ];
            if (clickedCategory === -1) {
                all.push(c);
            } else {
                all.splice(clickedCategory, 1);
            }
            setChecked(all);
            formData.set("categories", all);
        };
    const handleTagToggle = (c)=>()=>{
            setValues({
                ...values,
                error: ""
            });
            const clickedTag = checkedTag.indexOf(c);
            const all = [
                ...checkedTag
            ];
            if (clickedTag === -1) {
                all.push(c);
            } else {
                all.splice(clickedTag, 1);
            }
            setCheckedTag(all);
            formData.set("tags", all);
        };
    const showError = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "alert alert-danger",
            style: {
                display: error ? "" : "none"
            },
            children: error
        });
    const showSuccess = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "alert alert-success",
            style: {
                display: success ? "" : "none"
            },
            children: success
        });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container-fluid pb-5",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-md-8",
                    children: [
                        createBlogForm(),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "pt-3",
                            children: [
                                showError(),
                                showSuccess()
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-md-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "form-group pb-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        children: "Featured image"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                        className: "text-muted",
                                        children: "Max size: 1mb"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        className: "btn btn-outline-info",
                                        children: [
                                            "Upload featured image",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                onChange: handleChange("photo"),
                                                type: "file",
                                                accept: "image/*",
                                                hidden: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                        className: "ml-2",
                                        children: imageName
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    children: "Categories"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    style: {
                                        maxHeight: "200px",
                                        overflowY: "scroll"
                                    },
                                    children: showCategories()
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    children: "Tags"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    style: {
                                        maxHeight: "200px",
                                        overflowY: "scroll"
                                    },
                                    children: showTags()
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_3__.withRouter)(BlogCreate));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;