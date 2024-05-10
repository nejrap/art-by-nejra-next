"use client";

import { useState } from "react";

export default function RegisterPage() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    console.log("Name", fullname);
    console.log("Email", email);
    console.log("Password", password);

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!fullname || !email || !password) {
            setError("All fields are necessary");
            return;
        }
        try {
            const res = await fetch('api/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fullname,
                    email,
                    password
                }),
            });
            if (res.ok) {
                const form = e.target as HTMLFormElement; // eksplicitno navođenje tipa kao HTMLFormElement
                form.reset();
            } else {
                console.log("Failed");
            }
        } catch (error) {
            console.log("User registration failed", error);
        }
    };

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">
                Register
            </h1>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input type="text" value={fullname} placeholder="Full Name" onChange={(e) => setFullname(e.target.value)}></input>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"></input>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                <button className="button-primary" type="submit">
                    Register
                </button>
                <br></br><br></br><br></br>
                <button id="button" type="submit">Login with Google</button>
            </form>
        </section>
    );
}
