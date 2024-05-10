"use client";

import { useState } from "react";


import styles from "./styles.module.css"
import Image from "next/image"

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleFormSubmit(ev: React.FormEvent<HTMLFormElement>) {
        ev.preventDefault();
        fetch('/api/register', {
            method:'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type':'application/json'},
        });
    }

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">
                Register
            </h1>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input value={email} onChange={ev => setEmail(ev.target.value)} type="email" placeholder="email"></input>
                <input type="password" value={password} onChange={ev => setPassword(ev.target.value)} placeholder="password"></input>
                <button className="button-primary" type="submit">
                    Register
                </button>
                <br></br><br></br><br></br>
                <button id="button" type="submit">Login with Google</button>
            </form>
        </section>
    );
}
