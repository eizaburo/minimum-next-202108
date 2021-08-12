import Link from 'next/link';
import Head from 'next/head';
import { useForm } from 'react-hook-form';

import Layout from '../components/Layout';
import { useState } from 'react';

const Contact = () => {

    //ボタンの状態管理
    const [btnText, setBtnText] = useState("送信");
    const [btnDisabled, setBtnDisabled] = useState(false);

    //Form
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        // alert(`email=${data.email},body=${data.body}`);

        //ボタンの状態
        setBtnText("送信中・・・");
        setBtnDisabled(true);

        //API連携
        const base_url = "https://script.google.com/macros/s/AKfycbxN3NPmE0s29jnJmv-wogE8oPxY6fS7NQDH77SpKlsPgo5BBgLQRFKJ8UAyGGkFfmgo/exec";
        fetch(base_url, {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: encodeURI(`email=${data.email}&body=${data.body}`)
        })
            .then((response) => {
                response.text()
                    .then((text) => {
                        setBtnText("送信");
                        setBtnDisabled(false);
                        alert(text);
                    })
                    .catch((error) => {
                        setBtnText("送信");
                        setBtnDisabled(false);
                        alert(error.message);
                    })
            })
            .catch((error) => {
                setBtnText("送信");
                setBtnDisabled(false);
                alert(error.message);
            })
    }

    return (
        <Layout>
            <Head>
                <title>Contact</title>
            </Head>
            <main>
                <section>
                    <h2>お問合せフォーム</h2>
                    <p>フォームに入力してください。</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label>Email</label>
                            <input type="text" id="email" {...register("email", {
                                required: true,
                                pattern: /^[a-z]+@[a-z]+\.[a-z]+$/
                            })} />
                            {errors.email?.type === "required" && <span className="form-error">Emailは必須です。</span>}
                            {errors.email?.type === "pattern" && <span className="form-error">EmailはEmailの形式で入力してください。</span>}
                        </div>
                        <div>
                            <label>お問合せ内容</label>
                            <textarea rows="5" id="body" {...register("body", {
                                required: true,
                                maxLength: 10
                            })}></textarea>
                            {errors.body?.type === "required" && <span className="form-error">お問合せ内容は必須です。</span>}
                            {errors.body?.type === "maxLength" && <span className="form-error">10文字以内で入力してください。</span>}
                        </div>
                        <div>
                            <button id="btn" type="submit" disabled={btnDisabled}>{btnText}</button>
                        </div>
                    </form>
                </section>
            </main>
        </Layout>
    );
}

export default Contact;