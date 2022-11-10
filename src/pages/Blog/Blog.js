import React from 'react';
import useTitle from '../../hooks/UseTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl">Blog about JavaScript and MongoDb</h2>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 text-xl font-medium py-6 focus:outline-none focus-visible:ring-violet-400">Difference between SQL and NoSQL</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-800">
                                SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database. <br /><br />
                                Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases.<br /><br />
                                SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.<br /><br />
                                SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data.<br /><br />
                                Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 text-xl font-medium py-6 focus:outline-none focus-visible:ring-violet-400">What is JWT, and how does it work?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-800">
                                JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA. <br /><br />
                                Working Process <br /><br />
                                Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key. <br />
                                1. User sign-in using username and password or google/facebook. <br />
                                2. Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. <br />
                                3. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. <br />
                                4. Resource server then verifies the authenticity of the token using the secret salt/ public key.
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 text-xl font-medium py-6 focus:outline-none focus-visible:ring-violet-400">What is the difference between javascript and NodeJS?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4  text-gray-800">
                                JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine. <br /><br />

                                JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.<br /><br />

                                JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML.<br /><br />

                                JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development<br /><br />

                                JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser.<br /><br />

                                JavaScript requires any running environment as it can execute on any engine such as Firefox’s spider monkey, v8 engine of google chrome, JavaScript core of Safari whereas Node.js runs only on the v8 engine of google chrome.
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 text-xl font-medium py-6 focus:outline-none focus-visible:ring-violet-400">How does NodeJS handle multiple requests at the same time?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4  text-gray-800">
                                NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                                If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                            </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;