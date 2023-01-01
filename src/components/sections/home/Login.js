import React, {useEffect, useState} from "react"
import {ParticlesBackground} from "../../../utils/ParticlesBackground";

export default function Login () {
    let [authMode, setAuthMode] = useState("signin")

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    const onSubmit = () => {
        useEffect(() => {
            // declare the data fetching function
            console.log("sdfgb", window.location.href)
            const fetchData = async () => {
                const url = window.location.href
                const data = await fetch(url + '/login')
                    .then((response) => {
                            if (response.status === 200) {
                                () => DICTIONARY.homePage()
                            }
                        }
                    )

            }
        })
    }

    if (authMode === "signin") {
        return (
            <div className="Auth-form-container">
                <ParticlesBackground />
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="text-center">
                            Not registered yet?{" "}
                            <span className="link-primary" onClick={changeAuthMode}>
                                     Sign Up
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary"
                            onChange={onSubmit}>
                                Submit
                            </button>
                        </div>
                        <p className="text-center mt-2">
                            Forgot <a href="src/components/sections/home/Login#">password?</a>
                        </p>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <>
        <div className="Auth-form-container">
            <ParticlesBackground/>
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="text-center">
                        Already registered?{" "}
                        <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Full Name</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="e.g Jane Doe"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <p className="text-center mt-2">
                        Forgot <a href="src/components/sections/home/Login#">password?</a>
                    </p>
                </div>
            </form>
        </div>
        </>
    )
}